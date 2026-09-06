"use client";

import React from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQItemData } from "@/data/loanData";

interface FAQItemProps {
  faq: FAQItemData;
  isOpen: boolean;
  onToggle: () => void;
}

export default function FAQItem({ faq, isOpen, onToggle }: FAQItemProps) {
  return (
    <div
      className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
        isOpen
          ? "bg-white border-brand-blue/60 shadow-md ring-1 ring-brand-blue/20"
          : "bg-white border-slate-200/90 hover:border-slate-300 shadow-xs"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
        className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
              isOpen ? "bg-brand-blue text-white" : "bg-slate-100 text-slate-500"
            }`}
          >
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className={`text-base font-bold transition-colors ${isOpen ? "text-brand-blue" : "text-brand-navy"}`}>
            {faq.question}
          </span>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? "transform rotate-180 text-brand-blue" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          id={`faq-answer-${faq.id}`}
          className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn"
        >
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}
