import type { Metadata } from "next";
import WorkCard from "../../components/section/WorkCard";
import { workItems } from "../../components/section/workData";

export const metadata: Metadata = {
  title: "Work | Shazsync",
  description: "A full gallery of selected projects and case studies.",
};

export default function WorkPage() {
  return (
    <section className="bg-[#f6f4ef]">
      <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%] pb-20 pt-24 md:pb-24 md:pt-28">
        <h1 className="max-w-4xl text-[clamp(3.25rem,5vw,4.9rem)] leading-[0.9] tracking-0 text-neutral-950">
          Selected Works
        </h1>

        <div className="mt-20 grid gap-10 md:grid-cols-[0.75fr_1fr_1fr] md:gap-12 lg:gap-16">
          <p className="text-sm leading-7 text-neutral-600 md:pt-1 pl-10">
            ↳ How we work
          </p>

          <p className="max-w-md text-sm leading-7 text-neutral-600">
            Our portfolio showcases innovative projects that demonstrate our passion for
            creative problem-solving. From branding to motion design, each piece delivers
            exceptional results.
          </p>

          <p className="max-w-md text-sm leading-7 text-neutral-600">
            Explore our selected works to discover how we&apos;ve helped brands tell
            compelling stories, drive engagement, and achieve their goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:mt-20 lg:gap-7">
          {workItems.map((work) => (
            <WorkCard key={work.slug} {...work} />
          ))}
        </div>
      </div>
    </section>
  );
}
