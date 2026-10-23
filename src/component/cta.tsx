import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

export default function CTASection() {
  return (
    <section className="border-t border-border bg-brand py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent">
              <span aria-hidden>✱</span>
              Let&apos;s talk
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mt-4 max-w-xl text-white/70">
              Book a free 20-minute call and we will tell you the three things we
              would fix first, whether you work with us or not.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link
              href={site.bookingUrl}
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-brand transition-colors hover:bg-accent-dark"
            >
              Book a free call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-accent hover:text-accent"
            >
              See pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
