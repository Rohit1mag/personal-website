"use client";

import { education, profile } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-12">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-muted leading-relaxed">
            <p>
              I&apos;m a Computer Science student at Cal Poly SLO (graduating Dec 2026) with a passion for 
              building scalable systems, real-time search, and ML-powered applications.
            </p>
            <p>
              I&apos;ve architected search engines that serve 1,000+ users, built AI transcript parsers 
              with 94% accuracy, and led teams of 10+ developers. I thrive at the intersection of 
              full-stack development and data-driven problem solving.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 space-y-4">
            <h3 className="font-display font-semibold text-foreground text-lg">Education</h3>
            <p className="font-medium text-foreground">{education.school}</p>
            <p className="text-accent">{education.degree}</p>
            <p className="text-muted text-sm">{education.graduation}</p>
            <p className="text-muted text-sm pt-2">{profile.citizenship}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
