"use client";

import { Button } from "@/components/ui/button";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { ImageGallery } from "@/components/ImageGallery";
import Link from "next/link";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=400&fit=crop",
    alt: "Community moment",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&h=400&fit=crop",
    alt: "Team photo",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=400&fit=crop",
    alt: "Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop",
    alt: "Meeting",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=400&fit=crop",
    alt: "Celebration",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop",
    alt: "Collaboration",
  },
  {
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=400&fit=crop",
    alt: "Event gathering",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=400&fit=crop",
    alt: "Team discussion",
  },
  {
    src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=400&fit=crop",
    alt: "Conference",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&h=400&fit=crop",
    alt: "Group activity",
  },
  {
    src: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=400&h=400&fit=crop",
    alt: "Networking",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    alt: "Convention",
  },
];

const leadership = [
  {
    role: "President",
    name: "Your Name Here",
    major: "Mechanical Engineering",
    year: "Senior",
  },
  {
    role: "Vice President",
    name: "Your Name Here",
    major: "Electrical Engineering",
    year: "Junior",
  },
  {
    role: "Treasurer",
    name: "Your Name Here",
    major: "Computer Science",
    year: "Junior",
  },
  {
    role: "Secretary",
    name: "Your Name Here",
    major: "Civil Engineering",
    year: "Sophomore",
  },
];

const values = [
  {
    icon: Heart,
    title: "Familia",
    description:
      "We are a family that supports and uplifts each other through every challenge.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward-thinking in all aspects of engineering.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description:
      "We strive for academic and professional excellence in everything we do.",
  },
  {
    icon: Handshake,
    title: "Service",
    description:
      "We give back to our community through outreach and mentorship programs.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/eboard2.png"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/85 to-[#0076A5]/90" />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#AB0C2F]/20 text-[#AB0C2F] font-medium text-sm mb-6 border border-[#AB0C2F]/30">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            About SHPE LMU
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Learn about our mission, values, and the people who make our chapter
            thrive.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#0076A5] flex items-center justify-center"> {/* LMU Blue */}
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5] mb-6"> {/* LMU Blue */}
              Meet Our <span className="text-[#AB0C2F]">E-Board</span> {/* LMU Crimson */}
            </h2>
            <p className="text-[#222222]">
              Our dedicated leadership team works tirelessly to create
              opportunities for our members.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((member, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-white border border-[#DDDDDD] hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <img
                  src={`https://images.unsplash.com/photo-${
                    index === 0
                      ? "1507003211169-0a1dd7228f2d"
                      : index === 1
                      ? "1494790108377-be9c29b29330"
                      : index === 2
                      ? "1500648767791-00dcc994a43e"
                      : "1438761681033-6461ffad8d80"
                  }?w=200&h=200&fit=crop&crop=face`}
                  alt={`${member.role} placeholder photo`}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-4 group-hover:scale-105 transition-transform border-4 border-[#0076A5]/20"
                />
                <span className="inline-block px-3 py-1 rounded-full bg-[#FFD700]/20 text-[#FFD700] text-xs font-semibold mb-3">
                  {member.role}
                </span>
                <h3 className="font-display font-bold text-[#0076A5] mb-1"> {/* LMU Blue */}
                  {member.name}
                </h3>
                <p className="text-sm text-muted-foreground">{member.major}</p>
                <p className="text-xs text-muted-foreground">{member.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0076A5] flex items-center justify-center"> {/* LMU Blue */}
                  <Target className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-[#0076A5] uppercase tracking-wider"> {/* LMU Blue */}
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-[#0076A5] mb-6"> {/* LMU Blue */}
                Empowering Hispanics to Realize Their Fullest Potential
              </h2>
              <p className="text-[#222222] leading-relaxed mb-6">
                The Society of Hispanic Professional Engineers (SHPE) was
                founded in Los Angeles, California, in 1974. SHPE has since
                grown to become the nation's largest association dedicated to
                fostering Hispanic leadership in the STEM field.
              </p>
              <p className="text-[#222222] leading-relaxed mb-6">
                At Loyola Marymount University, our chapter brings this national
                mission to life through community building, academic excellence,
                and professional development opportunities.
              </p>
              <div className="flex gap-4">
                <Button variant="default" asChild>
                  <a
                    href="https://shpe.org"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit SHPE National
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#0076A5]/20 rounded-full blur-2xl" /> {/* LMU Blue */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#AB0C2F]/20 rounded-full blur-2xl" /> {/* LMU Crimson */}
              <img
                src="/SHPE3.png"
                alt="Engineering students working together"
                className="rounded-2xl shadow-lg w-full h-[350px] object-cover mb-4"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-white border border-[#DDDDDD]">
                  <div className="text-2xl font-display font-bold text-[#0076A5]"> {/* LMU Blue */}
                    50+
                  </div>
                  <p className="text-xs text-muted-foreground">Members</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-[#DDDDDD]">
                  <div className="text-2xl font-display font-bold text-[#0076A5]"> {/* LMU Blue */}
                    10+
                  </div>
                  <p className="text-xs text-muted-foreground">Events</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-white border border-[#DDDDDD]">
                  <div className="text-2xl font-display font-bold text-[#0076A5]"> {/* LMU Blue */}
                    5+
                  </div>
                  <p className="text-xs text-muted-foreground">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Slider */}
      <section className="py-10 bg-[#0076A5]"> {/* LMU Blue */}
        <div className="container mx-auto px-4">
          <p className="text-center text-white/80 text-sm mb-4">
            Click any image to view larger
          </p>
          <ImageGallery images={galleryImages} />
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#0076A5]/20 text-[#0076A5] font-medium text-sm mb-4"> {/* LMU Blue */}
              What Drives Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-[#0076A5] mb-6"> {/* LMU Blue */}
              Our <span className="text-[#AB0C2F]">Core Values</span> {/* LMU Crimson */}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group p-6 rounded-2xl bg-white border border-[#DDDDDD] hover:border-[#0076A5]/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-[#0076A5]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"> {/* LMU Blue */}
                  <value.icon className="w-7 h-7 text-[#0076A5]" /> {/* LMU Blue */}
                </div>
                <h3 className="text-lg font-display font-bold text-[#0076A5] mb-2"> {/* LMU Blue */}
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
