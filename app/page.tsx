import AboutSection from "@/components/AboutSection";
import BookNowSection from "@/components/BookNowSection";
import Hero from "@/components/Hero";
import ServiceSection from "@/components/ServiceSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServiceSection />
      <WhyChooseUsSection />
      <BookNowSection />
    </>
  );
}
