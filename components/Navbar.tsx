"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Command } from "lucide-react";
import { navItems } from "@/lib/data";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    navItems.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) obs.observe(el);
    });

    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
      >
        <nav
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-3 transition-all duration-300 ${
            scrolled ? "glass shadow-glass" : "border border-transparent"
          }`}
        >
          <a href="#home" className="font-display text-lg font-bold tracking-tight" data-cursor>
            <span className="text-gradient">Manas</span>
            <span className="text-white/50">.</span>
            <span className="text-white">Goel</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((n) => (
              <li key={n.id}>
                <a
                  href={`#${n.id}`}
                  data-cursor
                  className={`rounded-lg px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                    active === n.id ? "text-cyan" : "text-white/55 hover:text-white"
                  }`}
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen(true)}
            data-cursor
            className="flex items-center gap-2 rounded-lg border border-glow/20 bg-white/5 px-3 py-1.5 font-mono text-xs text-white/70 transition-colors hover:border-glow/50 hover:text-white"
          >
            <Command size={13} />
            <span className="hidden sm:inline">K</span>
          </button>
        </nav>
      </motion.header>

      <CommandPalette open={open} setOpen={setOpen} />
    </>
  );
}
