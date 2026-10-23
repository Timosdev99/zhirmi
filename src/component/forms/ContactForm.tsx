"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent-ink focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          service: data.get("service"),
          message: data.get("message"),
          consent: data.get("consent") === "on",
          website: data.get("website"),
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thanks. We'll reply within one working day.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
            Email address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-company" className="mb-1.5 block text-sm font-medium">
            Company <span className="text-muted">(optional)</span>
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-service" className="mb-1.5 block text-sm font-medium">
            What do you need?
          </label>
          <select id="contact-service" name="service" className={inputClass} defaultValue="">
            <option value="">Select a service</option>
            <option value="website">Website or redesign</option>
            <option value="marketing">SEO, ads or email</option>
            <option value="ai">AI agents or automation</option>
            <option value="operations">Operations or support</option>
            <option value="content">Content, video or audio</option>
            <option value="engineering">Custom engineering</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
          Tell us about your business
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className={inputClass}
          placeholder="What are you trying to fix or grow?"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-border accent-accent-ink"
        />
        <span>
          I agree to be contacted about my enquiry and accept the{" "}
          <a href="/privacy" className="text-accent-ink underline">
            privacy policy
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? "Sending..." : "Send message"}
      </button>

      <p
        className={`flex items-center gap-1.5 text-sm ${
          status === "error" ? "text-amber-ink" : "text-accent-ink"
        }`}
        role="status"
        aria-live="polite"
      >
        {status === "success" && <CheckCircle2 className="h-4 w-4" />}
        {message}
      </p>
    </form>
  );
}
