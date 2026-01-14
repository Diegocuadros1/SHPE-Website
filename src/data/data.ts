import {
  Users,
  BookOpen,
  Briefcase,
  Heart,
  Lightbulb,
  GraduationCap,
  Handshake,
} from "lucide-react";
import { FeaturedUpdate, Initiative, TagLegendItem } from "@/lib/helpers";

// HOME PAGE ------------------------------------------------------
export const statistics = [
  {
    number: "#6",
    description: "Private University in California",
    additionalInfo: "U.S. News & World Report, 2026",
  },
  {
    number: "#21",
    description: "Best Undergraduate Engineering Program",
    additionalInfo: "U.S. News & World Report, 2026",
  },
];

export const pillars = [
  {
    icon: Users,
    title: "Community",
    description:
      "Build lasting connections with fellow Hispanic engineers who share your journey. SHPE offers a strong, supportive network where members can connect, collaborate, and build long-term relationships. From professional networking to lifelong friendships, SHPE's community empowers you to thrive",
  },
  {
    icon: BookOpen,
    title: "Academics",
    description:
      "Our academic resources are designed to help you excel in your courses and beyond. Whether you need tutoring, mentorship, or resources for studying STEM subjects, SHPE provides the support to ensure you reach your academic goals",
  },
  {
    icon: Briefcase,
    title: "Professional Development",
    description:
      "Workshops, networking, and career prep to launch your engineering career. SHPE hosts events, workshops, and networking opportunities designed to enhance your professional skills and connect you with industry leaders. Get the guidance and resources you need to launch your career and succeed in the competitive STEM field",
  },
];

export const upcomingEvents = [
  { date: "Jan 29", title: "Welcome Back Meeting", time: "6:00 – 7:00 PM" },
  { date: "TBD", title: "Guest Speaker", time: "6:00 – 7:00 PM" },
  { date: "TBD", title: "Social Event", time: "6:00 – 7:30 PM" },
];


// ABOUT PAGE
export const scrapbookImages = [
  { src: "/LMU2018.png", alt: "2018 SHPE LMU Executive Board" },
  { src: "/eboard1.png", alt: "2025 SHPE LMU Executive Board" },
  { src: "/LMU2019.png", alt: "Building community through teamwork" },
  { src: "/historylmu.jpg", alt: "The beginning of something bigger" },
];

export const galleryImages = [
  {
    src: "/NASAjpl.png",
    alt: "Celebration",
  },
  {
    src: "/LAdwp.png",
    alt: "Collaboration",
  },
  {
    src: "/amazon.png",
    alt: "Community moment",
  },
  {
    src: "/google.png",
    alt: "Team photo",
  },
  {
    src: "/northrup.png",
    alt: "Workshop",
  },
  {
    src: "/blueorigin.png",
    alt: "Meeting",
  },
  {
    src: "/RandS.png",
    alt: "Meeting",
  },
  {
    src: "/Raytheon-Logo.png",
    alt: "Meeting",
  },
  {
    src: "/LLNL.png",
    alt: "Meeting",
  },
];

export const values = [
  {
    icon: Heart,
    title: "Familia",
    description:
      "We foster a welcoming and supportive community where members uplift one another through shared experiences, mentorship, and belonging.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace creativity and forward thinking to solve problems, explore new ideas, and grow as engineers and leaders.",
  },
  {
    icon: GraduationCap,
    title: "Excellence",
    description:
      "We strive for academic, professional, and personal excellence by holding ourselves to high standards and supporting continuous growth.",
  },
  {
    icon: Handshake,
    title: "Service",
    description:
      "We give back to our communities through outreach, mentorship, and service rooted in impact and purpose.",
  },
];

