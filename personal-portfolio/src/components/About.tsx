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
              I&apos;m a Computer Science student at Cal Poly ({education.graduation}), currently Co-Founder &amp; CTO at Scoop
              Technologies—shipping an on-demand group ride-sharing app on React Native, Supabase, and Stripe—and previously Founding Engineer at Livin,
              where I built search, matching, and Firestore performance work for 1,000+ users.
            </p>
            <p>
              I&apos;ve also shipped AWS Bedrock transcript tooling in the AWS AI Summer Program, ML research pipelines at Cal Poly,
              and resume-listed projects like ReviewSense (Next.js, FastAPI, Kimi K2.5) and Vestline (cap tables, Gemma 4 chat).
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
