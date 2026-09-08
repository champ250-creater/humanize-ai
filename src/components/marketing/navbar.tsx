"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-zinc-200 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl transition-transform group-hover:scale-110">✨</span>
          <span className="font-bold text-xl tracking-tight text-zinc-900">HumanizeAI</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <Link href="#features" className="hover:text-zinc-900 transition-colors">Features</Link>
          <Link href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</Link>
          <Link href="#about" className="hover:text-zinc-900 transition-colors">About</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/sign-in" className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors">
            Sign In
          </Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-600 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-zinc-200 py-4 px-4 shadow-lg flex flex-col gap-4">
          <Link href="#features" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Features</Link>
          <Link href="#pricing" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
          <Link href="#about" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
          <div className="h-px bg-zinc-100 my-2" />
          <Link href="/sign-in" className="text-sm font-medium text-zinc-600 hover:text-zinc-900" onClick={() => setIsMobileMenuOpen(false)}>Sign In</Link>
          <Link
            href="/sign-up"
            className="text-sm font-medium bg-indigo-600 text-white px-4 py-2 rounded-full text-center hover:bg-indigo-700 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started Free
          </Link>
        </div>
      )}
    </header>
  );
}
