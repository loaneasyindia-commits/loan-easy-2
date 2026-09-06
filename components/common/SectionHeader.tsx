import React from "react";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  titleColor?: string;
  badgeBg?: string;
  badgeTextColor?: string;
  className?: string;
}

export default function SectionHeader({
  badge,
  title,
  subtitle,
  align = "center",
  titleColor = "text-brand-navy",
  badgeBg = "bg-blue-50 border-blue-200",
  badgeTextColor = "text-brand-blue",
  className = "",
}: SectionHeaderProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col ${alignClasses} max-w-3xl ${align === "center" ? "mx-auto" : ""} ${className}`}>
      {badge && (
        <div
          data-aos="fade-down"
          className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border ${badgeBg} ${badgeTextColor} mb-3 shadow-xs`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse"></span>
          {badge}
        </div>
      )}
      <h2
        data-aos="fade-up"
        className={`text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight ${titleColor} leading-tight`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
