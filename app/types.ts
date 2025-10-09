// Airtable API response types
export type AirtableRecord<T> = {
  id: string;
  createdTime: string;
  fields: T;
};

export type AirtableResponse<T> = {
  records: AirtableRecord<T>[];
  offset?: string;
};

export type AirtableError = {
  error: {
    type: string;
    message: string;
  };
};

export type AirtableAttachment = {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: {
    small: { url: string; width: number; height: number };
    large: { url: string; width: number; height: number };
    full: { url: string; width: number; height: number };
  };
};

export type Announcement = {
  id: string;
  Name: string;
  "Short description (appears on Carousel)": string;
  Organizer: string[]; // Array of Organizer record IDs
  "Show in carousel": boolean;
  "Hero image": AirtableAttachment[];
  "Long description": string;
  "Created at": string;
  Cost: number;
  "Cost per": string;
  "Registration link": string;
  Deactivate: boolean;
};

export type Program = {
  id: string;
  Name: string;
  "Short description (appears on Carousel)": string;
  Organizer: string[]; // Array of Organizer record IDs
  "Show in carousel": boolean;
  "Hero image": AirtableAttachment[];
  "Long description": string;
  "Created at": string;
  "Program Occurrences"?: string[]; // Array of Program Occurrence record IDs
  Cost?: number;
  "Cost per"?: string;
  "Registration link": string;
  "Program Series"?: string[]; // Array of Program Series record IDs
  Deactivate: boolean;
};

export type ProgramDisplay = {
  name: string;
  shortDescription: string;
  showInCarousel: boolean;
  heroImage: AirtableAttachment[];
  longDescription: string;
  cost?: number;
  costPer?: string;
  registrationLink: string;
  occursString: string;
};

export type Event = {
  id: string;
  Name: string;
  "Short description (appears on Carousel)": string;
  Organizer: string[]; // Array of Organizer record IDs
  "Show in carousel": boolean;
  "Hero image": AirtableAttachment[];
  "Long description": string;
  "Created at": string;
  "Program Occurrences"?: string[]; // Array of Program Occurrence record IDs
  Start?: string; // ISO datetime string (YYYY-MM-DDTHH:mm:ss.sssZ)
  End?: string; // ISO datetime string (YYYY-MM-DDTHH:mm:ss.sssZ)
  "Registration link": string;
  Deactivate: boolean;
};

export type ProgramSeries = {
  id: string;
  Name: string; // Computed field: "Program Name | Start Date | End Date | Weekday | Time Range"
  Program: string[]; // Array of Program record IDs. This should always be an array of length 1.
  "Start date": string; // ISO date string (YYYY-MM-DD)
  "End date": string; // ISO date string (YYYY-MM-DD)
  Weekday: string; // Day of week (e.g., "Monday", "Tuesday")
  "Start time": string[]; // Array of Time record IDs
  "End time": string[]; // Array of Time record IDs
};

export type CarouselItem = {
  type: "announcement" | "program" | "event";
  title: string;
  description: string;
  image: AirtableAttachment;
  times: string[];
  link: string;
  moreInfoLink?: string;
};
