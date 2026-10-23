"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted/70 focus:border-accent-ink focus:outline-none";

export default function PartnerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/network", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          portfolio: data.get("portfolio"),
          service: data.get("service"),
          platforms: data.get("platforms"),
          availability: data.get("availability"),
          rate: data.get("rate"),
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
      setMessage("Thanks. We will review your application and reply if it is a fit.");
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
          <label htmlFor="partner-name" className="mb-1.5 block text-sm font-medium">
            Full name
          </label>
          <input
            id="partner-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="partner-email" className="mb-1.5 block text-sm font-medium">
            Email address
          </label>
          <input
            id="partner-email"
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
          <label htmlFor="partner-service" className="mb-1.5 block text-sm font-medium">
            Primary service
          </label>
          <select
            id="partner-service"
            name="service"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="">Select a service</option>
            <option value="websites">Websites & development</option>
            <option value="marketing">Marketing & SEO</option>
            <option value="ai-automation">AI & automation</option>
            <option value="operations">Operations & support</option>
            <option value="content">Content, video & audio</option>
            <option value="engineering">Engineering & fintech</option>
            <option value="multiple">More than one</option>
          </select>
        </div>
        <div>
          <label htmlFor="partner-portfolio" className="mb-1.5 block text-sm font-medium">
            Portfolio or website <span className="text-muted">(optional)</span>
          </label>
          <input
            id="partner-portfolio"
            name="portfolio"
            type="url"
            autoComplete="url"
            className={inputClass}
            placeholder="https://"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-platforms" className="mb-1.5 block text-sm font-medium">
            Platforms and tools
          </label>
          <input
            id="partner-platforms"
            name="platforms"
            type="text"
            className={inputClass}
            placeholder="e.g. Wix Studio, WordPress, Ahrefs"
          />
        </div>
        <div>
          <label htmlFor="partner-availability" className="mb-1.5 block text-sm font-medium">
            Weekly availability
          </label>
          <input
            id="partner-availability"
            name="availability"
            type="text"
            className={inputClass}
            placeholder="e.g. 10 hours per week"
          />
        </div>
      </div>

      <div>
        <label htmlFor="partner-rate" className="mb-1.5 block text-sm font-medium">
          Indicative rate
        </label>
        <input
          id="partner-rate"
          name="rate"
          type="text"
          className={inputClass}
          placeholder="e.g. £40 per hour or from £500 per project"
        />
      </div>

      <div>
        <label htmlFor="partner-message" className="mb-1.5 block text-sm font-medium">
          Tell us about your work
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={6}
          required
          className={inputClass}
          placeholder="What do you do, and which two or three projects are most relevant?"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="partner-website">Website</label>
        <input
          id="partner-website"
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
          I agree to be contacted about my application and accept the{" "}
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
        {status === "loading" ? "Sending..." : "Send application"}
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
