"use client";

import { useEffect, useState, MouseEvent } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  // magnetic offset routed through Framer motion values so it never
  // collides with the entrance scale/opacity animation on the same element
  const x = useSpring(0, { stiffness: 220, damping: 16 });
  const y = useSpring(0, { stiffness: 220, damping: 16 });

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onMove = (e: MouseEvent<HTMLButtonElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * 0.3);
    y.set((e.clientY - r.top - r.height / 2) * 0.3);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onMouseMove={onMove}
          onMouseLeave={reset}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ x, y }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          data-cursor
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-glow/30 bg-ink-700/80 text-cyan shadow-neon backdrop-blur transition-colors hover:border-cyan hover:text-white"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
