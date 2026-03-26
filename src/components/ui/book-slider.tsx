"use client";

import React, { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";

export type Achievement = {
  id: string;
  label: string;
  title: string;
  description: string;
  image: string;
};

/* ── Page wrappers ────────────────────────────────────────────────── */

const CoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="w-full h-full select-none"
    style={{ background: "transparent" }}
  >
    <div
      className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden rounded-l-lg"
      style={{
        background: "linear-gradient(135deg, #AB0C2F 0%, #7a0921 60%, #0076A5 100%)",
      }}
    >
      {/* dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-4 px-8 text-center">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg"
          style={{ background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)" }}
        >
          S
        </div>
        <div>
          <p className="text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-1">
            SHPE LMU
          </p>
          <h1 className="text-white font-black text-3xl leading-tight">
            Our
            <br />
            Achievements
          </h1>
          <div className="mt-3 w-10 h-1 bg-[#F4B400] rounded-full mx-auto" />
        </div>
        <p className="text-white/60 text-xs mt-2">Flip to explore →</p>
      </div>
    </div>
  </div>
));
CoverPage.displayName = "CoverPage";

const AchievementPage = forwardRef<
  HTMLDivElement,
  { achievement: Achievement; index: number }
>(({ achievement, index }, ref) => (
  <div
    ref={ref}
    className="w-full h-full select-none"
    style={{ background: "transparent" }}
  >
    <div className="w-full h-full flex flex-col overflow-hidden rounded-r-lg bg-white shadow-inner">
      {/* Photo */}
      <div className="relative flex-shrink-0 h-[55%] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={achievement.image}
          alt={achievement.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-[#AB0C2F]">
            {achievement.label}
          </span>
        </div>
        <div className="absolute bottom-3 right-4 text-white/40 text-xs font-mono">
          {String(index).padStart(2, "0")}
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 flex flex-col justify-center px-6 py-5 gap-3">
        <div className="w-6 h-0.5 bg-[#F4B400] rounded-full" />
        <h2 className="text-[#1a1a1a] font-black text-lg leading-snug">
          {achievement.title}
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          {achievement.description}
        </p>
        <p className="text-[10px] text-slate-300 font-semibold tracking-widest uppercase mt-auto">
          SHPE LMU · 2024–2025
        </p>
      </div>
    </div>
  </div>
));
AchievementPage.displayName = "AchievementPage";

const BackCoverPage = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    className="w-full h-full select-none"
    style={{ background: "transparent" }}
  >
    <div
      className="w-full h-full flex flex-col items-center justify-center rounded-r-lg"
      style={{ background: "linear-gradient(135deg, #0076A5 0%, #005f85 100%)" }}
    >
      <div className="text-center px-8">
        <p className="text-white/50 text-xs tracking-widest uppercase mb-3">
          Loyola Marymount University
        </p>
        <p className="text-white font-bold text-xl">SHPE LMU</p>
        <p className="text-white/50 text-sm mt-1">Society of Hispanic</p>
        <p className="text-white/50 text-sm">Professional Engineers</p>
      </div>
    </div>
  </div>
));
BackCoverPage.displayName = "BackCoverPage";

/* ── Main component ───────────────────────────────────────────────── */

interface BookSliderProps {
  achievements: Achievement[];
}

export default function BookSlider({ achievements }: BookSliderProps) {
  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <HTMLFlipBook
        width={320}
        height={440}
        maxShadowOpacity={0.4}
        drawShadow={true}
        showCover={true}
        size="fixed"
        minWidth={280}
        maxWidth={400}
        minHeight={380}
        maxHeight={500}
        className="shpe-flipbook"
        style={{}}
        startPage={0}
        flippingTime={700}
        usePortrait={false}
        startZIndex={0}
        autoSize={false}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
        mobileScrollSupport={true}
      >
        <CoverPage />

        {achievements.map((item, i) => (
          <AchievementPage key={item.id} achievement={item} index={i + 1} />
        ))}

        <BackCoverPage />
      </HTMLFlipBook>
    </div>
  );
}
