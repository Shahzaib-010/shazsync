"use client";

import { motion } from "motion/react";
import ServiceCard, { type ServiceCardProps } from "./ServiceCard";

const services: ServiceCardProps[] = [
  {
    index: 1,
    title: "Design",
    slug: "design",
    backgroundColor: "bg-[#efc7ff]",
    description:
      "From brand identity to UI/UX, we craft visual systems that communicate clearly and convert. Every pixel is intentional — built to reflect your brand and move your audience.",
  },
  {
    index: 2,
    title: "Development",
    slug: "development",
    backgroundColor: "bg-[#ffb271]",
    description:
      "We build fast, scalable websites and web applications that perform as well as they look. Clean code, optimised delivery, and seamless CMS integrations for teams that need to move quickly.",
  },
  {
    index: 3,
    title: "Marketing",
    slug: "marketing",
    backgroundColor: "bg-[#b6d3ee]",
    description:
      "Strategy-led marketing that grows your brand across the right channels. From paid campaigns to content and social, we connect your business with the people who matter most.",
  },
  {
    index: 4,
    title: "SEO",
    slug: "seo",
    backgroundColor: "bg-[#fff0d8]",
    description:
      "Technical SEO, on-page optimisation, and content strategy that move you up the rankings and keep you there. We audit, fix, and build long-term organic growth into everything we do.",
  },
];

function ServicesSection() {
  return (
    <section className="w-full bg-[#f5f5f5] py-16 text-neutral-950 md:py-24 lg:py-28">
      <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
        <motion.h2
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl font-medium leading-none tracking-normal sm:text-3xl md:text-4xl lg:text-5xl"
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
