"use client";

import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-muted text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <div className="flex gap-6">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent text-sm">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted hover:text-accent text-sm">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted hover:text-accent text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
