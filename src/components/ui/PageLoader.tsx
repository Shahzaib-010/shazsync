"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const LETTERS = "SHAZSYNC".split("");

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Smooth counter 0 → 100 over ~2.2s
    const duration = 2200;
    const step = 16;
    const increments = duration / step;
    let current = 0;

    const interval = setInterval(() => {
      current += 100 / increments;
      if (current >= 100) {
        setCount(100);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, step);

    const exit = setTimeout(() => setVisible(false), 2700);

    return () => {
      clearInterval(interval);
      clearTimeout(exit);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* ── Top half ── */}
          <motion.div
            key="top"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 top-0 z-99999 flex h-1/2 flex-col justify-between bg-neutral-950 px-[2.5%] pb-6 pt-8"
          >
            {/* Top-right label */}
            <div className="flex justify-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="text-[10px] uppercase tracking-[0.3em] text-white/20 font-(--font-sans)"
              >
                Creative Studio
              </motion.span>
            </div>

            {/* Progress bar — bottom edge of top panel, exits with it */}
            <div className="absolute bottom-0 left-0 right-0 h-0.75 bg-white/5">
              <motion.div
                className="h-full bg-orange-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "linear" }}
              />
            </div>

            {/* Staggered letter reveal */}
            <div className="flex items-end gap-0.5 overflow-hidden sm:gap-1">
              {LETTERS.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.08 + i * 0.055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="text-[clamp(2.8rem,8vw,7rem)] font-medium leading-none text-white [font-family:var(--font-karigaar)]"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          </motion.div>


          {/* ── Bottom half ── */}
          <motion.div
            key="bottom"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 z-99999 flex h-1/2 flex-col justify-between bg-neutral-950 px-[2.5%] pb-8 pt-6"
          >
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              className="text-xs text-white/25 font-(--font-sans)"
            >
              Everything is louder when it&apos;s in Sync.
            </motion.p>

            {/* Bottom row: counter right */}
            <div className="flex items-end justify-end">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="tabular-nums leading-none text-white/60 [font-family:var(--font-karigaar)]"
                style={{ fontSize: "clamp(2.6rem,10vw,8.5rem)" }}
              >
                {String(count).padStart(3, "0")}
              </motion.span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
