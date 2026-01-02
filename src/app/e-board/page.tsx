"use client";

import { useMemo, useState } from "react";
import { Users, Linkedin, Mail } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

/* ------------------ E-BOARD DATA ------------------ */

const leadership = [
  {
    id: "sebastian",
    role: "Co-President",
    name: "Sebastian Rocha",
    major: "Computer Science",
    year: "Senior",
    photo: "/sebastian_headshot.png",
    funPhoto: "/sebastian_fun_pic.jpg",
    bio: "Growing up and studying in California has shown me the power of innovation, diversity, and the global impact of the tech industry. This has shaped my passion for empowering Hispanic students in STEM through mentorship and community, while bringing schools together and building meaningful collaboration across campuses. I’m driven to create inclusive spaces where everyone can grow academically, professionally, and personally while staying connected to their culture and purpose.",
    focus: ["Chapter growth", "Industry partnerships", "Member experience"],
    email: "seabass63265.sr@gmail.com",
    linkedin: "https://www.linkedin.com/in/sebastian-rocha1/",
    funFact: "I am an Ocean Lifeguard for the LA County Fire Department",
  },
  {
    id: "diego",
    role: "Co-President",
    name: "Diego Cuadros",
    major: "Computer Science",
    year: "Junior",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face",
    funPhoto: "/fun.png",
    bio: "Passionate about professional development and helping members feel supported from day one—whether it’s resumes, interviews, or finding community.",
    focus: ["Professional development", "Mentorship", "Workshops"],
    email: "shpe.lmu@example.com",
    linkedin: "https://www.linkedin.com",
    funFact: "Can’t say no to good tacos 🌮",
  },
  {
    id: "isabela-j",
    role: "Vice President",
    name: "Isabela Jimenez",
    major: "Mechanical Engineering",
    year: "Senior",
    photo:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&h=600&fit=crop&crop=face",
    funPhoto: "/fun.png",
    bio: "Driven by community impact and building spaces where members can lead with confidence and cultural pride.",
    focus: ["Leadership development", "Community", "Event execution"],
    email: "shpe.lmu@example.com",
    linkedin: "https://www.linkedin.com",
    funFact: "I’m a coffee snob (politely) ☕",
  },
  {
    id: "natali",
    role: "Vice President",
    name: "Natali Garcia",
    major: "Mechanical Engineering",
    year: "Junior",
    photo:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&h=600&fit=crop&crop=face",
    funPhoto: "/fun.png",
    bio: "Focused on building meaningful connections across campus and making SHPE events feel welcoming, organized, and fun.",
    focus: ["Member engagement", "Collaboration", "Culture"],
    email: "shpe.lmu@example.com",
    linkedin: "https://www.linkedin.com",
    funFact: "Give me a playlist theme and I’ll deliver 🔥",
  },
  {
    id: "simon",
    role: "Treasurer",
    name: "Simon Hernandez",
    major: "Computer Engineering",
    year: "Sophomore",
    photo:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&h=600&fit=crop&crop=face",
    funPhoto: "/fun.png",
    bio: "Keeps the chapter financially strong so we can fund events, travel, and resources that directly benefit members.",
    focus: ["Budgeting", "Funding", "Sponsorship support"],
    email: "shpe.lmu@example.com",
    linkedin: "https://www.linkedin.com",
    funFact: "I track everything (yes, everything) 📊",
  },
  {
    id: "isabel-c",
    role: "Media/Marketing",
    name: "Isabel Clemente",
    major: "Civil Engineering",
    year: "Senior",
    photo:
      "https://images.unsplash.com/photo-1524503033411-f7a2b6b1f2c8?w=600&h=600&fit=crop&crop=face",
    funPhoto: "/fun.png",
    bio: "Tells our story through content, highlights member wins, and makes SHPE LMU look as good as it feels to be part of it.",
    focus: ["Branding", "Social media", "Content & design"],
    email: "shpe.lmu@example.com",
    linkedin: "https://www.linkedin.com",
    funFact: "Send me your event pics 👀📸",
  },
  {
    id: "academic-chair",
    role: "Academic Chair",
    name: "Coming Soon",
    major: "—",
    year: "—",
    isPlaceholder: true,
  },
  {
    id: "secretary",
    role: "Secretary",
    name: "Coming Soon",
    major: "—",
    year: "—",
    isPlaceholder: true,
  },
];

/* ------------------ ADVISORS DATA ------------------ */

const advisors = [
  {
    id: "advisor-1",
    name: "Melodie Aubinelliott",
    title: "Senior Administrative Coordinator",
    email: "melodie.aubinelliott@lmu.edu",
    photo: "/Aubinelliott_Melodie2.png",
  },
  {
    id: "advisor-2",
    name: "Gustavo Vejarano",
    title: "Faculty Advisor",
    email: "Gustavo.Vejarano@lmu.edu",
    photo: "/gustavo.png",
  },
];

/* ------------------ HELPERS ------------------ */

