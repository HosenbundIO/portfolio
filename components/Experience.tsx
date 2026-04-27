const EXPERIENCES = [
  {
    role: "IT Service Desk Specialist",
    company: "Helmut-Schmidt-Universität / Universität der Bundeswehr — Rechenzentrum",
    location: "Hamburg",
    period: "Jan 2025 – Jan 2026",
    bullets: [
      {
        title: "IT Support & Infrastructure",
        body: "Independent first and second-level support with focus on Active Directory/EntraID, network infrastructure, and Exchange — including diagnosis and resolution of complex escalated cases.",
      },
      {
        title: "Software Development & User Management",
        body: "Improved maintainability of a production legacy PHP system through targeted refactoring and implementation of new features for user management automation.",
      },
      {
        title: "Process Optimization & Documentation",
        body: "Increased team efficiency by standardizing core processes and creating technical documentation, reducing onboarding times.",
      },
    ],
    tags: ["Active Directory", "EntraID", "PHP", "Exchange", "Networking"],
  },
  {
    role: "Apprenticeship — Fachinformatiker Anwendungsentwicklung",
    company: "Helmut-Schmidt-Universität — Hamburg",
    location: "Hamburg",
    period: "Sep 2022 – Jan 2025",
    grade: "Vocational School (Bilingual) 1.0 · IHK 2.1",
    bullets: [
      {
        title: "Fullstack Engineering & Process Digitalization",
        body: "End-to-end development of high-performance custom software (Node.js, React.js, TypeScript) for automating technical processes at the Faculty of Mechanical Engineering, plus analysis and modernization of existing legacy applications.",
      },
      {
        title: "Immersive Software Engineering (VR/AR)",
        body: "Development of a Unity-based application for 3D modeling of components and building complexes to improve prototyping efficiency through virtual interaction models.",
      },
    ],
    tags: ["Node.js", "React.js", "TypeScript", "Unity", "VR/AR"],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              02 — Experience
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
            Work History
          </h2>
        </div>

        <div className="relative flex flex-col gap-6">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" style={{ left: "11px" }} />

          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative md:pl-10">
              <div
                className="absolute hidden md:flex items-center justify-center w-6 h-6 rounded-full bg-card border border-border shadow-sm"
                style={{ left: 0, top: "22px" }}
              >
                <div className="w-2 h-2 rounded-full bg-foreground/60" />
              </div>

              <div className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-foreground/20 transition-colors duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h3 className="text-base font-bold text-foreground leading-snug">
                    {exp.role}
                  </h3>
                  <span className="shrink-0 text-[11px] font-mono text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
                {exp.grade && (
                  <p className="text-[11px] font-mono text-muted-foreground mb-4">
                    Grade: {exp.grade}
                  </p>
                )}

                <ul className="flex flex-col gap-3 mt-4 mb-5">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex gap-2.5">
                      <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-foreground/40" />
                      <span className="text-sm text-foreground/80 leading-relaxed">
                        <span className="font-semibold text-foreground">{b.title}: </span>
                        {b.body}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono font-medium px-2.5 py-1 rounded-full bg-background border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
