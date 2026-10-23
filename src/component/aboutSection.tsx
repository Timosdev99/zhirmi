import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { site } from "@/content/site";

const beliefs = [
  "Clear prices, agreed before work starts.",
  "Plain-English updates, not jargon.",
  "Work that pays for itself.",
];

export default function AboutSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-ink">
              <span aria-hidden>✱</span>
              About
            </p>
            <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-brand sm:text-5xl">
              Built by a hands-on tech partner, backed by a team of specialists.
            </h1>

            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                Zhirmitech was founded by Samuel Ogbegun, a web developer and
                digital marketer who has spent years building and running
                websites, email marketing, CRMs and booking systems for clinics,
                law firms, construction companies, bakeries and e-commerce brands
                across the UK, US, Australia and Nigeria.
              </p>
              <p>
                Along the way, clients kept asking for more: &ldquo;Can you also
                run our emails? Set up our ads? Make our videos? Answer our
                chats?&rdquo; Zhirmitech is the answer: one partner you trust,
                with a network of vetted specialists for every part of your
                business&apos;s tech and growth.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-surface p-6">
              <h2 className="font-display text-lg font-bold text-brand">
                What we believe
              </h2>
              <ul className="mt-4 space-y-3">
                {beliefs.map((belief) => (
                  <li key={belief} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-ink" />
                    <span className="text-foreground">{belief}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={site.bookingUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
              >
                Book a free call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/join"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
              >
                Join the network
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="group overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dmgf16qzz/image/upload/f_auto,q_auto,w_900/v1766623072/WhatsApp_Image_2025-12-20_at_11.04.53_PM_gac2wf.jpg"
                alt="Samuel Ogbegun, founder of Zhirmitech"
                width={864}
                height={1080}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-auto w-full transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>

            <h2 className="mt-6 font-display text-2xl font-bold text-brand">
              Samuel Ogbegun
            </h2>
            <p className="mt-1 text-sm text-muted">Founder &amp; project lead</p>
          </div>
        </div>
      </div>
    </section>
  );
}
