"use client";

import { useMemo, useState } from "react";
import { Users, Linkedin, Mail } from "lucide-react";
import { leadership, advisors, interns } from "@/data/data";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function initials(name = "") {
  const parts = name.trim().split(" ").filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0][0]?.toUpperCase() ?? "?";
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function RoleBadge({ role }: { role: string }) {
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

const H_SCROLL =
  "flex md:grid gap-6 overflow-x-auto md:overflow-visible snap-x snap-proximity pb-4 -mx-4 px-4 md:mx-0 md:px-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden";

const H_ITEM =
  "shrink-0 md:shrink-100 w-[85%] max-w-[320px] md:w-auto md:max-w-none snap-start";

const EBoardPage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedMember = useMemo(
    () => leadership.find((m) => m.id === selectedId) || null,
    [selectedId]
  );

  const selectedMemberIntern = useMemo(
    () => interns.find((m) => m.id === selectedId) || null,
    [selectedId]
  )

  const openMember = (member: any) => {
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
      <section className="py-20 md:py-28 bg-[#F5F5F5] overflow-x-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="w-full flex items-baseline">
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
                Click any member to learn more and connect!
              </p>
            </div>
          </div>

          {/* ✅ Mobile swipe row, md+ grid */}
          <div
            className={`${H_SCROLL} md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto`}
          >
            {leadership.map((member) => {
              const disabled = !!member.isPlaceholder;

              return (
                <div key={member.id} className={H_ITEM}>
                  <button
                    type="button"
                    onClick={() => openMember(member)}
                    className={[
                      "w-full text-left rounded-3xl border border-slate-200 bg-slate-50/40 overflow-hidden shadow-sm",
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
                            loading="lazy"
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
                </div>
              );
            })}
          </div>

          <Dialog
            open={!!selectedMember}
            onOpenChange={(o) => !o && closeMember()}
          >
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
                            {focus.map((tag: string) => (
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

      <div className="w-full h-[1px] bg-slate-200"/>

      {/* INTERNS SECTION */}
      <section className="py-20 md:py-28 bg-[#F5F5F5] overflow-x-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="w-full flex items-baseline">
            <div className="max-w-3xl mb-14 text-left">
              <div className="flex items-center gap-3 mb-6">
                {/* <div className="w-12 h-12 rounded-2xl bg-[#0076A5] flex items-center justify-center shadow-sm">
                  <Users className="w-6 h-6 text-white" />
                </div> */}
              </div>

              <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5] mb-4">
                Meet Our <span className="text-[#AB0C2F]">Interns</span>
              </h2>

              <p className="text-[#222222]">
                Click any member to learn more and connect!
              </p>
            </div>
          </div>

          {/* ✅ Mobile swipe row, md+ grid */}
          <div
            className={`${H_SCROLL} md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto`}
          >
            {interns.map((member) => {
              const disabled = !!member.isPlaceholder;

              return (
                <div key={member.id} className={H_ITEM}>
                  <button
                    type="button"
                    onClick={() => openMember(member)}
                    className={[
                      "w-full text-left rounded-3xl border border-slate-200 bg-slate-50/40 overflow-hidden shadow-sm",
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
                            loading="lazy"
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
                </div>
              );
            })}
          </div>

          <Dialog
            open={!!selectedMemberIntern}
            onOpenChange={(o) => !o && closeMember()}
          >
            <DialogContent className="w-[calc(100vw-1.5rem)] sm:w-full sm:max-w-[980px] max-h-[85vh] overflow-y-auto p-4 sm:p-6">
              {selectedMemberIntern && (
                <>
                  <DialogHeader>
                    <DialogTitle className="flex flex-col sm:flex-row sm:items-center gap-4">
                      {selectedMemberIntern.photo ? (
                        <img
                          src={selectedMemberIntern.photo}
                          alt={`${selectedMemberIntern.name} headshot`}
                          className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border border-[#0076A5]/15 shadow-sm"
                        />
                      ) : (
                        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#0076A5]/10 border border-[#0076A5]/15 flex items-center justify-center font-bold text-[#0076A5] text-xl">
                          {initials(selectedMemberIntern.name)}
                        </div>
                      )}

                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-display font-bold text-slate-900 text-lg sm:text-xl">
                            {selectedMemberIntern.name}
                          </span>
                          <RoleBadge role={selectedMemberIntern.role} />
                        </div>
                        <DialogDescription className="mt-1">
                          {selectedMemberIntern.major} • {selectedMemberIntern.year}
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
                          {selectedMemberIntern.bio}
                        </p>
                      </div>

                      {selectedMemberIntern.funFact && (
                        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                          <p className="text-sm text-slate-700">
                            <span className="font-semibold">Fun fact:</span>{" "}
                            {selectedMemberIntern.funFact}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-3">
                      <div className="overflow-hidden rounded-2xl border border-slate-200">
                        <img
                          src={selectedMemberIntern.funPhoto || "/fun.png"}
                          alt={`${selectedMemberIntern.name} fun photo`}
                          className="w-full h-[220px] sm:h-[280px] lg:h-[340px] object-cover"
                        />
                      </div>

                      <h4 className="text-sm font-semibold text-slate-900">
                        Connect
                      </h4>

                      <div className="rounded-2xl border border-slate-200 p-4 space-y-3">
                        {selectedMemberIntern.email && (
                          <a
                            href={`mailto:${selectedMemberIntern.email}`}
                            className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900 transition break-all"
                          >
                            <Mail className="w-4 h-4 shrink-0" />
                            {selectedMemberIntern.email}
                          </a>
                        )}

                        {selectedMemberIntern.linkedin && (
                          <a
                            href={selectedMemberIntern.linkedin}
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
      <section className="py-20 md:py-24 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4 flex flex-col items-center ">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="mt-5 text-3xl md:text-5xl font-display font-bold text-[#0076A5]">
              Chapter <span className="text-[#AB0C2F]">Advisors</span>
            </h2>
          </div>

          {/* ✅ Mobile swipe row, md+ grid */}
          <div className={`${H_SCROLL} md:grid-cols-2 max-w-4xl mx-auto`}>
            {advisors.map((a) => (
              <div key={a.id} className={H_ITEM}>
                <div className="rounded-3xl border border-slate-200 bg-slate-50/40 overflow-hidden shadow-sm h-full">
                  <div className="p-5 sm:p-6">
                    <div className="aspect-[4/3] w-full max-w-[340px] mx-auto overflow-hidden rounded-xl border border-slate-200 bg-white">
                      <img
                        src={a.photo}
                        alt={`${a.name} headshot`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    <div className="mt-5 text-center w-full justify-center items-center">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EBoardPage;
