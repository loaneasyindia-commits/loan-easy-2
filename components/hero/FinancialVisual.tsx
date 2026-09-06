import React from "react";
import { ShieldCheck, CheckCircle2, Award, Building } from "lucide-react";

export default function FinancialVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto flex items-center justify-center p-4">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 via-slate-100/40 to-emerald-100/40 rounded-3xl blur-2xl transform scale-95 -z-10"></div>

      {/* Main Composition Box */}
      <div className="relative w-full aspect-square max-w-[420px] bg-gradient-to-b from-white to-slate-50/80 rounded-3xl border border-slate-200/80 shadow-2xl p-6 flex flex-col items-center justify-between overflow-hidden">
        
        {/* Top Floating Badge: Approved Status */}
        <div className="absolute top-5 left-5 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2.5 animate-float">
          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold text-slate-400 block leading-tight">Status</span>
            <span className="text-xs font-extrabold text-slate-800 leading-tight">Loan Options Eligible</span>
          </div>
        </div>

        {/* Top Right Floating Badge: Trust Shield */}
        <div className="absolute top-5 right-5 z-20 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2 animate-float" style={{ animationDelay: "1.5s" }}>
          <ShieldCheck className="w-4 h-4 text-brand-blue" />
          <span className="text-[11px] font-bold text-brand-navy">100% Safe & Secure</span>
        </div>

        {/* Central Visual SVG Composition */}
        <div className="relative w-full h-full flex items-center justify-center my-auto">
          {/* Decorative Pattern Background Grid */}
          <svg className="absolute w-full h-full opacity-10" viewBox="0 0 200 200">
            <defs>
              <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#0B4FA2" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>

          {/* SVG Wallet & Rupee Composition */}
          <svg className="w-64 h-64 drop-shadow-xl" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Currency Notes Layer */}
            <g className="animate-pulseSlow">
              {/* Note 1 (Green/Emerald 500 Rupee Note inspiration) */}
              <rect x="50" y="70" width="160" height="90" rx="8" transform="rotate(-12 50 70)" fill="#10B981" fillOpacity="0.85" stroke="#047857" strokeWidth="2"/>
              <circle cx="90" cy="85" r="18" fill="#047857" fillOpacity="0.4" />
              <text x="135" y="92" transform="rotate(-12 135 92)" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">₹500</text>

              {/* Note 2 (Blue 50 Rupee Note inspiration) */}
              <rect x="90" y="55" width="160" height="90" rx="8" transform="rotate(8 90 55)" fill="#0B4FA2" fillOpacity="0.9" stroke="#102A56" strokeWidth="2"/>
              <circle cx="210" cy="115" r="18" fill="#102A56" fillOpacity="0.4" />
              <text x="130" y="115" transform="rotate(8 130 115)" fill="#FFFFFF" fontSize="22" fontWeight="bold" fontFamily="sans-serif">₹2000</text>
            </g>

            {/* Blue Wallet Main Body */}
            <rect x="50" y="130" width="200" height="135" rx="18" fill="#0B4FA2" stroke="#102A56" strokeWidth="3"/>
            <path d="M 50 150 C 110 130, 190 130, 250 150 L 250 160 C 190 145, 110 145, 50 160 Z" fill="#102A56" />

            {/* Wallet Clasp / Pocket */}
            <rect x="180" y="175" width="70" height="45" rx="10" fill="#102A56" stroke="#0B4FA2" strokeWidth="2" />
            <circle cx="205" cy="197.5" r="8" fill="#EAB308" />
            <circle cx="205" cy="197.5" r="4" fill="#FFFFFF" />

            {/* Gold Rupee Coin Stack */}
            <g transform="translate(45, 190)">
              <ellipse cx="25" cy="40" rx="22" ry="12" fill="#CA8A04" />
              <ellipse cx="25" cy="34" rx="22" ry="12" fill="#EAB308" stroke="#FEF08A" strokeWidth="1.5" />
              <text x="18" y="39" fill="#854D0E" fontSize="14" fontWeight="extrabold">₹</text>

              <ellipse cx="25" cy="22" rx="22" ry="12" fill="#CA8A04" />
              <ellipse cx="25" cy="16" rx="22" ry="12" fill="#FACC15" stroke="#FEF08A" strokeWidth="1.5" />
              <text x="18" y="21" fill="#854D0E" fontSize="14" fontWeight="extrabold">₹</text>
            </g>
          </svg>
        </div>

        {/* Bottom Floating Badge: Bank Facilitation */}
        <div className="w-full bg-slate-900/90 text-white p-3 rounded-2xl flex items-center justify-between shadow-md mt-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-blue-600/30 text-blue-400">
              <Building className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold leading-tight">Leading Bank Partners</p>
              <p className="text-[10px] text-slate-400 leading-tight">HDFC, ICICI, SBI & More</p>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-lg">
            <Award className="w-3.5 h-3.5" />
            <span>Trusted Choice</span>
          </div>
        </div>

      </div>
    </div>
  );
}
