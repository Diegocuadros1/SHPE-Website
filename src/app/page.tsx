"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Play, Pause } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { statistics, pillars, upcomingEvents } from "@/data/data";

/* ------------------ PAGE ------------------ */

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    if (isPlaying) videoRef.current.pause();
    else videoRef.current.play();
    setIsPlaying((v) => !v);
  };

  // iOS / mobile autoplay can be blocked; keep UI state correct
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);

    return () => {
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <>
      {/* ================= HERO (LMU STYLE) ================= */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/SHPEsgiving.mp4" type="video/mp4" />
          </video>

          {/* overlays */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        </div>

        {/* Video Control (mobile-safe) */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-4 right-4 md:bottom-8 md:right-8 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs md:text-sm font-medium text-white backdrop-blur hover:bg-white/20"
        >
          {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          <span className="hidden sm:inline">
            {isPlaying ? "Pause Video" : "Play Video"}
          </span>
          <span className="sm:hidden">{isPlaying ? "Pause" : "Play"}</span>
        </button>

        {/* Hero Content */}
        <div className="relative z-10 min-h-[100svh]">
          <div className="mx-auto flex min-h-[100svh] max-w-7xl items-end px-4 pb-16 sm:px-6 sm:pb-20 md:px-10 md:pb-32">
            <div className="max-w-3xl relative w-full">
              {/* Accent bar only when there’s space */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-[-100vw] top-3 h-16 w-[110vw] bg-[#AB0C2F] z-0"
              />

              <p className="relative z-10 mb-3 text-lg sm:text-xl lg:text-2xl font-semibold tracking-wide text-white">
                Don&apos;t just join.
              </p>

              <h1 className="relative z-10 font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight text-white">
                Make it <span className="text-[#0076A5]">matter.</span>
              </h1>

              <p className="relative z-10 mt-4 sm:mt-6 max-w-2xl text-sm sm:text-base md:text-lg leading-relaxed text-white/80">
                Join LMU’s Society of Hispanic Professional Engineers and grow
                through community, academics, and professional development.
              </p>

              {/* Buttons: stacked on mobile */}
              <div className="relative z-10 mt-6 sm:mt-8 grid gap-3 sm:flex sm:flex-wrap sm:gap-3">
                <Link
                  href="/about"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-white px-6 py-3 font-semibold text-black hover:bg-white/90"
                >
                  Learn More <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 font-semibold text-white border border-white hover:bg-white/10"
                >
                  Get In Touch
                </Link>

                <Link
                  href="/updates"
                  className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3 font-semibold text-white/90 border border-white/60 hover:bg-white/10"
                >
                  Our Impact
                </Link>
              </div>

              <div className="relative z-10 mt-8 sm:mt-10 text-[10px] sm:text-xs tracking-widest text-white/70">
                EXPLORE ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-[#F5F5F5] py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#AB0C2F]/10 px-4 py-1.5 text-sm font-medium text-[#AB0C2F]">
                Who We Are
              </span>
              <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold text-[#AB0C2F]">
                What is SHPE?
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground">
                SHPE (Society of Hispanic Professional Engineers) is dedicated
                to empowering the Hispanic community to reach its fullest
                potential in STEM (Science, Technology, Engineering, and
                Mathematics). Through education, professional development, and
                community engagement, SHPE is helping students and professionals
                in engineering and other technical fields break barriers, gain
                access to opportunities, and make an impact on the world around
                them.
              </p>
            </div>

            <img
              src="/SHPE1.jpg"
              className="h-[240px] sm:h-[320px] md:h-[380px] w-full rounded-2xl object-cover shadow-lg"
              alt="Students collaborating"
            />
          </div>

          {/* ================= NEW STATISTICS (By the Numbers) ================= */}
          <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {statistics.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold text-[#0076A5]">
                  {stat.number}
                </div>
                <p className="mt-2 text-base sm:text-xl">{stat.description}</p>
                {stat.additionalInfo && (
                  <p className="text-sm text-muted-foreground">
                    {stat.additionalInfo}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Pillars: swipeable carousel on mobile, grid on desktop */}
          <div className="mt-12 sm:mt-16">
            <div className="-mx-4 sm:mx-0 flex gap-4 overflow-x-auto px-4 pb-2 sm:grid sm:overflow-visible sm:px-0 md:grid-cols-3 sm:gap-6 scroll-px-4 snap-x snap-mandatory">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="snap-start min-w-[82%] sm:min-w-0 rounded-2xl border bg-white p-6 sm:p-8 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <pillar.icon className="mb-4 h-8 w-8 text-[#0076A5]" />
                  <h3 className="mb-2 text-lg sm:text-xl font-bold text-[#0076A5]">
                    {pillar.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>

            {/* little hint on mobile */}
            <p className="mt-3 text-center text-xs text-muted-foreground sm:hidden">
              Swipe to see more →
            </p>
          </div>
        </div>
      </section>

      {/* ================= CALENDAR ================= */}
      <section className="bg-muted/50 py-16 sm:py-20 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-start">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=shpe.lmu%40gmail.com"
            className="h-[360px] sm:h-[420px] md:h-[520px] w-full rounded-2xl border bg-white"
            loading="lazy"
          />

          <div>
            <h3 className="mb-5 sm:mb-6 text-xl sm:text-2xl font-bold text-[#0076A5]">
              View Calendar for Upcoming Events
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {upcomingEvents.map((event, i) => {
                const parts = event.date.split(" ");
                const month = parts[0] ?? "";
                const day = parts[1] ?? "";

                return (
                  <div
                    key={i}
                    className="flex items-center gap-4 rounded-xl border bg-card p-4 sm:p-5 hover:shadow"
                  >
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 flex-col items-center justify-center rounded-xl bg-[#0076A5] text-white shrink-0">
                      <span className="text-[10px] sm:text-xs uppercase">
                        {month}
                      </span>
                      <span className="text-base sm:text-lg font-bold">
                        {day || "—"}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold truncate">{event.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>

                    <ChevronRight className="text-muted-foreground shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-20 sm:py-24 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#AB0C2F] to-[#0076A5]" />
        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-4xl font-bold">
            Want to Learn More?
          </h2>
          <p className="mx-auto mb-7 sm:mb-8 max-w-2xl text-white/80 text-sm sm:text-base">
            We'd love to connect with you. Become part of a supportive community
            that helps you grow in every way.
          </p>

          {/* stack on mobile */}
          <div className="mx-auto flex max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <Button
              variant="hero"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <a
                href="https://leo.lmu.edu/organization/society-of-hispanic-professional-engineers"
                target="_blank"
                rel="noreferrer"
              >
                Join SHPE @ LMU
              </a>
            </Button>

            <Button
              variant="heroOutline"
              size="lg"
              asChild
              className="w-full sm:w-auto"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
