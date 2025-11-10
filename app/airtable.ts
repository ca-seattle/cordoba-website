import {
  AirtableError,
  AirtableRecord,
  AirtableResponse,
  Announcement,
  Event,
  Program,
  ProgramSeries,
} from "./types";

// Airtable API Configuration
const BASE_URI = "https://api.airtable.com/v0/appxt37r7y8TdLGLg/";
const API_KEY =
  "patkLJnn7F2bPpEC8.bf0c31b4b79d27dc79143222d42ab43299bcff38513dc2bc125fc44912da77a6";

// Table endpoints
const ANNOUNCEMENTS_TABLE = "Announcements";
const PROGRAMS_TABLE = "Programs";
const EVENTS_TABLE = "Events";
const PROGRAM_SERIES_TABLE = "Program Series";

async function fetchFromAirtable<T>(
  tableName: string,
  options?: {
    maxRecords?: number;
    view?: string;
    filterByFormula?: string;
    sort?: Array<{ field: string; direction: "asc" | "desc" }>;
    fields?: string[];
    pageSize?: number;
  }
): Promise<AirtableRecord<T>[]> {
  const url = new URL(`${BASE_URI}${tableName}`);

  // Add query parameters if provided
  if (options?.maxRecords) {
    url.searchParams.append("maxRecords", options.maxRecords.toString());
  }
  if (options?.view) {
    url.searchParams.append("view", options.view);
  }
  if (options?.filterByFormula) {
    url.searchParams.append("filterByFormula", options.filterByFormula);
  }
  if (options?.pageSize) {
    url.searchParams.append("pageSize", options.pageSize.toString());
  }
  if (options?.fields) {
    options.fields.forEach((field) => {
      url.searchParams.append("fields[]", field);
    });
  }
  if (options?.sort) {
    options.sort.forEach((sortItem, index) => {
      url.searchParams.append(`sort[${index}][field]`, sortItem.field);
      url.searchParams.append(`sort[${index}][direction]`, sortItem.direction);
    });
  }

  try {
    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
      },
      // Next.js caching: revalidate every 5 minutes
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      const errorData: AirtableError = await response.json();
      throw new Error(
        `Airtable API Error (${response.status}): ${errorData.error.message}`
      );
    }

    const data: AirtableResponse<T> = await response.json();
    return data.records;
  } catch (error) {
    console.error(`Error fetching from ${tableName}:`, error);
    throw error;
  }
}

export async function getAnnouncements(options?: {
  maxRecords?: number;
  showInCarouselOnly?: boolean;
}): Promise<Announcement[]> {
  const fetchOptions: Parameters<typeof fetchFromAirtable>[1] = {
    maxRecords: options?.maxRecords,
  };

  // Filter to show only carousel items if requested
  if (options?.showInCarouselOnly) {
    fetchOptions.filterByFormula = "{Show in carousel} = TRUE()";
  }

  const records = await fetchFromAirtable<Announcement>(
    ANNOUNCEMENTS_TABLE,
    fetchOptions
  );
  return records.map((record) => ({ ...record.fields, id: record.id }));
}

export async function getAnnouncementByName(
  name: string
): Promise<Announcement | null> {
  const announcements = await fetchFromAirtable<Announcement>(
    ANNOUNCEMENTS_TABLE,
    {
      maxRecords: 1,
      filterByFormula: `{Name} = "${name}"`,
    }
  );

  return announcements[0]?.fields || null;
}

export async function getPrograms(options?: {
  maxRecords?: number;
  showInCarouselOnly?: boolean;
}): Promise<Program[]> {
  const fetchOptions: Parameters<typeof fetchFromAirtable>[1] = {
    maxRecords: options?.maxRecords,
  };

  // Filter to show only carousel items if requested
  if (options?.showInCarouselOnly) {
    fetchOptions.filterByFormula = "{Show in carousel} = TRUE()";
  }

  const records = await fetchFromAirtable<Program>(
    PROGRAMS_TABLE,
    fetchOptions
  );
  return records.map((record) => ({ ...record.fields, id: record.id }));
}

export async function getProgramByName(name: string): Promise<Program | null> {
  const programs = await fetchFromAirtable<Program>(PROGRAMS_TABLE, {
    maxRecords: 1,
    filterByFormula: `{Name} = "${name}"`,
  });

  return programs[0]?.fields || null;
}

export async function getEvents(options?: {
  maxRecords?: number;
  showInCarouselOnly?: boolean;
}): Promise<Event[]> {
  const fetchOptions: Parameters<typeof fetchFromAirtable>[1] = {
    maxRecords: options?.maxRecords,
  };

  // Filter to show only carousel items if requested
  if (options?.showInCarouselOnly) {
    fetchOptions.filterByFormula = "{Show in carousel} = TRUE()";
  }

  const records = await fetchFromAirtable<Event>(EVENTS_TABLE, fetchOptions);
  return records.map((record) => ({ ...record.fields, id: record.id }));
}

export async function getEventByName(name: string): Promise<Event | null> {
  const events = await fetchFromAirtable<Event>(EVENTS_TABLE, {
    maxRecords: 1,
    filterByFormula: `{Name} = "${name}"`,
  });

  return events[0]?.fields || null;
}

export async function getProgramSeries(options?: {
  maxRecords?: number;
  programId?: string;
  weekday?: string;
  activeOnly?: boolean;
  sortByDate?: "asc" | "desc";
}): Promise<ProgramSeries[]> {
  const fetchOptions: Parameters<typeof fetchFromAirtable>[1] = {
    maxRecords: options?.maxRecords,
  };

  // Build filter formula
  const filters: string[] = [];

  if (options?.programId) {
    filters.push(`FIND("${options.programId}", ARRAYJOIN(Program))`);
  }

  if (options?.weekday) {
    filters.push(`{Weekday} = "${options.weekday}"`);
  }

  if (options?.activeOnly) {
    const today = new Date().toISOString().split("T")[0];
    filters.push(
      `AND(IS_BEFORE({Start date}, "${today}") OR {Start date} = "${today}", IS_AFTER({End date}, "${today}") OR {End date} = "${today}")`
    );
  }

  if (filters.length > 0) {
    fetchOptions.filterByFormula =
      filters.length === 1 ? filters[0] : `AND(${filters.join(", ")})`;
  }

  // Sort by start date if requested
  if (options?.sortByDate) {
    fetchOptions.sort = [
      { field: "Start date", direction: options.sortByDate },
    ];
  }

  const records = await fetchFromAirtable<ProgramSeries>(
    PROGRAM_SERIES_TABLE,
    fetchOptions
  );
  return records.map((record) => ({ ...record.fields, id: record.id }));
}

export async function getProgramSeriesByProgramName(
  programName: string,
  activeOnly: boolean = false
): Promise<ProgramSeries[]> {
  // Search by program name in the Id field
  const filters: string[] = [`SEARCH("${programName}", {Id}) > 0`];

  if (activeOnly) {
    const today = new Date().toISOString().split("T")[0];
    filters.push(
      `AND(IS_BEFORE({Start date}, "${today}") OR {Start date} = "${today}", IS_AFTER({End date}, "${today}") OR {End date} = "${today}")`
    );
  }

  const fetchOptions: Parameters<typeof fetchFromAirtable>[1] = {
    filterByFormula: `AND(${filters.join(", ")})`,
    sort: [{ field: "Start date", direction: "asc" }],
  };

  const records = await fetchFromAirtable<ProgramSeries>(
    PROGRAM_SERIES_TABLE,
    fetchOptions
  );
  return records.map((record) => ({ ...record.fields, id: record.id }));
}
