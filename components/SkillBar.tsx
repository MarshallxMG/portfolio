"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs">
        <span className="text-white/80">{name}</span>
        <span className="text-cyan">{value}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/8">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-electric via-neon to-cyan"
          initial={{ width: 0 }}
          animate={inView ? { width: `${value}%` } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
