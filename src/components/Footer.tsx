"use client"
import { Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gold-gradient rounded-xl flex items-center justify-center">
                <span className="text-secondary-foreground font-display font-bold text-xl">
                  S
                </span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg">SHPE LMU</h3>
                <p className="text-sm text-primary-foreground/70">
                  Society of Hispanic Professional Engineers
                </p>
              </div>
            </div>
            <p className="text-primary-foreground/80 max-w-md text-sm leading-relaxed">
              Empowering Hispanics to realize their fullest potential and impact
              the world through STEM awareness, access, support, and
              development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-gold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  News & Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-gold mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-primary-foreground/70">
                <MapPin size={16} className="text-gold" />
                <span>Loyola Marymount University</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <a
                  href="mailto:shpe@lmu.edu"
                  className="text-sm text-primary-foreground/70 hover:text-gold transition-colors"
                >
                  shpe@lmu.edu
                </a>
              </li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-secondary-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-gold hover:text-secondary-foreground transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} SHPE at Loyola Marymount University.
            All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50">
            Changing the world through STEM 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
