"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/61406727061?text=Hi%20NICS%2C%20I%27d%20like%20to%20discuss%20offshore%20delivery%20support.";

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setShowBackToTop(window.scrollY > 500);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            title="Back to top"
            onClick={scrollToTop}
            className="flex size-12 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0b1524] shadow-lg transition-colors hover:border-[#0056b3] hover:bg-[#0056b3] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0056b3]"
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.94 }}
          >
            <ArrowUp className="size-5" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with NICS on WhatsApp"
        title="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-700/25 transition-colors hover:bg-[#1fb85a] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.94 }}
      >
        <svg
          viewBox="0 0 32 32"
          className="size-7 fill-current"
          aria-hidden="true"
        >
          <path d="M16.004 3C8.834 3 3 8.83 3 16c0 2.31.605 4.566 1.755 6.548L3 29l6.625-1.72A12.94 12.94 0 0 0 16.004 29C23.174 29 29 23.17 29 16S23.174 3 16.004 3Zm0 23.83a10.75 10.75 0 0 1-5.486-1.505l-.394-.233-3.93 1.02 1.05-3.825-.256-.396A10.72 10.72 0 1 1 16.004 26.83Zm5.894-8.05c-.322-.162-1.906-.94-2.202-1.046-.296-.108-.512-.162-.728.162-.216.323-.836 1.046-1.025 1.26-.188.216-.377.243-.7.08-1.91-.955-3.165-1.705-4.425-3.866-.335-.577.335-.536.96-1.787.108-.216.054-.404-.027-.566-.08-.162-.728-1.75-.997-2.396-.262-.63-.53-.543-.728-.553l-.62-.012c-.216 0-.566.08-.862.404-.296.323-1.132 1.104-1.132 2.694s1.158 3.127 1.32 3.343c.162.216 2.28 3.48 5.52 4.883.77.332 1.37.53 1.84.678.773.246 1.477.212 2.033.129.62-.092 1.906-.78 2.175-1.535.27-.755.27-1.402.188-1.535-.08-.135-.296-.216-.62-.377Z" />
        </svg>
      </motion.a>
    </div>
  );
}
