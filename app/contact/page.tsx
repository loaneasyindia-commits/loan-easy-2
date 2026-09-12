"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import LoanInquiryForm from "@/components/hero/LoanInquiryForm";
import FAQSection from "@/components/faq/FAQSection";
import Footer from "@/components/footer/Footer";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white pt-24">
      <Navbar />

      {/* Contact Banner */}
      <section className="bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50 py-12 sm:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-3 mb-12">
            <span className="px-3.5 py-1 rounded-full bg-blue-100/70 text-brand-blue text-xs font-bold uppercase tracking-wider">
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-navy">
              Contact LoanEasyIndia
            </h1>
            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
              Have questions about loan eligibility or process? Reach out to our financial desk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-brand-navy border-b border-slate-100 pb-3">
                  Direct Desk Details
                </h3>

                <div className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-brand-blue flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">WhatsApp & Phone Desk</span>
                      <a href="tel:+919566037333" className="font-bold text-slate-900 hover:text-brand-blue">
                        +91 9566037333
                      </a>
                      {/* <p className="text-xs text-slate-500 mt-0.5">Toll Free: 1800 266 8989</p> */}
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 flex-shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">Instant WhatsApp Inquiry</span>
                      <a
                        href="https://wa.me/919566037333?text=Hi%20LoanEasyIndia"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-emerald-600 hover:underline"
                      >
                        Chat with +91 9566037333 →
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">Email Support</span>
                      <a href="mailto:LoanEasyIndia@gmail.com" className="font-semibold text-slate-800 hover:text-brand-blue">
                        LoanEasyIndia@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-slate-400 block">Registered Office</span>
                      <p className="font-medium text-slate-800">
                        Financial District, Bandra-Kurla Complex (BKC), Mumbai - 400051, India
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <span>Mon - Sat: 9:30 AM to 6:30 PM IST</span>
                </div>
              </div>
            </div>

            {/* Right Contact Lead Form */}
            <div className="lg:col-span-7">
              <LoanInquiryForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />

      <Footer />
    </main>
  );
}
