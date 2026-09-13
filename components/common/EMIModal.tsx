"use client";

import React, { useState } from "react";
import { X, Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

interface EMIModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialLoanType?: string;
  onApplyWithDetails?: (details: { loanType: string; amount: number }) => void;
}

export default function EMIModal({
  isOpen,
  onClose,
  initialLoanType = "Personal Loan",
  onApplyWithDetails,
}: EMIModalProps) {
  const [loanType, setLoanType] = useState(initialLoanType);
  const [loanAmount, setLoanAmount] = useState<number>(500000); // 5 Lakhs
  const [tenureYears, setTenureYears] = useState<number>(3); // 3 Years
  const [interestRate, setInterestRate] = useState<number>(10.5); // 10.5% p.a.

  if (!isOpen) return null;

  // Calculate monthly EMI formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const principal = loanAmount;
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = tenureYears * 12;

  const emi =
    monthlyRate === 0
      ? principal / totalMonths
      : Math.round(
          (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        );

  const totalPayment = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayment - principal);

  const handleApply = () => {
    if (onApplyWithDetails) {
      onApplyWithDetails({ loanType, amount: loanAmount });
    }
    onClose();
    // Scroll to loan inquiry form on page
    const inquirySection = document.getElementById("loan-inquiry");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-brand-navy">Loan EMI Calculator</h3>
              <p className="text-xs text-slate-500">Calculate monthly repayment & interest estimation</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Select Loan Category */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
              Select Loan Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
              {[
                { name: "Personal Loan", rate: 10.5 },
                { name: "Car Loan", rate: 8.75 },
                { name: "Business Loan", rate: 13.5 },
                { name: "Home Loan", rate: 8.4 },
                { name: "Plot Loan", rate: 8.65 },
                { name: "LAP - Loan Against Property", rate: 9.25 },
                { name: "Balance Transfer", rate: 9.25 },
              ].map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    setLoanType(item.name);
                    setInterestRate(item.rate);
                  }}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                    loanType === item.name
                      ? "bg-brand-blue text-white border-brand-blue shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-4">
            {/* Loan Amount Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-700">Loan Amount</span>
                <span className="text-base font-bold text-brand-blue">
                  ₹{(loanAmount / 100000).toFixed(2)} Lakhs (₹{loanAmount.toLocaleString("en-IN")})
                </span>
              </div>
              <input
                type="range"
                min={50000}
                max={5000000}
                step={25000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>₹50,000</span>
                <span>₹50 Lakhs</span>
              </div>
            </div>

            {/* Tenure Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-700">Loan Tenure</span>
                <span className="text-base font-bold text-brand-blue">
                  {tenureYears} {tenureYears === 1 ? "Year" : "Years"} ({totalMonths} Months)
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>

            {/* Interest Rate Slider */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-semibold text-slate-700">Interest Rate (% p.a.)</span>
                <span className="text-base font-bold text-brand-blue">{interestRate}%</span>
              </div>
              <input
                type="range"
                min={7.5}
                max={18.0}
                step={0.25}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>7.5%</span>
                <span>18.0%</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="p-5 bg-slate-900 text-white rounded-xl space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-4 gap-2">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-400">Estimated Monthly EMI</span>
                <div className="text-3xl font-extrabold text-white mt-0.5">
                  ₹{emi.toLocaleString("en-IN")}<span className="text-sm font-normal text-slate-400">/mo</span>
                </div>
              </div>
              <div className="text-xs text-slate-400 sm:text-right">
                <div className="flex items-center gap-1.5 sm:justify-end text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Subject to Bank Evaluation
                </div>
                <span>Indicative calculation only</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-slate-400">Principal Amount</span>
                <p className="text-sm font-semibold text-slate-200 mt-0.5">
                  ₹{principal.toLocaleString("en-IN")}
                </p>
              </div>
              <div>
                <span className="text-slate-400">Total Interest Payable</span>
                <p className="text-sm font-semibold text-amber-400 mt-0.5">
                  ₹{totalInterest.toLocaleString("en-IN")}
                </p>
              </div>
              <div className="col-span-2 pt-2 border-t border-slate-800 flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Total Payable Amount</span>
                <span className="font-bold text-white">₹{totalPayment.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            *Final loan terms, EMI, and interest rates depend on lender policies & eligibility.
          </p>
          <button
            onClick={handleApply}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-blue hover:bg-blue-800 text-white text-sm font-bold rounded-xl shadow-md transition-all"
          >
            Apply With This Amount
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
