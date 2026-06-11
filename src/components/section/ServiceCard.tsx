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
      className={`relative min-h-[240px] overflow-hidden rounded-[7px] ${backgroundColor} ${textColor} px-5 py-10 sm:px-6 sm:py-12 md:min-h-[280px] md:px-9 md:py-16 lg:min-h-[300px]`}
    >
      <CornerMarks color={markColor} />

      <div className="relative z-10 flex h-full max-w-3xl flex-col justify-center">
        <span className="text-base font-medium leading-none">
          {String(index).padStart(2, "0")}
        </span>

        <h3 className="mt-5 text-2xl font-medium leading-none tracking-normal sm:text-3xl md:text-4xl">
          {title}
        </h3>

        <p className="mt-5 max-w-3xl text-xs leading-relaxed sm:text-sm md:text-base ">
          {description}
        </p>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
