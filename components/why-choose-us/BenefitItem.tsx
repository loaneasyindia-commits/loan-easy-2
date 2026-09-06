import React from "react";
import { ClipboardCheck, Users, Building2, Headphones, Zap, ShieldCheck } from "lucide-react";
import { BenefitItem as BenefitType } from "@/data/loanData";

interface BenefitItemProps {
  benefit: BenefitType;
  delayIndex: number;
}

export default function BenefitItem({ benefit, delayIndex }: BenefitItemProps) {
  const getIcon = () => {
    switch (benefit.iconName) {
      case "ClipboardCheck":
        return <ClipboardCheck className="w-6 h-6 text-brand-blue" />;
      case "Users":
        return <Users className="w-6 h-6 text-emerald-600" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-blue-700" />;
      case "Headphones":
        return <Headphones className="w-6 h-6 text-rose-500" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-amber-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-brand-blue" />;
    }
  };

  const delayMs = delayIndex * 100;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delayMs}
      className="p-6 bg-white rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-md hover:border-blue-200 transition-all duration-300 flex items-start gap-4 group"
    >
      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-50/70 transition-colors">
        {getIcon()}
      </div>
      <div>
        <h3 className="text-base font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors">
          {benefit.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
          {benefit.description}
        </p>
      </div>
    </div>
  );
}
