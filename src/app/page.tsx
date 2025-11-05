import Image from "next/image";
import Hero from "@/component/Hero";
import AboutSection from "@/component/aboutSection";
import ServicesSection from "@/component/Service";
import WhatWeDoSection from "@/component/whatWedo";
import WhyChooseUsSection from "@/component/whyChoose";
import PortfolioSection from "@/component/projects";
import CTAFactsSection from "@/component/start";
import PricingSection from "@/component/pricing";
import TestimonialsSection from "@/component/testimonies";
export default function Home() {
  return (
    <div >
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WhatWeDoSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <CTAFactsSection />
      <PricingSection />
      <TestimonialsSection />
    </div>
  );
}
