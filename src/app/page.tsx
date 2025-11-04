import Image from "next/image";
import Hero from "@/component/Hero";
import AboutSection from "@/component/aboutSection";
import ServicesSection from "@/component/Service";
export default function Home() {
  return (
    <div >
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
