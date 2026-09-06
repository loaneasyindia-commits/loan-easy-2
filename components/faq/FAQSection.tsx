"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import FAQItem from "./FAQItem";
import { FAQ_ITEMS } from "@/data/loanData";
import { AlertCircle } from "lucide-react";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const handleToggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faqs" className="py-16 md:py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Clear Answers"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about loan facilitation, documentation, and lender procedures."
        />

        {/* Accordion List */}
        <div data-aos="fade-up" className="mt-12 space-y-3.5">
          {FAQ_ITEMS.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>

        {/* Important Regulatory & Approval Disclaimer Alert Box */}
        <div data-aos="fade-up" className="mt-10 p-4 sm:p-5 rounded-2xl bg-amber-50/70 border border-amber-200/90 text-amber-900 text-xs sm:text-sm flex items-start gap-3 shadow-xs">
          <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-extrabold uppercase tracking-wide text-amber-950 block text-xs">
              Important Disclaimer:
            </span>
            <p className="text-amber-800 leading-relaxed text-xs">
              Loan approval is subject to lender eligibility criteria, documentation, credit evaluation (CIBIL score), and individual bank approval policies. LoanEasyIndia does not charge upfront fees for loan inquiry facilitation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
