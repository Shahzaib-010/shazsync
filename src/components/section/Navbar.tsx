"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { socialLinks } from "./socialLinks";

const navItems = [
    { label: "Home", href: "/" },
    { label: "Studio", href: "/studio" },
    { label: "Work", href: "/work" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isPastHero, setIsPastHero] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsPastHero(window.scrollY > window.innerHeight - 80);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <motion.nav
            animate={{
                backgroundColor: isPastHero ? "rgba(255, 255, 255, 0.96)" : "rgba(255, 255, 255, 0)",
                boxShadow: isPastHero ? "0 12px 34px rgba(0, 0, 0, 0.08)" : "0 0 0 rgba(0, 0, 0, 0)",
            }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed left-0 top-0 z-50 flex h-16 w-full items-center"
        >
            <div className="relative mx-auto flex w-[90%] sm:w-[95%] items-center justify-between">
                <Link href="/" aria-label="Shazsync home" className="inline-flex">
                    <Image
                        src="/shazsynclogo.svg"
                        alt="Shazsync"
                        width={130}
                        height={50}
                        priority
                    />
                </Link>

                <div className="relative flex justify-end">
                    <motion.button
                        type="button"
                        aria-label="Open menu"
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((current) => !current)}
                        className="relative z-20 grid size-8 place-items-center rounded-full border border-white/20 bg-neutral-950 text-white shadow-[0_14px_34px_rgba(0,0,0,0.22)] transition-colors hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 sm:size-9"
                        whileTap={{ scale: 0.94 }}
                    >
                        <Plus size={16} strokeWidth={1.8} />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen ? (
                    <>
                        <motion.button
                            type="button"
                            aria-label="Close menu backdrop"
                            className="fixed inset-0 z-40 cursor-default bg-black/30 backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.aside
                            key="menu-panel"
                            initial={{
                                opacity: 0,
                                scaleX: 0.08,
                                scaleY: 0.06,
                                borderRadius: 999,
                            }}
                            animate={{
                                opacity: 1,
                                scaleX: 1,
                                scaleY: 1,
                                borderRadius: 44,
                            }}
                            exit={{
                                opacity: 0,
                                scaleX: 0.08,
                                scaleY: 0.06,
                                borderRadius: 999,
                            }}
                            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                            style={{ originX: 1, originY: 0 }}
                            className="fixed right-0 top-0 z-50 flex h-svh w-full flex-col overflow-hidden bg-white px-5 pb-5 pt-6 shadow-[0_30px_90px_rgba(0,0,0,0.18)] sm:px-6 sm:pb-6 sm:pt-7 md:right-3 md:top-3 md:h-[calc(100svh-24px)] md:w-[52vw] md:rounded-[44px] md:px-9 md:pb-9 md:pt-10 xl:w-[49vw]"
                        >
                            <motion.button
                                type="button"
                                aria-label="Close menu"
                                onClick={() => setIsOpen(false)}
                                className="absolute right-5 top-5 z-30 grid size-12 place-items-center rounded-full bg-neutral-100 text-black transition-colors hover:bg-neutral-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 sm:size-14 md:right-4 md:top-4 md:size-16"
                                initial={{ opacity: 0, scale: 0.7, rotate: -45 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 0.7, rotate: 45 }}
                                transition={{ duration: 0.22, delay: 0.16, ease: "easeOut" }}
                                whileTap={{ scale: 0.94 }}
                            >
                                <X size={24} strokeWidth={2} />
                            </motion.button>

                            <motion.ul
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                variants={{
                                    visible: {
                                        transition: { staggerChildren: 0.055, delayChildren: 0.18 },
                                    },
                                    hidden: {
                                        transition: { staggerChildren: 0.035, staggerDirection: -1 },
                                    },
                                }}
                                className="flex flex-col gap-1 pr-4 sm:pr-8 md:pr-20"
                            >
                                {navItems.map((item) => (
                                    <motion.li
                                        key={item.label}
                                        variants={{
                                            hidden: { opacity: 0, x: 28, filter: "blur(8px)" },
                                            visible: { opacity: 1, x: 0, filter: "blur(0px)" },
                                        }}
                                        transition={{ duration: 0.28, ease: "easeOut" }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="block w-fit text-[clamp(2.6rem,10vw,4.25rem)] font-semibold leading-[1.05] tracking-normal text-black transition-transform duration-300 hover:translate-x-2 md:text-[clamp(2.1rem,3vw,4.25rem)]"
                                        >
                                            {item.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <div className="mt-auto flex flex-col gap-6">
                                <motion.div
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.28, delay: 0.28, ease: "easeOut" }}
                                    className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
                                >
                                    <div className="flex flex-wrap gap-3">
                                        {socialLinks.map((item) => {
                                            const Icon = item.icon;

                                            return (
                                                <a
                                                    key={item.label}
                                                    href={item.href}
                                                    aria-label={item.label}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="grid size-12 place-items-center rounded-full border border-neutral-200 bg-white text-black transition-colors hover:bg-neutral-100"
                                                >
                                                    <Icon size={21} strokeWidth={2} />
                                                </a>
                                            );
                                        })}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 12 }}
                                    transition={{ duration: 0.34, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative min-h-44 overflow-hidden rounded-[28px] bg-black p-6 text-white sm:min-h-52 md:min-h-56"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="relative z-10 inline-flex items-center gap-1 text-sm font-medium"
                                    >
                                        Contact
                                        <ArrowUpRight size={18} strokeWidth={2} />
                                    </Link>

                                    <video
                                        src="/videos/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute inset-0 h-full w-full object-cover rounded-[28px] opacity-60"
                                    />
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.24, delay: 0.4, ease: "easeOut" }}
                                    className="flex items-center gap-6 text-sm text-neutral-500"
                                >
                                    <Link href="/privacy" onClick={() => setIsOpen(false)} className="hover:text-black">
                                        Privacy Policy
                                    </Link>
                                    <Link href="/terms" onClick={() => setIsOpen(false)} className="hover:text-black">
                                        Terms of use
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.aside>
                    </>
                ) : null}
            </AnimatePresence>
        </motion.nav>
    );
}

export default Navbar;
