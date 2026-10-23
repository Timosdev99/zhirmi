import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/content/site";

const platforms = [
  "Wix Studio",
  "WordPress",
  "Webflow",
  "Shopify",
  "Google Ads",
  "Mailchimp",
  "Brevo",
  "GoHighLevel",
];

const handles = [
  "Websites",
  "SEO & ads",
  "Email",
  "AI agents",
  "Automation",
  "Operations",
  "Content",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
            <span aria-hidden>✱</span>
            Zhirmitech
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.1] text-brand sm:text-5xl lg:text-6xl">
            Your business&apos;s tech and growth team —{" "}
            <span className="text-accent-ink">without hiring one.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted">
            Websites, marketing, AI agents and automation for growing businesses
            in the UK, US and beyond. One point of contact, a team of specialists
            behind it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={site.bookingUrl}
              className="group inline-flex items-center gap-2 rounded-sm  bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
            >
              Book a free call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-sm border-b-4 border-2 border-brand-700 bg-surface px-6 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              See pricing
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted">
            Based in Lagos · Working with clients in the UK, US, Australia &amp;
            Nigeria
          </p>

          <div className="mt-10 border-t border-border pt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              Platforms we build on
            </p>
            <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/80">
              {platforms.map((platform) => (
                <li key={platform}>{platform}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-surface p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="font-display text-lg font-bold text-brand">
                One point of contact
              </p>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent-ink">
                You + Samuel
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              No chasing five freelancers. Samuel manages your project end to end
              and brings in vetted specialists when needed.
            </p>

            <ul className="mt-6 grid gap-3">
              {handles.map((item) => (
                <li
                  key={item}
                  className="flex items-center justify-between rounded-xl border border-border bg-background px-4 py-3 text-sm"
                >
                  <span className="font-medium text-foreground">{item}</span>
                  <Check className="h-4 w-4 text-accent-ink" />
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl bg-brand p-4 text-white">
              <p className="text-sm text-white/70">
                Clear plan. Fixed quote. Monthly report.
              </p>
              <p className="mt-1 font-display text-lg font-semibold">
                No hidden fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
