import Link from "next/link";
import { ReactNode } from "react";

export const Shell = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
);

export const Brand = () => (
  <div className="space-y-1">
    <p className="text-xs uppercase tracking-[0.25em] text-[#0f4c81]">Lammetna</p>
    <h1 className="gradient-text text-2xl font-bold">Jeux de groupe, version tounsia</h1>
  </div>
);

export const Button = ({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" | "warm" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 ${
      variant === "primary"
        ? "bg-gradient-to-r from-[#0f4c81] to-[#06b6d4] text-white shadow-md"
        : variant === "warm"
          ? "bg-gradient-to-r from-[#f97316] to-[#fb7185] text-white shadow-md"
          : "border border-[#0f4c81]/20 bg-white/70 text-[#0f4c81] hover:bg-white"
    }`}
  >
    {children}
  </Link>
);

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="space-y-1">
    <h2 className="text-2xl font-bold text-[#0f4c81]">{title}</h2>
    {subtitle ? <p className="text-sm text-slate-600">{subtitle}</p> : null}
  </div>
);
