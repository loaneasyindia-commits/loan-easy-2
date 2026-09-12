"use client";

import React, { useState } from "react";
import { X, PhoneCall, CheckCircle2, ShieldCheck, Clock, Mail } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    loanType: "Personal Loan",
    timeSlot: "Morning (9 AM - 12 PM)",
  });

  if (!isOpen) return null;

  const targetWhatsappNumber = "919566037333";
  const supportEmail = "LoanEasyIndia@gmail.com";

  const triggerWhatsappInquiry = () => {
    const text = `*Callback Request - LoanEasyIndia*\n\n👤 *Name:* ${formData.name}\n📱 *Mobile:* +91 ${formData.phone}\n📧 *Email:* ${formData.email || "Not provided"}\n💼 *Loan Type:* ${formData.loanType}\n⏰ *Preferred Time:* ${formData.timeSlot}\n\nHi LoanEasyIndia team, please call me back to discuss loan options.`;
    const url = `https://wa.me/${targetWhatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const triggerEmailInquiry = () => {
    const subject = encodeURIComponent(`Callback Request: ${formData.loanType} - ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nMobile: +91 ${formData.phone}\nEmail: ${formData.email}\nLoan Type: ${formData.loanType}\nPreferred Time: ${formData.timeSlot}`);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      triggerWhatsappInquiry();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4 animate-fadeIn">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-extrabold text-brand-navy">Callback Requested!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-brand-blue">{formData.name}</span>. Our loan specialist will reach out on{" "}
              <span className="font-bold text-slate-900">+91 {formData.phone}</span> ({formData.timeSlot}).
            </p>
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-xs text-slate-600 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Forwarded to WhatsApp (+91 9566037333) & Email.</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 pt-2">
              <button
                onClick={triggerWhatsappInquiry}
                className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Chat on WhatsApp
              </button>
              <button
                onClick={triggerEmailInquiry}
                className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Send via Email
              </button>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="text-xs font-semibold text-slate-500 hover:text-slate-800 pt-2 block mx-auto"
            >
              Close Window
            </button>
          </div>
        ) : (
          <div>
            {/* Header (Exact Match to Uploaded Image media_1788676940790.png) */}
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0">
                <PhoneCall className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-brand-navy leading-tight">
                  Talk to Our Loan Specialist
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Free, non-binding assistance across all major banks
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* 1. Your Full Name * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rajesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* 2. Mobile Number * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number *
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-sm font-semibold text-slate-500">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    maxLength={10}
                    placeholder="9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/[^0-9]/g, "") })}
                    className="w-full pl-14 pr-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 font-semibold"
                  />
                </div>
              </div>

              {/* 3. Email Address * */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rajesh@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400"
                />
              </div>

              {/* 4. Loan Type & Preferred Time (2 Columns) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Loan Type
                  </label>
                  <select
                    value={formData.loanType}
                    onChange={(e) => setFormData({ ...formData, loanType: e.target.value })}
                    className="w-full px-3.5 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white font-medium"
                  >
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Balance Transfer">Balance Transfer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full px-3.5 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all bg-white font-medium"
                  >
                    <option value="Morning (9 AM - 12 PM)">Morning (9 AM - 12 PM)</option>
                    <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                    <option value="Evening (4 PM - 7 PM)">Evening (4 PM - 7 PM)</option>
                    <option value="As Soon As Possible">As Soon As Possible</option>
                  </select>
                </div>
              </div>

              {/* Business Hours Note (Exact match to reference image) */}
              <div className="flex items-center gap-2 pt-1 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Our advisors respond within 30 minutes during business hours.</span>
              </div>

              {/* Submit Button (Exact match to reference image) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-brand-blue hover:bg-blue-800 text-white font-extrabold text-base rounded-xl shadow-md transition-all mt-2 active:scale-98"
              >
                {loading ? "Submitting Request..." : "Request Free Callback"}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
