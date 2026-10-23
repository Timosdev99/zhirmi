import { NextResponse } from "next/server";
import { site } from "@/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof payload.website === "string" && payload.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";
  const service = typeof payload.service === "string" ? payload.service.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const consent = payload.consent === true;

  if (!name || name.length > 120) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }

  if (!emailPattern.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return NextResponse.json(
      { error: "Please tell us a little about your project." },
      { status: 400 },
    );
  }

  if (!consent) {
    return NextResponse.json(
      { error: "Please accept the privacy policy to continue." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please email us directly." },
      { status: 503 },
    );
  }

  const text = [
    `New enquiry from ${name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Service: ${service || "Not specified"}`,
    "",
    message,
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Zhirmitech Website <website@zhirmitech.com>",
      to: [process.env.CONTACT_TO_EMAIL ?? site.email],
      reply_to: email,
      subject: `New enquiry from ${name}`,
      text,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not send your message. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
