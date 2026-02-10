# SHPE LMU - Official Chapter Website

A high-performance, fully responsive web application built for the **Society of Hispanic Professional Engineers (SHPE)** chapter at **Loyola Marymount University**. This platform serves as the digital hub for one of LMU's fastest-growing student organizations, empowering Hispanic students in STEM through community, professional development, and leadership.

> **Live Site:** Deployed on Vercel with CI/CD pipeline

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript (Strict Mode) |
| **UI Library** | React 19 with React Compiler |
| **Styling** | Tailwind CSS 4 + CSS Variables |
| **Component System** | Radix UI Primitives + CVA Variants |
| **Animations** | GSAP + Custom CSS Keyframes |
| **Email Service** | EmailJS (Serverless) |
| **Analytics** | Vercel Analytics |
| **Deployment** | Vercel Platform |

---

## Key Features

### Responsive, Mobile-First Design
Every page adapts seamlessly across devices. Touch-friendly carousels replace grid layouts on mobile, the navigation collapses into an animated hamburger menu with scroll-lock, and all interactive elements are optimized for touch input.

### Cinematic Video Backgrounds
Multiple pages feature autoplay hero videos with layered gradient overlays and geometric patterns. Custom play/pause controls handle iOS autoplay restrictions gracefully.

### Interactive Executive Board Profiles
Leadership team members are presented in a dynamic card grid (desktop) or swipeable carousel (mobile). Each card expands into a detailed modal with full bios, focus areas, fun facts, and direct links to LinkedIn and email.

### Serverless Contact System
A fully functional contact form powered by EmailJS eliminates the need for backend infrastructure. Includes real-time form validation, loading states, and toast notifications for success/error feedback.

### Data-Driven Content Architecture
All page content, member profiles, events, and organizational data are centralized in a single typed data module (`src/data/data.ts`), enabling rapid content updates without touching UI code.

### Embedded Integrations
- **Google Calendar** for live event scheduling
- **Google Maps** for campus location
- **Instagram** social feed links throughout
- **LMU Leo** direct membership registration

### Featured Events with Photo Galleries
Signature events like the **Region 2 SHPE'sgiving** (60-70 attendees from 9 chapters) and the **2025 SHPE National Convention** (400+ Region 2 members) are showcased with lightbox photo galleries and detailed breakdowns.

### Industry Partner Showcase
An interactive carousel highlights partnerships with **NASA JPL**, **Google**, **Amazon**, **Blue Origin**, **Raytheon**, **Northrop Grumman**, and more, with keyboard-navigable lightbox viewing.

---

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout (Navbar, Footer, Analytics, Toaster)
│   ├── page.tsx            # Home - Hero video, pillars, calendar, CTAs
│   ├── about/page.tsx      # Mission, values, history timeline, partners
│   ├── e-board/page.tsx    # Leadership profiles with modal detail views
│   ├── updates/page.tsx    # Events, initiatives, featured impact stories
│   └── contact/page.tsx    # Contact form (EmailJS), info cards, map embed
├── components/
│   ├── Navbar.tsx          # Fixed nav with mobile drawer & active indicators
│   ├── Footer.tsx          # Branded footer with quick links
│   ├── ImageGallery.tsx    # Carousel + lightbox with keyboard navigation
│   └── ui/                 # Reusable component library (shadcn/ui pattern)
│       ├── button.tsx      # 8 variants + 4 sizes via CVA
│       ├── dialog.tsx      # Accessible modal with backdrop blur
│       ├── carousel.tsx    # Embla-powered slider with arrow key support
│       ├── toast.tsx       # Notification system with swipe-to-dismiss
│       ├── input.tsx       # Styled form input
│       ├── textarea.tsx    # Styled form textarea
│       └── label.tsx       # Accessible form label
├── hooks/
│   └── use-toast.tsx       # Toast state management (reducer pattern)
├── data/
│   └── data.ts             # Centralized content & member data (~400 lines)
└── lib/
    ├── utils.ts            # Tailwind class merge utility (clsx + tw-merge)
    └── helpers.ts          # TypeScript type definitions
```

---

## Design System

The site implements a custom design system aligned with LMU's brand identity:

- **Crimson** (`#AB0C2F`) - Primary accent, CTAs, and highlights
- **Navy** (`#0076A5`) - Secondary tone, headings, and gradients
- **Gold** (`#F4B400`) - Accent details and decorative elements
- **Cream** (`#FFFBF0`) - Warm off-white backgrounds

Typography pairs **Montserrat** (display headings) with **Open Sans** (body text), loaded via `next/font` for zero layout shift.

Custom gradient utilities (`bg-hero-gradient`, `bg-gold-gradient`, `text-gradient`) and animations (`animate-float`, `animate-slide-up`, `animate-fade-in`) create a polished, cohesive visual experience.

---

## Accessibility

- Semantic HTML with proper heading hierarchy
- ARIA labels, roles, and live regions throughout
- Full keyboard navigation (modals, carousels, galleries)
- Focus trapping and management in dialogs
- Screen reader support with `sr-only` utility classes
- Escape key handling for all overlay components

---

## Performance Optimizations

- **React Compiler** enabled for automatic memoization across all components
- **Next.js Image** component for responsive image optimization and lazy loading
- **Vercel Analytics** for real-time performance monitoring
- **Tailwind CSS 4** with PostCSS for minimal CSS bundle size
- **Centralized data module** prevents unnecessary re-renders from prop drilling

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Diegocuadros1/SHPE-Website.git
cd SHPE-Website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

### Environment Variables

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

### Development

```bash
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
```

---

## Deployment

The application is deployed on **Vercel** with automatic builds triggered on push to `master`. The Next.js 16 App Router is fully optimized for Vercel's edge infrastructure.

---

## Authors

Built by **Sebastian Rocha** & **Diego Cuadros** - Co-Presidents, SHPE LMU

---

## License

This project is proprietary to the SHPE LMU chapter at Loyola Marymount University.
