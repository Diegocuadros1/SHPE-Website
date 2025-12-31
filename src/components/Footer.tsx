"use client";

import Link from "next/link";
import { Mail, Instagram, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white text-[#0f172a]">
      <div className="mx-auto w-full max-w-7xl px-4 pb-10 pt-10 md:px-6 md:pb-12 md:pt-12">
        <div className="rounded-3xl border border-slate-200 overflow-hidden">
          {/* Top area */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-5 p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
              <div className="flex items-center gap-3">
                <img
                  src="/lmulion.png"
                  alt="SHPE LMU logo"
                  className="w-10 h-10 object-contain"
                />

                <div className="leading-tight">
                  <div className="font-display font-bold text-base">
                    Society of Hispanic Professional Engineers
                  </div>
                </div>
              </div>

              <h3 className="mt-6 font-display font-bold text-3xl md:text-4xl leading-tight text-[#0076A5]">
                Comunidad that helps you{" "}
                <span className="text-[#AB0C2F]">level up.</span>
              </h3>

              <p className="mt-4 text-sm md:text-base text-slate-600 max-w-md">
                Where culture, community, and STEM come together to empower
                students, build opportunity, and create lasting impact beyond
                the classroom.
              </p>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-7 p-8 md:p-10">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-slate-700">
                  Explore
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Quick Links */}
                <div>
                  <div className="text-sm font-semibold text-slate-700 mb-4">
                    Quick Links
                  </div>
                  <ul className="space-y-3">
                    <li>
                      <FooterLink href="/" label="Home" />
                    </li>
                    <li>
                      <FooterLink href="/about" label="About" />
                    </li>
                    <li>
                      <FooterLink
                        href="/e-board"
                        label="Executive Board"
                      />
                    </li>
                    <li>
                      <FooterLink href="/updates" label="Our Impact" />
                    </li>
                  </ul>
                </div>

                {/* Connect */}
                <div>
                  <div className="text-sm font-semibold text-slate-700 mb-4">
                    Connect
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2 text-sm text-slate-600">
                      <MapPin size={16} className="text-[#AB0C2F]" />
                      <span>Loyola Marymount University</span>
                    </li>

                    <li className="flex items-center gap-2 text-sm">
                      <Mail size={16} className="text-[#AB0C2F]" />
                      <a
                        href="mailto:shpelmu@gmail.com"
                        className="text-slate-600 hover:text-slate-900 transition"
                      >
                        shpelmu@gmail.com
                      </a>
                    </li>

                    {/* ✅ Instagram under email */}
                    <li className="flex items-center gap-2 text-sm">
                      <Instagram size={16} className="text-[#AB0C2F]" />
                      <a
                        href="https://www.instagram.com/shpelmu/?hl=en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-slate-900 transition"
                      >
                        @shpelmu
                      </a>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="flex items-start">
                  <div className="relative w-full rounded-2xl border border-slate-200 bg-slate-50 p-5 overflow-hidden group">
                    <Link
                      href="/contact"
                      className="relative z-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0076A5]"
                    >
                      Contact SHPE LMU <ArrowUpRight size={16} />
                    </Link>

                    <span
                      aria-hidden
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 blur-xl"
                      style={{
                        background:
                          "radial-gradient(circle at 30% 30%, rgba(0,118,165,0.35), transparent 60%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom strip */}
          <div className="relative border-t border-slate-200 bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-end">
              <div className="lg:col-span-9 px-8 py-10 md:px-10 md:py-12">
                <div className="select-none font-display font-extrabold tracking-tight leading-none text-[64px] sm:text-[92px] md:text-[120px] lg:text-[140px] text-slate-900">
                  SHPE LMU
                </div>
              </div>

              <div className="lg:col-span-3 px-8 pb-8 md:px-10 md:pb-10 lg:pb-12 text-left lg:text-right">
                <p className="text-xs text-slate-500">
                  © {year} SHPE at Loyola Marymount University. All rights
                  reserved.
                </p>
                <p className="mt-2 text-xs text-slate-500">
                  Built by Sebastian Rocha & Diego Cuartodos
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, label }) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center justify-between w-full gap-3 text-sm text-slate-600 hover:text-slate-900 transition"
    >
      <span>{label}</span>
      <ArrowUpRight
        size={16}
        className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition"
      />
    </Link>
  );
}
