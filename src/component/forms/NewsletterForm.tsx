"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          company: data.get("company"),
          consent: data.get("consent") === "on",
        }),
      });

      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!response.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("You're subscribed.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full">
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="Your email address"
          className="w-full rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
          {status !== "loading" && <ArrowRight className="h-4 w-4" />}
        </button>
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="newsletter-company">Company</label>
        <input
          id="newsletter-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="mt-3 flex items-start gap-2 text-xs text-white/60">
        <input
          type="checkbox"
          name="consent"
          required
          className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-accent"
        />
        <span>
          I agree to receive occasional emails and accept the{" "}
          <a href="/privacy" className="underline hover:text-white">
            privacy policy
          </a>
          .
        </span>
      </label>

      <p
        className={`mt-2 flex items-center gap-1.5 text-xs ${
          status === "error" ? "text-amber" : "text-accent"
        }`}
        role="status"
        aria-live="polite"
      >
        {status === "success" && <CheckCircle2 className="h-3.5 w-3.5" />}
        {message}
      </p>
    </form>
  );
}
