import React from "react";
import { BankPartner } from "@/data/loanData";

interface PartnerLogoProps {
  bank: BankPartner;
}

export default function PartnerLogo({ bank }: PartnerLogoProps) {
  return (
    <div className="flex-shrink-0 w-48 sm:w-56 p-4 bg-white rounded-2xl border border-slate-200 shadow-subtle hover:shadow-md hover:border-blue-300 transition-all duration-300 group text-center flex flex-col items-center justify-between">
      {/* SVG Image Logo Container */}
      <div className="w-full h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 mb-3 group-hover:bg-blue-50/50 transition-colors">
        <img
          src={bank.logoUrl}
          alt={`${bank.name} logo`}
          className="h-10 max-w-[160px] w-auto object-contain transition-transform group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Indicative Details */}
      <div className="w-full text-center space-y-1">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Indicative Rate</span>
        <span className="text-xs font-extrabold text-brand-blue">{bank.startingRate}</span>
      </div>
    </div>
  );
}
