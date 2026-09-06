"use client";

import React, { useState } from "react";

interface BrandLogoProps {
  className?: string;
  variant?: "full" | "badge";
}

export default function BrandLogo({ className = "h-10 sm:h-12 md:h-14 w-auto", variant = "full" }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  // If loan.png renders, use /loan.png directly!
  if (!imgError) {
    return (
      <img
        src="/loan.png"
        alt="LoanEasyIndia.com - Making Loans Simple"
        className={`${className} object-contain`}
        onError={() => setImgError(true)}
      />
    );
  }

  // Fallback inline SVG vector logo
  const renderEmblem = () => (
    <g transform="translate(10, 5)">
      <path d="M 100 22 A 75 75 0 0 0 28 95" fill="none" stroke="#DC2626" strokeWidth="7" strokeLinecap="round" />
      <path d="M 105 22 A 75 75 0 0 1 172 95" fill="none" stroke="#159447" strokeWidth="7" strokeLinecap="round" />
      <path d="M 172 105 A 75 75 0 0 1 105 178" fill="none" stroke="#EAB308" strokeWidth="7" strokeLinecap="round" />
      <path d="M 28 105 A 75 75 0 0 0 95 178" fill="none" stroke="#0B4FA2" strokeWidth="7" strokeLinecap="round" />

      <text x="96" y="18" fill="#159447" fontSize="18" fontWeight="bold" fontFamily="sans-serif">₹</text>
      <text x="178" y="105" fill="#EAB308" fontSize="18" fontWeight="bold" fontFamily="sans-serif">₹</text>
      <text x="96" y="194" fill="#0B4FA2" fontSize="18" fontWeight="bold" fontFamily="sans-serif">₹</text>
      <text x="10" y="105" fill="#DC2626" fontSize="18" fontWeight="bold" fontFamily="sans-serif">₹</text>

      <g transform="translate(42, 45)">
        <g transform="rotate(-30 40 45)">
          <rect x="0" y="0" width="75" height="40" rx="3" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.2" />
        </g>
        <g transform="rotate(-10 40 45)">
          <rect x="0" y="0" width="75" height="40" rx="3" fill="#F0FDF4" stroke="#16A34A" strokeWidth="1.2" />
        </g>
        <g transform="rotate(10 40 45)">
          <rect x="0" y="0" width="75" height="40" rx="3" fill="#FEFCE8" stroke="#159447" strokeWidth="1.5" />
          <text x="32" y="26" fill="#159447" fontSize="13" fontWeight="bold" fontFamily="sans-serif">₹500</text>
        </g>
      </g>

      <g transform="translate(42, 90)">
        <rect x="0" y="0" width="116" height="72" rx="14" fill="#0B4FA2" stroke="#0B3C7A" strokeWidth="2" />
        <text x="28" y="50" fill="#F59E0B" fontSize="40" fontWeight="900" fontFamily="sans-serif">₹</text>
      </g>
    </g>
  );

  return (
    <svg className={className} viewBox="0 10 650 185" fill="none" xmlns="http://www.w3.org/2000/svg">
      {renderEmblem()}
      <g transform="translate(225, 76)">
        <text fontSize="54" fontWeight="900" fontFamily="system-ui, sans-serif">
          <tspan fill="#DC2626">Loan</tspan>
          <tspan fill="#159447">Easy</tspan>
          <tspan fill="#0B4FA2">India</tspan>
          <tspan fill="#102A56" fontSize="40">.com</tspan>
        </text>
      </g>
    </svg>
  );
}
