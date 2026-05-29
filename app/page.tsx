import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { CB7Section1, CB7Section2, CB7Section3 } from "@/components/CB7Sections";
import N7Section, { N7CTASection } from "@/components/N7Section";
import BlogSection from "@/components/BlogSection";
import CaseStudies from "@/components/CaseStudies";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CB7Section1 />
        <CB7Section2 />
        <div className="bg-[#000d12] block lg:hidden" style={{ height: "80px" }} />
        <CB7Section3 />
        <N7Section />
        <N7CTASection />
        <BlogSection />
        <CaseStudies />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
