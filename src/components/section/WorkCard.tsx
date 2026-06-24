"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useRef, useState } from "react";

declare global {
  interface Window {
    __hideCursorFollower?: (hide: boolean) => void;
  }
}

export type WorkCardProps = {
  slug: string;
  title: string;
  tags: string[];
  primaryImage: string;
  hoverImage: string;
  track?: boolean;
};

const tagStyles = [
  "bg-[#f3c9ff] text-neutral-800",
  "bg-[#cfe6ff] text-neutral-800",
  "bg-[#ffb067] text-neutral-800",
  "bg-[#dff4d2] text-neutral-800",
  "bg-[#fff0d8] text-neutral-800",
];

function WorkCard({ slug, title, tags, primaryImage, hoverImage, track = false }: WorkCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (typeof window !== "undefined") window.__hideCursorFollower?.(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (typeof window !== "undefined") window.__hideCursorFollower?.(false);
  };

  const sizes = track
    ? "(max-width: 767px) 82vw, (max-width: 1023px) 54vw, (max-width: 1279px) 36vw, 568px"
    : "(max-width: 639px) 92vw, (max-width: 1023px) 48vw, 32vw";

  return (
    <Link
      href={`/work/${slug}`}
      className={
        track
          ? "group flex shrink-0 w-[82vw] flex-col md:w-[54vw] lg:w-[36vw] xl:w-122"
          : "group flex w-full flex-col"
      }
    >
      <motion.div
        ref={containerRef}
        initial="rest"
        animate="rest"
        whileHover="hover"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative aspect-4/3 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50"
      >
        {/* Tags */}
        <div className="absolute left-2 top-2 z-20 flex flex-wrap gap-1.5">
          {tags.map((tag, i) => (
            <span
              key={`${title}-${tag}`}
              className={`rounded-md px-2.5 py-1 text-xs font-normal leading-none ${tagStyles[i % tagStyles.length]}`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Primary image */}
        <motion.div
          className="absolute inset-0"
          variants={{
            rest: { opacity: 1, scale: 1, y: 0 },
            hover: { opacity: 0, scale: 1.045, y: -10 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={primaryImage}
            alt={`${title} project preview`}
            fill
            sizes={sizes}
            className="object-cover"
          />
        </motion.div>

        {/* Hover image */}
        <motion.div
          className="absolute inset-0 opacity-0"
          variants={{
            rest: { opacity: 0, scale: 1.08, y: 18 },
            hover: { opacity: 1, scale: 1.01, y: 0 },
          }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src={hoverImage}
            alt=""
            aria-hidden="true"
            fill
            sizes={sizes}
            className="object-cover"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/10 via-transparent to-black/5 opacity-70" />

        {/* Cursor bubble */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="absolute flex items-center justify-center rounded-full bg-black"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`,
              transform: "translate(-50%, -50%)",
              width: isHovering ? "120px" : "0px",
              height: isHovering ? "120px" : "0px",
              transition: "width 0.5s ease-out, height 0.5s ease-out",
            }}
          >
            {isHovering && (
              <span className="text-lg font-semibold text-white">View</span>
            )}
          </div>
        </motion.div>
      </motion.div>

      <h3 className="mt-3 text-sm text-neutral-900 [font-family:var(--font-karigaar)]">
        {title}
      </h3>
    </Link>
  );
}

export default WorkCard;
