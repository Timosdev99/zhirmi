import { NextResponse } from "next/server";
import { site } from "@/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NetworkPayload = {
  name?: unknown;
  email?: unknown;
  portfolio?: unknown;
  service?: unknown;
  platforms?: unknown;
  availability?: unknown;
  rate?: unknown;
  message?: unknown;
  consent?: unknown;
  website?: unknown;
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: NetworkPayload;

  try {
    payload = (await request.json()) as NetworkPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (text(payload.website) !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = text(payload.name);
  const email = text(payload.email);
  const portfolio = text(payload.portfolio);
  const service = text(payload.service);
  const platforms = text(payload.platforms);
  const availability = text(payload.availability);
  const rate = text(payload.rate);
  const message = text(payload.message);
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

  if (!service || service.length > 80) {
    return NextResponse.json(
      { error: "Please select your primary service." },
      { status: 400 },
    );
  }

  if (!message || message.length > 5000) {
    return NextResponse.json(
      { error: "Please tell us a little about your work." },
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

  const body = [
    `New partner application from ${name}`,
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Primary service: ${service}`,
    `Portfolio: ${portfolio || "Not provided"}`,
    `Platforms and tools: ${platforms || "Not provided"}`,
    `Availability: ${availability || "Not provided"}`,
    `Indicative rate: ${rate || "Not provided"}`,
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
      subject: `New partner application from ${name}`,
      text: body,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not send your application. Please email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
