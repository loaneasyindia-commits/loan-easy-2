import React from "react";
import { Zap, Building2, Layers, Headphones } from "lucide-react";
import { TRUST_BENEFITS } from "@/data/loanData";

export default function TrustBenefits() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500" />;
      case "Building2":
        return <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />;
      case "Layers":
        return <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600" />;
      case "Headphones":
        return <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-rose-500" />;
      default:
        return <Zap className="w-5 h-5 text-brand-blue" />;
    }
  };

  return (
    <section className="bg-white py-8 border-b border-slate-200/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-aos="fade-up"
          className="bg-slate-50/80 rounded-2xl border border-slate-200/90 p-4 sm:p-6 shadow-xs"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
            {TRUST_BENEFITS.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-start gap-3 sm:gap-4 p-2 sm:p-3 ${
                  idx !== 0 && idx % 2 === 0 ? "pt-4 lg:pt-3" : ""
                }`}
              >
                <div className="p-2.5 sm:p-3 rounded-xl bg-white shadow-xs border border-slate-100 flex-shrink-0">
                  {getIcon(item.iconName)}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-extrabold text-brand-navy leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal hidden sm:block">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
