"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Instagram, Linkedin, Send, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1920&h=800&fit=crop"
            alt="Students meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/85 to-[#0076A5]/90" /> {/* LMU Colors */}
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center py-20">
          <span className="inline-block px-4 py-2 rounded-full bg-[#0076A5]/20 text-[#0076A5] font-medium text-sm mb-6 border border-[#0076A5]/30"> {/* LMU Blue */}
            Reach Out
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Contact <span className="text-[#FFD700]">Us</span> {/* LMU Gold */}
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions? Want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]"> {/* LMU Light Gray */}
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-[#DDDDDD] shadow-lg"> {/* LMU Light Gray */}
                <h2 className="text-2xl font-display font-bold text-[#0076A5] mb-6"> {/* LMU Blue */}
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-[#0076A5] hover:bg-[#005f7a]"> {/* LMU Blue */}
                    Send Message <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-display font-bold text-[#0076A5] mb-6"> {/* LMU Blue */}
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Whether you're a prospective member, a company looking to
                partner, or just want to learn more about SHPE at LMU, we're
                here to help!
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex gap-4 p-5 rounded-xl bg-[#0076A5]/10 border border-[#DDDDDD]"> {/* LMU Blue */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#FFD700]/20 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#0076A5]" /> {/* LMU Blue */}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0076A5] mb-1"> {/* LMU Blue */}
                      Email Us
                    </h3>
                    <a
                      href="mailto:shpe@lmu.edu"
                      className="text-[#0076A5] hover:underline"
                    >
                      shpe@lmu.edu
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex gap-4 p-5 rounded-xl bg-[#0076A5]/10 border border-[#DDDDDD]"> {/* LMU Blue */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#FFD700]/20 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#0076A5]" /> {/* LMU Blue */}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0076A5] mb-1"> {/* LMU Blue */}
                      Find Us
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Loyola Marymount University
                      <br />
                      1 LMU Drive
                      <br />
                      Los Angeles, CA 90045
                    </p>
                  </div>
                </div>

                {/* Meeting Times */}
                <div className="flex gap-4 p-5 rounded-xl bg-[#0076A5]/10 border border-[#DDDDDD]"> {/* LMU Blue */}
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#FFD700]/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-[#0076A5]" /> {/* LMU Blue */}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-[#0076A5] mb-1"> {/* LMU Blue */}
                      General Meetings
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Wednesdays at 5:00 PM
                      <br />
                      <span className="text-xs">
                        Location announced via email
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8 p-6 rounded-2xl bg-[#0076A5] text-white"> {/* LMU Blue */}
                <h3 className="font-display font-bold text-lg mb-4">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/shpelmu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <Instagram size={20} />
                    <span className="font-medium text-white">Instagram</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300"
                  >
                    <Linkedin size={20} />
                    <span className="font-medium text-white">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5F5]"> {/* LMU Light Gray */}
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden shadow-lg border border-[#DDDDDD]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.3066076287395!2d-118.42034968478406!3d33.96936168063068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2ba4d0c7a7dc3%3A0x8aa9c5a5ae6cf8b3!2sLoyola%20Marymount%20University!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus"
              className="w-full h-[300px] md:h-[400px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="LMU Campus Map"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
