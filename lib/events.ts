// Define types for the event data
export type Organizer = {
  name: string;
  phone: string;
  email: string;
};

export type Event = {
  created_at: string;
  registration_link: string;
  end_date: string;
  event_description: string;
  frequency: string;
  start_time: string;
  end_time: string;
  organizer: Organizer;
  start_date: string;
  event_image_url: string;
  event_title: string;
  recurring: boolean;
  event_id: string;
  event_dates: string[];
};

const EVENTS_API_BASE_URL = process.env.NEXT_PUBLIC_EVENTS_API_BASE_URL;
const EVENTS_API_PATH = process.env.NEXT_PUBLIC_EVENTS_API_PATH;

if (!EVENTS_API_BASE_URL || !EVENTS_API_PATH) {
  throw new Error("Missing required environment variables: NEXT_PUBLIC_EVENTS_API_BASE_URL or NEXT_PUBLIC_EVENTS_API_PATH");
}

const EVENTS_API_URL = `${EVENTS_API_BASE_URL}${EVENTS_API_PATH}`;

export type GetEventsOptions = {
  refresh?: boolean;
};

export async function getEvents({ refresh = false }: GetEventsOptions = {}): Promise<Event[]> {
  try {
    const response = await fetch(EVENTS_API_URL, {
      cache: refresh ? "no-store" : "force-cache",
      next: refresh ? undefined : { revalidate: 3600 }, // Revalidate every hour for cached calls
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const text = await response.text();
    const events: Event[] = JSON.parse(text);
    return events;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function getEventsClient(): Promise<Event[]> {
  try {
    const response = await fetch("/api/events", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events from API proxy");
    }

    const events: Event[] = await response.json();
    return events;
  } catch (error) {
    console.error("Error fetching events from client proxy:", error);
    return [];
  }
}

export async function addEvent(payload: unknown): Promise<any> {
  try {
    const response = await fetch("/api/events", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || "Failed to upload event");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding event:", error);
    throw error;
  }
}

export async function updateEvent(eventId: string, event: Partial<Event>): Promise<void> {
  // Implement update event logic
  throw new Error("Not implemented yet");
}

export async function deleteEvent(eventId: string): Promise<void> {
  // Implement delete event logic
  throw new Error("Not implemented yet");
}