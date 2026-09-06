import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import JourneyStep from "./JourneyStep";
import { JOURNEY_STEPS } from "@/data/loanData";

export default function LoanJourney() {
  const getAnimation = (idx: number) => {
    switch (idx) {
      case 0:
        return "fade-right";
      case 1:
        return "fade-up";
      case 2:
        return "fade-up";
      case 3:
        return "fade-left";
      default:
        return "fade-up";
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Seamless Process"
          title="Your Loan Journey, Made Simple"
          subtitle="Four straightforward steps to compare, choose, and secure your required loan."
        />

        {/* Desktop 4-Step Grid & Mobile Vertical Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 mt-14 sm:mt-20 relative">
          {JOURNEY_STEPS.map((step, idx) => (
            <JourneyStep
              key={step.stepNumber}
              step={step}
              isLast={idx === JOURNEY_STEPS.length - 1}
              aosAnimation={getAnimation(idx)}
            />
          ))}
        </div>

        {/* Bottom Helper Note */}
        <div data-aos="fade-up" className="mt-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-600 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Average callback response time: under 30 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
