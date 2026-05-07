"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function HowWeWork() {
  return (
    <section className="w-full bg-[#f5f5f5] px-5 py-24 text-neutral-950 md:py-32 lg:py-40">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.1, delayChildren: 0.05 }}
        className="mx-auto grid w-[95%] max-w-7xl gap-12 md:grid-cols-2 md:gap-x-16 lg:grid-cols-[1fr_1fr_1fr] lg:gap-x-24"
      >
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-lg  font-[family-name:var(--font-clash-display)] leading-none md:col-span-2 lg:col-span-1"
        >
          <span aria-hidden="true" className="mr-1">
            -&gt;
          </span>
          How we work
        </motion.div>

        <motion.article
          variants={fadeUp}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-[family-name:var(--font-clash-display)] text-3xl font-semibold leading-tight tracking-normal md:text-3xl">
            Our Approach
          </h2>
          <p className="mt-5 text-lg leading-[1.38] font-[family-name:var(--font-clash-display)] tracking-wide text-neutral-800 md:text-[18px]">
            We&apos;re obsessed with crafting exceptional design experiences
            that leave a lasting impression. Our approach is simple: strategy
            first, magic later. We kick off every project with a deep dive into
            your goals, challenges, and vision to ensure clarity and set the
            stage for remarkable results.
          </p>

          <div className="mt-14 hidden lg:block">
           <Button
                text="Contact Us"
                bgColor="bg-black"
                textColor="text-white"
                dotColor="bg-orange-500"
                />
          </div>
        </motion.article>

        <motion.article
          variants={fadeUp}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-[family-name:var(--font-clash-display)] text-3xl font-semibold leading-tight tracking-normal md:text-3xl">
            What to Expect
          </h2>
          <p className="mt-5 font-[family-name:var(--font-clash-display)] text-lg leading-[1.38] tracking-wide text-neutral-800 md:text-[18px]">
            Our team of motion, 3D, UI, and branding experts collaborate
            closely with you to bring your vision to life. We&apos;re
            perfectionists at heart, obsessing over every detail to deliver
            design solutions that spark meaningful connections with your
            audience.
          </p>
        </motion.article>

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.48, ease: "easeOut" }}
          className="md:col-span-2 lg:hidden"
        >
          <Button
                text="Contact Us"
                bgColor="bg-black"
                textColor="text-white"
                dotColor="bg-orange-500"
                />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default HowWeWork;
