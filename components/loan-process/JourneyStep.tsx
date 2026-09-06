import React from "react";
import { FileEdit, Compass, CheckCircle2, Coins } from "lucide-react";
import { JourneyStep as StepType } from "@/data/loanData";

interface JourneyStepProps {
  step: StepType;
  isLast: boolean;
  aosAnimation: string;
}

export default function JourneyStep({ step, isLast, aosAnimation }: JourneyStepProps) {
  const getIcon = () => {
    switch (step.iconName) {
      case "FileEdit":
        return <FileEdit className="w-7 h-7 text-brand-blue" />;
      case "Compass":
        return <Compass className="w-7 h-7 text-emerald-600" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-7 h-7 text-amber-500" />;
      case "Coins":
        return <Coins className="w-7 h-7 text-brand-blue" />;
      default:
        return <FileEdit className="w-7 h-7 text-brand-blue" />;
    }
  };

  return (
    <div
      data-aos={aosAnimation}
      className="relative flex flex-col items-center text-center group max-w-xs mx-auto lg:max-w-none"
    >
      {/* Step Icon Badge */}
      <div className="relative mb-5">
        <div className="w-20 h-20 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center group-hover:border-brand-blue group-hover:scale-105 transition-all duration-300 relative z-10">
          {getIcon()}
        </div>

        {/* Step Number Badge */}
        <span className="absolute -top-2 -right-2 bg-brand-navy text-white text-xs font-extrabold px-2.5 py-1 rounded-full border-2 border-white shadow-sm z-20">
          {step.stepNumber}
        </span>
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
        {step.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed px-2">
        {step.description}
      </p>

      {/* Dotted Connector Line (Desktop Only) */}
      {!isLast && (
        <div className="hidden lg:block absolute top-10 left-[60%] right-[-40%] h-[2px] border-b-2 border-dashed border-slate-300 -z-0"></div>
      )}
    </div>
  );
}
