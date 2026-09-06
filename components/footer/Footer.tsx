"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const [modalType, setModalType] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Section */}
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {/* Perfectly Aligned loan.png logo in footer */}
              <div className="bg-white px-3 py-2 rounded-2xl shadow-md inline-block">
                <img
                  src="/loan.png"
                  alt="LoanEasyIndia.com Logo"
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              LoanEasyIndia is a customer-centric loan assistance platform dedicated to helping individuals and businesses explore, compare, and secure suitable loan options from India’s leading banks.
            </p>

            <div className="pt-2 flex items-center gap-3 text-xs text-slate-400">
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-medium text-slate-300">
                🇮🇳 Serving Pan India
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 font-medium text-slate-300">
                🔒 256-Bit SSL Encrypted
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "Home", href: "#home" },
                { name: "Loans", href: "#loans" },
                { name: "How It Works", href: "#how-it-works" },
                { name: "Why Choose Us", href: "#why-us" },
                { name: "About Us", href: "#about" },
                { name: "FAQs", href: "#faqs" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-blue-400 transition-colors inline-block py-1"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Loan Products</h4>
            <ul className="space-y-2 text-xs font-medium">
              {[
                { name: "Personal Loan", href: "#loans" },
                { name: "Car Loan", href: "#loans" },
                { name: "Business Loan", href: "#loans" },
                { name: "Balance Transfer", href: "#loans" },
              ].map((prod) => (
                <li key={prod.name}>
                  <a
                    href={prod.href}
                    className="hover:text-blue-400 transition-colors inline-block py-1"
                  >
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Legal Column */}
          <div className="space-y-3">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider">Contact & Legal</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200">+91 7200117106 / 1800 266 8989</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-slate-200">support@loaneasyindia.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Financial District, BKC, Mumbai - 400051, Maharashtra, India</span>
              </li>
            </ul>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] text-slate-400">
              <button
                onClick={() => setModalType("privacy")}
                className="hover:text-blue-400 underline cursor-pointer"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType("terms")}
                className="hover:text-blue-400 underline cursor-pointer"
              >
                Terms & Conditions
              </button>
              <span>•</span>
              <button
                onClick={() => setModalType("disclaimer")}
                className="hover:text-blue-400 underline cursor-pointer"
              >
                Disclaimer
              </button>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div data-aos="fade-up" className="my-8 p-4 bg-slate-955/60 rounded-2xl border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
          <p className="font-semibold text-slate-300 mb-1">Disclaimer:</p>
          <p>
            LoanEasyIndia is a loan assistance / loan facilitation platform. Loan approval, interest rates, processing fees and disbursement are subject to the respective lender's terms, eligibility criteria and policies. LoanEasyIndia is not an RBI-registered bank or NBFC directly extending credit; we act as an independent referral and facilitation advisor to connect borrowers with authorized Indian banking partners.
          </p>
        </div>

        {/* Bottom Rights & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-slate-500">
          <p>© 2026 LoanEasyIndia. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

      {/* Modal for Privacy / Terms / Disclaimer */}
      {modalType && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white text-slate-800 rounded-2xl p-6 max-w-lg w-full max-h-[85vh] overflow-y-auto space-y-4 relative">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 font-bold"
            >
              ✕
            </button>
            
            {modalType === "privacy" && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Privacy Policy</h3>
                <p className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  LoanEasyIndia is committed to protecting your privacy. We collect minimal customer details solely for evaluating loan eligibility with partner financial institutions. Your data is encrypted and never sold to third-party telemarketers.
                </p>
              </div>
            )}
            
            {modalType === "terms" && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Terms & Conditions</h3>
                <p className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  By using LoanEasyIndia, you authorize our financial representatives to contact you via Phone, SMS, or WhatsApp regarding your loan inquiry. Facilitation services are provided free of upfront fees to borrowers.
                </p>
              </div>
            )}

            {modalType === "disclaimer" && (
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-2">Full Disclaimer</h3>
                <p className="text-xs text-slate-600 space-y-2 leading-relaxed">
                  Loan approval, sanctioned amount, ROI, and tenure are strictly determined by respective lending banks/NBFCs based on applicant CIBIL score, income proof, and risk assessment policies.
                </p>
              </div>
            )}

            <button
              onClick={() => setModalType(null)}
              className="w-full py-2 bg-brand-blue text-white font-bold text-xs rounded-xl"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
