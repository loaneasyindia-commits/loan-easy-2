"use client";

import React from "react";
import { HeartHandshake, CheckCircle2, Car, Sparkles } from "lucide-react";
import FamilyCarVisual from "./FamilyCarVisual";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50/80 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <div data-aos="fade-right" className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wider shadow-xs">
              <Car className="w-3.5 h-3.5" />
              <span>Car Loans & Financial Assistance</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight">
              About <span className="text-brand-blue">LoanEasyIndia</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              LoanEasyIndia is built with a simple mission — to make the loan journey easier, clearer and more convenient for Indian families.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              From Home, Plot, & LAP loans to Personal, Car, Business Loans, and Balance Transfers, we help customers explore suitable loan options with personal assistance throughout the process.
            </p>

            {/* Micro Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">New & Pre-Owned Car Loans</span>
              </div>
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200 shadow-xs flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span className="text-xs font-bold text-slate-800">End-to-End Assistance</span>
              </div>
            </div>

            {/* Professional Handwritten Tagline Signature */}
            <div className="pt-4 border-t border-slate-200/80 flex items-center gap-4">
              <div>
                <span className="text-xs text-slate-400 font-semibold block uppercase tracking-wider">Our Core Tagline</span>
                <span className="font-handwriting text-2xl font-bold text-brand-blue leading-none">
                  "Making Loans Simple"
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Family & New Car Loan Visual Graphic */}
          <div data-aos="fade-left" className="lg:col-span-6 flex justify-center">
            {/* <FamilyCarVisual /> */}
            <img
              src="family.jpg"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
