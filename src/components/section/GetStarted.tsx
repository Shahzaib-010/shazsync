"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 22, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function GetStarted() {
  return (
    <section className="w-full bg-[#F6F6F6] px-3 py-4 md:px-5 md:py-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        transition={{ staggerChildren: 0.12, delayChildren: 0.05 }}
        className="relative mx-auto flex min-h-72svh w-full items-center justify-center overflow-hidden rounded-[24px] bg-black px-5 py-20 text-center text-white shadow-[0_22px_45px_rgba(0,0,0,0.22)] md:min-h-[82svh] md:rounded-[10px] md:px-10"
      >
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 opacity-80"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.28) 1.2px, transparent 1.4px)",
            backgroundSize: "28px 28px",
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,0.22) 58%, transparent 76%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0.82) 28%, rgba(0,0,0,0.22) 58%, transparent 76%)",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative z-10 flex max-w-4xl flex-col items-center">
       

          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(3rem,8vw,4rem)] font-semibold leading-[0.9] tracking-normal"
          >
            Start your project
            <span className="block">with ShazSync</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-10"
          >
           <Button
              text="Contact Us"
              bgColor="bg-white"
              textColor="text-black"
              dotColor="bg-orange-500"
              href="/contact"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
