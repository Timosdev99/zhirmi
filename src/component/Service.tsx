import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Mail,
  Monitor,
  Search,
  Settings2,
  Video,
} from "lucide-react";

const offerings = [
  {
    icon: Monitor,
    title: "Websites that convert",
    description:
      "Fast, mobile-first sites on Wix Studio, WordPress, Webflow or Shopify, built to bring in enquiries and sales.",
  },
  {
    icon: Search,
    title: "Get found online",
    description:
      "SEO, Google Business Profile and AI search visibility so customers find you on Google and in AI answers.",
  },
  {
    icon: Mail,
    title: "Marketing that runs itself",
    description:
      "Email campaigns, automations and ads managed for you, with clear monthly reports.",
  },
  {
    icon: Bot,
    title: "AI agents & automation",
    description:
      "Chat agents and AI receptionists that answer customers 24/7, plus automations that move leads into your CRM.",
  },
  {
    icon: Settings2,
    title: "Operations support",
    description:
      "Booking systems, Amazon Seller Central, customer service and day-to-day tech admin.",
  },
  {
    icon: Video,
    title: "Content & video",
    description:
      "Reels, YouTube edits, podcasts and custom audio that keep your brand visible.",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
              <span aria-hidden>✱</span>
              What we do
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
              Everything your business runs on, handled.
            </h2>
          </div>

          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink md:self-auto"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              className="rounded-2xl border border-border bg-background p-6 transition-colors hover:border-accent-ink/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10">
                <offering.icon className="h-5 w-5 text-accent-ink" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold text-brand">
                {offering.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {offering.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
