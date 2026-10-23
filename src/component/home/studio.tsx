import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeStudio() {
  return (
    <section id="studio" className="scroll-mt-24 border-b border-border py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="group aspect-[4/5] overflow-hidden bg-border">
              <Image
                src="https://res.cloudinary.com/dmgf16qzz/image/upload/f_auto,q_auto,w_900/v1766623072/WhatsApp_Image_2025-12-20_at_11.04.53_PM_gac2wf.jpg"
                alt="Samuel Ogbegun, founder of Zhirmitech"
                width={864}
                height={1080}
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="mt-5 flex flex-wrap items-baseline justify-between gap-3 border-t border-border pt-4">
              <p className="font-display text-lg font-bold text-brand">
                Samuel Ogbegun
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                Founder &amp; project lead
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-ink">
              The studio
            </p>
            <h2 className="mt-6 max-w-xl font-display text-4xl font-bold leading-[1.02] tracking-tight text-brand sm:text-5xl">
              Built by a hands-on partner, backed by specialists.
            </h2>
            <div className="mt-6 max-w-xl space-y-4 text-base leading-relaxed text-muted">
              <p>
                Zhirmitech was founded by Samuel Ogbegun, a web developer and
                digital marketer who has spent years building and running
                websites, email marketing, CRMs and booking systems for clinics,
                law firms, construction companies, bakeries and e-commerce
                brands.
              </p>
              <p>
                Clients kept asking for the next part: the emails, the ads, the
                video, the chat. Zhirmitech is the answer: one partner you trust,
                with a network of vetted specialists for every part of the
                business&apos;s tech and growth.
              </p>
            </div>
            <Link
              href="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-brand/30 pb-1 text-sm font-semibold text-brand transition-colors hover:border-accent-ink hover:text-accent-ink"
            >
              More about Zhirmitech
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
