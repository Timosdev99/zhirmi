"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import type { CaseStudy } from "@/content/types";

type WorkArchiveProps = {
  studies: CaseStudy[];
};

export default function WorkArchive({ studies }: WorkArchiveProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = studies[activeIndex] ?? studies[0];

  if (!active) {
    return null;
  }

  return (
    <div
      role="region"
      aria-label="Project index"
      className="grid gap-12 pb-16 lg:grid-cols-2 lg:items-start"
    >
      <div>
        {studies.map((study, index) => {
          const isActive = index === activeIndex;

          return (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              className="group relative grid grid-cols-[28px_1fr_24px] gap-5 border-t border-border py-8 lg:min-h-[180px]"
            >
              <span
                aria-hidden
                className={`absolute -left-3.5 bottom-8 top-8 hidden w-1.5 origin-top bg-accent transition-transform duration-300 lg:block ${
                  isActive ? "scale-y-100" : "scale-y-0"
                }`}
              />

              <span className="pt-1.5 text-xs font-semibold tabular-nums text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-brand transition-colors group-hover:text-accent-ink">
                  {study.client}
                </h2>
                <p className="mt-4 text-sm text-muted">
                  {study.industry ?? "Case study"}
                </p>
                <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-accent-ink">
                  {study.scope[0] ?? "Case study"}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {study.summary}
                </p>

                {study.imageUrl && (
                  <div className="mt-5 aspect-[16/10] overflow-hidden border border-border bg-surface lg:hidden">
                    <Image
                      src={study.imageUrl}
                      alt={`${study.client} website`}
                      width={study.imageWidth ?? 1200}
                      height={study.imageHeight ?? 750}
                      sizes="(min-width: 640px) 90vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
              </div>

              <ArrowUpRight className="mt-1 h-5 w-5 text-brand transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-ink" />
            </Link>
          );
        })}
      </div>

      <div
        aria-hidden
        className="sticky top-28 hidden lg:block"
      >
        {active.imageUrl ? (
          <div className="aspect-[16/10] overflow-hidden border border-border bg-surface">
            <Image
              key={active.slug}
              src={active.imageUrl}
              alt={`${active.client} website`}
              width={active.imageWidth ?? 1200}
              height={active.imageHeight ?? 750}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="h-full w-full object-cover object-top"
            />
          </div>
        ) : (
          <div className="grid aspect-[16/10] place-items-center border border-border bg-brand p-10 text-center text-white">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {active.industry ?? "Case study"}
              </p>
              <p className="mt-4 font-display text-4xl font-bold leading-tight">
                {active.client}
              </p>
            </div>
          </div>
        )}

        <p className="mt-6 max-w-[30ch] text-xl leading-snug text-brand">
          {active.summary}
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-accent-ink">
          {active.client}
        </p>
      </div>
    </div>
  );
}
