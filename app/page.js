import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import QuickGuide from "@/components/QuickGuide";
import ServiceGrid from "@/components/ServiceGrid";
import CTASection from "@/components/CTASection";
import TopicsCarousel from "@/components/TopicsCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsSection />
      <QuickGuide />
      <ServiceGrid />
      <CTASection />
      <TopicsCarousel />
    </>
  );
}