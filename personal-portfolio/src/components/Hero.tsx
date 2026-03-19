"use client";

import Image from "next/image";
import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 bg-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl w-full flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="flex-1">
        <div className="mb-4 animate-fade-in">
          <span className="inline-block rounded-full border border-accent/50 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent">
            Software Engineer
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6 animate-fade-in animation-delay-100">
          <span className="text-foreground">Rohit </span>
          <span className="gradient-text">Kota</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted max-w-2xl mb-10 animate-fade-in animation-delay-200">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap gap-4 mb-16 animate-fade-in animation-delay-300">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-foreground hover:border-accent hover:text-accent transition-all"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-foreground hover:border-accent hover:text-accent transition-all"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-background font-semibold hover:bg-accent-muted transition-colors"
          >
            <MailIcon />
            <span>Email</span>
          </a>
        </div>

        <a
          href="#about"
          className="inline-flex items-center gap-2 text-muted hover:text-accent transition-colors animate-fade-in animation-delay-400"
        >
          <span>Scroll to explore</span>
          <ArrowDownIcon className="animate-bounce" />
        </a>
        </div>
        <div className="flex-shrink-0 flex justify-center md:justify-end animate-fade-in animation-delay-200">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-2xl shadow-accent/10">
            <Image
              src="/RohitDP.png"
              alt="Rohit Kota"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 224px, 256px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.22 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14"/>
      <path d="m19 12-7 7-7-7"/>
    </svg>
  );
}
