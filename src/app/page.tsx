"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

/* ------------------ DATA ------------------ */

// New statistics for "By the Numbers" section
const statistics = [
  {
    number: "#6",
    description: "Private University in California",
    additionalInfo: "U.S. News & World Report, 2026",
  },
  {
    number: "#21",
    description: "Best Undergraduate Engineering Program",
    additionalInfo: "U.S. News & World Report, 2026",
  },
];

const pillars = [
  {
    icon: Users,
    title: "Community",
    description:
      "Build lasting connections with fellow Hispanic engineers who share your journey. SHPE offers a strong, supportive network where members can connect, collaborate, and build long-term relationships. From professional networking to lifelong friendships, SHPE's community empowers you to thrive",
  },
  {
    icon: BookOpen,
    title: "Academics",
    description:
      "Our academic resources are designed to help you excel in your courses and beyond. Whether you need tutoring, mentorship, or resources for studying STEM subjects, SHPE provides the support to ensure you reach your academic goals",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description:
      "Workshops, networking, and career prep to launch your engineering career. SHPE hosts events, workshops, and networking opportunities designed to enhance your professional skills and connect you with industry leaders. Get the guidance and resources you need to launch your career and succeed in the competitive STEM field",
  },
];

const upcomingEvents = [
  { date: "Jan 29", title: "Welcome Back Meeting", time: "6:00 – 7:00 PM" },
  { date: "TBD", title: "Guest Speaker", time: "6:00 – 7:00 PM" },
  { date: "TBD", title: "Social Event", time: "6:00 – 7:30 PM" },
];

/* ------------------ PAGE ------------------ */

export default function Page() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (!videoRef.current) return;
    isPlaying ? videoRef.current.pause() : videoRef.current.play();
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* ================= HERO (LMU STYLE) ================= */}
      <section className="relative min-h-screen overflow-hidden">
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
        </div>

        {/* Video Control */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20"
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          {isPlaying ? "Pause Video" : "Play Video"}
        </button>

        {/* Hero Content */}
        <div className="relative z-10 h-screen">
          <div className="mx-auto flex h-full max-w-7xl items-end px-6 pb-24 md:px-10 md:pb-32">
            <div className="max-w-3xl relative">
              {/* 🔴 LMU-style accent bar */}
              <div
                aria-hidden="true"
                className="hidden md:block absolute left-[-100vw] top-3 h-16 w-[110vw] bg-[#AB0C2F] z-0" // LMU Crimson
              />

              <p className="relative z-10 mb-4 text-2xl md:text-xl lg:text-2xl font-semibold tracking-wide text-white">
                Don&apos;t just join.
              </p>

              <h1 className="relative z-10 font-display text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
                Make it <span className="text-[#0076A5]">matter.</span> {/* LMU Blue */}
              </h1>

              <p className="relative z-10 mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
                Join LMU’s Society of Hispanic Professional Engineers and grow
                through community, academics, and professional development.
              </p>

              <div className="relative z-10 mt-8 flex flex-wrap gap-3">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-white px-6 py-3 font-semibold text-black hover:bg-white/90"
                >
                  Learn More <ArrowRight size={18} />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white border border-white hover:bg-white/10"
                >
                  Get In Touch
                </Link>

                <Link
                  href="/updates"
                  className="inline-flex items-center px-6 py-3 font-semibold text-white/90 border border-white/60 hover:bg-white/10"
                >
                  Our Impact
                </Link>
              </div>

              <div className="relative z-10 mt-10 text-xs tracking-widest text-white/70">
                EXPLORE ↓
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="bg-[#F5F5F5] py-24"> {/* Light Gray Background */}
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[#AB0C2F]/10 px-4 py-1.5 text-sm font-medium text-[#AB0C2F]"> {/* LMU Crimson */}
                Who We Are
              </span>
              <h2 className="mb-6 text-4xl font-bold text-[#AB0C2F]"> {/* LMU Crimson */}
                What is SHPE? {/* LMU Blue */}
              </h2>
              <p className="text-lg text-muted-foreground">
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
              className="h-[320px] w-full rounded-2xl object-cover shadow-lg"
              alt="Students collaborating"
            />
          </div>

          {/* ================= NEW STATISTICS (By the Numbers) ================= */}
          <div className="mt-16 grid grid-cols-2 gap-12">
            {statistics.map((stat) => (
              <div key={stat.number} className="text-center">
                <div className="text-4xl font-bold text-[#0076A5]">{stat.number}</div> {/* LMU Blue */}
                <p className="mt-2 text-xl">{stat.description}</p>
                {stat.additionalInfo && (
                  <p className="text-sm text-muted-foreground">{stat.additionalInfo}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border bg-white p-8 transition hover:-translate-y-2 hover:shadow-lg"
              >
                <pillar.icon className="mb-4 h-8 w-8 text-[#0076A5]" /> {/* LMU Blue */}
                <h3 className="mb-2 text-xl font-bold text-[#0076A5]">{pillar.title}</h3> {/* LMU Blue */}
                <p className="text-muted-foreground">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALENDAR ================= */}
      <section className="bg-muted/50 py-24">
        <div className="container mx-auto grid gap-12 px-6 lg:grid-cols-2">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=shpe.lmu%40gmail.com"
            className="h-[500px] w-full rounded-2xl border bg-white"
          />

          <div>
            <h3 className="mb-6 text-2xl font-bold text-[#0076A5]">Upcoming Events</h3> {/* LMU Blue */}
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border bg-card p-5 hover:shadow"
                >
                  <div className="flex h-16 w-16 flex-col items-center justify-center rounded-xl bg-[#0076A5] text-white"> {/* LMU Blue */}
                    <span className="text-xs uppercase">
                      {event.date.split(" ")[0]}
                    </span>
                    <span className="text-lg font-bold">
                      {event.date.split(" ")[1]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold">{event.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {event.time}
                    </p>
                  </div>
                  <ChevronRight className="text-muted-foreground" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden py-28">
        <div className="absolute inset-0 bg-gradient-to-r from-[#AB0C2F] to-[#0076A5]" /> {/* LMU Crimson to LMU Blue */}
        <div className="relative z-10 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">
            Want to Learn More? 
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/80">
            We'd love to connect with you. Become part of a supportive community that helps you grow in every
            way.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a href="https://shpe.org" target="_blank" rel="noreferrer">
                Join SHPE National
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
