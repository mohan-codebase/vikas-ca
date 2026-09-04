import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  Lightbulb,
  MapPin,
  Tag,
  User,
} from "lucide-react";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/sections/Footer";
import { FloatingActions } from "@/components/ui/FloatingActions";
import { PremiumCursor } from "@/components/ui/PremiumCursor";
import { Container } from "@/components/ui/Container";
import {
  featuredInsight,
  secondaryInsights,
  type InsightArticle,
} from "@/data/insightsData";

const allArticles: InsightArticle[] = [featuredInsight, ...secondaryInsights];

function getArticle(slug: string) {
  return allArticles.find((article) => article.id === slug);
}

export function generateStaticParams() {
  return allArticles.map((article) => ({ slug: article.id }));
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article Not Found | NICS" };
  }

  return {
    title: `${article.title} | NICS`,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const related = allArticles.filter((item) => item.id !== article.id).slice(0, 3);
  const content = article.fullContent;

  return (
    <div className="min-h-screen bg-white text-[#0b1524]">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#f0f6ff] via-[#f8fafc] to-white pt-32 sm:pt-40">
          <div className="absolute inset-0 hero-mesh opacity-60 pointer-events-none" />
          <Container size="default" className="relative pb-16 lg:pb-20">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
            >
              <ArrowLeft className="size-3.5" />
              Back to Blogs &amp; PR
            </Link>

            <div className="mt-6 grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0056b3]/20 bg-[#0056b3]/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                  <Tag className="size-3.5" />
                  {article.category}
                </span>

                <h1 className="mt-6 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-5xl text-[#0b1524]">
                  {article.title}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-stone-600">{article.excerpt}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-stone-200 pt-6 text-xs text-stone-500">
                  <span className="inline-flex items-center gap-1.5">
                    <User className="size-3.5 text-[#0056b3]" />
                    <span className="font-semibold text-stone-700">{article.author.name}</span>
                    <span>· {article.author.role}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="size-3.5 text-[#0056b3]" />
                    {article.author.office}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="size-3.5 text-[#0056b3]" />
                    {article.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="size-3.5 text-[#0056b3]" />
                    {article.readTime}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-stone-200 shadow-2xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1524]/70 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* ARTICLE BODY */}
        <section className="border-t border-stone-200 bg-[#fbfbfa] py-16 lg:py-24">
          <Container size="default">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              {/* Sidebar */}
              <aside className="lg:col-span-4 lg:order-last">
                <div className="lg:sticky lg:top-24 space-y-6">
                  {content && content.sections.length > 0 && (
                    <div className="rounded-2xl border border-stone-200 bg-white p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">In This Article</p>
                      <ol className="mt-4 space-y-2.5">
                        {content.sections.map((section, i) => (
                          <li key={i} className="flex gap-3 text-sm text-stone-600">
                            <span className="font-semibold tabular-nums text-stone-400">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <span>{section.heading}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {article.tags.length > 0 && (
                    <div className="rounded-2xl border border-stone-200 bg-white p-6">
                      <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Topics</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-[#0056b3]/10 px-3 py-1 text-xs font-semibold text-[#0056b3]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="rounded-2xl border border-[#0056b3]/20 bg-white p-6">
                    <h2 className="text-base font-bold text-[#0b1524]">Discuss this with us</h2>
                    <p className="mt-2 text-xs leading-relaxed text-stone-600">
                      If this maps to something you are trying to solve, talk it through with the team that does the work.
                    </p>
                    <Link
                      href="/contact"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] transition-colors hover:text-[#004494]"
                    >
                      Make an enquiry
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
              </aside>

              {/* Body */}
              <div className="lg:col-span-8">
                <article className="rounded-2xl border border-stone-200 bg-white p-8 lg:p-10">
                  {content ? (
                    <>
                      <p className="text-base leading-relaxed text-stone-700">{content.overview}</p>

                      <div className="mt-10 space-y-10">
                        {content.sections.map((section, i) => (
                          <div key={i}>
                            <div className="flex items-baseline gap-3">
                              <span className="text-xs font-bold tabular-nums text-[#0056b3]">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <h2 className="text-xl font-bold tracking-tight text-[#0b1524]">
                                {section.heading}
                              </h2>
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-stone-600">{section.body}</p>
                          </div>
                        ))}
                      </div>

                      {content.bullets && content.bullets.length > 0 && (
                        <div className="mt-10 rounded-xl border border-stone-200 bg-[#fbfbfa] p-6">
                          <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Key Points</p>
                          <ul className="mt-4 space-y-3">
                            {content.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm text-stone-600">
                                <CheckCircle2 className="size-4 shrink-0 text-[#0056b3] mt-0.5" />
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {content.keyTakeaway && (
                        <div className="mt-8 rounded-xl border border-[#0056b3]/20 bg-[#0056b3]/5 p-6">
                          <div className="flex items-center gap-2">
                            <Lightbulb className="size-4 text-[#0056b3]" />
                            <p className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                              Key Takeaway
                            </p>
                          </div>
                          <p className="mt-3 text-sm leading-relaxed text-stone-700">{content.keyTakeaway}</p>
                        </div>
                      )}
                    </>
                  ) : (
                    <p className="text-base leading-relaxed text-stone-700">{article.excerpt}</p>
                  )}

                  <div className="mt-10 border-t border-stone-200 pt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl bg-[#0056b3] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#0056b3]/25 transition-all hover:bg-[#004494]"
                    >
                      Talk to our team
                      <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </div>
            </div>
          </Container>
        </section>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="border-t border-stone-200 bg-white py-16 lg:py-24">
            <Container size="default">
              <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-stone-200 pb-5">
                <h2 className="text-2xl font-bold tracking-tight text-[#0b1524]">Keep Reading</h2>
                <Link
                  href="/blogs"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0056b3] hover:underline"
                >
                  View all articles
                  <ArrowRight className="size-3.5" />
                </Link>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.id}
                    href={`/blogs/${item.id}`}
                    className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-[#fbfbfa] p-7 transition-all hover:-translate-y-1 hover:border-[#0056b3]/30 hover:bg-white hover:shadow-lg"
                  >
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#0056b3]">
                        {item.category}
                      </span>
                      <h3 className="mt-3 text-base font-bold leading-snug text-[#0b1524] transition-colors group-hover:text-[#0056b3]">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-stone-600">{item.excerpt}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-stone-200 pt-4">
                      <span className="text-xs text-stone-500">{item.readTime}</span>
                      <ArrowUpRight className="size-4 text-[#0056b3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )}
      </main>

      <Footer />
      <FloatingActions />
      <PremiumCursor />
    </div>
  );
}
