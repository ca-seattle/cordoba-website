import { NextResponse } from "next/server";

const EVENTS_API_BASE_URL = process.env.NEXT_PUBLIC_EVENTS_API_BASE_URL;
const EVENTS_API_PATH = process.env.NEXT_PUBLIC_EVENTS_API_PATH;

if (!EVENTS_API_BASE_URL || !EVENTS_API_PATH) {
  throw new Error("Missing required environment variables: NEXT_PUBLIC_EVENTS_API_BASE_URL or NEXT_PUBLIC_EVENTS_API_PATH");
}

const EVENTS_API_URL = `${EVENTS_API_BASE_URL}${EVENTS_API_PATH}`;

export async function GET() {
  try {
    const response = await fetch(EVENTS_API_URL, {
      method: "GET",
      cache: "no-store",
      headers: {
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      return new NextResponse(errorText || "Failed to fetch events", {
        status: response.status,
      });
    }

    const events = await response.json();

    return NextResponse.json(events);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Unable to fetch events", error: String(error) }),
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Extract Cognito token from Authorization header
    const authHeader = req.headers.get("Authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return new NextResponse(
        JSON.stringify({ message: "Unauthorized: No authentication token provided" }),
        { status: 401 }
      );
    }

    const body = await req.json();

    const response = await fetch(EVENTS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`, // Forward token to AWS
      },
      body: JSON.stringify(body),
    });

    const text = await response.text();
    const result = text ? JSON.parse(text) : {};

    if (!response.ok) {
      return new NextResponse(result?.message || "Failed to send event", {
        status: response.status,
      });
    }

    return NextResponse.json(result);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Unable to post event", error: String(error) }),
      { status: 500 }
    );
  }
}
