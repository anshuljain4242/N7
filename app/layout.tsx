import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "N7 — The new foundation of modern banking",
  description:
    "N7 & CB7 by Linktia Infosystems — complete cloud-based core banking and digital banking solutions tailor-made to your needs.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
