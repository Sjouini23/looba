import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lammetna",
  description: "Party games for the group chat"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
