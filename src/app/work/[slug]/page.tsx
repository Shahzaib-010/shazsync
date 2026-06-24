import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { workItems } from "../../../components/section/workData";
import WorkCard from "../../../components/section/WorkCard";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return workItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = workItems.find((w) => w.slug === slug);
  if (!project) return { title: "Work | Shazsync" };
  return {
    title: `${project.title} — Case Study | Shazsync`,
    description: project.brief,
  };
}

const tagBg = ["bg-[#f3c9ff]", "bg-[#cfe6ff]", "bg-[#ffb067]", "bg-[#dff4d2]"];

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = workItems.find((w) => w.slug === slug);
  if (!project) notFound();

  const currentIndex = workItems.findIndex((w) => w.slug === slug);
  const otherProjects = workItems.filter((_, i) => i !== currentIndex).slice(0, 3);

  const [problemSection, approachSection, outcomeSection] = project.sections;

  return (
    <main className="bg-white">

      {/* ── Header ── */}
      <div className="mx-auto w-[95%] px-4 pt-28 md:px-0 md:pt-32">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-3">
            <Link
              href="/work"
              className="text-sm text-neutral-400 transition-colors hover:text-neutral-900"
            >
              <ArrowLeft size={14} className="mr-1 inline-block" aria-hidden="true" />
              View All
            </Link>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, i) => (
                <span
                  key={tag}
                  className={`rounded-md px-2.5 py-1 text-xs font-normal text-neutral-800 ${tagBg[i % tagBg.length]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p className="pt-0.5 text-right text-xs text-neutral-400">
            {project.tags.join(" · ")}
            <span className="mx-2 opacity-40">···</span>
            {project.year}
          </p>
        </div>

        <h1 className="mt-4 text-[clamp(3.5rem,9vw,8rem)] leading-[0.9] tracking-tight text-neutral-950 [font-family:var(--font-karigaar)]">
          {project.title}
        </h1>
      </div>

      {/* ── Image — contained, left/right margins ── */}
      <div className="mx-auto mt-8 w-[95%]">
        <div className="relative aspect-16/10 w-full overflow-hidden rounded-2xl bg-neutral-100">
          <Image
            src={project.primaryImage}
            alt={project.title}
            fill
            priority
            className="object-cover"
            sizes="95vw"
          />
        </div>
      </div>

      {/* ── Brief para ── */}
      <div className="mx-auto w-[95%] px-4 pt-10 md:px-0 md:pt-12">
        <p className="max-w-xl text-base leading-relaxed text-neutral-700 md:text-[17px]">
          {project.brief}
        </p>
      </div>

      {/* ── Two columns: Problem+Solution (left) | View Live (right) ── */}
      <div className="mx-auto w-[95%] px-4 pb-16 pt-10 md:px-0 md:pb-20 md:pt-12">
        <div className="grid gap-10 md:grid-cols-[auto_minmax(0,520px)] md:gap-16">

          {/* Left — View Live only */}
          <div className="flex items-start">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              View Live
              <span className="size-2 rounded-full bg-orange-500" />
            </Link>
          </div>

          {/* Right — Problem + Solution stacked */}
          <div className="space-y-8">
            {problemSection && (
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 [font-family:var(--font-karigaar)]">
                  {problemSection.heading}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.8] text-neutral-500">
                  {problemSection.body}
                </p>
              </div>
            )}
            {approachSection && (
              <div>
                <h3 className="text-sm font-semibold text-neutral-900 [font-family:var(--font-karigaar)]">
                  {approachSection.heading}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.8] text-neutral-500">
                  {approachSection.body}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Detail section — Outcome as editorial block ── */}
      {outcomeSection && (
        <div className="border-t border-neutral-100">
          <div className="mx-auto w-[95%] px-4 py-16 md:px-0 md:py-24">
            <h2 className="text-3xl leading-tight text-neutral-950 md:text-4xl [font-family:var(--font-karigaar)]">
              {outcomeSection.heading}
            </h2>
            <p className="mt-1.5 text-sm text-neutral-400">
              {project.client} — {project.year}
            </p>
            <p className="mt-8 max-w-3xl text-base leading-[1.9] text-neutral-600 md:text-[17px]">
              {outcomeSection.body}
            </p>
          </div>
        </div>
      )}

      {/* ── Explore More ── */}
      <div className="border-t border-neutral-100 bg-[#f8f8f8]">
        <div className="mx-auto w-[95%] px-4 py-16 md:px-0 md:py-20">
          <h2 className="text-2xl text-neutral-950 md:text-3xl [font-family:var(--font-karigaar)]">
            Explore More
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {otherProjects.map((work) => (
              <WorkCard key={work.slug} {...work} />
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
