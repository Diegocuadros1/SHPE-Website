"use client";

import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Tag } from "lucide-react";

const newsItems = [
  {
    id: 1,
    date: "December 15, 2024",
    category: "Events",
    title: "End of Semester Celebration",
    excerpt:
      "Join us for our annual end of semester celebration! We'll be reflecting on our achievements and celebrating our community.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
  },
  {
    id: 2,
    date: "November 20, 2024",
    category: "Professional Development",
    title: "SHPE National Convention Recap",
    excerpt:
      "Our chapter sent 15 members to the SHPE National Convention in Anaheim. Read about their experiences and takeaways.",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    date: "November 5, 2024",
    category: "Academics",
    title: "Midterm Study Sessions",
    excerpt:
      "Our peer tutoring program helped over 30 students prepare for their midterm exams this semester.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    date: "October 15, 2024",
    category: "Community",
    title: "Hispanic Heritage Month Celebration",
    excerpt:
      "We celebrated Hispanic Heritage Month with a special cultural showcase featuring food, music, and presentations.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    date: "September 28, 2024",
    category: "Events",
    title: "Welcome Week Success",
    excerpt:
      "We welcomed 20 new members during our Fall Welcome Week events. Check out the highlights!",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    date: "September 10, 2024",
    category: "Professional Development",
    title: "Resume Workshop with Boeing",
    excerpt:
      "Engineers from Boeing visited campus to help our members polish their resumes for the career fair.",
    featured: false,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  },
];

const News = () => {
  const featuredNews = newsItems.filter((item) => item.featured);
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            src="/OurImpact.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-crimson/90 via-crimson-dark/85 to-crimson/90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold font-medium text-sm mb-6 border border-gold/30">
            Stay Informed
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6">
            News & <span className="text-gold">Updates</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Keep up with the latest happenings in our SHPE chapter at LMU.
          </p>
        </div>
      </section>

      {/* FEATURED NEWS */}
      <section className="py-20 md:py-28 bg-pattern">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl bg-hero-gradient flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground">
                Featured Updates
              </h2>
              <p className="text-muted-foreground text-sm">
                The latest from SHPE LMU
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {featuredNews.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                      <Tag size={12} />
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="text-sm text-muted-foreground">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3 mt-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {item.excerpt}
                  </p>
                  <Button variant="link" className="p-0 h-auto group/btn">
                    Read More
                    <ArrowRight
                      size={16}
                      className="ml-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* ALL UPDATES */}
          <h3 className="text-xl font-display font-bold text-foreground mb-6">
            All Updates
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <article
                key={item.id}
                className="group rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gold/20 text-gold-dark text-xs font-medium">
                      {item.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h4>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {item.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Never Miss an Update
            </h2>
            <p className="text-muted-foreground mb-8">
              Follow us on social media and join our mailing list to stay connected with SHPE LMU.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <a
                  href="https://instagram.com/shpelmu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow on Instagram
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a href="mailto:shpe@lmu.edu">Join Mailing List</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
