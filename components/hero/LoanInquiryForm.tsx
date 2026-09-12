"use client";

import React, { useState } from "react";
import { User, Phone, Mail, CheckSquare, IndianRupee, CheckCircle2, ShieldCheck, MessageSquare } from "lucide-react";

interface LoanInquiryFormProps {
  initialLoanType?: string;
}

export default function LoanInquiryForm({
  initialLoanType = "Personal Loan",
}: LoanInquiryFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loanType, setLoanType] = useState(initialLoanType);
  const [loanAmount, setLoanAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const targetWhatsappNumber = "919566037333";
  const supportEmail = "LoanEasyIndia@gmail.com";

  const triggerWhatsappInquiry = (submittedName: string, submittedPhone: string, submittedEmail: string, type: string, amount: string) => {
    const text = `*New Loan Inquiry - LoanEasyIndia*\n\n👤 *Name:* ${submittedName}\n📱 *Mobile:* +91 ${submittedPhone}\n📧 *Email:* ${submittedEmail || "Not provided"}\n💼 *Loan Type:* ${type}\n💰 *Required Amount:* ₹${amount || "Not specified"}\n\nHi LoanEasyIndia team, please contact me regarding suitable loan options.`;
    const url = `https://wa.me/${targetWhatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const triggerEmailInquiry = (submittedName: string, submittedPhone: string, submittedEmail: string, type: string, amount: string) => {
    const subject = encodeURIComponent(`Loan Inquiry: ${type} - ${submittedName}`);
    const body = encodeURIComponent(`Name: ${submittedName}\nMobile: +91 ${submittedPhone}\nEmail: ${submittedEmail}\nLoan Type: ${type}\nRequired Amount: ₹${amount}`);
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // Dispatch via WhatsApp to +91 9566037333
      triggerWhatsappInquiry(name, phone, email, loanType, loanAmount);
    }, 400);
  };

  return (
    <div className="w-full bg-white rounded-3xl shadow-xl border border-slate-200/90 p-6 sm:p-8 relative overflow-hidden">
      {submitted ? (
        <div className="py-6 px-2 text-center space-y-4 animate-fadeIn">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <h3 className="text-xl font-extrabold text-brand-navy">Inquiry Sent to Advisor!</h3>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
            Thank you, <span className="font-bold text-brand-blue">{name}</span>. Your loan request has been sent to our loan desk (+91 9566037333 & LoanEasyIndia@gmail.com).
          </p>
          <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 text-xs text-brand-navy flex items-center justify-center gap-2">
            <MessageSquare className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>WhatsApp & Email Notification Dispatched</span>
          </div>
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              onClick={() => triggerWhatsappInquiry(name, phone, email, loanType, loanAmount)}
              className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Chat WhatsApp</span>
            </button>
            <button
              onClick={() => triggerEmailInquiry(name, phone, email, loanType, loanAmount)}
              className="flex-1 py-2.5 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl shadow-xs transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Send Email</span>
            </button>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setName("");
              setPhone("");
              setEmail("");
              setLoanAmount("");
            }}
            className="text-xs font-semibold text-slate-500 hover:text-slate-800 py-1 block mx-auto"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <div>
          {/* Card Title & Blue Accent Bar */}
          <div className="mb-6">
            <h3 className="text-2xl font-extrabold text-brand-navy tracking-tight">
              Tell Us What You Need
            </h3>
            <div className="w-12 h-1 bg-brand-blue rounded-full mt-2"></div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. Your Name */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                type="text"
                required
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-slate-200 bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 text-slate-800"
              />
            </div>

            {/* 2. Mobile Number */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Phone className="w-4 h-4" />
              </div>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/[^0-9]/g, ""))}
                className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-slate-200 bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 text-slate-800"
              />
            </div>

            {/* 3. Email Address */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
                <Mail className="w-4 h-4" />
              </div>
              <input
                type="email"
                required
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-11 pr-4 py-3.5 text-sm rounded-xl border border-slate-200 bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 text-slate-800"
              />
            </div>

            {/* 4. Loan Type & Required Amount */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <select
                  value={loanType}
                  onChange={(e) => setLoanType(e.target.value)}
                  className="w-full pl-9 pr-8 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all text-slate-800 font-semibold appearance-none cursor-pointer"
                >
                  <option value="Personal Loan">Personal Loan</option>
                  <option value="Car Loan">Car Loan</option>
                  <option value="Business Loan">Business Loan</option>
                  <option value="Balance Transfer">Balance Transfer</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400 text-xs">
                  ▼
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Loan Amount"
                  value={loanAmount}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    if (!val) setLoanAmount("");
                    else setLoanAmount(parseInt(val, 10).toLocaleString("en-IN"));
                  }}
                  className="w-full pl-9 pr-3.5 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/40 focus:bg-white focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all placeholder:text-slate-400 text-slate-800"
                />
              </div>
            </div>

            {/* Micro note */}
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <span>Direct WhatsApp (+91 9566037333) & Email dispatch.</span>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-brand-blue hover:bg-blue-800 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all duration-200 mt-2 active:scale-98"
            >
              {loading ? "Processing Inquiry..." : "Check My Loan Options"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
