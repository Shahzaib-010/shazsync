"use client";

import { motion } from "motion/react";
import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

const services: ServiceCardProps[] = [
  {
    index: 1,
    title: "Motion",
    backgroundColor: "bg-[#efc7ff]",
    description:
      "Elevate your brand's narrative with captivating motion design, engaging and inspiring audiences through animated logos, explainer videos, social media clips, and more, crafted to drive emotional connections.",
  },
  {
    index: 2,
    title: "UI Design",
    backgroundColor: "bg-[#ffb271]",
    description:
      "Transform your digital presence with intuitive and visually stunning UI design, driving engagement, conversions, and brand loyalty through seamless user experiences, carefully crafted to meet the unique needs of your audience.",
  },
  {
    index: 3,
    title: "3D",
    backgroundColor: "bg-[#b6d3ee]",
    description:
      "Unlock new dimensions with our 3D design services, creating immersive experiences that captivate and inspire, from product visualizations and interactive environments to augmented reality and virtual reality experiences.",
  },
  {
    index: 4,
    title: "Brand Identity",
    backgroundColor: "bg-[#fff0d8]",
    description:
      "Discover your brand's unique voice and visual identity with our comprehensive branding services, building a lasting impression through strategic positioning, creative storytelling, impactful design, and expert guidance.",
  },
];

function ServicesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] px-4 py-16 text-neutral-950 md:px-6 md:py-24 lg:py-28">
      <div className="mx-auto w-[98%]">
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="font-[family-name:var(--font-clash-display)] text-3xl font-medium leading-none tracking-normal md:text-4xl lg:text-5xl"
        >
          Our Services
        </motion.h2>

        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2 md:gap-5">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { services };
export default ServicesSection;
