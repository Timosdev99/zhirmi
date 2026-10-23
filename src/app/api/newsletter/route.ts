import { NextResponse } from "next/server";
import { site } from "@/content/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type NewsletterPayload = {
  email?: unknown;
  company?: unknown;
  consent?: unknown;
};

export async function POST(request: Request) {
  let payload: NewsletterPayload;

  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";

  if (!emailPattern.test(email) || email.length > 200) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (payload.consent !== true) {
    return NextResponse.json(
      { error: "Please accept the privacy policy to subscribe." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet. Please try again later." },
      { status: 503 },
    );
  }

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
      subject: "Newsletter signup",
      text: [
        "New newsletter signup",
        "",
        `Email: ${email}`,
        "Consent: yes",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "We could not complete your subscription. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
