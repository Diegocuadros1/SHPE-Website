"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, Megaphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const initiatives = [
  {
    id: "gm1",
    category: "General Meeting",
    title: "General Meeting #1",
    excerpt:
      "Our first general meeting of the semester—meet the board, learn what SHPE is about, and get plugged into upcoming events and opportunities.",
    highlight: "Meet the board • Upcoming events • Get involved",
    video: "/GM1.mp4",
  },
  {
    id: "beach-social",
    category: "Social",
    title: "Latinx Beach Social / Bonfire",
    excerpt:
      "A community night by the beach to build friendships, celebrate culture, and connect with other students in a relaxed setting.",
    highlight: "Community • Culture • Connection",
    image: "/LatinxBonfire2.jpg",
  },
  {
    id: "resume-workshop",
    category: "Professional Development",
    title: "Resume Building Workshop",
    excerpt:
      "Hands-on resume support and real feedback so members can apply confidently to internships, research roles, and jobs.",
    highlight: "Resume feedback • Templates • Career prep",
    image: "/ResumeWorkshop.jpg",
  },
  {
    id: "linkedin-workshop",
    category: "Professional Development",
    title: "LinkedIn Workshop",
    excerpt:
      "Build a stronger LinkedIn profile, learn networking best practices, and position yourself for opportunities.",
    highlight: "Profile upgrades • Networking • Recruiter tips",
    image: "/LinkedlnWorkshop1.jpg",
  },
  {
    id: "lmu-ucla-social",
    category: "Social",
    title: "LMU x UCLA Social",
    excerpt:
      "A cross-campus social to connect with other SHPE members, share experiences, and build community beyond LMU.",
    highlight: "Cross-campus • New friends • Familia",
    image: "/LMUxUCLA.jpg",
  },
  {
    id: "conference-prep",
    category: "Professional Development",
    title: "Conference Prep Meeting",
    excerpt:
      "We prepped members for conference weekend—what to bring, how to approach the career fair, and how to maximize the experience.",
    highlight: "Game plan • Career fair • What to expect",
    image: "/ConferencePrepMeeting1.jpg",
  },
  {
    id: "elevator-pitch",
    category: "Professional Development",
    title: "Elevator Pitch Workshop",
    excerpt:
      "Practice your pitch, get feedback, and learn how to confidently share your story, interests, and goals in 30 seconds.",
    highlight: "Confidence • Practice • Feedback",
    image: "/ElevatorPitchWorkshop1.jpg",
  },
];

const featuredUpdates = [
  {
    id: "shpegiving",
    date: "Fall 2025",
    category: "Social",
    title: "Region 2 SHPE’sgiving @ LMU",
    excerpt:
      "A Region 2 night that brought chapters together for community, culture, and connection across campuses.",
    image: "/shpesgiving01jpg.png",
    instagramUrl: "https://www.instagram.com/p/DSX96-8EhCg/", 
    details: [
      "Connected with Region 2 chapters and met new members across campuses",
      "Community-focused night celebrating culture and familia",
      "Welcomed students from UCLA, USC, UCSB, CSULB, CSUF, Pasadena City College, El Camino College, San Diego Mesa College, and Glendale Community College with over 60 to 70 attendees joining from across the region",
    ],
    gallery: [
      "/shpesgiving.jpg",
      "/shpesgiving2.png",
      "/shpesgiving3.png",
      "/shpesgiving4.png",
    ],
  },
  {
    id: "conference",
    date: "Fall 2025",
    category: "Professional Development",
    title: "SHPE National Convention",
    excerpt:
      "Conference highlights—sessions, networking, and career fair takeaways that helped members grow professionally.",
    image: "/shpeconv01.png",
    instagramUrl: "https://www.instagram.com/p/DRfQNmVjxBy/?img_index=1",
    details: [
      "Prepared for the career fair with strategy, resumes, and pitches",
      "Networking + workshops to level up professionally",
      "Takeaways we brought back to strengthen the chapter",
    ],
    gallery: [
      "/conference/1.jpg",
      "/conference/2.jpg",
      "/conference/3.jpg",
      "/conference/4.jpg", 
    ],
  },
];

