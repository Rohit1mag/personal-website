"use client";

import { skills } from "../data/portfolio";

const categories = [
  { label: "Languages", items: skills.languages },
  { label: "Frameworks", items: skills.frameworks },
  { label: "Tools & Cloud", items: skills.tools },
  { label: "ML & Data", items: skills.ml },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-surface/50">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
          <span className="gradient-text">Skills</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.label}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="font-display font-semibold text-foreground mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-surface px-3 py-1.5 text-sm text-muted border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
