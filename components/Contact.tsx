"use client";

import { useState } from "react";
import { Send, CheckCircle2, Mail, MapPin } from "lucide-react";

type Status = "idle" | "sending" | "sent";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("sending");

    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );

    setTimeout(() => {
      window.open(
        `mailto:david.ivanov77@gmail.com?subject=${subject}&body=${body}`,
        "_blank"
      );
      setStatus("sent");
    }, 700);
  };

  const inputBase =
    "w-full bg-background border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all duration-200 focus:border-foreground/40 focus:ring-2 focus:ring-foreground/10";

  return (
    <section id="contact" className="relative py-24 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-4 shadow-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
                05 — Contact
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-10 max-w-sm">
              Whether you have a project in mind, a collaboration opportunity, or just want to say hello — my inbox is open.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:david.ivanov77@gmail.com"
                className="group flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-sm hover:border-foreground/30 transition-colors duration-200"
              >
                <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground mb-0.5">Email</p>
                  <p className="text-sm font-mono text-foreground/80 group-hover:text-foreground transition-colors">
                    david.ivanov77@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card border border-border rounded-2xl px-5 py-4 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground mb-0.5">Location</p>
                  <p className="text-sm font-mono text-foreground/80">Göttingen, Germany</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
                <CheckCircle2 className="w-12 h-12 text-muted-foreground" />
                <h3 className="text-lg font-bold text-foreground">Message sent!</h3>
                <p className="text-sm text-muted-foreground max-w-xs">
                  Your email client should have opened. I&apos;ll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-2 text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="David Ivanov"
                      className={inputBase}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    className={`${inputBase} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-bold text-sm transition-all hover:bg-foreground/90 disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                >
                  {status === "sending" ? (
                    <>
                      <span className="inline-block w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
