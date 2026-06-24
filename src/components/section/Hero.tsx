"use client";

import { motion } from "motion/react";
import Button from "../ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

function Hero() {
  return (
      <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-[url('/Background.avif')] bg-cover bg-center text-black sm:min-h-[65vh] md:min-h-[75vh]">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.12, delayChildren: 0.08 }}
        className="relative z-10 mx-auto flex w-[95%] flex-col items-center text-center"
      >
       

        <motion.h1
          className="mt-16 max-w-6xl text-4xl font-semibold leading-tight sm:text-5xl md:mt-20 md:text-6xl lg:text-7xl"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          Everything is louder
          <span className="block">when it&apos;s in Sync.</span>
        </motion.h1>

     

        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 sm:mt-8 md:mt-10 lg:mt-12"
        >
            <Button
                text="Contact Us"
                href="/contact"
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
