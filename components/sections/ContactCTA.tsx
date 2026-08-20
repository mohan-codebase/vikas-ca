"use client";

import React, { useState } from "react";
import { ArrowRight, Send, CheckCircle2, Phone, Mail, MapPin } from "lucide-react";
import { locationsData } from "@/data/locationsData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  const [selectedOffice, setSelectedOffice] = useState("sydney");
  const [selectedService, setSelectedService] = useState("advisory");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  const activeOffice = locationsData.find((l) => l.id === selectedOffice) || locationsData[0];

  return (
    <section id="contact" className="bg-[#0b1524] text-white py-24 lg:py-36 relative overflow-hidden border-b border-stone-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0056b3]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00a3e0]/10 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Typography & National Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#00a3e0] flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#00a3e0]" />
                Get in Touch
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight-title text-white leading-[1.05]">
                Let&apos;s talk about <br />
                <span className="text-[#00a3e0]">what&apos;s next.</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-xl">
                Whether you are exploring a major transaction, navigating tax legislation, or seeking trusted business advisory, our partner-led teams are ready to assist.
              </p>
            </div>

            {/* Direct office quick details card */}
            <div className="p-6 bg-stone-900/90 border border-stone-800 rounded-xs space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-400 border-b border-stone-800 pb-3">
                <span className="uppercase tracking-wider font-semibold">Direct Office Connection</span>
                <span className="text-[#00a3e0] font-mono">10 AU/NZ FIRMS</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 block mb-1">Selected Location</span>
                  <span className="text-sm font-bold text-white block">Vikas CA {activeOffice.name}</span>
                  <span className="text-stone-400 mt-0.5 block">{activeOffice.address}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Direct Contact</span>
                  <a
                    href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-bold text-[#00a3e0] hover:underline block"
                  >
                    {activeOffice.phone}
                  </a>
                  <a
                    href={`mailto:${activeOffice.email}`}
                    className="text-stone-300 hover:text-white mt-0.5 block underline"
                  >
                    {activeOffice.email}
                  </a>
                </div>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="flex items-center gap-6 text-xs text-stone-400 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00a3e0]" />
                <span>National: 1300 452 287</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00a3e0]" />
                <span>info@vikasca.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Advisory Inquiry Form */}
          <div className="lg:col-span-6 bg-white text-[#0b1524] p-8 sm:p-10 rounded-xs shadow-2xl border border-stone-200">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1524]">Thank you for reaching out</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Your message has been routed to the Managing Partner of our <strong>Vikas CA {activeOffice.name}</strong> office. An advisory director will contact you within 1 business day.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail("");
                    setFullName("");
                  }}
                  className="text-xs font-semibold text-[#0056b3] uppercase tracking-wider underline hover:text-[#0b1524] pt-4 cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#0b1524]">Connect with an Vikas CA Partner</h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Select your nearest office and service of interest for direct partner routing.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Nearest Office
                    </label>
                    <select
                      value={selectedOffice}
                      onChange={(e) => setSelectedOffice(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:ring-2 focus:ring-[#0056b3] focus:outline-none"
                    >
                      {locationsData.map((loc) => (
                        <option key={loc.id} value={loc.id}>
                          {loc.name} ({loc.state})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Service Line
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:ring-2 focus:ring-[#0056b3] focus:outline-none"
                    >
                      <option value="advisory">Advisory & Restructuring</option>
                      <option value="audit">Audit & Assurance</option>
                      <option value="business">Business Services & Outsourcing</option>
                      <option value="tax">Tax Consulting & Compliance</option>
                      <option value="wealth">Wealth Management & SMSF</option>
                      <option value="general">General Commercial Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Eleanor Vance"
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:ring-2 focus:ring-[#0056b3] focus:outline-none placeholder-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Business Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="eleanor@company.com.au"
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:ring-2 focus:ring-[#0056b3] focus:outline-none placeholder-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    How Can We Assist? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives or challenges..."
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xs focus:ring-2 focus:ring-[#0056b3] focus:outline-none placeholder-stone-400"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="primary-blue"
                    size="lg"
                    className="w-full justify-center"
                    iconRight={<Send className="w-4 h-4" />}
                  >
                    Submit Advisory Request
                  </Button>
                </div>

                <div className="text-[11px] text-stone-500 text-center leading-relaxed">
                  By submitting, you agree to our privacy policy. Your information is strictly confidential.
                </div>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
