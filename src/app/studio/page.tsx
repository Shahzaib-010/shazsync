import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight, ArrowRight } from "lucide-react";
import GetStarted from "../../components/section/GetStarted";

export const metadata: Metadata = {
  title: "Studio | Shazsync",
  description:
    "Shazsync is a full-service creative agency specialising in design, development, marketing, and SEO. We build brands that look right and perform better.",
};

const stats = [
  { value: "50+", label: "Projects delivered" },
  { value: "30+", label: "Clients worldwide" },
  { value: "4", label: "Core services" },
  { value: "100%", label: "Remote first" },
];

const values = [
  {
    index: "01",
    title: "Strategy before aesthetics",
    description:
      "Every project starts with understanding your goals, audience, and market. Great-looking work that doesn't convert isn't finished — it's just pretty.",
  },
  {
    index: "02",
    title: "Craft without compromise",
    description:
      "We obsess over details so you don't have to. From the first wireframe to the final deploy, every pixel, line of code, and keyword is considered.",
  },
  {
    index: "03",
    title: "Results that compound",
    description:
      "We build for the long term. Design systems that scale, codebases that maintain, content that ranks — all working together so your investment grows over time.",
  },
];

const services = [
  {
    index: "01",
    title: "Design",
    color: "#efc7ff",
    description:
      "Brand identity, UI/UX, and visual systems built to communicate clearly and convert.",
  },
  {
    index: "02",
    title: "Development",
    color: "#ffb271",
    description:
      "Fast, scalable websites and web apps with clean code and seamless CMS integrations.",
  },
  {
    index: "03",
    title: "Marketing",
    color: "#b6d3ee",
    description:
      "Strategy-led campaigns across paid, social, and content that reach the right audience.",
  },
  {
    index: "04",
    title: "SEO",
    color: "#c8f0a8",
    description:
      "Technical audits, on-page optimisation, and content strategy that build lasting organic growth.",
  },
];

export default function StudioPage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-white">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%] pb-20 pt-24 md:pb-28 md:pt-28">
          {/* Service tag pills */}
          <div className="mb-10 flex flex-wrap gap-2">
            {services.map(({ title, color }) => (
              <span
                key={title}
                className="rounded-full px-4 py-1.5 text-xs font-medium text-neutral-800"
                style={{ backgroundColor: color }}
              >
                {title}
              </span>
            ))}
          </div>

          <h1 className="max-w-4xl text-[clamp(3.25rem,5vw,4.9rem)] leading-[0.9] tracking-0 text-neutral-950">
            The Studio
          </h1>

          <div className="mt-20 grid gap-10 md:grid-cols-[0.75fr_1fr_1fr] md:gap-12 lg:gap-16">
            <p className="pl-10 text-sm leading-7 text-neutral-600 md:pt-1">
              ↳ Our story
            </p>
            <p className="max-w-md text-sm leading-7 text-neutral-600">
              Shazsync is a full-service creative agency built on the belief
              that great design and smart strategy aren&apos;t separate
              disciplines — they&apos;re one.
            </p>
            <p className="max-w-md text-sm leading-7 text-neutral-600">
              We partner with ambitious brands to create design systems,
              digital products, marketing campaigns, and SEO strategies that
              work together — in sync.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <p className="max-w-5xl text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-normal text-neutral-950">
            Design that looks right. Development that runs fast. Marketing that
            lands. SEO that lasts.
          </p>

          <div className="mt-16 grid gap-10 md:grid-cols-[0.75fr_1fr_1fr] md:gap-12 lg:gap-16">
            <p className="pl-10 text-sm leading-7 text-neutral-600 md:pt-1">
              ↳ What drives us
            </p>
            <p className="max-w-md text-sm leading-7 text-neutral-600">
              We started Shazsync because too many brands were stuck choosing
              between agencies that were either purely creative or purely
              technical. We do both — and we make them work together.
            </p>
            <div>
              <p className="max-w-md text-sm leading-7 text-neutral-600">
                Designers, developers, marketers, and SEO specialists who
                genuinely collaborate. The result is work that looks exceptional
                and performs even better.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-neutral-950 underline underline-offset-4 transition-colors hover:text-orange-500"
              >
                Sounds like what you need? Let&apos;s talk
                <ArrowRight size={14} className="ml-1 inline-block" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-0 md:divide-x md:divide-neutral-200">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col gap-3 md:px-8 lg:px-12">
                <span className="text-[clamp(2.5rem,5vw,4rem)] leading-none text-orange-500">
                  {value}
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="bg-[#f5f5f5] py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <div className="grid gap-12 md:grid-cols-[0.75fr_1fr] md:gap-16 lg:gap-24">
            <div>
              <p className="text-lg leading-none">
                <MoveRight size={16} className="mr-2 inline-block" aria-hidden="true" />
                What we do
              </p>
              <p className="mt-6 max-w-xs text-sm leading-7 text-neutral-600">
                Four disciplines, one team. Everything designed to work together
                from day one.
              </p>
            </div>

            <div className="divide-y divide-neutral-200">
              {services.map(({ index, title, description, color }) => (
                <div
                  key={index}
                  className="grid grid-cols-[3rem_1fr] gap-4 py-7 first:pt-0 last:pb-0 md:grid-cols-[4rem_1fr]"
                >
                  <span className="pt-0.5 text-xs font-medium text-neutral-400">
                    {index}
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-medium text-neutral-950 [font-family:var(--font-karigaar)]">
                      <span
                        className="h-2 w-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: color }}
                        aria-hidden="true"
                      />
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-neutral-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
          <p className="text-lg leading-none">
            <MoveRight size={16} className="mr-2 inline-block" aria-hidden="true" />
            What we stand for
          </p>

          <div className="mt-16 grid gap-12 md:mt-20 md:grid-cols-3 md:gap-8 lg:gap-16">
            {values.map(({ index, title, description }) => (
              <div key={index} className="flex flex-col">
                <span className="text-xs font-medium text-neutral-400">
                  {index}
                </span>
                <h3 className="mt-4 text-xl font-medium leading-tight text-neutral-950 md:text-2xl [font-family:var(--font-karigaar)]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <GetStarted />
    </main>
  );
}
