"use client";

import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ImageGallery";
import {
  Target,
  Heart,
  Lightbulb,
  GraduationCap,
  Handshake,
} from "lucide-react";

/* ---------------- SCRAPBOOK (TOP COLLAGE) ---------------- */
/* These are ONLY for the scrapbook polaroids */
const scrapbookImages = [
  { src: "/LMU2018.png", alt: "2018 SHPE LMU Executive Board" },
  { src: "/eboard1.png", alt: "2025 SHPE LMU Executive Board" },
  { src: "/LMU2019.png", alt: "Building community through teamwork" },
  { src: "/historylmu.jpg", alt: "The beginning of something bigger" },
];

/* ---------------- BOTTOM GALLERY ---------------- */
/* These are ONLY for the ImageGallery at the bottom */
const galleryImages = [
  {
    src: "/NASAjpl.png",
    alt: "Celebration",
  },
  {
    src: "/LAdwp.png",
    alt: "Collaboration",
  },
  {
    src: "/amazon.png",
    alt: "Community moment",
  },
  {
    src: "/google.png",
    alt: "Team photo",
  },
  {
    src: "/northrup.png",
    alt: "Workshop",
  },
  {
    src: "/blueorigin.png",
    alt: "Meeting",
  },
  {
    src: "/RandS.png",
    alt: "Meeting",
  },
  {
    src: "/Raytheon-Logo.png",
    alt: "Meeting",
  },
  {
    src: "/LLNL.png",
    alt: "Meeting",
  },
];

/* ---------------- VALUES ---------------- */

const values = [
  {
    icon: Heart,
    title: "Familia",
    description:
      "We foster a welcoming and supportive community where members uplift one another through shared experiences, mentorship, and belonging.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward thinking to solve problems, explore new ideas, and grow as engineers and leaders.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description:
      "We strive for academic, professional, and personal excellence by holding ourselves to high standards and supporting continuous growth.",
  },
  {
    icon: Handshake,
    title: "Service",
    description:
      "We give back to our communities through outreach, mentorship, and service rooted in impact and purpose.",
  },
];

const About = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/AboutPage.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/75 to-[#0076A5]/85" />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <span className="inline-flex px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6 border border-white/15 backdrop-blur">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            About SHPE LMU
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
Discover how our history, values, and mission come together to empower Hispanic students in STEM
          </p>
        </div>
      </section>

            {/* ================= VALUES ================= */}
      <section className="pt-12 pb-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5]">
              Our <span className="text-[#AB0C2F]">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-6 rounded-2xl bg-white border border-[#DDDDDD] hover:shadow-lg transition text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0076A5]/20 flex items-center justify-center mb-5">
                  <value.icon className="w-7 h-7 text-[#0076A5]" />
                </div>
                <h3 className="text-lg font-display font-bold text-[#0076A5] mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= SCRAPBOOK HISTORY ================= */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
          {/* TEXT PAGES */}
          <div className="space-y-6">
            {[
              {
                year: "2018",
                title: "Founded at LMU",
                text:
                  "SHPE at Loyola Marymount University was founded in 2018 by students committed to creating a supportive space for Hispanic students pursuing STEM careers.",
              },
              {
                year: "2025",
                title: "A New Chapter",
                text:
                  "In 2025, SHPE LMU was revitalized with renewed leadership and a vision centered on growth, service, and meaningful impact.",
              },
              {
                year: "Today",
                title: "Still Writing the Story",
                text:
                  "Today, SHPE LMU continues to grow as a student-driven organization empowering future generations through leadership, outreach, and collaboration.",
              },
            ].map((item) => (
              <div
                key={item.year}
                className="bg-white border border-[#DDDDDD] rounded-3xl p-7 shadow-sm relative"
              >
                <span className="inline-block px-3 py-1 mb-3 rounded-full bg-[#0076A5]/10 text-[#0076A5] text-xs font-semibold">
                  {item.year}
                </span>
                <h3 className="text-xl font-display font-bold text-[#0f172a] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#222222] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* POLAROID COLLAGE */}
          <div className="bg-white border border-[#DDDDDD] rounded-3xl p-6 shadow-sm">
            <h3 className="text-lg font-display font-bold text-[#0f172a] mb-6">
              Moments from the scrapbook
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {scrapbookImages.map((img, i) => (
                <div
                  key={i}
                  className={`bg-white border border-[#E5E7EB] rounded-3xl p-4 shadow-sm ${
                    i % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover rounded-2xl"
                  />
                  <p className="mt-3 text-sm font-semibold text-[#0f172a]">
                    {img.alt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ================= MISSION ================= */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0076A5] flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-[#0076A5] uppercase tracking-wider">
                Our Mission
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0076A5] mb-6">
              Empowering Hispanic Students Through STEM, Service, and Leadership
            </h2>

            <p className="text-[#222222] leading-relaxed mb-6">
              SHPE at Loyola Marymount University is dedicated to empowering and
              advancing Hispanic students in STEM by fostering academic
              excellence, professional development, leadership, and community
              engagement. Through collaboration with industry partners, campus
              organizations, and the national SHPE network, we provide
              resources, mentorship, and service opportunities that promote
              inclusion, cultural pride, and social responsibility. Guided by
              LMU’s mission of service and justice, SHPE LMU builds a supportive
              community that prepares members to succeed as engineers,
              scientists, and leaders who positively impact society.
            </p>

            <Button asChild>
              <a
                href="https://docs.google.com/document/d/1GB2J7JvJKyWjsw8UzvqS9z1ATZ4wi7GzDNO_Jw40Z2w/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                View SHPE LMU Bylaws
              </a>
            </Button>
          </div>

          <div>
            <img
              src="/SHPE3.png"
              alt="SHPE LMU"
              className="rounded-2xl shadow-lg w-full h-[320px] object-cover mb-4"
            />

            <div className="grid grid-cols-3 gap-4">
              {["80+ Members", "20+ Events", "7+ Years"].map((item) => (
                <div
                  key={item}
                  className="text-center p-4 rounded-xl bg-white border border-[#DDDDDD]"
                >
                  <div className="text-2xl font-display font-bold text-[#0076A5]">
                    {item.split(" ")[0]}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {item.split(" ").slice(1).join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= PARTNERS & SPEAKERS ================= */}
      <section className="bg-[#0076A5] pt-12 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
            Industry Partners & Guest Speakers
          </h2>
          <p className="text-white/80 text-sm mb-6">
Interested in sponsoring SHPE LMU? Your support helps shape the next generation of engineers, innovators, and leaders.          </p>

          <ImageGallery images={galleryImages} />
        </div>
      </section>

    </>
  );
};

export default About;
