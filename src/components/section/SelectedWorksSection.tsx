"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Button from "../ui/Button";
import WorkCard from "./WorkCard";
import { workItems } from "./workData";

function SelectedWorksSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [travelDistance, setTravelDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const rawX = useTransform(scrollYProgress, [0, 1], [0, -travelDistance]);
  const x = useSpring(rawX, {
    stiffness: 82,
    damping: 24,
    mass: 0.72,
    restDelta: 0.001,
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) {
        return;
      }

      const distance = Math.max(
        0,
        trackRef.current.scrollWidth - window.innerWidth
      );

      setTravelDistance(distance);
    };

    measure();

    const resizeObserver = new ResizeObserver(measure);

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#F6F6F6]"
      style={{ height: `calc(100svh + ${travelDistance}px)` }}
    >
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden bg-[#F6F6F6] py-10 md:py-12">
        <div className="mx-auto mb-10 flex w-[90%] sm:w-[95%] items-center justify-between gap-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-semibold leading-none tracking-normal sm:text-3xl md:text-4xl lg:text-5xl text-neutral-950"
          >
            Selected Works
          </motion.h2>

          <div className="shrink-0">
            <Button
              text="View All"
              bgColor="bg-black"
              textColor="text-white"
              dotColor="bg-orange-400"
              href="/work"
            />
          </div>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex w-max gap-4 px-[2.5vw] will-change-transform md:gap-5 lg:gap-6"
        >
          {workItems.map((work) => (
            <WorkCard key={work.slug} {...work} track />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SelectedWorksSection;
