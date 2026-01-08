"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon!",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Emailjs Error: ", error);
      toast({
        title: "Something went wrong",
        description: "Please try emailing us directly. Sorry about that!",
      });
    } finally {
      setIsSubmitting(false);
    }
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
            src="/contactus.jpg"
            alt="Students meeting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#AB0C2F]/90 via-[#AB0C2F]/85 to-[#0076A5]/90" />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center py-20">


          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Contact Us
          </h1>

          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Have questions? Want to get involved? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 border border-[#DDDDDD] shadow-lg">
                <h2 className="text-2xl font-display font-bold text-[#0076A5] mb-6">
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

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#0076A5] hover:bg-[#005f7a] cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting" : "Send Message"}
                    <Send size={18} className="ml-2" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-display font-bold text-[#0076A5]">
                Get In Touch
              </h2>

              <p className="text-muted-foreground mt-3 mb-8 leading-relaxed">
                Whether you're a prospective member, a company looking to
                partner, or just want to learn more about SHPE at LMU, we're
                here to help!
              </p>

              <div className="space-y-4">
                {/* Email */}
                <div className="rounded-2xl bg-white border border-[#DDDDDD] shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#0076A5]/10 flex items-center justify-center border border-[#0076A5]/15">
                      <Mail className="w-5 h-5 text-[#0076A5]" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-display font-semibold text-[#0f172a]">
                        Email Us
                      </h3>
                      <a
                        href="mailto:shpe@lmu.edu"
                        className="text-[#0076A5] hover:underline break-all"
                      >
                        shpelmu@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Follow */}
                <div className="rounded-2xl bg-white border border-[#DDDDDD] shadow-sm p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-[#AB0C2F]/10 flex items-center justify-center border border-[#AB0C2F]/15">
                      <Instagram className="w-5 h-5 text-[#AB0C2F]" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-semibold text-[#0f172a]">
                        Follow Us
                      </h3>

                      <a
                        href="https://instagram.com/shpelmu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0076A5] text-white hover:bg-[#005f7a] transition"
                      >
                        <Instagram size={18} />
                        <span className="font-medium">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPTIONAL: If you want, you can add office hours / response time here later */}
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F5F5F5]">
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
