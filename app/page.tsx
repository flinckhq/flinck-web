"use client";

import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsStrip } from "@/components/stats-strip";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { BentoGrid } from "@/components/bento-grid";
import { EcosystemSection } from "@/components/ecosystem-section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { CtaSection } from "@/components/cta-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { FooterSection } from "@/components/footer-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F2EAE0] text-gray-950 selection:bg-[#1E4A38] selection:text-[#F2EAE0]">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* 8000+ Products / 5+ Community Stats Strip */}
      <StatsStrip />

      {/* How Flinck works - Interactive Tabs & S-Curve */}
      <HowItWorksSection />

      {/* Bento Grid: Weather, Marketplace, AI Assistant, Community */}
      <BentoGrid />

      {/* The Flinck Ecosystem 6-card Grid */}
      <EcosystemSection />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Start farming. For free. CTA */}
      <CtaSection />

      {/* Frequently Asked Questions */}
      <FaqAccordion />

      {/* Brand Footer with Giant Watermark */}
      <FooterSection />
    </main>
  );
}
