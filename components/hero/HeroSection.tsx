"use client";

import React from "react";
import { PhoneCall } from "lucide-react";
import LoanInquiryForm from "./LoanInquiryForm";
import FinancialVisual from "./FinancialVisual";

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenEMIModal: () => void;
}

export default function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/60 overflow-hidden border-b border-slate-100">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT COLUMN: Exactly matching Reference Image 1 */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
            
            {/* Main Blue Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue tracking-tight leading-[1.1]">
              Making Loans Simple
            </h1>

            {/* Subheading */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-navy leading-snug">
              One-Stop Solution for All Your Loan Needs
            </h2>

            {/* Loan Category Colored Bullet Indicators (Exact match to Image 1) */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2.5 pt-1 text-sm font-semibold text-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                <span>Personal Loan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>Car Loan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span>Business Loan</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-blue"></span>
                <span>Balance Transfer</span>
              </div>
            </div>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed pt-1 max-w-2xl font-normal">
              Explore suitable loan options from leading banks with a simple process and personal assistance throughout your loan journey.
            </p>

            {/* Primary Action Buttons (Exact match to Image 1) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#loan-inquiry"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-brand-blue hover:bg-blue-800 text-white font-bold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                Check Your Loan Options
              </a>

              <button
                type="button"
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-brand-navy font-bold text-sm sm:text-base rounded-xl border border-slate-300 shadow-xs transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-brand-blue" />
                <span>Talk to Us</span>
              </button>
            </div>

            {/* Subtle Visual Illustration Element
            <div className="pt-6 hidden sm:block">
              <FinancialVisual />
            </div> */}

          </div>

          {/* RIGHT COLUMN: Exactly matching Reference Image 2 (Form Card) */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-left">
            <div className="w-full max-w-md">
              <LoanInquiryForm />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
