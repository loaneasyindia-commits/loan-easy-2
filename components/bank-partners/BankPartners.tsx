"use client";

import React, { useState } from "react";
import SectionHeader from "@/components/common/SectionHeader";
import PartnerLogo from "./PartnerLogo";
import { BANK_PARTNERS } from "@/data/loanData";
import { ShieldCheck, Info } from "lucide-react";

export default function BankPartners() {
  const [activeTab, setActiveTab] = useState<"all" | "private" | "public" | "nbfc">("all");

  const filteredBanks = BANK_PARTNERS.filter((b) => {
    if (activeTab === "private") return b.category === "Private Bank";
    if (activeTab === "public") return b.category === "Public Sector";
    if (activeTab === "nbfc") return b.category === "NBFC";
    return true;
  });

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Market Comparison"
          title="Explore Loan Options from Leading Banks"
          subtitle="We help you explore and compare suitable loan options based on your individual profile, requirements and eligibility across top Indian lenders."
        />

        {/* Disclaimer Note */}
        <div data-aos="fade-up" className="mt-3 text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5 max-w-xl mx-auto">
            <Info className="w-3.5 h-3.5 text-brand-blue flex-shrink-0" />
            <span>Loan Easy India facilitates loan application assistance across top RBI-regulated banks & NBFCs.</span>
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div data-aos="fade-up" className="flex justify-center gap-2 mt-8 mb-8 flex-wrap">
          {[
            { id: "all", label: "All Lenders" },
            { id: "private", label: "Private Banks" },
            { id: "public", label: "Public Sector Banks" },
            { id: "nbfc", label: "Leading NBFCs" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === tab.id
                  ? "bg-brand-navy text-white shadow-sm"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Interactive Bank Logo Grid */}
        <div data-aos="fade-up" className="mt-4">
          <div className="flex gap-4 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory px-2 md:justify-center flex-nowrap sm:flex-wrap">
            {filteredBanks.map((bank) => (
              <div key={bank.id} className="snap-center">
                <PartnerLogo bank={bank} />
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Auto-Scrolling Marquee Strip for All Logos */}
        <div className="mt-12 pt-8 border-t border-slate-100 overflow-hidden">
          <p className="text-center text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-6">
            Compare Rates Across Top Lenders
          </p>
          <div className="flex overflow-hidden relative w-full mask-gradient">
            <div className="flex gap-6 animate-marquee-slow">
              {BANK_PARTNERS.concat(BANK_PARTNERS).map((bank, index) => (
                <div key={`${bank.id}-${index}`} className="flex-shrink-0">
                  <PartnerLogo bank={bank} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Security Strip */}
        <div data-aos="fade-up" className="mt-12 p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span>Multi-Bank Eligibility Evaluation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            <span>Transparent Interest Rates & Zero Hidden Charges</span>
          </div>
          <a
            href="#loan-inquiry"
            className="text-brand-blue font-bold hover:underline flex-shrink-0"
          >
            Check Loan Options →
          </a>
        </div>
      </div>
    </section>
  );
}