const tagLegend = [
  {
    label: "Professional Development",
    desc: "Resumes, LinkedIn, workshops, conference prep",
    dot: "bg-[#0076A5]",
    chip: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  {
    label: "Socials",
    desc: "Community nights, mixers, cross-campus hangs",
    dot: "bg-emerald-500",
    chip: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  {
    label: "Guest Speakers",
    desc: "Panels + talks with alumni & industry",
    dot: "bg-purple-500",
    chip: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  },
  {
    label: "Outreach",
    desc: "STEM service, K-12 events, giving back",
    dot: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-800 border-amber-500/20",
  },
];

const categoryStyles = {
  "Professional Development": {
    pill: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  Social: {
    pill: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  "Guest Speakers": {
    pill: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  },
  Outreach: {
    pill: "bg-amber-500/10 text-amber-800 border-amber-500/20",
  },
  "General Meeting": {
    pill: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  Conference: {
    pill: "bg-[#AB0C2F]/10 text-[#AB0C2F] border-[#AB0C2F]/20",
  },
  "Region 2": {
    pill: "bg-[#AB0C2F]/10 text-[#AB0C2F] border-[#AB0C2F]/20",
  },
};

function getPillClass(category) {
  return (
    categoryStyles?.[category]?.pill ??
    "bg-slate-500/10 text-slate-700 border-slate-200"
  );
}

export default function OurImpact() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [activeSrc, setActiveSrc] = useState("");

  const combinedGallery = useMemo(() => {
    if (!selected) return [];
    const base = selected.gallery || [];
    return [...base];
  }, [selected]);

  const openDetails = (item) => {
    setSelected(item);
    const first = (item.gallery && item.gallery[0]) || item.image || "";
    setActiveSrc(first);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
    setActiveSrc("");
  };

  // ✅ fallback if any featured event doesn’t have a link yet
  const instagramHref = selected?.instagramUrl || "https://instagram.com/shpelmu";

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/OurImpact.mp4"
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
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our Impact<span className="text-[#F4B400]">.</span>
          </h1>

          <p className="text-lg text-white/85 max-w-2xl mx-auto">
See how SHPE LMU creates community, opportunity, and real impact for students in STEM
          </p>
        </div>
      </section>

      {/* INITIATIVES / EVENTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#AB0C2F] flex items-center justify-center shadow-sm">
                    <Megaphone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-sm font-semibold text-[#AB0C2F] uppercase tracking-wider">
                    Our Events
                  </p>
                </div>

                <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5]">
                  Programs that create real momentum
                </h2>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  SHPE LMU exists to make sure Hispanic students in STEM feel
                  supported academically, prepared professionally, and connected
                  to a community that pushes them forward. Our events are where
                  that mission comes to life.
                </p>

                <p className="mt-2 text-slate-600 leading-relaxed">
                  Each event is built around one goal: helping students grow.
                  Whether you’re looking for community, career support, or ways
                  to give back, there’s a place for you here.
                </p>
              </div>

              {/* RIGHT: Category Key */}
              <aside className="lg:pl-2">
                <div className="flex items-baseline gap-3">
                  <h3 className="text-base font-semibold text-slate-900">
                    Category Key
                  </h3>
                  <span className="text-sm text-slate-500">
                    What each tag means
                  </span>
                </div>

                <div className="mt-4 grid gap-3">
                  {tagLegend.map((t) => (
                    <div
                      key={t.label}
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-3 hover:shadow-sm transition"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                        <span
                          className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${t.chip}`}
                        >
                          {t.label}
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-slate-600 leading-snug">
                        {t.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          </div>

          {/* Event cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {initiatives.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl bg-slate-50/40 border border-slate-200 hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-semibold ${getPillClass(
                        item.category
                      )}`}
                    >
                      <Tag className="w-3.5 h-3.5 mr-1.5" />
                      {item.category}
                    </span>

                    <span className="text-xs text-slate-500">SHPE LMU</span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-[#222222] group-hover:text-[#0076A5] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.excerpt}
                  </p>

                  <div className="mt-4 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs font-semibold text-slate-700">
                      {item.highlight}
                    </p>
                  </div>
                </div>

                <div className="relative h-40 overflow-hidden">
                  {item.video ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED UPDATES */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-2xl bg-[#0076A5] flex items-center justify-center shadow-sm">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-[#222222]">
                Featured Events
              </h2>
              <p className="text-slate-600 text-sm">
                Click “Read More” to see details + photos
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredUpdates.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => openDetails(item)}
                  className="w-full text-left"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <div className="absolute bottom-4 left-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${getPillClass(
                          item.category
                        )}`}
                      >
                        <Tag size={12} />
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <span className="text-sm text-slate-500">{item.date}</span>
                    <h3 className="text-2xl font-display font-bold text-[#111827] mt-2">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-slate-600 leading-relaxed">
                      {item.excerpt}
                    </p>

                    <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0076A5]">
                      Read More <span className="text-lg">→</span>
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <Dialog open={open} onOpenChange={(v) => (v ? setOpen(true) : closeModal())}>
        <DialogContent className="sm:max-w-[980px] rounded-3xl p-0 overflow-hidden">
          {selected && (
            <div className="grid md:grid-cols-[1.25fr_1fr]">
              <div className="relative bg-black">
                <img
                  src={activeSrc || selected.image}
                  alt={selected.title}
                  className="w-full h-[320px] md:h-[520px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute left-5 right-5 bottom-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${getPillClass(
                        selected.category
                      )}`}
                    >
                      <Tag size={12} />
                      {selected.category}
                    </span>
                    <span className="text-white/85 text-sm">{selected.date}</span>
                  </div>
                  <h3 className="mt-2 text-2xl md:text-3xl font-display font-bold text-white">
                    {selected.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-7 bg-white">
                <DialogHeader>
                  <DialogTitle className="sr-only">{selected.title}</DialogTitle>
                </DialogHeader>

                <p className="text-slate-700 leading-relaxed">{selected.excerpt}</p>

                {selected.details?.length ? (
                  <ul className="mt-4 space-y-2 text-slate-700">
                    {selected.details.map((line, idx) => (
                      <li key={idx} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0076A5]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-6">
                  <p className="text-xs font-semibold text-slate-500 mb-2">
                    Photos
                  </p>

                  {combinedGallery.length ? (
                    <div className="grid grid-cols-4 gap-2">
                      {combinedGallery.slice(0, 12).map((src, idx) => (
                        <button
                          key={src + idx}
                          type="button"
                          onClick={() => setActiveSrc(src)}
                          className={`rounded-xl overflow-hidden border transition ${
                            (activeSrc || selected.image) === src
                              ? "border-[#0076A5]"
                              : "border-slate-200 hover:border-slate-300"
                          }`}
                          aria-label={`Open photo ${idx + 1}`}
                        >
                          <img
                            src={src}
                            alt={`Thumbnail ${idx + 1}`}
                            className="h-16 w-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4 text-center text-sm text-slate-600">
                      No photos yet.
                    </div>
                  )}
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    onClick={closeModal}
                    className="bg-[#0076A5] hover:bg-[#005f85] text-white"
                  >
                    Close
                  </Button>

                  {/* ✅ per-featured-event instagram link */}
                  <Button
                    variant="outline"
                    className="border-[#AB0C2F] text-[#AB0C2F] hover:bg-[#AB0C2F]/10"
                    asChild
                  >
                    <a
                      href={instagramHref}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See more on Instagram
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center rounded-3xl bg-white border border-slate-200 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-[#222222]">
              Want to be part of the impact?
            </h2>

            <p className="mt-3 text-slate-600">
              Follow us for updates and reach out to get involved. Whether you’re
              new to SHPE or already part of the familia, there’s a place for you.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Button
                className="bg-[#AB0C2F] hover:bg-[#8F0927] text-white"
                size="lg"
                asChild
              >
                <a
                  href="https://instagram.com/shpelmu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-[#0076A5] text-[#0076A5] hover:bg-[#0076A5]/10"
                asChild
              >
                <a href="mailto:shpe@lmu.edu">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
