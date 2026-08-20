import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ArrowLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  variant?: "navy" | "blue" | "white" | "muted" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  underline?: boolean;
}

export function ArrowLink({
  href,
  children,
  variant = "navy",
  size = "md",
  className,
  underline = false,
  ...props
}: ArrowLinkProps) {
  const colorStyles = {
    navy: "text-[#0b1524] hover:text-[#0056b3] focus-visible:text-[#0056b3]",
    blue: "text-[#0056b3] hover:text-[#003d80] focus-visible:text-[#003d80]",
    white: "text-white hover:text-[#8bc7ff] focus-visible:text-[#8bc7ff]",
    muted: "text-stone-600 hover:text-[#0b1524] focus-visible:text-[#0b1524]",
    gold: "text-[#c89d5c] hover:text-[#e4be83] focus-visible:text-[#e4be83]",
  };

  const sizeStyles = {
    sm: "text-xs font-semibold tracking-wider uppercase gap-1.5",
    md: "text-sm sm:text-base font-semibold gap-2",
    lg: "text-base sm:text-lg font-semibold gap-2.5",
  };

  const iconSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <Link
      href={href}
      className={clsx(
        "group inline-flex items-center transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0056b3]/50 focus-visible:ring-offset-2 rounded-sm",
        colorStyles[variant],
        sizeStyles[size],
        underline && "underline underline-offset-4 decoration-current/40 hover:decoration-current",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <svg
        className={clsx(
          iconSizes[size],
          "transform transition-transform duration-200 ease-out group-hover:translate-x-1.5 flex-shrink-0"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
      </svg>
    </Link>
  );
}
