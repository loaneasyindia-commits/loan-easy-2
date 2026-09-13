"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar/Navbar";
import LoanProducts from "@/components/loan-products/LoanProducts";
import DocumentsRequired from "@/components/documents/DocumentsRequired";
import BankPartners from "@/components/bank-partners/BankPartners";
import CTASection from "@/components/cta/CTASection";
import Footer from "@/components/footer/Footer";
import EMIModal from "@/components/common/EMIModal";
import InquiryModal from "@/components/common/InquiryModal";

export default function LoansPage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [emiModalOpen, setEmiModalOpen] = useState(false);
  const [selectedLoanForEMI, setSelectedLoanForEMI] = useState("Personal Loan");

  const handleOpenEMIModal = (loanType: string = "Personal Loan") => {
    setSelectedLoanForEMI(loanType);
    setEmiModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      <Navbar onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-blue-50/60 to-white py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-blue-100/70 text-brand-blue text-xs font-bold uppercase tracking-wider">
            Loan Solutions
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy">
            Our Loan Products
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Compare and choose from Personal, Car, Business, Home, Plot Loans, LAP & Balance Transfers.
          </p>
        </div>
      </section>

      {/* Loan Products */}
      <LoanProducts onOpenEMIModal={handleOpenEMIModal} />

      {/* Documents Required */}
      <DocumentsRequired />

      {/* Bank Partners Comparison */}
      <BankPartners />

      {/* CTA Banner */}
      <CTASection onOpenConsultation={() => setConsultationOpen(true)} />

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <InquiryModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
      />

      <EMIModal
        isOpen={emiModalOpen}
        onClose={() => setEmiModalOpen(false)}
        initialLoanType={selectedLoanForEMI}
      />
    </main>
  );
}
