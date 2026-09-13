"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, PhoneCall, ChevronRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loansDropdownOpen, setLoansDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setLoansDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const loanCategories = [
    { name: "Personal Loan", href: "/loans#personal-loan", badge: "Red", color: "bg-red-500" },
    { name: "Car Loan", href: "/loans#car-loan", badge: "Green", color: "bg-emerald-500" },
    { name: "Business Loan", href: "/loans#business-loan", badge: "Yellow", color: "bg-amber-500" },
    { name: "Home Loan", href: "/loans#home-loan", badge: "Indigo", color: "bg-indigo-500" },
    { name: "Plot Loan", href: "/loans#plot-loan", badge: "Teal", color: "bg-teal-500" },
    { name: "LAP - Loan Against Property", href: "/loans#lap-loan", badge: "Purple", color: "bg-purple-500" },
    { name: "Balance Transfer", href: "/loans#balance-transfer", badge: "Blue", color: "bg-brand-blue" },
  ];

  const handleScrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setLoansDropdownOpen(false);
    if (pathname === "/") {
      const elem = document.getElementById(sectionId);
      if (elem) {
        const navHeight = 80;
        const elementPosition = elem.getBoundingClientRect().top + window.pageYOffset;
        window.scrollTo({
          top: elementPosition - navHeight,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-md shadow-md py-2.5 border-b border-slate-100"
          : "bg-white/95 backdrop-blur-xs py-3.5 border-b border-slate-100/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Perfectly Aligned loan.png Brand Logo Header */}
        <Link
          href="/"
          className="flex items-center group focus:outline-none py-0.5"
          aria-label="LoanEasyIndia.com - Making Loans Simple Home"
        >
          <img
            src="/loan.png"
            alt="LoanEasyIndia.com - Making Loans Simple"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-102"
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-3">
          <Link
            href="/"
            onClick={() => handleScrollToSection("home")}
            className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
              pathname === "/" ? "text-brand-blue bg-blue-50/80 font-bold" : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
            }`}
          >
            Home
          </Link>

          {/* Loans Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLoansDropdownOpen(!loansDropdownOpen)}
              onMouseEnter={() => setLoansDropdownOpen(true)}
              className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                pathname.startsWith("/loans") ? "text-brand-blue bg-blue-50/80 font-bold" : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
              }`}
            >
              <span>Loans</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${loansDropdownOpen ? "transform rotate-180 text-brand-blue" : "text-slate-400"}`} />
            </button>

            {/* Dropdown Menu */}
            {loansDropdownOpen && (
              <div
                onMouseLeave={() => setLoansDropdownOpen(false)}
                className="absolute top-full left-0 mt-1.5 w-60 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 space-y-1 animate-fadeIn z-50"
              >
                <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                  Loan Products
                </div>
                {loanCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    onClick={() => {
                      setLoansDropdownOpen(false);
                      handleScrollToSection("loans");
                    }}
                    className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-brand-blue transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
                      <span>{cat.name}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
                <div className="pt-1 border-t border-slate-100">
                  <Link
                    href="/loans"
                    onClick={() => setLoansDropdownOpen(false)}
                    className="block text-center py-2 text-[11px] font-bold text-brand-blue hover:bg-slate-50 rounded-lg"
                  >
                    View All Loan Categories →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/how-it-works"
            onClick={() => handleScrollToSection("how-it-works")}
            className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
              pathname === "/how-it-works" ? "text-brand-blue bg-blue-50/80 font-bold" : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
            }`}
          >
            How It Works
          </Link>

          <Link
            href="/about"
            onClick={() => handleScrollToSection("about")}
            className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
              pathname === "/about" ? "text-brand-blue bg-blue-50/80 font-bold" : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
            }`}
          >
            About Us
          </Link>

          <Link
            href="/contact"
            onClick={() => handleScrollToSection("contact")}
            className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
              pathname === "/contact" ? "text-brand-blue bg-blue-50/80 font-bold" : "text-slate-700 hover:text-brand-blue hover:bg-slate-50"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-brand-navy hover:text-brand-blue bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-brand-blue" />
              <span>Talk to Us</span>
            </button>
          )}
          <a
            href="#loan-inquiry"
            onClick={() => handleScrollToSection("loan-inquiry")}
            className="inline-flex items-center justify-center px-4 py-2.5 bg-brand-blue hover:bg-blue-800 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Check Loan Options
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-700 hover:text-brand-blue hover:bg-slate-100 focus:outline-none transition-colors"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Animated Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl animate-fadeIn">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <Link
              href="/"
              onClick={() => handleScrollToSection("home")}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              Home
            </Link>

            <div className="px-4 py-2 bg-slate-50 rounded-xl space-y-2">
              <span className="text-xs font-extrabold uppercase text-slate-400 block">Loans</span>
              {loanCategories.map((cat) => (
                <Link
                  key={cat.name}
                  href={cat.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleScrollToSection("loans");
                  }}
                  className="flex items-center justify-between text-sm font-bold text-slate-700 py-1.5 hover:text-brand-blue"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${cat.color}`}></span>
                    <span>{cat.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>
              ))}
            </div>

            <Link
              href="/how-it-works"
              onClick={() => handleScrollToSection("how-it-works")}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              How It Works
            </Link>

            <Link
              href="/about"
              onClick={() => handleScrollToSection("about")}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              onClick={() => handleScrollToSection("contact")}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-800 hover:bg-blue-50 hover:text-brand-blue"
            >
              Contact Us
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              {onOpenConsultation && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 bg-slate-100 text-brand-navy font-bold text-sm rounded-xl flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-brand-blue" />
                  <span>Talk to Us (+91 9566037333)</span>
                </button>
              )}
              <a
                href="#loan-inquiry"
                onClick={() => handleScrollToSection("loan-inquiry")}
                className="w-full py-3 px-4 bg-brand-blue text-white font-bold text-sm rounded-xl text-center shadow-md"
              >
                Check Loan Options
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
