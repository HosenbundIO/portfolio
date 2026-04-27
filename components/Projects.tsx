const PROJECTS = [
  {
    title: "RAG Fullstack Application",
    subtitle: "Apprenticeship Final Project",
    description:
      "Design and development of a fullstack RAG application for automated indexing of technical documents. Implemented LangChain and ChromaDB for semantic search queries, significantly improving information retrieval accuracy compared to traditional keyword search.",
    tags: ["Express.js", "Node.js", "MySQL", "LangChain", "ChromaDB", "React.js", "OpenAI API"],
    highlight: true,
  },
  {
    title: "SSH/Telnet Honeypot",
    subtitle: "Security Research",
    description:
      "Deployed the industry-standard Cowrie honeypot on an Azure VM for proactive capture of cyberattacks. Built a fullstack dashboard for live evaluation and visualization of attack logs — identifying and documenting potential attack vectors and intrusion attempts.",
    tags: ["Cowrie", "Azure", "Node.js", "Express.js", "React", "MongoDB"],
    highlight: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden scroll-mt-24"
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground">
              04 — Projects
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">
            Selected Work
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border rounded-2xl p-6 shadow-sm hover:border-foreground/20 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold text-muted-foreground mb-1">
                      {project.subtitle}
                    </p>
                    <h3 className="text-lg font-bold text-foreground leading-snug">
                      {project.title}
                    </h3>
                  </div>
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-background border border-border flex items-center justify-center text-lg">
                    {idx === 0 ? "⚡" : "🔐"}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
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
