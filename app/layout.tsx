import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Services SETA Digital Gateway Concept",
  description: "A stakeholder-centred gateway to Services SETA information, programmes, services and opportunities.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
