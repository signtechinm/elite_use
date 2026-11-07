"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = ref.current?.parentElement;
    if (!hero || hero.parentElement?.id !== "main-content" || hero.parentElement.querySelector("section") !== hero) return;

    const setParallax = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - .5;
      const y = (event.clientY - bounds.top) / bounds.height - .5;
      document.documentElement.style.setProperty("--hero-parallax-far-x", `${x * 10}px`);
      document.documentElement.style.setProperty("--hero-parallax-far-y", `${y * 8}px`);
      document.documentElement.style.setProperty("--hero-parallax-near-x", `${x * 28}px`);
      document.documentElement.style.setProperty("--hero-parallax-near-y", `${y * 22}px`);
    };
    const resetParallax = () => ["--hero-parallax-far-x", "--hero-parallax-far-y", "--hero-parallax-near-x", "--hero-parallax-near-y"].forEach((name) => document.documentElement.style.setProperty(name, "0px"));

    hero.addEventListener("pointermove", setParallax);
    hero.addEventListener("pointerleave", resetParallax);
    return () => { hero.removeEventListener("pointermove", setParallax); hero.removeEventListener("pointerleave", resetParallax); };
  }, []);

  return <motion.div ref={ref} className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
