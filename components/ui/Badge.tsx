import React from "react";
import clsx from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "blue" | "gold" | "stone" | "outline" | "white";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "stone",
  size = "sm",
  className,
}: BadgeProps) {
  const variantStyles = {
    navy: "bg-[#0b1524] text-white",
    blue: "bg-[#0056b3]/10 text-[#0056b3] border border-[#0056b3]/20",
    gold: "bg-[#c89d5c]/15 text-[#916524] border border-[#c89d5c]/30",
    stone: "bg-[#f4f3ef] text-[#2b2926] border border-[#e7e5dc]",
    outline: "bg-transparent text-stone-700 border border-stone-300",
    white: "bg-white/90 text-[#0b1524] backdrop-blur-sm border border-white/40 shadow-xs",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2.5 py-0.5 font-medium tracking-wide uppercase",
    md: "text-xs px-3 py-1 font-medium tracking-wider uppercase",
  };

  return (
    <span
      className={clsx(
        "inline-flex items-center justify-center rounded-xs transition-colors",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
