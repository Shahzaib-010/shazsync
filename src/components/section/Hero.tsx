"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Hero() {
  return (
    <section className="relative flex min-h-[65vh] w-full items-center overflow-hidden bg-[url('/Background.avif')] bg-cover  bg-[position:center_-180px] text-black">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        className="relative z-10 mx-auto flex w-[95%] flex-col items-center text-center"
      >
       

        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-25 max-w-6xl font-[family-name:var(--font-clash-display)] text-5xl font-semibold leading-tight md:text-6xl"
        >
          Everything is louder
          <span className="block">when it&apos;s in Sync.</span>
        </motion.h1>

     

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10"
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

export default Hero;
