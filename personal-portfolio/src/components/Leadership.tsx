"use client";

import { leadership } from "../data/portfolio";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
          <span className="gradient-text">Leadership</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((role) => (
            <div
              key={role.org}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="rounded-lg bg-accent/10 p-2 shrink-0">
                  <AwardIcon />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-foreground">{role.role}</h3>
                  <p className="text-accent text-sm">{role.org}</p>
                  <p className="text-muted text-xs">{role.period}</p>
                </div>
              </div>
              <p className="text-muted text-sm leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}
