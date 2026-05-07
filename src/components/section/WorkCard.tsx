"use client";

import Image from "next/image";
import { motion } from "motion/react";

export type WorkCardProps = {
  title: string;
  tags: string[];
  primaryImage: string;
  hoverImage: string;
};

const tagStyles = [
  "bg-[#f3c9ff] text-neutral-950",
  "bg-[#cfe6ff] text-neutral-950",
  "bg-[#ffb067] text-neutral-950",
  "bg-[#fff0d2] text-neutral-950",
  "bg-[#dff4d2] text-neutral-950",
];

function WorkCard({ title, tags, primaryImage, hoverImage }: WorkCardProps) {
  return (
    <article className="group w-[82vw] shrink-0 md:w-[54vw] lg:w-[36vw] xl:w-[30.5rem]">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        className="relative aspect-[1.18/1] overflow-hidden rounded-[7px] bg-neutral-200 shadow-sm ring-1 ring-black/5"
      >
        <div className="absolute left-2 top-2 z-20 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={`${title}-${tag}`}
              className={`rounded-md px-3 py-1.5 text-sm font-[family-name:var(--font-clash-display)] leading-none md:text-base ${
                tagStyles[index % tagStyles.length]
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.div
          className="absolute inset-0"
          variants={{
            rest: { opacity: 1, scale: 1, y: 0 },
            hover: { opacity: 0, scale: 1.045, y: -10 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={primaryImage}
            alt={`${title} project preview`}
            fill
            sizes="(max-width: 767px) 82vw, (max-width: 1023px) 54vw, (max-width: 1279px) 36vw, 568px"
            className="object-cover"
          />
        </motion.div>

        <motion.div
          className="absolute inset-0 opacity-0"
          variants={{
            rest: { opacity: 0, scale: 1.08, y: 18 },
            hover: { opacity: 1, scale: 1.01, y: 0 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={hoverImage}
            alt=""
            aria-hidden="true"
            fill
            sizes="(max-width: 767px) 82vw, (max-width: 1023px) 54vw, (max-width: 1279px) 36vw, 568px"
            className="object-cover"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/5 opacity-70" />
      </motion.div>

      <h3 className="mt-5 text-xl font-[family-name:var(--font-clash-display)]  tracking-normal text-neutral-950 md:text-xl">
        {title}
      </h3>
    </article>
  );
}

export default WorkCard;
