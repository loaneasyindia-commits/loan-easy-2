"use client";

import React from "react";
import { User, Car, Briefcase, RefreshCw, ArrowRight, CheckCircle, Calculator } from "lucide-react";
import { LoanProduct } from "@/data/loanData";

interface LoanCardProps {
  product: LoanProduct;
  delayIndex: number;
  onOpenEMIModal: (loanType: string) => void;
}

export default function LoanCard({ product, delayIndex, onOpenEMIModal }: LoanCardProps) {
  const getIcon = () => {
    switch (product.iconName) {
      case "User":
        return <User className="w-6 h-6 text-red-600" />;
      case "Car":
        return <Car className="w-6 h-6 text-emerald-600" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-amber-600" />;
      case "RefreshCw":
        return <RefreshCw className="w-6 h-6 text-blue-600" />;
      default:
        return <User className="w-6 h-6 text-brand-blue" />;
    }
  };

  const delayMs = delayIndex * 150;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delayMs}
      className={`group relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-subtle hover:shadow-cardHover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden border-t-4 ${product.borderColor}`}
    >
      <div>
        {/* Top Header Row */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center shadow-xs transition-transform group-hover:scale-110"
            style={{ backgroundColor: `${product.categoryColor}15` }}
          >
            {getIcon()}
          </div>
          <span
            className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${product.badgeBg}`}
          >
            {product.badgeText}
          </span>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors">
          {product.title}
        </h3>
        <p className="text-sm text-slate-600 mt-2 leading-relaxed">
          {product.shortDesc}
        </p>

        {/* Highlight Stats Strip */}
        <div className="my-5 p-3 rounded-xl bg-slate-50 border border-slate-100 grid grid-cols-2 gap-2 text-xs">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Indicative Interest</span>
            <span className="font-extrabold text-slate-800">{product.indicativeRate}</span>
          </div>
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Sanction Amount</span>
            <span className="font-extrabold text-brand-blue">{product.maxAmount}</span>
          </div>
        </div>

        {/* Feature bullets */}
        <ul className="space-y-2 mb-6 text-xs text-slate-600">
          {product.features.map((feat, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
        <a
          href="#loan-inquiry"
          className="inline-flex items-center justify-between w-full py-2.5 px-4 bg-slate-900 hover:bg-brand-blue text-white text-xs sm:text-sm font-bold rounded-xl transition-all duration-200 shadow-xs"
        >
          <span>{product.ctaText}</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          type="button"
          onClick={() => onOpenEMIModal(product.title)}
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 text-xs font-semibold text-slate-600 hover:text-brand-blue hover:bg-blue-50 rounded-lg transition-colors"
        >
          <Calculator className="w-3.5 h-3.5 text-brand-blue" />
          <span>Calculate {product.title} EMI</span>
        </button>
      </div>
    </div>
  );
}
