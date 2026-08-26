import React from "react";
import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  className?: string;
  priority?: boolean;
  alt?: string;
  /** Rendered width hint — the lockup never displays wider than ~220px. */
  sizes?: string;
}

/**
 * Primary brand lockup. Source asset is 2400×685 (≈3.5:1) with a transparent
 * background — size it by height and let the width follow.
 */
export function Logo({
  className,
  priority = false,
  alt = "NICS",
  sizes = "220px",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt={alt}
      width={2400}
      height={685}
      priority={priority}
      sizes={sizes}
      className={clsx("w-auto object-contain select-none", className)}
    />
  );
}
