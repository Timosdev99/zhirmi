"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { CaseStudy } from "@/content/types";

type ProjectMediaProps = {
  study: CaseStudy;
  sizes?: string;
  layout?: "home" | "case";
};

export default function ProjectMedia({
  study,
  sizes = "(min-width: 1280px) 1000px, 75vw",
  layout = "home",
}: ProjectMediaProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const desktopWidth = study.imageWidth ?? 1200;
  const desktopHeight = study.imageHeight ?? 750;
  const mobileWidth = study.mobileImageWidth ?? 227;
  const mobileHeight = study.mobileImageHeight ?? 472;

  const mobileDisplayHeight = Math.round(desktopHeight * 0.9);
  const mobileDisplayWidth = Math.round(
    (mobileDisplayHeight * mobileWidth) / mobileHeight,
  );
  const overlap = Math.round(mobileDisplayWidth * 0.3);
  const bottomOffset = Math.round(desktopHeight * 0.035);
  const stageWidth = desktopWidth + mobileDisplayWidth - overlap;
  const stageHeight = desktopHeight + bottomOffset;
  const mobileLeft = desktopWidth - overlap;
  const mobileTop = stageHeight - mobileDisplayHeight;

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const update = () => {
      setScale(Math.min(1, el.clientWidth / stageWidth));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    return () => observer.disconnect();
  }, [stageWidth]);

  if (!study.imageUrl) {
    return null;
  }

  if (!study.mobileImageUrl) {
    return (
      <div className="flex justify-center overflow-x-hidden px-4 py-6 sm:px-8 sm:py-10">
        <div className="w-full max-w-[1000px] overflow-hidden border border-border">
          <Image
            src={study.imageUrl}
            alt={`${study.client} website`}
            width={desktopWidth}
            height={desktopHeight}
            sizes="(min-width: 1280px) 1000px, (min-width: 640px) 90vw, 100vw"
            className="h-auto w-full"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="lg:hidden">
        <div className="overflow-hidden border border-border">
          <Image
            src={study.imageUrl}
            alt={`${study.client} website`}
            width={desktopWidth}
            height={desktopHeight}
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>

        {layout === "case" && (
          <div className="mt-3 flex justify-center">
            <div className="w-1/2 max-w-[220px] overflow-hidden border border-border">
              <Image
                src={study.mobileImageUrl}
                alt={`${study.client} website on mobile`}
                width={mobileWidth}
                height={mobileHeight}
                sizes="50vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        )}
      </div>

      <div className="hidden justify-center overflow-x-hidden px-4 py-6 sm:px-8 sm:py-10 lg:flex">
        <div
          ref={wrap}
          className="w-full"
          style={{ maxWidth: stageWidth, height: stageHeight * scale }}
        >
          <div
            className="relative origin-top-left"
            style={{
              width: stageWidth,
              height: stageHeight,
              transform: `scale(${scale})`,
            }}
          >
            <div
              className="absolute left-0 top-0 overflow-hidden ring-1 ring-border"
              style={{ width: desktopWidth, height: desktopHeight }}
            >
              <Image
                src={study.imageUrl}
                alt={`${study.client} website`}
                width={desktopWidth}
                height={desktopHeight}
                sizes={sizes}
                className="h-full w-full object-cover"
              />
            </div>

            <div
              className="absolute z-[5] overflow-hidden shadow-[0_16px_40px_rgba(11,31,58,0.2)] ring-1 ring-border"
              style={{
                left: mobileLeft,
                top: mobileTop,
                width: mobileDisplayWidth,
                height: mobileDisplayHeight,
              }}
            >
              <Image
                src={study.mobileImageUrl}
                alt={`${study.client} website on mobile`}
                width={mobileWidth}
                height={mobileHeight}
                sizes="(min-width: 1280px) 300px, 20vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
