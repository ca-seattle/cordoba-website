"use client";

import { FormEvent, useEffect, useState } from "react";
import {
  COGNITO_DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  LOGIN_URL,
  LOGOUT_URL,
} from "@/lib/auth";
import { addEvent, getEventsClient, type Event } from "@/lib/events";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AdminPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [formOpen, setFormOpen] = useState(false);
  const [organizerName, setOrganizerName] = useState("");
  const [organizerEmail, setOrganizerEmail] = useState("");
  const [organizerPhone, setOrganizerPhone] = useState("");
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [eventImageFile, setEventImageFile] = useState<File | null>(null);
  const [isRecurring, setIsRecurring] = useState<"yes" | "no">("no");
  const [frequency, setFrequency] = useState("daily");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    const token = localStorage.getItem("id_token");

    // -----------------------------
    // CASE 1: Already logged in
    // -----------------------------
    if (token && !code) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        setEmail(payload.email);
        setLoading(false);
        return;
      } catch {
        localStorage.removeItem("id_token");
      }
    }

    // -----------------------------
    // CASE 2: Returning from Cognito login
    // -----------------------------
    if (code) {
      const exchange = async () => {
        try {
          const res = await fetch(`${COGNITO_DOMAIN}/oauth2/token`, {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              grant_type: "authorization_code",
              client_id: CLIENT_ID,
              code,
              redirect_uri: REDIRECT_URI,
            }),
          });

          const data = await res.json();

          if (!res.ok || !data.id_token) {
            console.error("Token error:", data);
            throw new Error("Token exchange failed");
          }

          localStorage.setItem("id_token", data.id_token);

          const payload = JSON.parse(atob(data.id_token.split(".")[1]));
          setEmail(payload.email);

          // IMPORTANT: stop loop
          window.history.replaceState({}, "", "/admin");

          setLoading(false);
        } catch (err) {
          console.error(err);
          window.location.href = LOGIN_URL;
        }
      };

      exchange();
      return;
    }

    // -----------------------------
    // CASE 3: Not logged in
    // -----------------------------
    window.location.href = LOGIN_URL;
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      const fetchedEvents = await getEventsClient();
      setEvents(fetchedEvents);
    };

    if (email) {
      fetchEvents();
    }
  }, [email]);

  function formatTime12Hr(timeStr: string | null) {
    if (!timeStr) {
      return "N/A";
    }
    const [hours, minutes] = timeStr.split(":").map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) {
      return timeStr;
    }
    const period = hours >= 12 ? "PM" : "AM";
    const hour12 = hours % 12 || 12;
    return `${hour12}:${String(minutes).padStart(2, "0")} ${period}`;
  }

  function generateRecurringDates(start: string, end: string, frequency: string) {
    const dates: string[] = [];
    const startDate = new Date(start);
    const endDate = new Date(end);
    let current = new Date(startDate);

    while (current <= endDate) {
      dates.push(current.toISOString().slice(0, 10));

      if (frequency.toLowerCase() === "daily") {
        current.setDate(current.getDate() + 1);
      } else if (frequency.toLowerCase() === "weekly") {
        current.setDate(current.getDate() + 7);
      } else if (frequency.toLowerCase() === "monthly") {
        current.setMonth(current.getMonth() + 1);
      } else {
        break;
      }
    }

    return dates;
  }

  const handlePhoneChange = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    
    // Limit to 10 digits
    const limited = digits.slice(0, 10);
    
    // Format as (XXX) XXX-XXXX
    let formatted = "";
    if (limited.length > 0) {
      formatted = "(" + limited.slice(0, 3);
      if (limited.length > 3) {
        formatted += ") " + limited.slice(3, 6);
      }
      if (limited.length > 6) {
        formatted += "-" + limited.slice(6, 10);
      }
    }
    
    setOrganizerPhone(formatted);
  };

  const isValidUrl = (urlString: string): boolean => {
    try {
      new URL(urlString);
      return true;
    } catch {
      return false;
    }
  };

  const resetForm = () => {
    setOrganizerName("");
    setOrganizerEmail("");
    setOrganizerPhone("");
    setEventTitle("");
    setEventDescription("");
    setRegistrationLink("");
    setEventImageFile(null);
    setIsRecurring("no");
    setFrequency("daily");
    setStartDate("");
    setEndDate("");
    setEventDate("");
    setStartTime("");
    setEndTime("");
    setFormError(null);
  };

  const readFileAsDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === "string") {
          resolve(reader.result);
        } else {
          reject(new Error("Unable to read file."));
        }
      };
      reader.onerror = () => reject(reader.error);
      reader.readAsDataURL(file);
    });
  };

  const handleUploadSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormError(null);

    if (!organizerName.trim()) {
      setFormError("Organizer name is required.");
      return;
    }

    if (!organizerEmail.trim()) {
      setFormError("Organizer email is required.");
      return;
    }

    if (!organizerPhone.trim()) {
      setFormError("Organizer phone is required.");
      return;
    }

    if (!eventTitle.trim()) {
      setFormError("Event title is required.");
      return;
    }

    if (!eventImageFile) {
      setFormError("Event image is required.");
      return;
    }

    if (registrationLink.trim() && !isValidUrl(registrationLink)) {
      setFormError("Registration link must be a valid URL (e.g., http://example.com).");
      return;
    }

    if (!startTime.trim() || !endTime.trim()) {
      setFormError("Start and end time are required.");
      return;
    }

    if (isRecurring === "yes") {
      if (!frequency) {
        setFormError("Frequency is required for recurring events.");
        return;
      }
      if (!startDate || !endDate) {
        setFormError("Start and end dates are required for recurring events.");
        return;
      }
    } else {
      if (!eventDate) {
        setFormError("Event date is required for non-recurring events.");
        return;
      }
    }

    let eventImageData: string | undefined = undefined;
    if (eventImageFile) {
      const fullDataUrl = await readFileAsDataUrl(eventImageFile);
      eventImageData = fullDataUrl.split(",")[1];
    }

    const eventDates =
      isRecurring === "yes"
        ? generateRecurringDates(startDate, endDate, frequency)
        : eventDate
        ? [eventDate]
        : [];

    const payload = {
      OrganizerName: organizerName,
      OrganizerEmail: organizerEmail,
      OrganizerPhone: organizerPhone,
      EventTitle: eventTitle,
      EventDescription: eventDescription,
      RegistrationLink: registrationLink,
      RecurringEvent: isRecurring === "yes",
      Frequency: isRecurring === "yes" ? frequency : undefined,
      StartDate: isRecurring === "yes" ? startDate : undefined,
      EndDate: isRecurring === "yes" ? endDate : undefined,
      EventDates: eventDates,
      StartTime: startTime,
      EndTime: endTime,
      EventImage: eventImageFile
        ? [
            {
              File: eventImageData,
              ContentType: eventImageFile.type,
              Name: eventImageFile.name,
            },
          ]
        : undefined,
    };

    try {
      await addEvent(payload);
      setFormOpen(false);
      resetForm();
      const refreshed = await getEventsClient();
      setEvents(refreshed);
    } catch (error) {
      setFormError("Unable to upload event. Please try again.");
      console.error(error);
    }
  };

  if (loading) {
    return <div className="p-6">Loading admin...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <p className="mt-4">Logged in as: {email}</p>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold mt-8 mb-0">Events Management</h2>
        <Dialog open={formOpen} onOpenChange={setFormOpen}>
          <DialogTrigger asChild>
            <Button className="mt-2 sm:mt-0">Upload Event</Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Upload New Event</DialogTitle>
              <DialogDescription>
                Fill in the event details below. New lines in the description will be preserved.
              </DialogDescription>
            </DialogHeader>
            <form className="space-y-5 pt-2" onSubmit={handleUploadSubmit}>
              {formError ? (
                <div className="rounded-lg bg-destructive/10 px-4 py-3 text-sm text-destructive">
                  {formError}
                </div>
              ) : null}
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Organizer Name
                  <Input
                    value={organizerName}
                    onChange={(event) => setOrganizerName(event.target.value)}
                    placeholder="Organizer name"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Organizer Email
                  <Input
                    type="email"
                    value={organizerEmail}
                    onChange={(event) => setOrganizerEmail(event.target.value)}
                    placeholder="organizer@example.com"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Organizer Phone
                  <Input
                    type="tel"
                    value={organizerPhone}
                    onChange={(event) => handlePhoneChange(event.target.value)}
                    placeholder="(555) 123-4567"
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Event Title
                  <Input
                    value={eventTitle}
                    onChange={(event) => setEventTitle(event.target.value)}
                    placeholder="Event title"
                    required
                  />
                </label>
              </div>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Event Description
                <Textarea
                  value={eventDescription}
                  onChange={(event) => setEventDescription(event.target.value)}
                  placeholder="Add line breaks and formatting here"
                  rows={5}
                />
              </label>

              <label className="space-y-2 text-sm font-medium text-slate-700">
                Registration Link
                <Input
                  type="text"
                  value={registrationLink}
                  onChange={(event) => setRegistrationLink(event.target.value)}
                  placeholder="https://example.com/register"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Event Image
                  <Input
                    type="file"
                    accept="image/png,image/jpeg"
                    onChange={(event) => setEventImageFile(event.target.files?.[0] ?? null)}
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Recurring Event
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    value={isRecurring}
                    onChange={(event) => setIsRecurring(event.target.value as "yes" | "no")}
                    required
                  >
                    <option value="no">No</option>
                    <option value="yes">Yes</option>
                  </select>
                </label>
              </div>

              {isRecurring === "yes" ? (
                <div className="grid gap-4 sm:grid-cols-3">
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    Frequency
                    <select
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      value={frequency}
                      onChange={(event) => setFrequency(event.target.value)}
                      required
                    >
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="monthly">Monthly</option>
                    </select>
                  </label>
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    Start Date
                    <Input
                      type="date"
                      value={startDate}
                      onChange={(event) => setStartDate(event.target.value)}
                      required
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium text-slate-700">
                    End Date
                    <Input
                      type="date"
                      value={endDate}
                      onChange={(event) => setEndDate(event.target.value)}
                      required
                    />
                  </label>
                </div>
              ) : (
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Event Date
                  <Input
                    type="date"
                    value={eventDate}
                    onChange={(event) => setEventDate(event.target.value)}
                    required
                  />
                </label>
              )}

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  Start Time
                  <Input
                    type="time"
                    value={startTime}
                    onChange={(event) => setStartTime(event.target.value)}
                    required
                  />
                </label>
                <label className="space-y-2 text-sm font-medium text-slate-700">
                  End Time
                  <Input
                    type="time"
                    value={endTime}
                    onChange={(event) => setEndTime(event.target.value)}
                    required
                  />
                </label>
              </div>

              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                </DialogClose>
                <Button type="submit">Upload Event</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <Table className="rounded-2xl border border-slate-200 bg-white shadow-sm">
        <TableHeader>
          <TableRow className="bg-slate-100 text-slate-700">
            <TableHead className="min-w-[220px]">Title</TableHead>
            <TableHead className="min-w-[380px]">Description</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Event Date</TableHead>
            <TableHead>Start Time</TableHead>
            <TableHead>End Time</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Recurring</TableHead>
            <TableHead>Image URL</TableHead>
            <TableHead>Registration Link</TableHead>
            <TableHead>Created At</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events.map((event, index) => (
            <TableRow
              key={event.event_id}
              className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
            >
              <TableCell className="min-w-[220px] font-medium">
                {event.event_title}
              </TableCell>
              <TableCell className="min-w-[380px] max-w-[420px] break-words text-sm leading-6 text-slate-700">
                {event.event_description}
              </TableCell>
              <TableCell>{event.start_date}</TableCell>
              <TableCell>{event.end_date}</TableCell>
              <TableCell>{event.event_dates?.join(", ") || "N/A"}</TableCell>
              <TableCell>{formatTime12Hr(event.start_time)}</TableCell>
              <TableCell>{formatTime12Hr(event.end_time)}</TableCell>
              <TableCell>{event.frequency}</TableCell>
              <TableCell>{event.recurring ? "Yes" : "No"}</TableCell>
              <TableCell>
                <a className="text-sky-700 hover:underline" href={event.event_image_url} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </TableCell>
              <TableCell className="max-w-[280px] break-words text-slate-700">
                <a className="text-sky-700 hover:underline" href={event.registration_link} target="_blank" rel="noopener noreferrer">
                  {event.registration_link}
                </a>
              </TableCell>
              <TableCell>{event.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <button
        className="mt-6 px-4 py-2 bg-red-500 text-white"
        onClick={() => {
          localStorage.removeItem("id_token");
          window.location.href = LOGOUT_URL;
        }}
      >
        Logout
      </button>
    </div>
  );
}