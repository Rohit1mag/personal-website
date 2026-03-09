"use client";

import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
          Get in <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted mb-12 max-w-xl">
          Open to new opportunities and collaborations. Let&apos;s build something great together.
        </p>

        <div className="flex flex-wrap gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <div className="rounded-lg bg-accent/10 p-2 group-hover:bg-accent/20 transition-colors">
              <MailIcon className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted">Email</p>
              <p className="font-medium text-foreground">{profile.email}</p>
            </div>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\D/g, "")}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <div className="rounded-lg bg-accent/10 p-2 group-hover:bg-accent/20 transition-colors">
              <PhoneIcon className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted">Phone</p>
              <p className="font-medium text-foreground">{profile.phone}</p>
            </div>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <div className="rounded-lg bg-accent/10 p-2 group-hover:bg-accent/20 transition-colors">
              <LinkedInIcon className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted">LinkedIn</p>
              <p className="font-medium text-foreground">linkedin.com/in/rohit-kota4</p>
            </div>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-surface px-6 py-4 hover:border-accent hover:bg-surface-elevated transition-all group"
          >
            <div className="rounded-lg bg-accent/10 p-2 group-hover:bg-accent/20 transition-colors">
              <GitHubIcon className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted">GitHub</p>
              <p className="font-medium text-foreground">github.com/Rohit1mag</p>
            </div>
          </a>
        </div>

        <p className="mt-12 text-muted text-sm flex items-center gap-2">
          <MapPinIcon />
          {profile.location} · {profile.citizenship}
        </p>
      </div>
    </section>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect width="4" height="12" x="2" y="9"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  );
}

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.22 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  );
}
