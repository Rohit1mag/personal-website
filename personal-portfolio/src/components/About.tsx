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
              I&apos;m a CS student at Cal Poly SLO who genuinely enjoys the craft of building software, whether
              that&apos;s designing a clean data model, wrestling with a tricky algorithm, or figuring out why
              something is slow.
            </p>
            <p>
              Outside of class, I&apos;ve been lucky to work on things that actually ship to real users, like a search
              engine serving 1,000+ people, large-scale infrastructure migrations, and a few side projects that scratched my own
              itch. I tend to care as much about <em>how</em> something is built as what it does.
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