function initials(name = "") {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function RoleBadge({ role }) {
  const style =
    role === "Co-President"
      ? "bg-[#AB0C2F]/10 text-[#AB0C2F] border-[#AB0C2F]/20"
      : role === "Vice President"
      ? "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20"
      : "bg-slate-900/5 text-slate-700 border-slate-900/10";

  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold border ${style}`}
    >
      {role}
    </span>
  );
}

/* ------------------ PAGE ------------------ */

const EBoardPage = () => {
  const [selectedId, setSelectedId] = useState(null);

  const selectedMember = useMemo(
    () => leadership.find((m) => m.id === selectedId) || null,
    [selectedId]
  );

  const openMember = (member) => {
    if (member?.isPlaceholder) return;
    setSelectedId(member.id);
  };

  const closeMember = () => setSelectedId(null);

  const focus = selectedMember?.focus ?? [];

  return (
    <>
      {/* ✅ KEEP THIS HERO */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/eboard2.png"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/75 to-[#0076A5]/85" />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Executive Board
          </h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto">
Meet the leaders behind our mission, programs, and community
          </p>
        </div>
      </section>

      {/* E-BOARD SECTION */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-14 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#0076A5] flex items-center justify-center shadow-sm">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5] mb-4">
              Meet Our <span className="text-[#AB0C2F]">E-Board</span>
            </h2>

            <p className="text-[#222222]">
              Meet the individuals who help lead and support SHPE LMU. Click any
              member to learn more and connect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {leadership.map((member) => {
              const disabled = !!member.isPlaceholder;

              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => openMember(member)}
                  className={[
                    "text-left rounded-3xl border border-slate-200 bg-slate-50/40 overflow-hidden shadow-sm",
                    "transition-all duration-300",
                    disabled
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:shadow-md hover:-translate-y-1 hover:border-[#0076A5]/30",
                  ].join(" ")}
                  aria-label={
                    disabled
                      ? `${member.role} is coming soon`
                      : `Open profile for ${member.name}`
                  }
                >
                  <div className="p-6 sm:p-8">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-200 bg-white">
                      {member.photo ? (
                        <img
                          src={member.photo}
                          alt={`${member.name} headshot`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#0076A5]/10 text-[#0076A5] text-4xl font-bold">
                          {initials(member.name)}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 text-center">
                      <div className="flex items-center justify-center gap-2 flex-wrap">
                        <h3 className="text-2xl font-display font-bold text-slate-900">
                          {member.name}
                        </h3>
                        <RoleBadge role={member.role} />
                      </div>

                      <p className="mt-1 text-base font-semibold text-slate-700">
                        {member.major}
                      </p>
                      <p className="text-sm text-slate-600">{member.year}</p>

                      {!disabled && member.bio && (
                        <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                          {member.bio}
                        </p>
                      )}

                      {!disabled && (
                        <p className="mt-4 text-xs text-slate-500">
                          Click to view profile →
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <Dialog open={!!selectedMember} onOpenChange={(o) => !o && closeMember()}>
            <DialogContent className="w-[calc(100vw-1.5rem)] sm:w-full sm:max-w-[980px] max-h-[85vh] overflow-y-auto p-4 sm:p-6">
              {selectedMember && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {selectedMember.photo ? (
                        <img
                          src={selectedMember.photo}
                          alt={`${selectedMember.name} headshot`}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#0076A5]/15 shadow-sm"
                        />
                      ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0076A5]/10 border border-[#0076A5]/15 flex items-center justify-center font-bold text-[#0076A5] text-xl">
                          {initials(selectedMember.name)}
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                            {selectedMember.name}
                          </span>
                          <RoleBadge role={selectedMember.role} />
                        </div>
                        <DialogDescription className="mt-1">
                          {selectedMember.major} • {selectedMember.year}
                        </DialogDescription>
                      </div>
                    </DialogTitle>
                  </DialogHeader>

                  <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-900">
                          About
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed mt-1">
                          {selectedMember.bio}
                        </p>
                      </div>

                      {focus.length > 0 && (
                        <div>
                          <h4 className="text-sm font-semibold text-slate-900">
                            Focus Areas
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {focus.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedMember.funFact && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm text-slate-700">
                            <span className="font-semibold">Fun fact:</span>{" "}
                            {selectedMember.funFact}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <img
                          src={selectedMember.funPhoto || "/fun.png"}
                          alt={`${selectedMember.name} fun photo`}
                          className="w-full h-[220px] sm:h-[280px] lg:h-[340px] object-cover"
                        />
                      </div>

                      <h4 className="text-sm font-semibold text-slate-900">
                        Connect
                      </h4>

                      <div className="rounded-2xl border border-slate-200 p-4 space-y-3">
                        {selectedMember.email && (
                          <a
                            href={`mailto:${selectedMember.email}`}
                            className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition break-all"
                          >
                            <Mail className="w-4 h-4 shrink-0" />
                            {selectedMember.email}
                          </a>
                        )}

                        {selectedMember.linkedin && (
                          <a
                            href={selectedMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition"
                          >
                            <Linkedin className="w-4 h-4 shrink-0" />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* ADVISORS SECTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold text-[#0076A5]">
              Chapter <span className="text-[#AB0C2F]">Advisors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisors.map((a) => (
              <div
                key={a.id}
                className="rounded-3xl border border-slate-200 bg-slate-50/40 overflow-hidden shadow-sm"
              >
                <div className="p-5 sm:p-6">
                  <div className="aspect-[4/3] w-full max-w-[340px] mx-auto overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <img
                      src={a.photo}
                      alt={`${a.name} headshot`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <h3 className="text-xl font-display font-bold text-slate-900">
                      {a.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-slate-700">
                      {a.title}
                    </p>

                    <div className="mt-2 flex items-center justify-center gap-2 text-slate-500 text-sm">
                      <Mail className="w-4 h-4" />
                      <a
                        href={`mailto:${a.email}`}
                        className="text-sm text-slate-600 hover:text-slate-900 transition break-all"
                      >
                        {a.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EBoardPage;