// Eboard page
export const leadership = [
  {
    id: "sebastian",
    role: "Co-President",
    name: "Sebastian Rocha",
    major: "Computer Science",
    year: "Senior",
    photo: "/sebastian_headshot.png",
    funPhoto: "/sebastian_fun_pic.jpg",
    bio: "Growing up and studying in California has shown me the power of innovation, diversity, and the global impact of the tech industry. This has shaped my passion for empowering Hispanic students in STEM through mentorship and community, while bringing schools together and building meaningful collaboration across campuses. I’m driven to create inclusive spaces where everyone can grow academically, professionally, and personally while staying connected to their culture and purpose.",
    focus: ["Chapter growth", "Industry partnerships", "Member experience"],
    email: "seabass63265.sr@gmail.com",
    linkedin: "https://www.linkedin.com/in/sebastian-rocha1/",
    funFact: "I am an Ocean Lifeguard for the LA County Fire Department",
  },
  {
    id: "diego",
    role: "Co-President",
    name: "Diego Cuadros",
    major: "Computer Science",
    year: "Junior",
    photo: "/dcpropic1.png",
    funPhoto: "/diegofun.png",
    bio: "Growing up in Long Beach, California, I’m driven to uplift the Hispanic community by creating an exciting, welcoming, and impactful experience within SHPE. I love being involved, building connections, and learning alongside others as we grow together. My goal is to help foster a supportive space where every member feels empowered, inspired, and prepared to become a strong engineer and leader.",
    focus: ["Professional development", "Mentorship", "Workshops"],
    email: "dcuadros@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/diegocuadros1/",
    funFact: "I am Padi Scuba Ceritified 🤿",
  },
  {
    id: "isabela-j",
    role: "Vice President",
    name: "Isabela Jimenez",
    major: "Mechanical Engineering",
    year: "Senior",
    photo: "/bellafront.jpg",
    funPhoto: "/bellafun.jpg",
    bio: "I am a first-generation Latina engineering student passionate about building community and creating opportunities for others. As a leader within SHPE, I saw this club as the perfect space to support and uplift first-generation students while also creating opportunities to network with professionals and industry leaders. Leading this organization allows me to both help younger generations navigate their paths and intentionally build my own professional journey. I enjoy offering guidance to anyone who needs support, and my goal is to create lasting pathways to success through mentorship, community, and connection.",
    focus: [
      "Chapter Presence and Outreach",
      "Member Experience and Community",
      "Organization and Leadership Development",
    ],
    email: "isabela9.jimenez9@gmail.com",
    linkedin: "https://www.linkedin.com/in/isabelajimenez26/",
    funFact: "I studied abroad in Bonn, Germany",
  },
  {
    id: "natali",
    role: "Vice President",
    name: "Natali Garcia",
    major: "Mechanical Engineering",
    year: "Junior",
    photo: "/natali.png",
    funPhoto: "/natfun.jpg",
    bio: "I'm a 3rd year Mech student and hope to engage more students in STEM through club activities and outreach. Some of my hobbies are crocheting/ knitting, Baking, & 3D printing.",
    focus: ["Member outreach", "Collaboration", "Networking"],
    email: "ngarci47@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/natali-i-g2027/",
    funFact: "I used to play the French horn.",
  },
  {
    id: "simon",
    role: "Treasurer",
    name: "Simon Hernandez",
    major: "Computer Engineering",
    year: "Sophomore",
    photo:
      "simon.png",
    funPhoto: "/simonfun.jpg",
    bio: " As an international and bicultural student, I have a unique perspective of the world that drives me to want to create change, and SHPE is one of the ways that helps me do that. I’m a very driven person who tries to be efficient and effective in everything I do, whether it’s school, investing, or my work. I’m also a very active person, I love to play sports, but I mainly practice golf, tennis, and soccer.",
    focus: ["Funding", "Interpersonal Relationships", "Financial Management"],
    email: " sherna95@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/simonhernandez-ce/",
    funFact: " I am a scratch golfer ",
  },
  {
    id: "isabel-c",
    role: "Media/Marketing",
    name: "Isabela Clemente",
    major: "Civil Engineering",
    year: "Senior",
    photo:
      "/isa.png",
    funPhoto: "/isaclemfunphoto.jpg",
    bio: "I’m a first-generation Hispanic student majoring in Civil and Environmental Engineering, driven by a passion for sustainability, community impact, and representation in STEM. As a member of SHPE, I’m motivated to help create an inclusive space that empowers students like me to grow professionally, academically, and personally. I’m passionate about using my skills to amplify SHPE’s mission, strengthen outreach, and inspire future Hispanic engineers. My goal is to contribute to a supportive community that uplifts our voices and prepares us to make meaningful change.",
    focus: ["Community Outreach", " Marketing Coordinator"],
    email: "isabelachdez03@gmail.com",
    linkedin: "https://www.linkedin.com",
    funFact: "I believe in a spiritual reality above our own",
  },
  {
    id: "academic-chair",
    role: "Academic Chair",
    name: "Coming Soon",
    major: "—",
    year: "—",
    isPlaceholder: true,
  },
  {
    id: "secretary",
    role: "Secretary",
    name: "Coming Soon",
    major: "—",
    year: "—",
    isPlaceholder: true,
  },
];

export const advisors = [
  {
    id: "advisor-1",
    name: "Melodie Aubinelliott",
    title: "Senior Administrative Coordinator",
    email: "melodie.aubinelliott@lmu.edu",
    photo: "/Aubinelliott_Melodie2.png",
  },
  {
    id: "advisor-2",
    name: "Gustavo Vejarano",
    title: "Faculty Advisor",
    email: "Gustavo.Vejarano@lmu.edu",
    photo: "/gustavo.png",
  },
];

