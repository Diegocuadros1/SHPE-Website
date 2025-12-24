"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Users,
  BookOpen,
  Briefcase,
  Calendar,
  Mail,
  Instagram,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";
import Link from "next/link";
import { useState, useRef } from "react";

const pillars = [
  {
    icon: Users,
    title: "Community",
    description:
      "Build lasting connections with fellow Hispanic engineers and professionals who share your journey.",
  },
  {
    icon: BookOpen,
    title: "Academics",
    description:
      "Access tutoring, study groups, and resources to excel in your engineering coursework.",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description:
      "Workshops, resume reviews, and networking events to launch your engineering career.",
  },
];

const upcomingEvents = [
  {
    date: "Jan 15",
    title: "Welcome Back Meeting",
    time: "5:00 PM - 6:30 PM",
  },
  {
    date: "Jan 22",
    title: "Resume Workshop",
    time: "4:00 PM - 5:30 PM",
  },
  {
    date: "Feb 5",
    title: "Tech Company Info Session",
    time: "6:00 PM - 7:30 PM",
  },
];

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Video with Overlay */}
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover"
          >
            <source src="/SHPEsgiving .mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="absolute inset-0 bg-gradient-to-r from-crimson/90 via-crimson/75 to-crimson/60" />
        </div>

        {/* Video Control Button */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-8 right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium hover:bg-primary-foreground/20 transition-all duration-300"
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <>
              <Pause className="w-4 h-4" /> Pause Video
            </>
          ) : (
            <>
              <Play className="w-4 h-4" /> Play Video
            </>
          )}
        </button>

        {/* Geometric Accents */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary-foreground/20 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="max-w-3xl">
            <div className="animate-slide-up">
              <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground font-medium text-sm mb-6 border border-primary-foreground/30 backdrop-blur-sm">
                Society of Hispanic Professional Engineers
              </span>
            </div>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Empowering the Next Generation of{" "}
              <span className="text-gold">Hispanic Engineers</span>
            </h1>

            <p
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              Join LMU's premier organization for Hispanic students in STEM.
              Build community, develop professionally, and create lasting
              impact.
            </p>

            <div
              className="flex flex-wrap gap-4 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is SHPE Section */}
      <section className="py-20 md:py-28 bg-pattern">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
                What is <span className="text-primary">SHPE</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SHPE changes lives by empowering the Hispanic community to
                realize its fullest potential and impacts the world through STEM
                awareness, access, support, and development. At LMU, we bring
                this mission to life through community, academics, and
                professional development.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold/20 rounded-full blur-3xl" />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                alt="Students collaborating on engineering project"
                className="rounded-2xl shadow-lg w-full h-[300px] object-cover"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={pillar.title}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-hero-gradient flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Gallery Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl font-display font-bold text-foreground text-center mb-8">
            Our Community in Action
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=300&h=300&fit=crop"
              alt="SHPE networking event"
              className="rounded-xl w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop"
              alt="Students at workshop"
              className="rounded-xl w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=300&h=300&fit=crop"
              alt="Team collaboration"
              className="rounded-xl w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop"
              alt="Group celebration"
              className="rounded-xl w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Calendar Embed */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                    Events Calendar
                  </h2>
                  <p className="text-muted-foreground">
                    Stay updated on all SHPE activities
                  </p>
                </div>
              </div>

              {/* Google Calendar Embed */}
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border bg-card">
                <iframe
                  src="https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles&showTitle=0&showNav=1&showPrint=0&showTabs=0&showCalendars=0"
                  className="w-full h-[400px] md:h-[500px]"
                  frameBorder="0"
                  scrolling="no"
                  title="SHPE LMU Events Calendar"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-4 text-center">
                * Replace this embed with your SHPE Google Calendar ID for real
                events
              </p>
            </div>

            {/* Right: Upcoming Events List */}
            <div>
              <h3 className="text-xl font-display font-bold text-foreground mb-6">
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="flex gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-hero-gradient flex flex-col items-center justify-center text-primary-foreground">
                      <span className="text-xs font-medium uppercase">
                        {event.date.split(" ")[0]}
                      </span>
                      <span className="text-xl font-bold">
                        {event.date.split(" ")[1]}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {event.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all self-center" />
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 rounded-2xl bg-hero-gradient text-primary-foreground">
                <h3 className="font-display font-bold text-lg mb-2">
                  Have Questions?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  Reach out to us anytime!
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="mailto:shpe@lmu.edu"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-medium"
                  >
                    <Mail size={16} /> shpe@lmu.edu
                  </a>
                  <a
                    href="https://instagram.com/shpelmu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors text-sm font-medium"
                  >
                    <Instagram size={16} /> @shpelmu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')] opacity-50" />

        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6">
            Ready to Join Our <span className="text-gold">Familia</span>?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Become part of a supportive community that will help you grow
            academically, professionally, and personally.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" asChild>
              <a
                href="https://shpe.org"
                target="_blank"
                rel="noopener noreferrer"
              >
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
};

export default Index;
