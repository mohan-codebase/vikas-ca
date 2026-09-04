import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Mail, Lock, Sparkles } from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Privacy Policy | NICS",
  description:
    "How NICS collects, uses, discloses, stores, secures, and disposes of personal information, including data subject rights across Australia, Canada, Europe and the UK, and the United States.",
};

const PRIVACY_EMAIL = "hello@nics.com";
const LAST_UPDATED = "4 September 2026";

type Block =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "sub"; heading: string; items: string[] };

type Section = {
  id: string;
  heading: string;
  blocks: Block[];
};

const sections: Section[] = [
  {
    id: "introduction",
    heading: "Introduction",
    blocks: [
      {
        kind: "p",
        text: "NICS respects your personal information, and this Privacy Policy outlines our obligation to protect and manage it. We are committed to ensuring the safekeeping and proper handling of personal information. In line with this commitment, we adhere to ISO 27001 compliant security measures, which govern the manner in which we collect, use, disclose, store, secure, and dispose of your personal information. Our practices ensure that your personal information is managed with the highest standards of privacy and security.",
      },
    ],
  },
  {
    id: "collection",
    heading: "Collection of Personal Information",
    blocks: [
      {
        kind: "p",
        text: "NICS does not contact your clients directly or indirectly. Any client information is collected through your firm. The information we are provided includes:",
      },
      {
        kind: "ul",
        items: [
          "Names, addresses, dates of birth, and places of birth",
          "Employment details",
          "Personal health and insurance information",
          "Financial information such as income, expenses, retirement accounts, and investment details",
        ],
      },
      {
        kind: "p",
        text: "We collect personal information for the primary purpose of completing the jobs and delivering our services to you. We may also use this information for secondary purposes closely related to the primary purpose, in circumstances where you would reasonably expect such use or disclosure.",
      },
      {
        kind: "p",
        text: "You may unsubscribe from our mailing lists at any time by contacting us in writing, or by clicking the “Unsubscribe” link at the bottom of marketing emails sent from us.",
      },
      {
        kind: "p",
        text: "When collecting personal information, we will, where appropriate and possible, explain why we are collecting it and how we plan to use it.",
      },
    ],
  },
  {
    id: "use",
    heading: "Use of Personal and Sensitive Information",
    blocks: [
      {
        kind: "p",
        text: "NICS provides business process outsourcing solutions in areas including accounting, compliance, operational, and administrative processes for businesses in:",
      },
      {
        kind: "ul",
        items: [
          "Accounting",
          "Financial planning",
          "Mortgage broking",
          "Legal firms and law firms",
          "Operations",
          "Small to medium businesses",
        ],
      },
      {
        kind: "p",
        text: "The personal information collected is only used to facilitate one or all of the above services to your firm as requested by you. NICS uses personal information only:",
      },
      {
        kind: "ul",
        items: [
          "For the primary purpose for which it was obtained",
          "For a secondary purpose that is directly related to the primary purpose",
          "With your consent, or where required or authorised by law",
        ],
      },
    ],
  },
  {
    id: "third-parties",
    heading: "Third Parties",
    blocks: [
      {
        kind: "p",
        text: "Where reasonable and possible, we will collect your personal information only from you. However, in certain circumstances we may be provided with information from third parties. In such a case we will take reasonable steps to ensure that you are made aware of the information provided to us by the third party.",
      },
    ],
  },
  {
    id: "disclosure",
    heading: "Disclosure of Personal Information",
    blocks: [
      {
        kind: "p",
        text: "NICS will only provide information to those staff members that relates specifically to the jobs requested by your firm. The information will not be provided or sold to other institutions. Where there is a legal situation or requirement, the information may be provided in accordance with the law.",
      },
    ],
  },
  {
    id: "storage-security",
    heading: "Storage and Data Security",
    blocks: [
      {
        kind: "p",
        text: "NICS stores all data electronically on secure servers and has taken the necessary measures to ensure our data integrity is not compromised. The secure delivery centre is equipped with current technology, infrastructure, and dedicated technical staff to ensure our working environment has complete reliability and security for our clients’ data. The offices and systems are on par with international best practice for information security management.",
      },
      {
        kind: "p",
        text: "Data is not stored for any longer than the duration of a given job. We do not use third party contractors to complete any work. In addition to the above, the following controls are in place:",
      },
      {
        kind: "ul",
        items: [
          "Access cards are required to enter our offices. Only authorised personnel are allowed to enter the office and processing centre.",
          "Physical documents, books, and other devices are prohibited in the processing centre.",
          "The entire office is monitored by CCTV. All PCs are desktops running a dumb terminal system.",
          "CD/DVD-ROM and other drives have been removed. Access to physical and removable drives, including external hard drives and USB devices, is disabled.",
          "Printers and scanners are not available within the processing centre.",
          "Employees keep personal belongings, including bags, books, and mobile devices, in secure lockers provided outside the main processing centre.",
          "Internet activity is heavily controlled, with websites required to be added to a whitelist before they can be accessed. Employees cannot access personal email from the office, and work email is monitored.",
          "Our intranet, internal portals, software, and sites have IP authentication in place so that these records cannot be accessed outside our office premises.",
          "Access to our internal software is password protected with strength measurement, and passwords must be updated regularly.",
          "All terminals include screen snapshots and are regularly audited to ensure staff follow security guidelines.",
          "All terminals and servers run firewalls, antivirus software, and intrusion detection and prevention systems to minimise exploits or attacks.",
          "Our security software is kept updated at all times.",
          "All PCs have an auto-lock feature to ensure they are not left unlocked.",
          "Wireless connections are prohibited within our back-office premises.",
        ],
      },
    ],
  },
  {
    id: "data-subject-rights",
    heading: "Data Subject Rights",
    blocks: [
      {
        kind: "p",
        text: `As a data subject, you have specific rights concerning your personal data under applicable data protection laws. To exercise these rights, please contact us at ${PRIVACY_EMAIL}.`,
      },
    ],
  },
  {
    id: "geographical-variations",
    heading: "Geographical Variations",
    blocks: [
      {
        kind: "sub",
        heading: "Australia",
        items: [
          "Anonymity and pseudonymity: where practicable, you may choose not to identify yourself or to use a pseudonym when interacting with us.",
          "Right to correction: you can have any incorrect personal data corrected.",
          "Direct marketing opt-out: you may request that your personal data not be used for direct marketing purposes.",
          "Data portability: you can request your data in a format that is portable and usable.",
        ],
      },
      {
        kind: "sub",
        heading: "Canada",
        items: [
          "Access to personal information: you have the right to know how your personal data is used and to access it.",
          "Rectification: you can have inaccurate personal data corrected.",
          "Consent withdrawal: you may withdraw consent for the use of your personal data.",
          "Complaints: you can file a complaint with the privacy commissioner if you believe your rights have been violated.",
        ],
      },
      {
        kind: "sub",
        heading: "Europe and the United Kingdom",
        items: [
          "Access and information: you have the right to access your personal data and to be informed about its use.",
          "Erasure: you can request deletion of your data under certain conditions.",
          "Rectification: if your data is incorrect or incomplete, you have the right to have it corrected.",
          "Restriction of processing: you may request that processing of your personal data be restricted.",
          "Objection: you may object to processing of your data in certain circumstances, including its use for direct marketing.",
          "Automated decisions: you have rights concerning automated decision making, including profiling that has legal or significant effects on you.",
          "Withdraw consent: you can withdraw consent at any time, where relevant.",
          "Data portability: you have the right to receive your data in a structured, commonly used format.",
        ],
      },
      {
        kind: "sub",
        heading: "United States",
        items: [
          "State-specific rights: rights vary by state but generally include the right to access, correct, and in some cases delete your personal data.",
          "California: rights under the CCPA include access to specific information about the categories of personal data collected and the purposes for which it is used, the right to request deletion of personal data, and the right to opt out of the sale of personal data.",
        ],
      },
      {
        kind: "sub",
        heading: "Additional information for compliance",
        items: [
          "Response time: in accordance with the GDPR, we aim to respond to your requests within one month of receipt. This period may be extended by two further months where necessary, considering the complexity and number of requests.",
          "Complaints: if you believe your data protection rights have been breached, you have the right to lodge a complaint with the relevant supervisory authority.",
        ],
      },
    ],
  },
  {
    id: "complaints",
    heading: "Making a Privacy Complaint",
    blocks: [
      {
        kind: "p",
        text: `If you have concerns about how NICS collects, maintains, or uses your personal information, you may submit a complaint to our Data Privacy Officer at ${PRIVACY_EMAIL}.`,
      },
      {
        kind: "p",
        text: "Upon receiving your complaint, our Data Privacy Officer will address your request confidentially within thirty (30) days.",
      },
      {
        kind: "p",
        text: "Should you be dissatisfied with our response, or believe your concern has not been adequately addressed, you have the right to lodge a complaint with the relevant data protection authority in the jurisdiction where our offices are located. For complaints within Australia, you may contact the Office of the Australian Information Commissioner at oaic.gov.au, by email at enquiries@oaic.gov.au, or by phone on 1300 363 992.",
      },
    ],
  },
  {
    id: "data-breach",
    heading: "Reporting of a Data Breach",
    blocks: [
      { kind: "p", text: "In the event of a data breach, we will:" },
      {
        kind: "ul",
        items: [
          "Contain the information leak and assess the actual damage caused by the breach.",
          "Prepare a statement detailing the breach.",
          "Immediately after providing the statement, notify each individual to whom the information relates, or who is at risk.",
          "Where that is not possible, publish a copy of the statement on our website and take reasonable steps to publicise its contents.",
          "Review and change our systems and processes to ensure they are further secured against future breaches.",
        ],
      },
    ],
  },
  {
    id: "access",
    heading: "Access to Personal Information",
    blocks: [
      {
        kind: "p",
        text: "Your firm and staff can access the personal information that you provide. NICS will take the necessary steps to identify that you are a client of NICS before providing the information to you.",
      },
      {
        kind: "p",
        text: "Additionally, you may access the personal information we hold about you and update or correct it, subject to certain exceptions. If you wish to access your personal information, please email us.",
      },
    ],
  },
  {
    id: "quality",
    heading: "Ensuring Quality of Your Personal Information",
    blocks: [
      {
        kind: "p",
        text: "It is important to us that your personal information is up to date. We will take reasonable steps to ensure that your personal information is complete, accurate, and current. If you find the information we hold is not up to date or is otherwise inaccurate, please advise us at the earliest opportunity so that we can update our records and continue to provide quality services to you.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    blocks: [
      {
        kind: "p",
        text: "This Privacy Policy may change from time to time, and changes will be published on this page. NICS reserves the right to update or modify these policy statements at any time and without prior notice. Any modifications will apply only to the personal information we collect after such updates. If you have any questions regarding this information, please get in touch with us.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white pt-32 sm:pt-40">
          <div className="absolute inset-0 hero-mesh opacity-60 pointer-events-none" />
          <Container size="default" className="relative pb-16 lg:pb-20">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                <Sparkles className="size-3.5" />
                Legal
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl text-[#0b1524]">
                Privacy Policy
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-stone-600">
                How we collect, use, disclose, store, secure, and dispose of personal information — and the rights you hold over it, wherever you operate.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3.5 py-2 text-xs font-semibold text-stone-600">
                  <Lock className="size-3.5 text-[#0056b3]" />
                  ISO 27001 aligned security measures
                </span>
                <span className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3.5 py-2 text-xs font-semibold text-stone-600">
                  Last updated: {LAST_UPDATED}
                </span>
              </div>
            </div>
          </Container>
        </section>

        {/* POLICY BODY */}
        <section className="border-t border-stone-200 bg-[#fbfbfa] py-16 lg:py-24">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Table of contents */}
              <aside className="lg:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-2xl border border-stone-200 bg-white p-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400">On This Page</p>
                    <nav className="mt-4">
                      <ol className="space-y-2.5">
                        {sections.map((section, i) => (
                          <li key={section.id}>
                            <a
                              href={`#${section.id}`}
                              className="flex gap-3 text-sm text-stone-600 transition-colors hover:text-[#0056b3]"
                            >
                              <span className="font-semibold tabular-nums text-stone-400">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span>{section.heading}</span>
                            </a>
                          </li>
                        ))}
                      </ol>
                    </nav>
                  </div>

                  <div className="mt-6 rounded-2xl border border-[#0056b3]/20 bg-white p-6">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-[#0056b3]/10 text-[#0056b3]">
                      <Mail className="size-5" />
                    </div>
                    <h2 className="mt-4 text-base font-bold text-[#0b1524]">Privacy enquiries</h2>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      To exercise your data rights or raise a privacy concern, contact our Data Privacy Officer.
                    </p>
                    <a
                      href={`mailto:${PRIVACY_EMAIL}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                    >
                      {PRIVACY_EMAIL}
                      <ArrowRight className="size-3.5" />
                    </a>
                  </div>
                </div>
              </aside>

              {/* Sections */}
              <div className="lg:col-span-8">
                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <article
                      key={section.id}
                      id={section.id}
                      className="scroll-mt-24 rounded-2xl border border-stone-200 bg-white p-8 lg:p-10"
                    >
                      <div className="flex items-baseline gap-3">
                        <span className="text-xs font-bold tabular-nums text-[#0056b3]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-2xl font-bold tracking-tight text-[#0b1524]">
                          {section.heading}
                        </h2>
                      </div>

                      <div className="mt-5 space-y-5">
                        {section.blocks.map((block, bi) => {
                          if (block.kind === "p") {
                            return (
                              <p key={bi} className="text-sm leading-relaxed text-stone-600">
                                {block.text}
                              </p>
                            );
                          }

                          if (block.kind === "ul") {
                            return (
                              <ul key={bi} className="space-y-2.5">
                                {block.items.map((item, ii) => (
                                  <li key={ii} className="flex items-start gap-2.5 text-sm text-stone-600">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0056b3]" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            );
                          }

                          return (
                            <div key={bi} className="rounded-xl border border-stone-200 bg-[#fbfbfa] p-5">
                              <h3 className="text-sm font-bold text-[#0b1524]">{block.heading}</h3>
                              <ul className="mt-3 space-y-2.5">
                                {block.items.map((item, ii) => (
                                  <li key={ii} className="flex items-start gap-2.5 text-sm text-stone-600">
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#0056b3]" />
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* CALL TO ACTION */}
        <section className="relative isolate overflow-hidden border-t border-stone-200 bg-gradient-to-br from-[#eef5ff] via-[#f6f9fd] to-[#fbfbfa] py-20 lg:py-24">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, #bcd9ff 0%, transparent 70%)" }}
          />
          <Container size="narrow" className="text-center">
            <ShieldCheck className="mx-auto size-12 text-[#0056b3]" />
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
              Questions about how we handle your data?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone-600">
              Data security and protection of your privacy is an integral part of any outsourcing relationship. If anything here needs clarifying before you share information with us, ask.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#0056b3] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494] hover:shadow-xl hover:shadow-[#0056b3]/30"
              >
                Contact Us
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-4 text-sm font-bold text-[#0b1524] shadow-sm transition-all hover:border-[#0056b3]/40 hover:text-[#0056b3] hover:shadow-md"
              >
                Email the Privacy Officer
              </a>
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <FloatingActions />
      <PremiumCursor />
    </div>
  );
}
