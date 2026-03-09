"use client";

import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
          <span className="gradient-text">Experience</span>
        </h2>

        <div className="space-y-12">
          {experience.map((job) => (
            <article
              key={job.company}
              className="group relative pl-8 border-l-2 border-border hover:border-accent/50 transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent/20 group-hover:bg-accent transition-colors" />
              <div className="flex flex-wrap items-baseline gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold text-foreground">{job.role}</h3>
                <span className="text-accent">@ {job.company}</span>
              </div>
              <p className="text-muted text-sm mb-4">{job.period}</p>
              <ul className="space-y-2">
                {job.highlights.map((highlight, j) => (
                  <li key={j} className="text-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-accent mt-1.5 shrink-0">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
