"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (!hasAnimated) return;
    const animation = animate(count, target, { duration: 2, ease: "easeOut" });
    return animation.stop;
  }, [hasAnimated, count, target]);

  return (
    <motion.span
      ref={ref}
      onViewportEnter={() => setHasAnimated(true)}
      viewport={{ once: true }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
}

export function WinRateStat() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
        >
          {/* Our Win Rate */}
          <div className="text-center">
            <div className="text-7xl md:text-8xl font-bold text-[#F59E0B]">
              <AnimatedCounter target={75} suffix="%" />
            </div>
            <p className="text-xl text-muted-foreground mt-2">
              Our Clients&apos; Win Rate
            </p>
          </div>

          {/* VS */}
          <div className="text-3xl text-muted-foreground">vs.</div>

          {/* Industry Average */}
          <div className="text-center">
            <div className="text-7xl md:text-8xl font-bold text-muted-foreground">
              <AnimatedCounter target={45} suffix="%" />
            </div>
            <p className="text-xl text-muted-foreground mt-2">
              Industry Average
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-2xl font-semibold text-center mt-12"
        >
          = Protect $40K+ In Revenue Annually
        </motion.p>
      </div>
    </section>
  );
}
