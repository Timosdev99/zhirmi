import CTASection from "@/component/cta";
import HomeCapabilities from "@/component/home/capabilities";
import HomeHero from "@/component/home/hero";
import HomePricing from "@/component/home/pricing";
import HomePrinciples from "@/component/home/principles";
import HomeStart from "@/component/home/start";
import HomeStudio from "@/component/home/studio";
import HomeWork from "@/component/home/work";
import TestimonialsSection from "@/component/testimonies";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Zhirmitech — Websites, Marketing, AI & Operations",
  description:
    "Websites, SEO, content, AI agents, automation and operations for growing businesses. One team for the build, the growth and the systems behind it.",
  path: "/",
});

export default function Home() {
  return (
    <div>
      <HomeHero />
      <HomeCapabilities />
      <HomeWork />
      <HomePrinciples />
      <TestimonialsSection />
      <HomeStart />
      <HomeStudio />
      <HomePricing />
      <CTASection />
    </div>
  );
}
