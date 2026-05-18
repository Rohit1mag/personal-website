"use client";

import { projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          Selected projects from my resume.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {featured.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border bg-surface-elevated p-6 hover:border-accent/50 hover:bg-surface transition-all"
            >
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <ExternalLinkIcon className="text-muted group-hover:text-accent shrink-0" />
              </div>
              {project.period && (
                <p className="text-muted text-xs mb-3">{project.period}</p>
              )}
              <p className="text-muted text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>

        <a
          href="https://github.com/Rohit1mag?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-muted font-medium text-sm"
        >
          More on GitHub
          <ExternalLinkIcon />
        </a>
      </div>
    </section>
  );
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15 3 21 3 21 9"/>
      <line x1="10" x2="21" y1="14" y2="3"/>
    </svg>
  );
}
