"use client";

import { motion } from "motion/react";

export type ServiceCardProps = {
  index: number;
  title: string;
  description: string;
  backgroundColor: string;
  textColor?: string;
  markColor?: string;
};

function CornerMarks({ color }: { color: string }) {
  return (
    <>
      <span className={`absolute left-3 top-3 text-xl leading-none ${color}`}>
        +
      </span>
      <span className={`absolute right-3 top-3 text-xl leading-none ${color}`}>
        +
      </span>
      <span className={`absolute bottom-3 left-3 text-xl leading-none ${color}`}>
        +
      </span>
      <span className={`absolute bottom-3 right-3 text-xl leading-none ${color}`}>
        +
      </span>
    </>
  );
}

function ServiceCard({
  index,
  title,
  description,
  backgroundColor,
  textColor = "text-neutral-950",
  markColor = "text-neutral-800",
}: ServiceCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative min-h-[250px] overflow-hidden rounded-[7px] ${backgroundColor} ${textColor} px-7 py-14 md:min-h-[280px] md:px-9 md:py-16 lg:min-h-[300px]`}
    >
      <CornerMarks color={markColor} />

      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center">
        <span className="font-[family-name:var(--font-clash-display)] text-base font-medium leading-none">
          {String(index).padStart(2, "0")}
        </span>

        <h3 className="mt-5 font-[family-name:var(--font-clash-display)] text-3xl font-medium leading-none tracking-normal md:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-3xl text-sm leading-relaxed md:text-base ">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
