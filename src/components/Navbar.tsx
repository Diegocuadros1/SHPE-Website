"use client";

import { useState } from "react";
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

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Subtle dark fade so text is readable on video */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />

      <nav className="relative mx-auto flex h-16 max-w-[92rem] items-center justify-between px-6 md:h-20 md:px-10">
        {/* LEFT: Logo + Title */}
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <div className="relative h-16 w-16 md:h-20 md:w-20">
            <Image
              src="/lmu-logo1.png"
              alt="LMU Lions"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* ✅ SHOW ON MOBILE TOO */}
          <div className="leading-none block">
            <div className="text-white font-semibold tracking-tight text-sm sm:text-base lg:text-lg">
              Loyola Marymount University
            </div>
            <div className="mt-1 text-white/70 text-[9px] sm:text-[10px] lg:text-[11px] tracking-[0.22em] uppercase">
              Society of Hispanic Professional Engineers
            </div>
          </div>
        </Link>

        {/* CENTER: Nav links */}
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

        {/* RIGHT: Join button (desktop only) */}
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

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="md:hidden rounded-md p-2 text-white hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96" : "max-h-0"
        )}
      >
        <div className="bg-black/85 backdrop-blur px-6 pb-6 pt-3">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "py-3 text-white/85 uppercase text-[12px] tracking-[0.22em] font-semibold",
                    active && "text-white"
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
              className="mt-4 bg-white py-3 text-center font-semibold text-primary"
            >
              Join SHPE @ LMU
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
