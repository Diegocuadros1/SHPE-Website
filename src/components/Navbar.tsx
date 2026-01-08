"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Executive Board", path: "/e-board" },
  { name: "Our Impact", path: "/updates" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Subtle dark fade so text is readable on video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

      <nav className="relative mx-auto flex h-16 max-w-[92rem] items-center justify-between px-4 sm:px-6 md:h-20 md:px-10">
        {/* LEFT: Logo + Title */}
        <Link href="/" className="flex min-w-0 items-center gap-3 shrink-0">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-20 md:w-20">
            <Image
              src="/lmu-logo1.png"
              alt="LMU Lions"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* On very small screens hide text so hamburger always fits */}
          <div className="min-w-0 leading-none sm:block">
            <div className="text-white font-semibold tracking-tight text-xs md:text-base lg:text-lg truncate">
              Loyola Marymount University
            </div>
            <div className="mt-1 text-white/70 text-[5px] lg:text-[11px] tracking-[0.22em] uppercase truncate">
              Society of Hispanic Professional Engineers
            </div>
          </div>
        </Link>

        {/* CENTER: Nav links (desktop) */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 whitespace-nowrap">
          {navLinks.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                className="group relative text-white/85 uppercase text-[12px] tracking-[0.22em] font-semibold hover:text-white transition"
              >
                {link.name}
                <span
                  className={cn(
                    "absolute -bottom-2 left-0 h-[2px] w-full bg-white transition-opacity",
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Join button (desktop) */}
        <div className="hidden md:block shrink-0">
          <a
            href="https://leo.lmu.edu/organization/society-of-hispanic-professional-engineers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-white/90 transition whitespace-nowrap"
          >
            Join SHPE @ LMU
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-[60] transition",
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        )}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className={cn(
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            isOpen ? "opacity-100" : "opacity-0"
          )}
          aria-label="Close menu backdrop"
        />

        {/* Panel */}
        <div
          id="mobile-nav"
          className={cn(
            "absolute right-0 top-0 h-full w-[88%] max-w-sm bg-black/85 backdrop-blur px-6 pt-6 pb-8 border-l border-white/10 transition-transform duration-300",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 min-w-0"
            >
              <div className="relative h-10 w-10">
                <Image
                  src="/lmu-logo1.png"
                  alt="LMU Lions"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-white font-semibold truncate">
                SHPE @ LMU
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-2 text-white hover:bg-white/10 transition"
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="mt-6 flex flex-col">
            {navLinks.map((link) => {
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "rounded-xl px-3 py-3 text-white/85 uppercase text-[12px] tracking-[0.22em] font-semibold hover:bg-white/10 transition",
                    active && "text-white bg-white/10"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="https://leo.lmu.edu/organization/society-of-hispanic-professional-engineers"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 rounded-xl bg-white py-3 text-center font-semibold text-primary"
            >
              Join SHPE @ LMU
            </a>

            <div className="mt-6 text-xs text-white/60 leading-relaxed">
              Loyola Marymount University • Society of Hispanic Professional
              Engineers
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
