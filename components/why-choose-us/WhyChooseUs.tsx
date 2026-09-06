import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import BenefitItem from "./BenefitItem";
import { WHY_CHOOSE_ITEMS } from "@/data/loanData";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-slate-50/70 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why LoanEasyIndia"
          title="Why Choose LoanEasyIndia?"
          subtitle="Because getting a loan doesn't have to be complicated."
        />

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 sm:mt-16">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <BenefitItem key={item.id} benefit={item} delayIndex={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
