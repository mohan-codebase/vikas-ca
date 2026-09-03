"use client";

import { useEffect, useRef } from "react";

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "select",
  "textarea",
  "[role='button']",
  "[role='link']",
].join(",");

export function PremiumCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    if (!finePointer.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    let frame: number | null = null;
    let x = -100;
    let y = -100;

    const render = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = null;
    };

    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.dataset.visible = "true";
      cursor.dataset.interactive = String(
        event.target instanceof Element && Boolean(event.target.closest(INTERACTIVE_SELECTOR)),
      );

      if (frame === null) frame = requestAnimationFrame(render);
    };

    const onPointerLeave = () => {
      cursor.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onPointerLeave);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("mouseleave", onPointerLeave);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="premium-cursor" aria-hidden="true" data-visible="false">
      <span className="premium-cursor__ring" />
      <span className="premium-cursor__dot" />
    </div>
  );
}
