import React from "react";
import { CheckCircle2, ShieldCheck, Car, Key, Sparkles, Award } from "lucide-react";

export default function FamilyCarVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-100/60 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-6 relative overflow-hidden">
        
        {/* Header Badge */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-extrabold text-brand-navy">Dream Car Financing</h4>
              <p className="text-[11px] text-slate-500">Helping Families Drive Home Happiness</p>
            </div>
          </div>
          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" /> Car Loan Focus
          </span>
        </div>

        {/* Family & Car Visual SVG Composition */}
        <div className="relative bg-gradient-to-b from-slate-50 to-emerald-50/30 rounded-2xl p-6 border border-slate-200/80 flex flex-col items-center justify-center text-center overflow-hidden">
          
          <svg className="w-full max-w-[340px] h-52 drop-shadow-md" viewBox="0 0 340 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="carBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#159447" />
                <stop offset="100%" stop-color="#057835" />
              </linearGradient>
            </defs>

            {/* Road Baseline */}
            <line x1="20" y1="170" x2="320" y2="170" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />

            {/* Sleek Modern SUV/Car Body */}
            {/* Main Roof & Windshield */}
            <path d="M 60 120 Q 90 70 160 70 Q 230 70 260 120 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <path d="M 100 78 Q 140 78 165 78 L 165 116 L 90 116 Z" fill="#38BDF8" opacity="0.4" />
            <path d="M 175 78 Q 220 78 245 116 L 175 116 Z" fill="#38BDF8" opacity="0.4" />

            {/* Car Chassis Body */}
            <rect x="40" y="115" width="250" height="40" rx="14" fill="url(#carBodyGrad)" stroke="#045625" strokeWidth="2" />

            {/* Front Headlights & Tail Lights */}
            <circle cx="280" cy="128" r="6" fill="#FACC15" />
            <circle cx="48" cy="128" r="5" fill="#EF4444" />

            {/* Wheels */}
            <circle cx="90" cy="155" r="20" fill="#1E293B" />
            <circle cx="90" cy="155" r="10" fill="#94A3B8" />
            <circle cx="90" cy="155" r="4" fill="#FFFFFF" />

            <circle cx="240" cy="155" r="20" fill="#1E293B" />
            <circle cx="240" cy="155" r="10" fill="#94A3B8" />
            <circle cx="240" cy="155" r="4" fill="#FFFFFF" />

            {/* Happy Family Silhouettes Celebrating (Father, Mother, Child) */}
            <g transform="translate(115, 25)">
              {/* Father */}
              <circle cx="25" cy="15" r="8" fill="#0B4FA2" />
              <path d="M 15 45 C 15 28 35 28 35 45 Z" fill="#0B4FA2" />
              <path d="M 12 32 L 2 20 M 38 32 L 48 20" stroke="#0B4FA2" strokeWidth="3.5" strokeLinecap="round" />

              {/* Mother */}
              <circle cx="65" cy="17" r="7.5" fill="#DC2626" />
              <path d="M 56 45 C 56 30 74 30 74 45 Z" fill="#DC2626" />
              <path d="M 54 32 L 46 22 M 76 32 L 86 22" stroke="#DC2626" strokeWidth="3.5" strokeLinecap="round" />

              {/* Child holding key */}
              <circle cx="45" cy="24" r="6" fill="#EAB308" />
              <path d="M 38 45 C 38 34 52 34 52 45 Z" fill="#EAB308" />
            </g>

            {/* Floating Car Key with ₹ Keychain Badge */}
            <g transform="translate(230, 20)">
              <rect x="0" y="0" width="70" height="34" rx="10" fill="#FFFFFF" stroke="#159447" strokeWidth="2" filter="drop-shadow(2px 3px 4px rgba(0,0,0,0.15))" />
              <text x="12" y="22" fill="#159447" fontSize="16" fontWeight="bold">₹ Key</text>
              <circle cx="58" cy="17" r="7" fill="#EAB308" />
              <path d="M 55 17 L 57 19 L 61 15" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            </g>
          </svg>

          {/* Micro Value Strip */}
          <div className="grid grid-cols-3 gap-2 w-full text-center text-xs mt-2">
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-400 block font-semibold">On-Road Loan</span>
              <span className="font-extrabold text-emerald-600">Up to 90%</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-400 block font-semibold">Interest Rate</span>
              <span className="font-extrabold text-brand-blue">From 8.75%</span>
            </div>
            <div className="p-2.5 bg-white rounded-xl border border-slate-200 shadow-xs">
              <span className="text-[10px] text-slate-400 block font-semibold">Tenure</span>
              <span className="font-extrabold text-slate-800">Up to 7 Yrs</span>
            </div>
          </div>

        </div>

        {/* Bottom Assurance */}
        <div className="p-3.5 bg-emerald-50/70 rounded-xl border border-emerald-100 text-xs text-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span className="font-bold">Fast Approval for New & Pre-Owned Cars</span>
          </div>
          <a href="#loan-inquiry" className="text-emerald-700 font-extrabold hover:underline flex-shrink-0">
            Apply Now →
          </a>
        </div>

      </div>
    </div>
  );
}
