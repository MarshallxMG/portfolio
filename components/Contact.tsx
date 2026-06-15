"use client";

import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { profile } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type Errors = { name?: string; email?: string; message?: string };

function rippleEffect(e: MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget;
  const circle = document.createElement("span");
  const d = Math.max(btn.clientWidth, btn.clientHeight);
  const rect = btn.getBoundingClientRect();
  circle.style.width = circle.style.height = `${d}px`;
  circle.style.left = `${e.clientX - rect.left - d / 2}px`;
  circle.style.top = `${e.clientY - rect.top - d / 2}px`;
  circle.className = "ripple";
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

const EMAIL_RE = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ALLOWED_DOMAINS = [
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com",
  "yahoo.com", "yahoo.co.in", "icloud.com", "proton.me", "protonmail.com",
  "rediffmail.com", "zoho.com",
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const validate = (): Errors => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    const email = form.email.trim().toLowerCase();
    if (!email) e.email = "Please enter your email.";
    else if (!EMAIL_RE.test(email)) e.email = "Please enter a valid email address.";
    else if (!ALLOWED_DOMAINS.includes(email.split("@")[1])) {
      e.email = "Please use a real email provider (gmail, outlook, yahoo, etc).";
    }
    if (!form.message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const submit = (e: MouseEvent<HTMLButtonElement>) => {
    rippleEffect(e);
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length > 0) return;
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${subject}&body=${body}`,
      "_blank",
      "noopener,noreferrer"
    );
    setSent(true);
  };

  const update = (key: keyof typeof form, value: string) => {
    setForm({ ...form, [key]: value });
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
    if (sent) setSent(false);
  };

  const fieldBase =
    "w-full rounded-xl border bg-ink-700/60 px-4 py-3 font-mono text-sm text-white outline-none transition-colors placeholder:text-white/30";
  const cls = (hasError?: string) =>
    `${fieldBase} ${hasError ? "border-red-500/70 focus:border-red-500" : "border-white/10 focus:border-glow/60"}`;

  const ErrorMsg = ({ msg }: { msg?: string }) => (
    <AnimatePresence>
      {msg && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-1.5 font-mono text-xs text-red-400"
        >
          {msg}
        </motion.p>
      )}
    </AnimatePresence>
  );

  const contactLinks = [
    { icon: Mail, label: profile.email, href: null as string | null },
    { icon: Phone, label: profile.phone, href: null as string | null },
    { icon: Github, label: "github.com/MarshallxMG", href: profile.links.github },
    { icon: Linkedin, label: "linkedin.com/in/manas-goel", href: profile.links.linkedin },
  ];

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-28 md:py-36">
      <SectionHeading index="09" eyebrow="say_hello" title="Get in Touch" />
      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-balance text-xl text-white/70 md:text-2xl">
            Have a data problem worth solving, or a role in mind? Let&apos;s talk.
          </p>
          <div className="mt-8 space-y-3">
            {contactLinks.map(({ icon: Icon, label, href }) =>
              href ? (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" data-cursor className="group flex items-center gap-3 font-mono text-sm text-white/65 transition-colors hover:text-cyan">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition-colors group-hover:border-glow/50">
                    <Icon size={16} />
                  </span>
                  {label}
                </a>
              ) : (
                <div key={label} className="flex select-text items-center gap-3 font-mono text-sm text-white/65">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                    <Icon size={16} />
                  </span>
                  {label}
                </div>
              )
            )}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass rounded-2xl p-6 shadow-glass">
            <div className="space-y-4">
              <div>
                <input
                  className={cls(errors.name)}
                  placeholder="your name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                />
                <ErrorMsg msg={errors.name} />
              </div>
              <div>
                <input
                  className={cls(errors.email)}
                  placeholder="your email"
                  type="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                />
                <ErrorMsg msg={errors.email} />
              </div>
              <div>
                <textarea
                  className={`${cls(errors.message)} min-h-[120px] resize-none`}
                  placeholder="your message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                />
                <ErrorMsg msg={errors.message} />
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={submit}
                data-cursor
                className="ripple-host relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-electric to-neon px-6 py-3 font-mono text-sm font-semibold text-white shadow-neon"
              >
                {sent ? "Opening Gmail…" : "Send Message"}
                <Send size={16} />
              </motion.button>
            </div>
          </div>
        </Reveal>
      </div>

      <style jsx global>{`
        .ripple-host { position: relative; }
        .ripple {
          position: absolute;
          border-radius: 9999px;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background: rgba(255, 255, 255, 0.4);
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: scale(2.5); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
