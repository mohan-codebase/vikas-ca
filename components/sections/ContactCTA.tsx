"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Phone, Mail } from "lucide-react";
import { locationsData } from "@/data/locationsData";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  const [selectedOffice, setSelectedOffice] = useState(locationsData[0].id);
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
    <section id="contact" className="bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] text-[#0b1524] py-24 lg:py-36 relative overflow-hidden border-b border-stone-200">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0056b3]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0099db]/5 rounded-full blur-3xl pointer-events-none" />

      <Container size="default" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Oversized Typography & National Contact Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <div className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#0056b3] flex items-center gap-2">
                <span className="w-2 h-0.5 bg-[#0056b3]" />
                Offshore Delivery Model
              </div>

              <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight-title text-[#0b1524] leading-[1.05]">
                Outsource the Work. <br />
                <span className="text-[#0056b3]">Keep the Business.</span>
              </h2>

              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                You do not need to choose between growth and control. You can retain your Australian leadership, client relationships and decision-making while building additional delivery capacity through NICS.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed max-w-xl">
                Whether you need one dedicated professional, a project team or a complete offshore support function, we can design a model around your requirements.
              </p>
            </div>

            {/* Direct office quick details card */}
            <div className="p-6 bg-white border border-stone-200 shadow-sm rounded-xl space-y-4">
              <div className="flex items-center justify-between text-xs text-stone-500 border-b border-stone-100 pb-3">
                <span className="uppercase tracking-wider font-bold text-stone-600">Direct Office Connection</span>
                <span className="text-[#0056b3] font-mono font-bold">3 GLOBAL OFFICES</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-stone-400 block mb-1">Selected Location</span>
                  <span className="text-sm font-bold text-[#0b1524] block">NICS {activeOffice.name}</span>
                  <span className="text-stone-500 mt-0.5 block">{activeOffice.address}</span>
                </div>
                <div>
                  <span className="text-stone-400 block mb-1">Direct Contact</span>
                  <a
                    href={`tel:${activeOffice.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-sm font-bold text-[#0056b3] hover:underline block"
                  >
                    {activeOffice.phone}
                  </a>
                  <a
                    href={`mailto:${activeOffice.email}`}
                    className="text-stone-600 hover:text-[#0056b3] mt-0.5 block underline"
                  >
                    {activeOffice.email}
                  </a>
                </div>
              </div>
            </div>

            {/* General Inquiries */}
            <div className="flex items-center gap-6 text-xs text-stone-600 pt-2">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0056b3]" />
                <span>National: +61 406 727 061</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0056b3]" />
                <span>info@nics.com</span>
              </div>
            </div>
          </div>

          {/* Right Column: Advisory Inquiry Form */}
          <div className="lg:col-span-6 bg-white text-[#0b1524] p-8 sm:p-10 rounded-2xl shadow-xl border border-stone-200">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-[#0b1524]">Thank you for reaching out</h3>
                <p className="text-sm text-stone-600 max-w-md mx-auto">
                  Your message has been received. A NICS practice specialist will contact you within 1 business day to discuss what functions you could move offshore.
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
                  <h3 className="text-xl font-bold text-[#0b1524]">Let&apos;s discuss what you could move offshore.</h3>
                  <p className="text-xs text-stone-500 mt-1 leading-relaxed">
                    Tell us about your current workload, the functions you want to delegate and the level of control you want to retain.
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
                      className="w-full text-sm px-3.5 py-2.5 bg-stone-50/70 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:bg-white focus:outline-none"
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
                      Service of Interest
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full text-sm px-3.5 py-2.5 bg-stone-50/70 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:bg-white focus:outline-none"
                    >
                      <option value="accounting-finance">Accounting & Finance Operations</option>
                      <option value="practice-support">Support for Australian Accounting Practices</option>
                      <option value="smsf-support">SMSF Back-Office Support</option>
                      <option value="audit-support">Audit Support</option>
                      <option value="financial-planning">Financial Planning Support</option>
                      <option value="mortgage-processing">Mortgage Processing Support</option>
                      <option value="legal-operations">Legal & Professional Services Support</option>
                      <option value="business-operations">Business Operations Support</option>
                      <option value="kyc-data">KYC & Data Services</option>
                      <option value="virtual-admin">Virtual & Administrative Support</option>
                      <option value="bot-model">Build–Operate–Transfer (BOT)</option>
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
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50/70 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:bg-white focus:outline-none placeholder-stone-400"
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
                    placeholder="eleanor@company.com"
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50/70 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:bg-white focus:outline-none placeholder-stone-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Current Workload & Functions to Delegate
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your current workload, roles needed, or functions to move offshore..."
                    className="w-full text-sm px-3.5 py-2.5 bg-stone-50/70 border border-stone-300 rounded-lg focus:ring-2 focus:ring-[#0056b3] focus:bg-white focus:outline-none placeholder-stone-400"
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
                    Request Consultation
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
