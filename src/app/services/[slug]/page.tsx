import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, MoveRight } from "lucide-react";
import { serviceItems } from "../../../components/section/serviceData";
import GetStarted from "../../../components/section/GetStarted";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceItems.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceItems.find((s) => s.slug === slug);
  if (!service) return { title: "Services | Shazsync" };
  return {
    title: `${service.title} — Services | Shazsync`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = serviceItems.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="bg-white">

      {/* ── Hero ── */}
      <section style={{ backgroundColor: service.color }} className="pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <Link
            href="/studio"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-600 transition-colors hover:text-neutral-900"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            All Services
          </Link>

          <h1 className="mt-6 text-[clamp(4rem,10vw,9rem)] leading-[0.88] tracking-tight text-neutral-950 [font-family:var(--font-karigaar)]">
            {service.title}
          </h1>

          <p className="mt-6 max-w-xl text-xl leading-snug text-neutral-700 md:text-2xl [font-family:var(--font-karigaar)]">
            {service.tagline}
          </p>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-[17px]">
            {service.description}
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 rounded-full bg-neutral-950 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Start a project
              <span className="size-2 rounded-full bg-orange-500" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── What we offer ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <MoveRight size={15} aria-hidden="true" />
            What we offer
          </p>

          <h2 className="mt-4 text-3xl text-neutral-950 md:text-4xl [font-family:var(--font-karigaar)]">
            Everything included
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-3">
            {service.offerings.map((item, i) => (
              <div key={item.title} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-neutral-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="h-px flex-1 bg-neutral-100"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-base font-medium text-neutral-950 [font-family:var(--font-karigaar)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.8] text-neutral-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="bg-[#f7f7f7] py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <MoveRight size={15} aria-hidden="true" />
            How it works
          </p>

          <h2 className="mt-4 text-3xl text-neutral-950 md:text-4xl [font-family:var(--font-karigaar)]">
            Our process
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {service.process.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span
                  className="inline-block w-fit rounded-full px-3 py-1 text-xs font-medium text-neutral-700"
                  style={{ backgroundColor: service.color }}
                >
                  {step.number}
                </span>
                <h3 className="text-lg text-neutral-950 [font-family:var(--font-karigaar)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-[1.8] text-neutral-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <p className="flex items-center gap-2 text-sm text-neutral-500">
            <MoveRight size={15} aria-hidden="true" />
            Explore more
          </p>

          <h2 className="mt-4 text-3xl text-neutral-950 md:text-4xl [font-family:var(--font-karigaar)]">
            Other services
          </h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {serviceItems
              .filter((s) => s.slug !== slug)
              .map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex flex-col gap-3 rounded-2xl border border-neutral-200 p-6 transition-colors hover:border-neutral-300 hover:bg-neutral-50"
                >
                  <span
                    className="w-fit rounded-md px-2.5 py-1 text-xs font-normal text-neutral-800"
                    style={{ backgroundColor: s.color }}
                  >
                    {s.title}
                  </span>
                  <p className="text-sm leading-relaxed text-neutral-500">
                    {s.tagline}
                  </p>
                  <span className="mt-auto flex items-center gap-1 text-xs text-neutral-400 transition-colors group-hover:text-neutral-900">
                    Learn more
                    <MoveRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <GetStarted />
    </main>
  );
}
