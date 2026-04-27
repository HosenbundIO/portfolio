"use client";

import { ArrowRight, Download } from "lucide-react";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function highlightLine(line: string): string {
  const keywords = ["const", "let", "var", "function", "return"];
  const booleans = ["true", "false"];
  let result = "";
  let i = 0;

  while (i < line.length) {
    if (line[i] === '"') {
      let j = i + 1;
      while (j < line.length && line[j] !== '"') j++;
      const str = line.slice(i, j + 1);
      result += `<span style="color:#9ece6a">${escapeHtml(str)}</span>`;
      i = j + 1;
      continue;
    }

    let matched = false;

    for (const kw of keywords) {
      if (
        line.slice(i).startsWith(kw) &&
        (i + kw.length >= line.length || !/\w/.test(line[i + kw.length]))
      ) {
        result += `<span style="color:#bb9af7">${kw}</span>`;
        i += kw.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    for (const bool of booleans) {
      if (
        line.slice(i).startsWith(bool) &&
        (i + bool.length >= line.length || !/\w/.test(line[i + bool.length]))
      ) {
        result += `<span style="color:#ff9e64">${bool}</span>`;
        i += bool.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    const rest = line.slice(i);
    const keyMatch = rest.match(/^([a-zA-Z_]\w*)(\s*:)/);
    if (keyMatch && (i === 0 || !/\w/.test(line[i - 1]))) {
      result += `<span style="color:#7dcfff">${escapeHtml(keyMatch[1])}</span>`;
      result += `<span style="color:#89ddff">${escapeHtml(keyMatch[2])}</span>`;
      i += keyMatch[0].length;
      continue;
    }

    if ("{}[]".includes(line[i])) {
      result += `<span style="color:#89ddff">${escapeHtml(line[i])}</span>`;
      i++;
      continue;
    }

    result += escapeHtml(line[i]);
    i++;
  }

  return result;
}

const FLOATING_BADGES = [
  {
    label: "⚡ Full-Stack Dev",
    style: {
      top: "0px",
      right: "-8px",
      animation: "float 3s ease-in-out infinite",
    },
  },
  {
    label: "⬡ AI · RAG",
    style: {
      bottom: "16px",
      left: "-8px",
      animation: "float 3.5s ease-in-out infinite 0.8s",
    },
  },
  {
    label: "◈ Security Research",
    style: {
      bottom: "0px",
      right: "64px",
      animation: "float 4s ease-in-out infinite 1.5s",
    },
  },
];

const METEORS = [
  { top: "8%", left: "5%", delay: "0s", duration: "6s" },
  { top: "25%", left: "35%", delay: "2.5s", duration: "5s" },
  { top: "3%", left: "65%", delay: "4.5s", duration: "7s" },
  { top: "50%", left: "75%", delay: "1s", duration: "5.5s" },
  { top: "70%", left: "15%", delay: "3.5s", duration: "6.5s" },
  { top: "15%", left: "85%", delay: "6s", duration: "8s" },
];

const CODE_SNIPPET = `const developer = {
  name: "David",
  role: "Developer",
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "TailwindCSS",
    "PostgreSQL",
    "Python"
  ],
  isAvailable: true
};`;

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]" />

      {METEORS.map((m, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: m.top,
            left: m.left,
            width: "1px",
            height: "70px",
            background:
              "linear-gradient(to top, rgba(255,255,255,0.65), transparent)",
            animation: `meteor ${m.duration} linear infinite`,
            animationDelay: m.delay,
            transform: "rotate(-45deg)",
            opacity: 0,
          }}
        />
      ))}

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 max-w-7xl">
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 w-fit shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              Available
            </span>
          </div>

          <div className="relative pb-10">
            {FLOATING_BADGES.map((badge) => (
              <div
                key={badge.label}
                className="absolute z-10 hidden sm:block"
                style={badge.style}
              >
                <span className="bg-card border border-border text-muted-foreground text-[10px] uppercase tracking-widest font-bold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                  {badge.label}
                </span>
              </div>
            ))}

            <h2 className="text-xl md:text-2xl font-medium text-foreground/90">
              Hello, I&apos;m
            </h2>
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 drop-shadow-2xl">
              DAVID.
            </h1>
          </div>

          <div className="h-10 flex items-center">
            <div className="inline-flex items-center bg-card border border-border px-5 py-2 rounded-full shadow-sm">
              <span className="text-sm font-mono text-foreground/90 animate-typewriter inline-block">
                Software Developer
              </span>
            </div>
          </div>

          <p className="text-muted-foreground text-base md:text-lg max-w-md leading-relaxed">
            Crafting premium digital experiences through minimal design and
            high-performance code.
          </p>

          {/* Pill buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
            <button className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-transparent border border-foreground/60 text-foreground px-8 py-3 rounded-full font-bold text-sm transition-all hover:border-foreground hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]">
              <a href="#education">LEARN MORE</a>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-foreground text-background px-8 py-3 rounded-full font-bold text-sm transition-all hover:bg-foreground/90 hover:shadow-[0_0_20px_rgba(255,255,255,0.12)]">
              <a href="https://docs.google.com/document/d/1t3Lrk2rT-XXhAAuV8EtXnYTOti6X2FhTmdB72T_yPEw/edit?usp=sharing">GET RESUME</a>
              <Download className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative group lg:col-span-5 w-full max-w-xl mx-auto lg:max-w-none">
          <div className="absolute -inset-4 bg-gradient-to-r from-foreground/5 to-transparent blur-3xl opacity-20 transition-opacity group-hover:opacity-40" />

          <div
            className="relative rounded-2xl p-px transform transition-all duration-500 hover:scale-[1.02] lg:hover:rotate-1"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)",
              boxShadow: "0 0 40px rgba(255,255,255,0.05)",
            }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl" style={{ background: "#1a1b26" }}>
              <div className="relative flex items-center justify-center px-4 py-3 border-b" style={{ background: "#16161e", borderColor: "#2a2b3d" }}>
                <div className="absolute left-4 flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>
                <span className="text-[11px] font-mono tracking-widest" style={{ color: "#565f89" }}>
                  developer.js
                </span>
              </div>

              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto min-h-[300px]">
                <pre>
                  <code>
                    {CODE_SNIPPET.split("\n").map((line, i) => (
                      <div key={i} className="flex whitespace-pre">
                        <span
                          className="w-6 select-none mr-4 text-[10px] sm:text-xs shrink-0"
                          style={{ color: "#3b4261" }}
                        >
                          {i + 1}
                        </span>
                        <span
                          style={{ color: "#a9b1d6" }}
                          dangerouslySetInnerHTML={{
                            __html: highlightLine(line),
                          }}
                        />
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
