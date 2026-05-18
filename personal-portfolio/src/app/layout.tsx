import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rohit Kota | Co-Founder & CTO · Software Engineer",
  description:
    "Co-Founder & CTO at Scoop Technologies; Founding Engineer at Livin; AWS AI Summer Program; ML research at Cal Poly. BS Computer Science, Dec 2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
