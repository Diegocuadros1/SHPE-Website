"use client";

import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/ImageGallery";
import { Target, Heart, Lightbulb, GraduationCap, Handshake } from "lucide-react";

const galleryImages = [
  { src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=400&fit=crop", alt: "Community moment" },
  { src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop", alt: "Team photo" },
  { src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop", alt: "Workshop" },
  { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop", alt: "Meeting" },
  { src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop", alt: "Celebration" },
  { src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop", alt: "Collaboration" },
  { src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop", alt: "Event gathering" },
  { src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop", alt: "Team discussion" },
  { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop", alt: "Conference" },
  { src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop", alt: "Group activity" },
  { src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=400&fit=crop", alt: "Networking" },
  { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop", alt: "Convention" },
];

const values = [
  { icon: Heart, title: "Familia", description: "We are a family that supports and uplifts each other through every challenge." },
  { icon: Lightbulb, title: "Innovation", description: "We embrace creativity and forward-thinking in all aspects of engineering." },
  { icon: GraduationCap, title: "Excellence", description: "We strive for academic and professional excellence in everything we do." },
  { icon: Handshake, title: "Service", description: "We give back to our community through outreach and mentorship programs." },
];

const About = () => {
  return (
    <>
      {/* HERO */}
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
Discover our mission, values, and the community driving SHPE LMU forward          </p>
        </div>
      </section>

      {/* MISSION + IMAGE */}
      <section className="py-16 md:py-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                SHPE at Loyola Marymount University is dedicated to empowering and advancing
                Hispanic students in STEM by fostering academic excellence, professional
                development, leadership, and community engagement. Through collaboration with
                industry partners, campus organizations, and the national SHPE network, we provide
                resources, mentorship, and service opportunities that promote inclusion, cultural
                pride, and social responsibility. Guided by LMU’s mission of service and justice,
                SHPE LMU builds a supportive community that prepares members to succeed as engineers,
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

            <div className="relative">
              <img
                src="/SHPE3.png"
                alt="Engineering students working together"
                className="rounded-2xl shadow-lg w-full h-[320px] object-cover mb-4"
              />

              <div className="grid grid-cols-3 gap-4">
                {["80+ Members", "20+ Events", "5+ Years"].map((item) => (
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
        </div>
      </section>

      {/* VALUES */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0076A5]/20 text-[#0076A5] text-sm mb-3">
              What Drives Us
            </span>
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

      {/* PHOTO GALLERY */}
      <section className="pt-8 pb-12 bg-[#0076A5]">
        <div className="container mx-auto px-4">
          <p className="text-center text-white/80 text-sm mb-4">
            Click any image to view larger
          </p>
          <ImageGallery images={galleryImages} />
        </div>
      </section>
    </>
  );
};

export default About;
