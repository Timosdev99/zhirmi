import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { site } from "@/content/site";

const reasons = [
  {
    title: "One point of contact",
    description:
      "No chasing five freelancers. Samuel manages your project end to end.",
  },
  {
    title: "The right platform, not our favourite one",
    description:
      "We recommend what fits your budget and goals, whether that is Wix Studio, WordPress, Webflow, Shopify or custom code.",
  },
  {
    title: "We build and run it",
    description:
      "Most agencies hand over and disappear. We maintain, market and improve what we build.",
  },
  {
    title: "Honest reporting",
    description:
      "Plain-English reports with real numbers: what we found, what we changed and what happened.",
  },
  {
    title: "Fixed-price packages",
    description:
      "Clear scope and no lock-in on care plans. Cancel with 30 days' notice.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="border-t border-border bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
              <span aria-hidden>✱</span>
              Why Zhirmitech
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-brand sm:text-4xl lg:text-5xl">
              A partner, not another supplier.
            </h2>
            <p className="mt-5 text-muted">
              One accountable project lead, backed by a network of vetted
              specialists for websites, marketing, AI and operations.
            </p>

            <div className="mt-8 rounded-2xl bg-brand p-6 text-white">
              <p className="text-sm text-white/70">Not sure where to start?</p>
              <p className="mt-1 font-display text-xl font-semibold">
                Book a free 20-minute call.
              </p>
              <Link
                href={site.bookingUrl}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
              >
                Book a free call
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-ink" />
                  <div>
                    <h3 className="font-semibold text-brand">{reason.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
