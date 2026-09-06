"use client";

import React, { useState } from "react";
import { FileText, CheckCircle2, XCircle, Info, Sparkles } from "lucide-react";

interface DocumentRow {
  name: string;
  salaried: boolean;
  selfEmployed: boolean;
}

export default function DocumentsRequired() {
  const [activeTab, setActiveTab] = useState<"personal" | "car" | "business" | "transfer">("personal");

  const documentData: Record<string, { rows: DocumentRow[]; sampleEmi: string; amount: string; irr: string; tenure: string }> = {
    personal: {
      sampleEmi: "₹22,625",
      amount: "₹10L",
      irr: "12.75%",
      tenure: "60 mo",
      rows: [
        { name: "Aadhar card", salaried: true, selfEmployed: true },
        { name: "PAN Card", salaried: true, selfEmployed: true },
        { name: "Account statement (latest 6 months)", salaried: true, selfEmployed: true },
        { name: "Latest electricity bill / Address Proof", salaried: true, selfEmployed: true },
        { name: "Passport size photo", salaried: true, selfEmployed: true },
        { name: "GST Certificate / Udhyam Registration / Shop Act", salaried: false, selfEmployed: true },
        { name: "Last 2 years ITR as proof of income", salaried: false, selfEmployed: true },
        { name: "Salary Slip (latest 3 months)", salaried: true, selfEmployed: false },
        { name: "Latest 2 years Form 16", salaried: true, selfEmployed: false },
      ],
    },
    car: {
      sampleEmi: "₹19,850",
      amount: "₹10L",
      irr: "8.75%",
      tenure: "60 mo",
      rows: [
        { name: "Aadhar card", salaried: true, selfEmployed: true },
        { name: "PAN Card", salaried: true, selfEmployed: true },
        { name: "Registration Certificate of the car", salaried: true, selfEmployed: true },
        { name: "Account statement (latest 6 months)", salaried: true, selfEmployed: true },
        { name: "Latest electricity bill", salaried: true, selfEmployed: true },
        { name: "Passport size photo", salaried: true, selfEmployed: true },
        { name: "GST Certificate / Udhyam Registration / Shop Act", salaried: false, selfEmployed: true },
        { name: "Last 2 years ITR as proof of income", salaried: false, selfEmployed: true },
        { name: "Salary Slip (latest 3 months)", salaried: true, selfEmployed: false },
        { name: "Latest 2 years Form 16", salaried: true, selfEmployed: false },
      ],
    },
    business: {
      sampleEmi: "₹49,500",
      amount: "₹25L",
      irr: "13.50%",
      tenure: "60 mo",
      rows: [
        { name: "Aadhar card of Business Owner", salaried: false, selfEmployed: true },
        { name: "PAN Card of Individual & Firm", salaried: false, selfEmployed: true },
        { name: "GST Certificate & GST Returns (1 Year)", salaried: false, selfEmployed: true },
        { name: "Udhyam / Shop & Establishment License", salaried: false, selfEmployed: true },
        { name: "Business Current Account Statement (12 Months)", salaried: false, selfEmployed: true },
        { name: "Last 2 years Audited Financials & ITR", salaried: false, selfEmployed: true },
        { name: "Office / Factory Ownership / Rent Agreement", salaried: false, selfEmployed: true },
        { name: "Passport size photo", salaried: false, selfEmployed: true },
      ],
    },
    transfer: {
      sampleEmi: "₹18,200",
      amount: "₹10L",
      irr: "9.25%",
      tenure: "60 mo",
      rows: [
        { name: "Aadhar card", salaried: true, selfEmployed: true },
        { name: "PAN Card", salaried: true, selfEmployed: true },
        { name: "Existing Loan Track Record / Statement (12 Months)", salaried: true, selfEmployed: true },
        { name: "Existing Loan Sanction Letter", salaried: true, selfEmployed: true },
        { name: "Account statement (latest 6 months)", salaried: true, selfEmployed: true },
        { name: "Salary Slip / 2 Years ITR", salaried: true, selfEmployed: true },
        { name: "Passport size photo", salaried: true, selfEmployed: true },
      ],
    },
  };

  const currentTab = documentData[activeTab];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50/50 via-slate-50/80 to-white relative overflow-hidden border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Header & Sample EMI Card (Matching Uploaded Image) */}
          <div data-aos="fade-right" className="lg:col-span-5 space-y-6">
            
            {/* Top Document Icon Badge */}
            <div className="w-14 h-14 rounded-2xl bg-white border border-blue-200 shadow-md flex items-center justify-center text-brand-blue">
              <FileText className="w-7 h-7 text-brand-blue" />
            </div>

            {/* Section Title */}
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
                Documents Required
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Just a few basics to get you started — no lengthy paperwork.
              </p>
            </div>

            {/* Category Selector Buttons */}
            <div className="flex flex-wrap gap-2 pt-2">
              {[
                { id: "personal", label: "Personal Loan" },
                { id: "car", label: "Car Loan" },
                { id: "business", label: "Business Loan" },
                { id: "transfer", label: "Balance Transfer" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-brand-blue text-white shadow-md"
                      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* SAMPLE EMI Widget Card (Exact Match to Uploaded Image Left Box) */}
            <div className="p-6 bg-white rounded-3xl border border-slate-200/90 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
                  SAMPLE EMI
                </span>
                <span className="text-xs font-semibold text-slate-400">Indicative Estimate</span>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-navy">
                  {currentTab.sampleEmi} <span className="text-sm font-normal text-slate-500">/ month</span>
                </div>
              </div>

              {/* 3 Detail Stat Boxes */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 bg-blue-50/70 rounded-xl border border-blue-100">
                  <span className="text-[10px] font-extrabold text-brand-blue block uppercase">{currentTab.amount}</span>
                  <span className="text-[10px] text-slate-500 font-medium">Loan amount</span>
                </div>
                <div className="p-2.5 bg-blue-50/70 rounded-xl border border-blue-100">
                  <span className="text-[10px] font-extrabold text-brand-blue block uppercase">{currentTab.irr}</span>
                  <span className="text-[10px] text-slate-500 font-medium">IRR</span>
                </div>
                <div className="p-2.5 bg-blue-50/70 rounded-xl border border-blue-100">
                  <span className="text-[10px] font-extrabold text-brand-blue block uppercase">{currentTab.tenure}</span>
                  <span className="text-[10px] text-slate-500 font-medium">Tenure</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 leading-normal pt-1">
                Indicative only. Your final rate and EMI depend on your profile and the lender's credit assessment.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Document Comparison Table (Exact Match to Uploaded Image Right Box) */}
          <div data-aos="fade-left" className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-8">
              
              {/* Table Header */}
              <div className="grid grid-cols-12 items-center pb-4 border-b border-slate-200 text-sm font-extrabold text-brand-navy">
                <div className="col-span-7 sm:col-span-8">Documents Required</div>
                <div className="col-span-2 text-center text-xs sm:text-sm">Salaried</div>
                <div className="col-span-3 sm:col-span-2 text-center text-xs sm:text-sm">Self-Employed</div>
              </div>

              {/* Document Rows */}
              <div className="divide-y divide-slate-100 text-xs sm:text-sm">
                {currentTab.rows.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-12 items-center py-3.5 hover:bg-slate-50/60 px-1 rounded-lg transition-colors">
                    <div className="col-span-7 sm:col-span-8 font-semibold text-slate-700 leading-snug pr-2">
                      {row.name}
                    </div>

                    {/* Salaried Column */}
                    <div className="col-span-2 flex justify-center">
                      {row.salaried ? (
                        <CheckCircle2 className="w-5 h-5 text-brand-blue fill-brand-blue/10" />
                      ) : (
                        <XCircle className="w-5 h-5 text-orange-500 fill-orange-50" />
                      )}
                    </div>

                    {/* Self-Employed Column */}
                    <div className="col-span-3 sm:col-span-2 flex justify-center">
                      {row.selfEmployed ? (
                        <CheckCircle2 className="w-5 h-5 text-brand-blue fill-brand-blue/10" />
                      ) : (
                        <XCircle className="w-5 h-5 text-orange-500 fill-orange-50" />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                  <span>Required</span>
                  <span className="ml-2 flex items-center gap-1">
                    <XCircle className="w-4 h-4 text-orange-500" /> Not Required
                  </span>
                </div>
                <a href="#loan-inquiry" className="text-brand-blue font-bold hover:underline">
                  Submit Documents Online →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
