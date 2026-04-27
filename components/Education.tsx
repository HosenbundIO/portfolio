const EDUCATION = [
  {
    degree: "B.Sc. Wirtschaftsinformatik (Business Informatics)",
    institution: "University of Göttingen",
    location: "Göttingen, Niedersachsen",
    period: "Oct 2025 – Present",
    details: ["Current GPA: 1.4", "Focus: Software Engineering"],
  },
  {
    degree: "Fachhochschulreife",
    institution: "ITECH Abendschule Hamburg",
    location: "Hamburg",
    period: "Sep 2022 – Jun 2025",
    details: ["Grade: 1.5"],
  },
];

const AWARDS = [
  {
    title: "Landesstipendium Niedersachsen",
    subtitle: "State Merit Scholarship — Lower Saxony",
    location: "Göttingen, Niedersachsen",
    period: "Dec 2025",
  },
  {
    title: "IT-Stipendium Heise Online / IT-Fellows",
    subtitle: "Merit scholarship for outstanding IT talents",
    location: "Göttingen, Niedersachsen",
    period: "Dec 2025 – May 2026",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 overflow-hidden scroll-mt-24"
    >
      <div className="absolute inset-0 bg-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              03 — Education
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
            Academic Background
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">
              Degrees
            </p>
            {EDUCATION.map((edu, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-foreground/20 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                  <h3 className="text-sm font-bold text-foreground leading-snug">
                    {edu.degree}
                  </h3>
                  <span className="shrink-0 text-[11px] font-mono text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-full">
                    {edu.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {edu.institution} · {edu.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.details.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-background border border-border text-foreground/70"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground mb-1">
              Awards & Scholarships
            </p>
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-foreground/20 transition-colors duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
                  <h3 className="text-sm font-bold text-foreground">
                    {award.title}
                  </h3>
                  <span className="shrink-0 text-[11px] font-mono text-muted-foreground bg-background border border-border px-2.5 py-1 rounded-full">
                    {award.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{award.subtitle}</p>
                <p className="text-[11px] font-mono text-muted-foreground mt-1">
                  {award.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
