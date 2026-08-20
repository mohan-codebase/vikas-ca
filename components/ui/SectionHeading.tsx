import React from "react";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "split";
  dark?: boolean;
  className?: string;
  action?: React.ReactNode;
  titleAs?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  dark = false,
  className,
  action,
  titleAs = "h2",
}: SectionHeadingProps) {
  const HeadingTag = titleAs;

  if (align === "split") {
    return (
      <div className={clsx("mb-10 sm:mb-14 lg:mb-16", className)}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            {eyebrow && (
              <div
                className={clsx(
                  "text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-3 sm:mb-4 flex items-center gap-2",
                  dark ? "text-[#00a3e0]" : "text-[#0056b3]"
                )}
              >
                <span className={clsx("inline-block w-2 h-0.5", dark ? "bg-[#00a3e0]" : "bg-[#0056b3]")} />
                {eyebrow}
              </div>
            )}
            <HeadingTag
              className={clsx(
                "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]",
                dark ? "text-white" : "text-[#0b1524]"
              )}
            >
              {title}
            </HeadingTag>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-end">
            {description && (
              <p
                className={clsx(
                  "text-base sm:text-lg leading-relaxed mb-4",
                  dark ? "text-stone-300" : "text-stone-600"
                )}
              >
                {description}
              </p>
            )}
            {action && <div className="mt-2">{action}</div>}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "mb-10 sm:mb-14 lg:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            "text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase mb-3 sm:mb-4 inline-flex items-center gap-2",
            align === "center" && "justify-center",
            dark ? "text-[#00a3e0]" : "text-[#0056b3]"
          )}
        >
          <span className={clsx("inline-block w-2 h-0.5", dark ? "bg-[#00a3e0]" : "bg-[#0056b3]")} />
          {eyebrow}
        </div>
      )}
      <HeadingTag
        className={clsx(
          "text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.12]",
          dark ? "text-white" : "text-[#0b1524]"
        )}
      >
        {title}
      </HeadingTag>
      {description && (
        <p
          className={clsx(
            "mt-4 sm:mt-5 text-base sm:text-lg lg:text-xl leading-relaxed",
            dark ? "text-stone-300" : "text-stone-600"
          )}
        >
          {description}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
