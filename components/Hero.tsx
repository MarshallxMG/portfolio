"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { roundTo } from "@/lib/utils";
import Typewriter from "./Typewriter";
import MagneticButton from "./MagneticButton";

const chips = ["SELECT * FROM insights", "spark.read.parquet()", "df.groupBy('region')", "model.predict(X)", "KAFKA → SPARK → DW"];

export default function Hero() {
  const glow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (glow.current) {
        glow.current.style.background = `radial-gradient(420px circle at ${e.clientX}px ${e.clientY}px, rgba(59,107,255,0.12), transparent 70%)`;
      }
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const name = profile.name.split("");

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <div ref={glow} className="pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div className="absolute inset-0 bg-grid [background-size:46px_46px] opacity-[0.25] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.7 }}
          className="mx-auto mb-7 inline-flex items-center gap-2 rounded-full border border-glow/25 bg-white/5 px-4 py-1.5 font-mono text-xs text-glow/80"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
          </span>
          Available · {profile.location}
        </motion.div>

        <h1 className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl md:text-8xl">
          <span className="sr-only">{profile.name}</span>
          <span aria-hidden className="block text-white">
            {name.map((c, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 1.8 + idx * 0.04, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block"
                style={{ whiteSpace: c === " " ? "pre" : "normal" }}
              >
                {c}
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="mt-6 font-display text-xl font-semibold sm:text-2xl md:text-3xl"
        >
          <Typewriter words={["Junior Data Engineer", "Big Data Engineer", "ML Enthusiast", "ETL Pipeline Builder"]} />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.7, duration: 0.7 }}
          className="mx-auto mt-6 max-w-xl text-balance font-body text-base text-white/60 sm:text-lg"
        >
          Building scalable data systems, ETL/ELT pipelines, and machine-learning
          solutions at {profile.company}.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.9, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#projects"
            className="rounded-full bg-gradient-to-r from-electric to-neon px-7 py-3 font-mono text-sm font-semibold text-white shadow-neon"
          >
            View Work
          </MagneticButton>
          <MagneticButton
            href="#contact"
            className="rounded-full border border-glow/30 bg-white/5 px-7 py-3 font-mono text-sm text-white/85"
          >
            Get in Touch
          </MagneticButton>
          <div className="flex items-center gap-1">
            {[
              { icon: Github, url: profile.links.github },
              { icon: Linkedin, url: profile.links.linkedin },
              { icon: Mail, url: `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` },
            ].map(({ icon: Icon, url }, idx) => (
              <MagneticButton key={idx} href={url} className="rounded-full border border-white/10 p-3 text-white/70 hover:text-cyan">
                <Icon size={18} />
              </MagneticButton>
            ))}
          </div>
        </motion.div>
      </div>

      {/* floating code chips */}
      {chips.map((c, idx) => (
        <motion.div
          key={c}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 3 + idx * 0.2 }}
          className="pointer-events-none absolute hidden font-mono text-xs text-glow/40 md:block animate-float"
          style={{
            top: `${18 + idx * 14}%`,
            left: idx % 2 === 0 ? `${6 + idx * 2}%` : "auto",
            right: idx % 2 === 1 ? `${6 + idx}%` : "auto",
            animationDelay: `${roundTo(idx * 0.7, 1)}s`,
          }}
        >
          {`{ ${c} }`}
        </motion.div>
      ))}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        aria-label="Scroll to about"
        data-cursor
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