// Updates page
export const initiatives: Initiative[] = [
  {
    id: "gm1",
    category: "General Meeting",
    title: "General Meeting #1",
    excerpt:
      "A welcoming introduction to SHPE where students meet the board, learn about upcoming events, and get connected to opportunities that support their growth.",
    highlight: "Meet the board • Upcoming events • Get involved",
    video: "/GM1.mp4",
  },
  {
    id: "beach-social",
    category: "Social",
    title: "Latinx Beach Social / Bonfire",
    excerpt:
      "A community night by the beach to build friendships, celebrate culture, and connect with other students.",
    highlight: "Community • Culture • Connection",
    image: "/LatinxBonfire2.jpg",
  },
  {
    id: "resume-workshop",
    category: "Professional Development",
    title: "Resume Building Workshop",
    excerpt:
      "Hands on resume support and real feedback so members can apply confidently to internships, research roles, and jobs.",
    highlight: "Resume feedback • Templates • Career prep",
    image: "/ResumeWorkshop.jpg",
  },
  {
    id: "linkedin-workshop",
    category: "Professional Development",
    title: "LinkedIn Workshop",
    excerpt:
      "Build a stronger LinkedIn profile, learn networking best practices, and position yourself for opportunities.",
    highlight: "Profile upgrades • Networking • Recruiter tips",
    image: "/LinkedlnWorkshop1.jpg",
  },
  {
    id: "lmu-ucla-social",
    category: "Social",
    title: "LMU x UCLA Social",
    excerpt:
      "A cross-campus social to connect with other SHPE members, share experiences, and build community beyond LMU.",
    highlight: "Cross-campus • New friends • Familia",
    image: "/LMUxUCLA.jpg",
  },
  {
    id: "conference-prep",
    category: "Professional Development",
    title: "Conference Prep Meeting",
    excerpt:
      "We prepped members for conference weekend on what to bring, how to approach the career fair, and how to maximize the experience.",
    highlight: "Game plan • Career fair • What to expect",
    image: "/ConferencePrepMeeting1.jpg",
  },
  {
    id: "elevator-pitch",
    category: "Professional Development",
    title: "Elevator Pitch Workshop",
    excerpt:
      "Practice your pitch, get feedback, and learn how to confidently share your story, interests, and goals in 30 seconds.",
    highlight: "Confidence • Practice • Feedback",
    image: "/ElevatorPitchWorkshop1.jpg",
  },
];

export const featuredUpdates: FeaturedUpdate[] = [
  {
    id: "shpegiving",
    date: "Fall 2025",
    category: "Social",
    title: "Region 2 SHPE’sgiving @ LMU",
    excerpt:
      "A Region 2 night that brought chapters together for community, culture, and connection across campuses.",
    image: "/shpesgiving01jpg.png",
    instagramUrl: "https://www.instagram.com/p/DSX96-8EhCg/",
    details: [
      "Connected with Region 2 chapters and met new members across campuses",
      "Community-focused night celebrating culture and familia",
      "Welcomed students from UCLA, USC, UCSB, CSULB, CSUF, Pasadena City College, El Camino College, San Diego Mesa College, and Glendale Community College with over 60 to 70 attendees joining from across the region",
    ],
    gallery: [
      "/shpesgiving.jpg",
      "/shpesgiving2.png",
      "/shpesgiving3.png",
      "/shpesgiving4.png",
    ],
    pill: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  {
    id: "conference",
    date: "Fall 2025",
    category: "Professional Development",
    title: "2025 SHPE National Convention",
    excerpt:
      "Conference highlights include sessions, networking, and career fair experiences that supported members professional growth.",
    image: "/shpeconv01.png",
    instagramUrl: "https://www.instagram.com/p/DRfQNmVjxBy/?img_index=1",
    details: [
      "Gained direct access to recruiters offering internships, full time roles, and on the spot interviews",
      "Connected with industry professionals and alumni who opened doors to career opportunities",
      "Our Co President Sebastian Rocha addressed over 400+ Region 2 members, sharing SHPE LMU’s vision and strengthening cross campus connections",
    ],
    gallery: [
      "/convmeetup.jpg",
      "/convdinner.jpg",
      "/convfri.jpg",
      "/convapple.jpg",
    ],
    pill: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
];

export const tagLegend: TagLegendItem[] = [
  {
    label: "Professional Development",
    desc: "Resume Worshops, LinkedIn Workshops, Conference Prep, and much more",
    dot: "bg-[#0076A5]",
    chip: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  {
    label: "Socials",
    desc: "Community nights, Mixers, Cross-campus hangs",
    dot: "bg-emerald-500",
    chip: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  {
    label: "Guest Speakers",
    desc: "Panels + talks with alumni & industry",
    dot: "bg-purple-500",
    chip: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  },
  {
    label: "Outreach",
    desc: "STEM service, K to 12 outreach, and community impact",
    dot: "bg-amber-500",
    chip: "bg-amber-500/10 text-amber-800 border-amber-500/20",
  },
];