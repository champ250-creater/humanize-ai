import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HumanizeAI — Write Like a Human. Think Like a Scholar.",
  description:
    "Transform AI-generated text into natural, undetectable academic writing. AI detection pre-check, auto-citations, research summaries, and voice fingerprinting.",
  keywords: [
    "AI humanizer",
    "academic writing",
    "AI detection",
    "student tools",
    "citation generator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans bg-white text-zinc-900" suppressHydrationWarning>
        {children}
        <Toaster position="bottom-right" richColors />
      </body>
    </html>
  );
}
