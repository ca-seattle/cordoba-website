"use client";

import { useEffect, useState } from "react";
import {
  COGNITO_DOMAIN,
  CLIENT_ID,
  REDIRECT_URI,
  LOGIN_URL,
  LOGOUT_URL,
} from "@/lib/auth";

export default function AdminPage() {
  const [email, setEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="p-6">Loading admin...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <p className="mt-4">Logged in as: {email}</p>

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