"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  {
    percentage: "92%",
    text: "of our clients return for a second project",
    width: "92%",
  },
  {
    percentage: "87%",
    text: "reported a stronger brand perception",
    width: "87%",
  },
  {
    percentage: "74%",
    text: "saw increased engagement on digital",
    width: "74%",
  },
];

const sideTestimonials = [
  {
    quote:
      "Fast, thoughtful, and deeply collaborative. Shazsync felt like part of our team from day one.",
    name: "Naomi Voss",
    role: "Creative Director at Antra®",
    image: "/images/card2.jpg",
  },
  {
    quote:
      "Minimal in form but rich in intention. They helped us express our brand with clarity and confidence.",
    name: "Mark Williams",
    role: "Head of Brand at Velith®",
    image: "/images/card3.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-[#F5F5F5] py-12 lg:py-20">
      <div className="mx-auto w-[90%] sm:w-[90%] sm:w-[95%]">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[0.8fr_0.95fr_0.95fr] lg:items-stretch lg:min-h-130">

          {/* LEFT CONTENT */}
          <div className="flex h-full flex-col justify-between rounded-3xl">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-black">
                  Testimonials
                </p>
              </div>

              <h2 className="max-w-56 text-[28px] leading-[0.96] tracking-[-0.04em] text-black md:text-[34px] lg:text-[38px]">
                What our clients are saying
              </h2>
            </div>

            {/* Stats */}
            <div className="mt-8 max-w-80">
              <p className="mb-3 text-[11px] text-black/50 md:text-xs">
                Some data about our clients
              </p>

              <div className="space-y-4">
                {stats.map((item, index) => (
                  <div key={index} className="pb-2.5">
                    <div className="mb-2 flex items-end gap-2">
                      <span className="text-[28px] font-medium leading-none text-black md:text-[30px]">
                        {item.percentage}
                      </span>
                    </div>

                    <p className="mb-2 text-[11px] text-black/55 md:text-xs">
                      {item.text}
                    </p>

                    <div className="h-0.5 w-full bg-black/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER FEATURED TESTIMONIAL */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative min-h-105 overflow-hidden rounded-3xl lg:min-h-full"
          >
            <Image
              src="/images/card3.jpg"
              alt="testimonial"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

            <div className="absolute bottom-0 z-10 p-5 text-white md:p-6">
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="max-w-75 text-[16px] font-medium leading-[1.2] tracking-tight md:max-w-85 md:text-[18px]">
                &ldquo;Working with Shazsync felt less like hiring a design agency and more like gaining a strategic partner forever.&rdquo;
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-medium md:text-base">Harold Mercer</h4>
                <p className="text-[11px] text-white/70 md:text-xs">
                  Investor at Solence®
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT TESTIMONIALS */}
          <div className="flex h-full flex-col gap-3 lg:gap-4">
            {sideTestimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="flex min-h-45 flex-1 flex-col justify-between rounded-3xl bg-white p-5 md:p-6 lg:min-h-0"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>

                <p className="max-w-70 text-[14px] font-medium leading-[1.32] tracking-tight text-black md:text-[15px]">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="relative h-9 w-9 overflow-hidden rounded-full md:h-10 md:w-10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-xs font-medium text-black md:text-sm">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-black/50 md:text-xs">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
