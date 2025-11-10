import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import {
  getAnnouncements,
  getEvents,
  getPrograms,
  getProgramSeries,
} from "../app/airtable";
import {
  Announcement,
  CarouselItem,
  Event,
  Program,
  ProgramSeries,
} from "../app/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Convert program name to URL-safe slug for anchor links
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// return program date times in format: ["Sunday, Oct 12 from 2 PM to 3 PM", "Tuesday, Oct 14 from 2 PM to 3 PM"]
export function getProgramDateTimes(programSeries: ProgramSeries[]): string[] {
  if (!programSeries || programSeries.length === 0) {
    return [];
  }

  // Extract time range from the Name field (format: "Program | Date | Date | Weekday | TIME RANGE")
  // Example: "After School Quran Class | 2025-10-09T00:00:00.000Z | 2026-06-18T00:00:00.000Z | Thursday | 3:30 PM - 5:00 PM"
  const extractTimeRange = (name: string): string => {
    const parts = name.split(" | ");
    return parts[parts.length - 1] || ""; // Last part is the time range
  };

  // Group by time range (start and end time)
  const groupedByTime = programSeries.reduce(
    (acc: Record<string, string[]>, series) => {
      const timeRange = extractTimeRange(series.Name);
      if (!acc[timeRange]) {
        acc[timeRange] = [];
      }
      acc[timeRange].push(series.Weekday);
      return acc;
    },
    {} as Record<string, string[]>
  );

  // Format output
  return Object.entries(groupedByTime).map(([timeRange, weekdays]) => {
    // Sort weekdays by natural order
    const weekdayOrder = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const sortedWeekdays = [...new Set(weekdays)].sort(
      (a, b) => weekdayOrder.indexOf(a) - weekdayOrder.indexOf(b)
    );

    // Format weekdays with plurals (e.g., "Tuesday" -> "Tuesdays")
    const formattedWeekdays = sortedWeekdays.map((day) => `${day}s`);

    // Join weekdays with "and" for the last item
    let weekdayString: string;
    if (formattedWeekdays.length === 1) {
      weekdayString = formattedWeekdays[0];
    } else if (formattedWeekdays.length === 2) {
      weekdayString = formattedWeekdays.join(" and ");
    } else {
      weekdayString =
        formattedWeekdays.slice(0, -1).join(", ") +
        ", and " +
        formattedWeekdays[formattedWeekdays.length - 1];
    }

    // Convert "3:30 PM - 5:00 PM" to "3:30 PM to 5:00 PM"
    const formattedTimeRange = timeRange.replace(" - ", " to ");

    return `${weekdayString}, ${formattedTimeRange}`;
  });
}

// return event date time in format: ["Sunday, Oct 12", "2 PM to 3 PM"]
export function getEventDateTime(event: Event): string[] {
  if (!event["Start"] || !event["End"]) {
    return [];
  }

  const startDateTime = new Date(event["Start"]);
  const endDateTime = new Date(event["End"]);

  // Format date as "Sunday, Oct 12"
  const dateString = format(startDateTime, "EEEE, MMM d");

  // Format time range as "2 PM to 3 PM"
  const startTime = format(startDateTime, "h:mm a");
  const endTime = format(endDateTime, "h:mm a");
  const timeString = `${startTime} to ${endTime}`;

  return [dateString, timeString];
}

export async function getProgramCarouselItems(
  programs: Program[],
  programSeries: ProgramSeries[]
): Promise<CarouselItem[]> {
  const seriesMap = new Map<string, ProgramSeries[]>();
  // group by program id
  programSeries.forEach((series) => {
    const currentSeries = seriesMap.get(series.Program[0]) || []; // program id
    currentSeries.push(series);
    seriesMap.set(series.Program[0], currentSeries); // program id
  });

  return programs.map((program) => {
    const series = seriesMap.get(program.id);
    const occursString = series ? getProgramDateTimes(series) : [];

    return {
      type: "program" as const,
      title: program.Name,
      description: program["Short description (appears on Carousel)"],
      image: program["Hero image"][0],
      times: occursString,
      link: program["Registration link"],
      moreInfoLink: `/programs#${slugify(program.Name)}`,
    };
  });
}

export async function getEventCarouselItems(
  events: Event[]
): Promise<CarouselItem[]> {
  return events.map((event) => ({
    type: "event" as const,
    title: event.Name,
    description: event["Short description (appears on Carousel)"],
    image: event["Hero image"][0],
    times: getEventDateTime(event),
    link: event["Registration link"],
    moreInfoLink: `/programs#${slugify(event.Name)}`,
  }));
}

export async function getAnnouncementCarouselItems(
  announcements: Announcement[]
): Promise<CarouselItem[]> {
  return announcements.map((announcement) => ({
    type: "announcement" as const,
    title: announcement.Name,
    description: announcement["Short description (appears on Carousel)"],
    image: announcement["Hero image"][0],
    times: [],
    link: announcement["Registration link"],
    moreInfoLink: `/programs#${slugify(announcement.Name)}`,
  }));
}

export async function getCarouselItems(): Promise<CarouselItem[]> {
  const [announcements, programs, events, programSeries] = await Promise.all([
    getAnnouncements({ showInCarouselOnly: true }),
    getPrograms({ showInCarouselOnly: true }),
    getEvents({ showInCarouselOnly: true }),
    getProgramSeries(),
  ]);

  return [
    ...(await getAnnouncementCarouselItems(announcements)),
    ...(await getProgramCarouselItems(programs, programSeries)),
    ...(await getEventCarouselItems(events)),
  ];
}
