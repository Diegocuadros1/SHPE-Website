"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Tag, Megaphone } from "lucide-react";

const initiatives = [
  {
    id: "gm1",
    category: "General Meeting",
    title: "General Meeting #1",
    excerpt:
      "Our first general meeting of the semester—meet the board, learn what SHPE is about, and get plugged into upcoming events and opportunities.",
    highlight: "Meet the board • Upcoming events • Get involved",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=700&fit=crop",
  },
  {
    id: "beach-social",
    category: "Social",
    title: "Latinx Beach Social / Bonfire",
    excerpt:
      "A community night by the beach to build friendships, celebrate culture, and connect with other students in a relaxed setting.",
    highlight: "Community • Culture • Connection",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&h=700&fit=crop",
  },
  {
    id: "resume-workshop",
    category: "Professional Development",
    title: "Resume Building Workshop",
    excerpt:
      "Hands-on resume support and real feedback so members can apply confidently to internships, research roles, and jobs.",
    highlight: "Resume feedback • Templates • Career prep",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&h=700&fit=crop",
  },
  {
    id: "linkedin-workshop",
    category: "Professional Development",
    title: "LinkedIn Workshop",
    excerpt:
      "Build a stronger LinkedIn profile, learn networking best practices, and position yourself for opportunities.",
    highlight: "Profile upgrades • Networking • Recruiter tips",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&h=700&fit=crop",
  },
  {
    id: "lmu-ucla-social",
    category: "Community",
    title: "LMU x UCLA Social",
    excerpt:
      "A cross-campus social to connect with other SHPE members, share experiences, and build community beyond LMU.",
    highlight: "Cross-campus • New friends • Familia",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=900&h=700&fit=crop",
  },
  {
    id: "conference-prep",
    category: "SHPE Nationals",
    title: "Conference Prep Meeting",
    excerpt:
      "We prepped members for conference weekend—what to bring, how to approach the career fair, and how to maximize the experience.",
    highlight: "Game plan • Career fair • What to expect",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&h=700&fit=crop",
  },
  {
    id: "elevator-pitch",
    category: "Professional Development",
    title: "Elevator Pitch Workshop",
    excerpt:
      "Practice your pitch, get feedback, and learn how to confidently share your story, interests, and goals in 30 seconds.",
    highlight: "Confidence • Practice • Feedback",
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&h=700&fit=crop",
  },
];

const featuredUpdates = [
  {
    id: 1,
    date: "December 15, 2024",
    category: "Events",
    title: "End of Semester Celebration",
    excerpt:
      "Join us for our annual end of semester celebration! We'll be reflecting on our achievements and celebrating our community.",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=700&fit=crop",
  },
  {
    id: 2,
    date: "November 20, 2024",
    category: "Professional Development",
    title: "SHPE National Convention Recap",
    excerpt:
      "Our chapter sent members to SHPE National Convention. Read about experiences, takeaways, and what’s next.",
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=700&fit=crop",
  },
];

export default function OurImpact() {
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
          {/* LMU overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/75 to-[#0076A5]/85" />
          <div className="absolute inset-0 opacity-[0.14] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.7)_1px,transparent_0)] [background-size:28px_28px]" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Our Impact<span className="text-[#F4B400]">.</span>
          </h1>

          <p className="text-lg text-white/85 max-w-2xl mx-auto">
            What we build at SHPE LMU: community, opportunity, and support that
            helps students thrive.
          </p>
        </div>
      </section>

      {/* INITIATIVES / EVENTS */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-12">
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
              supported academically, prepared professionally, and connected to a
              community that pushes them forward. Our events are where that
              mission comes to life.
            </p>

            <p className="mt-2 text-slate-600 leading-relaxed">
              Each event is built around one goal: helping students grow. Whether
              you’re looking for community, career support, or ways to give back,
              there’s a place for you here.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {initiatives.map((item) => (
              <article
                key={item.id}
                className="group rounded-3xl bg-slate-50/40 border border-slate-200 hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#0076A5]/10 text-[#0076A5] text-xs font-semibold">
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

                {/* image at bottom */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                Featured Updates
              </h2>
              <p className="text-slate-600 text-sm">What we’ve been up to lately</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {featuredUpdates.map((item) => (
              <article
                key={item.id}
                className="rounded-3xl bg-white border border-slate-200 hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#AB0C2F] text-white text-xs font-semibold">
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

                  <button
                    type="button"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0076A5] hover:text-[#AB0C2F] transition"
                  >
                    Read More <span className="text-lg">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
