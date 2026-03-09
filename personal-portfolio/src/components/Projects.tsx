"use client";

import { projects } from "../data/portfolio";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const github = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          <span className="gradient-text">Projects</span>
        </h2>
        <p className="text-muted mb-12 max-w-2xl">
          Featured work and pinned repositories from my GitHub.
        </p>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {featured.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-2xl border border-border bg-surface-elevated p-6 hover:border-accent/50 hover:bg-surface transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                  {project.name}
                </h3>
                <ExternalLinkIcon className="text-muted group-hover:text-accent shrink-0" />
              </div>
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

        {/* GitHub pinned section */}
        <div>
          <h3 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
            <GitHubIcon className="text-accent" />
            More on GitHub
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {github.slice(0, 6).map((project) => (
              <a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-border bg-surface p-4 hover:border-accent/50 transition-all"
              >
                <div className="rounded-lg bg-accent/10 p-2 shrink-0">
                  <GitHubIcon className="text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="font-medium text-foreground group-hover:text-accent truncate">
                    {project.name}
                  </h4>
                  <p className="text-muted text-xs line-clamp-2 mt-0.5">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-[10px] text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ExternalLinkIcon className="text-muted shrink-0 opacity-0 group-hover:opacity-100 transition-opacity w-3.5 h-3.5" />
              </a>
            ))}
          </div>
          <a
            href="https://github.com/Rohit1mag?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 text-accent hover:text-accent-muted font-medium text-sm"
          >
            View all repositories
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.22 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
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
