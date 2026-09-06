import React from "react";
import SectionHeader from "@/components/common/SectionHeader";
import LoanCard from "./LoanCard";
import { LOAN_PRODUCTS } from "@/data/loanData";

interface LoanProductsProps {
  onOpenEMIModal: (loanType: string) => void;
}

export default function LoanProducts({ onOpenEMIModal }: LoanProductsProps) {
  return (
    <section id="loans" className="py-16 md:py-24 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeader
          badge="Tailored Offerings"
          title="Find the Right Loan for You"
          subtitle="Explore loan options designed around your financial needs with flexible terms & personal support."
        />

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 sm:mt-16">
          {LOAN_PRODUCTS.map((product, idx) => (
            <LoanCard
              key={product.id}
              product={product}
              delayIndex={idx}
              onOpenEMIModal={onOpenEMIModal}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
