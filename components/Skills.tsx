"use client";

import {
  Atom,
  Blocks,
  Braces,
  Cloud,
  Container,
  Database,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  Leaf,
  Server,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";

type CloudItem = {
  name: string;
  x: number;
  y: number;
  sz: number;
  dur: number;
  dl: number;
  icon: React.ComponentType<{ className?: string }>;
  label?: string;
};

const CLOUD: CloudItem[] = [
  { name: "JavaScript", x: 16, y: -20, sz: 60, dur: 6.4, dl: 0, icon: FileCode2, label: "JS" },
  { name: "TypeScript", x: -86, y: 20, sz: 56, dur: 7.2, dl: 1.2, icon: Braces, label: "TS" },
  { name: "React", x: 110, y: -64, sz: 56, dur: 8.2, dl: 0.6, icon: Atom },
  { name: "Next.js", x: -24, y: -96, sz: 44, dur: 6.7, dl: 2.2, icon: Layers },
  { name: "Node.js", x: 154, y: 24, sz: 44, dur: 7.3, dl: 1, icon: Server },
  { name: "Python", x: 56, y: 94, sz: 44, dur: 8.8, dl: 1.9, icon: Workflow },
  { name: "HTML", x: -118, y: -46, sz: 40, dur: 6.9, dl: 3, icon: Globe },
  { name: "CSS", x: -84, y: 88, sz: 36, dur: 8.1, dl: 0.4, icon: Blocks },
  { name: "Tailwind", x: 24, y: 120, sz: 36, dur: 7.4, dl: 2.7, icon: Cloud },
  { name: "MongoDB", x: -156, y: 10, sz: 36, dur: 6.2, dl: 1.1, icon: Leaf },
  { name: "MySQL", x: 166, y: -36, sz: 36, dur: 8.3, dl: 3.6, icon: Database },
  { name: "Git", x: -130, y: -90, sz: 36, dur: 6.8, dl: 1.7, icon: GitBranch },
  { name: "Docker", x: 92, y: -110, sz: 34, dur: 8.9, dl: 2.9, icon: Container },
  { name: "Azure", x: -96, y: 106, sz: 32, dur: 6.6, dl: 0.8, icon: Wrench },
  { name: "LangChain", x: 146, y: 90, sz: 32, dur: 7.1, dl: 3.9, icon: Terminal },
];

function TechBadge({ name, x, y, sz, dur, dl, icon: Icon, label }: CloudItem) {
  const base: React.CSSProperties = {
    position: "absolute",
    width: sz,
    height: sz,
    left: `calc(50% + ${x}px - ${sz / 2}px)`,
    top: `calc(50% + ${y}px - ${sz / 2}px)`,
    borderRadius: 14,
    boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
    animation: `tech-float ${dur}s ease-in-out infinite ${dl}s`,
  };

  return (
    <div
      style={{
        ...base,
        background: "var(--card)",
        border: "1px solid var(--border)",
        color: "var(--foreground)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: sz >= 50 ? 4 : 2,
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        userSelect: "none",
      }}
      title={name}
    >
      <Icon className={sz >= 50 ? "w-6 h-6" : sz >= 42 ? "w-5 h-5" : "w-4 h-4"} />
      {label ? (
        <span className="font-mono text-[10px] font-semibold tracking-tight leading-none">{label}</span>
      ) : null}
    </div>
  );
}

// ─── Category section ─────────────────────────────────────────────────────────
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Languages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6L3 12l4 6" /><path d="M17 6l4 6-4 6" /><path d="M14 4l-4 16" />
    </svg>
  ),
  Frontend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 9h20M8 17v2M16 17v2M6 19h12" />
    </svg>
  ),
  Backend: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="3" y="4" width="18" height="6" rx="1.5" /><rect x="3" y="13" width="18" height="6" rx="1.5" />
      <circle cx="17.5" cy="7"  r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="7"  r="1" fill="currentColor" stroke="none" />
      <circle cx="17.5" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="14.5" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  Databases: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <ellipse cx="12" cy="6" rx="9" ry="4" />
      <path d="M3 6v6c0 2.2 4 4 9 4s9-1.8 9-4V6" />
      <path d="M3 12v6c0 2.2 4 4 9 4s9-1.8 9-4v-6" />
    </svg>
  ),
  "Tools & Infra": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="18" rx="2" /><path d="M2 7h20M6 12l3 3-3 3M13 18h5" />
    </svg>
  ),
  Other: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="8"  r="2" /><circle cx="19" cy="8"  r="2" />
      <circle cx="5" cy="16" r="2" /><circle cx="19" cy="16" r="2" />
      <line x1="6.8"  y1="9.2"  x2="9.8"  y2="11"   />
      <line x1="14.2" y1="11"   x2="17.2" y2="9.2"   />
      <line x1="6.8"  y1="14.8" x2="9.8"  y2="13"    />
      <line x1="14.2" y1="13"   x2="17.2" y2="14.8"  />
    </svg>
  ),
};

const SKILL_GROUPS = [
  { category: "Languages",    skills: ["JavaScript", "TypeScript", "Python"] },
  { category: "Frontend",     skills: ["React.js", "Next.js", "TailwindCSS", "HTML", "CSS"] },
  { category: "Backend",      skills: ["Node.js", "Express.js", "Flask"] },
  { category: "Databases",    skills: ["MySQL", "MongoDB", "ChromaDB"] },
  { category: "Tools & Infra",skills: ["Git", "Docker", "Azure", "EntraID"] },
  { category: "Other",        skills: ["LangChain", "Unity (VR/AR)", "PHP"] },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              01 — Skills
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
            Technical Stack
          </h2>
          <p className="text-muted-foreground text-base mt-3 max-w-md mx-auto">
            Built through hands-on projects, a bilingual apprenticeship, and continuous learning.
          </p>
        </div>

        {/* Floating tech cloud */}
        <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
          <svg
            viewBox="0 0 640 340"
            className="absolute inset-0 w-full h-full"
            aria-hidden="true"
          >
            <g fill="none" stroke="currentColor" className="text-foreground/10">
              <path d="M189 216c-24 0-43-19-43-43 0-22 16-40 37-43 6-37 39-65 78-65 31 0 58 18 71 44 8-5 18-8 28-8 26 0 47 19 50 44 20 4 35 22 35 43 0 25-20 45-45 45H189z" strokeWidth="2" />
              <path d="M226 248h194" strokeWidth="1.5" />
              <path d="M208 262h229" strokeWidth="1.5" />
            </g>
          </svg>
          {CLOUD.map((item) => (
            <TechBadge key={item.name} {...item} />
          ))}
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="bg-card border border-border rounded-2xl p-5 shadow-sm hover:border-foreground/20 transition-colors duration-200"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-5 h-5 text-muted-foreground shrink-0">
                  {CATEGORY_ICONS[group.category]}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground/80">
                  {group.category}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-background border border-border text-foreground/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certificate */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-3 bg-card border border-border rounded-xl px-4 py-2.5 shadow-sm">
            <svg viewBox="0 0 20 20" className="w-4 h-4 text-muted-foreground shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
              <path d="M10 2l2 5.5 6 .5-4.5 4 1.5 6L10 15l-5 3 1.5-6L2 8l6-.5z" />
            </svg>
            <span className="text-xs font-mono text-foreground/80">PCAP — Certified Python Associate Programmer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
