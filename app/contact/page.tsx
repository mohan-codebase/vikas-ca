import type { Metadata } from "next";
import { Header } from "@/components/navigation/Header";
import { ContactView } from "@/components/sections/ContactView";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";

export const metadata: Metadata = {
  title: "Contact NICS | Talk to Our Practice Advisory Team",
  description:
    "Get in touch with NICS in Sydney, Chennai, and USA. Request a practice consultation for offshore accounting, SMSF, paraplanning, and back-office delivery support.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Header />
      <main>
        <ContactView />
      </main>
      <Footer />
      <FloatingActions />
      <PremiumCursor />
    </div>
  );
}

