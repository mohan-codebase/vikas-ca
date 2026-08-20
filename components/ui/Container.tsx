import React from "react";
import clsx from "clsx";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide" | "full";
}

export function Container({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        "mx-auto w-full",
        {
          "max-w-[1360px] px-5 sm:px-8 md:px-12 lg:px-16": size === "default",
          "max-w-[1080px] px-5 sm:px-8 md:px-10": size === "narrow",
          "max-w-[1520px] px-5 sm:px-8 md:px-12 lg:px-16": size === "wide",
          "max-w-full px-5 sm:px-8 md:px-12": size === "full",
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
