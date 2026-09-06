"use client";

import React from "react";
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles } from "lucide-react";

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export default function CTASection({ onOpenConsultation }: CTASectionProps) {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="relative bg-gradient-to-r from-brand-blue via-blue-900 to-brand-navy rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl text-white overflow-hidden border border-blue-800"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="cta-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="5" cy="5" r="2" fill="#FFFFFF" />
                  <circle cx="20" cy="20" r="1.5" fill="#EAB308" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-dots)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Circular Financial Graphic with loan.png */}
            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex flex-col items-center justify-center p-4 text-center shadow-2xl group">
                
                {/* Brand Logo Display */}
                <div className="w-full max-w-[160px] bg-white p-2.5 rounded-2xl shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center mb-1">
                  <img
                    src="/loan.png"
                    alt="LoanEasyIndia.com Emblem"
                    className="w-full h-auto object-contain max-h-20"
                  />
                </div>

                <span className="text-[11px] font-extrabold text-white uppercase tracking-wider">
                  LOAN EASY INDIA
                </span>
                <span className="text-[10px] text-amber-300 font-semibold">
                  Making Loans Simple
                </span>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-2 bg-emerald-500 text-white text-[10px] font-extrabold px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Safe Facilitation
                </div>
              </div>
            </div>

            {/* Right Text & CTA Buttons */}
            <div className="lg:col-span-8 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-800/80 text-blue-200 text-xs font-semibold uppercase tracking-wider border border-blue-700/60">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Ready to start?</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Looking for a Loan? <span className="text-amber-400 underline decoration-white/30 underline-offset-4">Let's Make It Easy.</span>
              </h2>

              <p className="text-base sm:text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
                Tell us what you need. We'll help you explore suitable loan options with complete clarity and personal guidance.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
                <a
                  href="#loan-inquiry"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-amber-400 hover:bg-amber-300 text-brand-navy font-extrabold text-sm sm:text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base rounded-xl border border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  <PhoneCall className="w-4 h-4 text-amber-400" />
                  <span>Talk to Us</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
