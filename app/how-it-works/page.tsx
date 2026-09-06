"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import LoanJourney from "@/components/loan-process/LoanJourney";
import DocumentsRequired from "@/components/documents/DocumentsRequired";
import WhyChooseUs from "@/components/why-choose-us/WhyChooseUs";
import FAQSection from "@/components/faq/FAQSection";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/footer/Footer";
import InquiryModal from "@/components/common/InquiryModal";

export default function HowItWorksPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Banner */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-12 sm:py-16 border-b border-slate-100 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            Simple 4-Step Process
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy">
            How LoanEasyIndia Works
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            From inquiry to bank disbursement, we guide you through every step of your loan journey.
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <LoanJourney />

      {/* Documents Required */}
      <DocumentsRequired />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* FAQ */}
      <FAQSection />

      {/* CTA Banner */}
      <CTASection onOpenConsultation={() => setConsultationOpen(true)} />

      <Footer />

      <InquiryModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />
    </main>
  );
}
