import Link from "next/link";
import { ReactNode } from "react";

export const Shell = ({ children }: { children: ReactNode }) => (
  <div className="mx-auto min-h-screen w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">{children}</div>
);

export const Brand = () => (
  <div>
    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300/90">Lammetna</p>
    <h1 className="gradient-text text-2xl font-semibold">Party games for the group chat</h1>
  </div>
);

export const Button = ({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "ghost" }) => (
  <Link
    href={href}
    className={`inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition ${
      variant === "primary"
        ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow hover:opacity-90"
        : "border border-white/20 bg-white/5 text-slate-200 hover:bg-white/10"
    }`}
  >
    {children}
  </Link>
);
