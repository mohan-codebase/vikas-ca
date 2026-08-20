import React from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonBaseProps {
  variant?: "primary" | "primary-blue" | "outline-white" | "outline-dark" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
}

export type ButtonProps = ButtonBaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
  );

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  iconRight,
  iconLeft,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none text-center cursor-pointer";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 gap-1.5 rounded-sm tracking-wide",
    md: "text-sm sm:text-base px-5 py-3 gap-2.5 rounded-sm tracking-normal",
    lg: "text-base sm:text-lg px-7 py-4 gap-3 rounded-sm tracking-normal",
  };

  const variantStyles = {
    primary:
      "bg-[#0b1524] text-white hover:bg-[#15243a] focus-visible:ring-[#0b1524] shadow-sm hover:shadow",
    "primary-blue":
      "bg-[#0056b3] text-white hover:bg-[#004494] focus-visible:ring-[#0056b3] shadow-sm hover:shadow",
    "outline-white":
      "border border-white/80 text-white hover:bg-white hover:text-[#0b1524] focus-visible:ring-white backdrop-blur-[2px]",
    "outline-dark":
      "border border-[#0b1524] text-[#0b1524] hover:bg-[#0b1524] hover:text-white focus-visible:ring-[#0b1524]",
    secondary:
      "bg-[#f4f3ef] text-[#0b1524] hover:bg-[#e7e5dc] border border-[#e7e5dc] focus-visible:ring-[#0b1524]",
    ghost:
      "text-[#0b1524] hover:bg-[#0b1524]/5 focus-visible:ring-[#0b1524]",
  };

  const combinedClasses = clsx(
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    className
  );

  if ("href" in props && typeof props.href === "string") {
    const { href, ...anchorProps } = props;
    return (
      <Link
        href={href}
        className={combinedClasses}
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
        <span>{children}</span>
        {iconRight && <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">{iconRight}</span>}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {iconLeft && <span className="flex-shrink-0">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1">{iconRight}</span>}
    </button>
  );
}
