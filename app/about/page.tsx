"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import AboutSection from "@/components/about/AboutSection";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/footer/Footer";
import InquiryModal from "@/components/common/InquiryModal";

export default function AboutPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-50 text-brand-blue border border-blue-200 text-xs font-bold uppercase tracking-wider">
            About Us
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy">
            Making Loans Simple Across India
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-handwriting text-2xl text-brand-blue">
            "Dedicated to customer clarity, transparency, and personal financial assistance."
          </p>
        </div>
      </section>

      {/* About narrative */}
      <AboutSection />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* CTA */}
      <CTASection onOpenConsultation={() => setConsultationOpen(true)} />

      <Footer />

      <InquiryModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </main>
  );
}
