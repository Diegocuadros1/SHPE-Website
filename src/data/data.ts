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
  { date: "", title: "Professional Meetings", time: "" },
  { date: "", title: "Guest Speakers", time: "" },
  { date: "", title: "Social Events", time: "" },
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
    // linkedin: "https://www.linkedin.com",
    funFact: "I believe in a spiritual reality above our own",
  },
  {
    id: "ahtziri",
    role: "Academic Chair",
    name: "Ahtziri Gutierrez",
    major: "Computer Science",
    year: "Senior",
    photo: "/ahtziri.png",
    funPhoto: "/ahtzirifunphoto.png",
    bio: "As a first-generation college student, my experiences navigating STEM have shaped my commitment to representation and uplifting Hispanic students. I’m passionate about strengthening community through academic and outreach initiatives, as well as connecting students to valuable resources and support. In my role, I strive to help create a supportive space where students can feel empowered to succeed while remaining grounded in their cultural identity. ",
    email: "agutie80@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/ahtzirigutierrez",
    funFact: "I’ve studied abroad in Germany and Japan.",
    isPlaceholder: false,
  },
  {
    id: "victoria",
    role: "Secretary",
    name: "Victoria Hernandez",
    major: "Mechanical Engineering",
    year: "Sophomore",
    photo: "/victoria.png",
    funPhoto: "/victoriafunphoto.png",
    bio: "As a first-generation Mexican-American Mechanical Engineering major, I intend to pursue a concentration in Biomedical Engineering to contribute to the advancement and accessibility of innovative medical technologies. Growing up in Los Angeles, I witnessed early on the impact of both systemic challenges and the strength of a resilient community. These experiences shaped me into a self-driven, determined, and compassionate individual, inspiring me to give back through my service at a nonprofit organization that supports underserved communities across L.A. County. As Secretary of SHPE LMU, I am excited to help keep our team organized, connected, and empowered to thrive in STEM.",
    email: "vherna39@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/victoria-hernandez-91726635a?trk=contact-info",
    funFact: "I enjoy doing sports photography in my free time.",
    isPlaceholder: false,
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

export const interns = [
  {
    id: "azul",
    role: "Intern President",
    name: "Azul Alpizar",
    major: "Computer Engineering",
    year: "Sophomore",
    photo: "/azul.png",
    funPhoto: "/azulfunphoto.png",
    bio: "I am a first-generation student studying Computer Engineering and Science, and I am passionate about helping build an inclusive and empowering space for Latinos and Latinas in STEM, especially in a work field such as engineering, where representation still matters so much. Being a part of SHPE allows me to connect with peers who are inspirational and supportive, and have motivated me to grow both personally and professionally. My goal is to help create opportunities that support other students in SHPE while growing into an engineer who makes a meaningful impact in both the community and the industry.",
    email: "aalpiza1@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/azul-alpizar-78311a32a/",
    funFact: "I love practicing the guitar.",
    isPlaceholder: false,
  },
  {
    id: "adolfo",
    role: "Intern Vice President",
    name: "Adolfo Garcia",
    major: "Mechanical Engineering",
    year: "Sophomore",
    photo: "/adolfo.png",
    funPhoto: "/adolfofunphoto.png",
    bio: "I am a mechanical engineering major here at LMU. I work as a lab assistant at the Engineering Design Center, helping organize workspaces and maintain the lab stations to make sure they are clean, functional, and ready for use. I am also a part of the TELACU program, doing community service hours by assisting with professional events and mentorship opportunities. I also volunteer at Lennox Library and St. Joseph's Catholic Church. In my free time, I enjoy playing soccer, gaming, and watching movies with friends.",
    email: "agarc246@lion.lmu.edu",
    linkedin: "http://www.linkedin.com/in/adolfo-garcia-gamboa",
    funFact: "I’ve been learning Italian for the past year",
    isPlaceholder: false,
  },
  {
    id: "amanda",
    role: "Intern Vice President",
    name: "Amanda Avalos",
    major: "Computer Engineering",
    year: "Sophomore",
    photo: "/amanda.png",
    funPhoto: "/amanda-funphoto.png",
    bio: "Hi I’m Amanda Avalos & I’m a Computer Engineering major with a Bioethics minor.",
    email: "aavalo12@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/amanda-avalos-95b096359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    funFact: "I love traveling & live music. ",
    isPlaceholder: false,
  },
  {
    id: "haley",
    role: "Intern Social Media",
    name: "Haley Velasco",
    major: "Mechanical Engineering",
    year: "Sophomore",
    photo: "/haley.png",
    funPhoto: "/haleyfunphoto.png",
    bio: "I am a Sophomore Mechanical Engineering student at LMU who believes in using engineering and leadership to create a meaningful impact on the community around me. I am committed to mentorship, collaboration, and creating inclusive spaces within STEM. Growing up in Los Angeles, I am passionate about giving back to my community and expanding access to STEM opportunities.",
    email: "hvelasc2@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/haleyavelasco ",
    funFact: "I like to do Hot Yoga and Pilates in my free time.",
    isPlaceholder: false,
  },
  {
    id: "marcia",
    role: "Intern Social Media",
    name: "Marcia Aguierre Castro",
    major: "Mechanical Engineering",
    year: "Masters Student",
    photo: "/marcia.png",
    funPhoto: "/marciafunphoto.png",
    bio: "Hi, I’m Marcy! I’m a mech engineer grad student from Mexico, I survive on matcha.",
    email: "maguir17@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/marcyag?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    funFact: "I speak 5 languages and you can always find me trying new things. ",
    isPlaceholder: false,
  },
  {
    id: "matthew",
    role: "Intern Treasurer",
    name: "Matthew Loduca",
    major: "Finance",
    year: "Junior",
    photo: "/mj.png",
    funPhoto: "/mjfunphoto.png",
    bio: "I am an aspiring financial analyst focused on building long term, trust based relationships and helping households make thoughtful, sustainable financial decisions.",
    email: "mloduca@lion.lmu.edu",
    linkedin: "https://www.linkedin.com/in/matthewloduca",
    funFact: "House music is my favorite music genre.",
    isPlaceholder: false,
  },
  {
    id: "alex",
    role: "Intern Academic Chair",
    name: "Alex Morales",
    major: "Mechanical Engineering",
    year: "Freshman",
    photo: "/alex.png", 
    funPhoto: "/alexfunphoto.png",
    bio: "I’m Alex Morales. I am the Intern Executive Chair for SHPE. I am originally from Mexico, but I currently live in Florida. I love playing sports, particularly golf. ",
    email: "amoral69@lion.lmu.edu ",
    linkedin: "https://www.linkedin.com/in/alex-morales-68334536b?trk=contact-info ",
    funFact: "I hate strawberries, I think they are too sour.",
    isPlaceholder: false,
  },

  
]

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
  {
    id: "gm2",
    category: "General Meeting",
    title: "Welcome Back Meeting — GM #2",
    excerpt:
      "Our second general meeting welcomed members back, recapped fall highlights, and previewed the exciting events ahead for the spring semester.",
    highlight: "Spring kickoff • Updates • What's next",
    image: "/welcomeback.png",
  },
  {
    id: "blue-origin-northrup",
    category: "Guest Speakers",
    title: "Blue Origin + Northrop Grumman Guest Speakers",
    excerpt:
      "LMU Engineers from Blue Origin and Northrop Grumman joined us to share their career journeys, talk about life in aerospace and defense, and answer questions from our members.",
    highlight: "Aerospace • Defense • Career paths",
    image: "/blue+northrup.jpg",
  },
  {
    id: "kickback-pool",
    category: "Social",
    title: "Kickback & Pool Party",
    excerpt:
      "A laid-back kickback to get closer at the start of the semester, connect with the SHPE familia, and just vibe together.",
    highlight: "Vibes • Familia • Summer fun",
    image: "/kickback2026.jpg",
  },
  {
    id: "class-to-internship",
    category: "Professional Development",
    title: "From Class to Internship",
    excerpt:
"Where members shared how they got their roles, the process they went through, and what they do at their internships.",
    highlight: "Internship tips • Resume • Real talk",
    image: "/classtointernship.jpg",
  },
    {
    id: "dia-de-ciencias",
    category: "Outreach",
    title: "Día de Ciencias",
    excerpt:
      "A STEM outreach event celebrating science and inspiring the next generation of young engineers and scientists through hands-on activities and mentorship.",
    highlight: "STEM outreach • K–12 • Inspire",
    image: "/outreach1.jpg",
  },
  {
    id: "learn-research",
    category: "Professional Development",
    title: "Learning About Research",
    excerpt:
      "A session dedicated to demystifying undergraduate research — how to find opportunities, reach out to professors, and get involved in meaningful projects at LMU and beyond.",
    highlight: "Research • Professors • Opportunities",
    image: "/research.jpg",
  },
  {
    id: "google-speakers",
    category: "Guest Speakers",
    title: "Google Guest Speakers",
    excerpt:
      "Google engineers visited to share their experiences working at one of the world's leading tech companies, offering advice on breaking into big tech.",
    highlight: "Big tech • Career advice • Google life",
    image: "/googleguest.jpg",
  },
  {
    id: "engineering-bonfire",
    category: "Social",
    title: "LMU Engineering Bonfire",
    excerpt:
      "A bonfire night bringing together engineering students from across LMU to relax, connect, and build community outside the classroom.",
    highlight: "Engineering community • Bonfire • Connection",
    image: "/lmubonfire.jpg",
  },
  {
    id: "ucla-lmu-usc-pool-party",
    category: "Social",
    title: "UCLA x LMU x USC Pool Party",
    excerpt:
      "Three campuses, one pool party. SHPE members from UCLA, LMU, and USC came together for a cross-campus social full of good vibes, new connections, and familia.",
    highlight: "Three campuses • Pool party • Familia",
    image: "/USCxLMU2.png",
  },
];

export const featuredUpdates: FeaturedUpdate[] = [

  {
    id: "president-visit",
    date: "Spring 2026",
    category: "General Meeting",
    title: "LMU President Visits SHPE",
    excerpt:
      "LMU's university president stopped by our  meeting to connect with members, hear about our chapter's work, and show support for SHPE at LMU.",
    image: "/tpoon5.jpg",
    instagramUrl: "https://www.instagram.com/p/DWcQi4EEnql/?hl=en&img_index=1",
    details: [
      "LMU's university president attended our  meeting and engaged directly with SHPE members",
      "Heard about the chapter's growth, events, and impact on the LMU engineering community",
      "A meaningful moment of recognition that highlighted the importance of Hispanic representation in STEM",
    ],
    gallery: [
      "/tpoon0.jpg",
      "/tpoon2.jpg",
      "/tpoon6.jpg",
      "/tpoon7.jpg",
    ],
    pill: "bg-amber-500/10 text-amber-800 border-amber-500/20",
  },
    {
    id: "cordoba-ceo",
    date: "Spring 2026",
    category: "Guest Speakers",
    title: "Cordoba Corporation CEO Visits SHPE",
    excerpt:
      "CEO George L. Pla visited SHPE LMU and spoke directly with members about his journey, leadership experience, and what it takes to lead one of California's most impactful engineering firms.",
    image: "/CEO.png",
    instagramUrl: "https://www.instagram.com/p/DWwb1rVFN8Z/?hl=en&img_index=4",
    details: [
      "Shared insights on leading Cordoba Corporation and managing large-scale infrastructure projects across California",
      "Offered advice on career growth, leadership, and making an impact in engineering and beyond",
      "A meaningful opportunity for members to learn from a nationally recognized leader in the industry",
    ],
    gallery: [
      "/ceo3.png",
      "/ceo4.png",
      "/ceo1.png",
      "/ceo6.png",
    ],
    pill: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  },
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

export const achievements = [
  {
    id: "hackathon",
    label: "Tech",
    title: "2nd Place — Tech Startup Hackathon 2024",
    description:
      "Sebastian Rocha (26') and Joanna Estrada (25') earned 2nd Place at Techstars Startup Weekend for their startup, AceTest.AI. In 54 hours, they pitched their idea, formed a team, and built a working prototype while receiving mentorship from experienced entrepreneurs. They presented their final product at Demo Day, where their execution and teamwork set them apart.",
    image: "/acetestpic.png", // replace with your hackathon photo
  },
  {
    id: "best-bootcamp",
    label: "Academic",
    title: "1st Place - BEST Bootcamp 2026",
    description:
      "Marcia Aguirre Castro (26') earned 1st Place at the BEST Bootcamp, a one-week program focused on innovation and entrepreneurship. She collaborated with her team to develop a tech-based business solution and present it in the final competition. Her strong execution and presentation led her to secure the top prize..",
    image: "/bestbootcamp3.png",
  },

  {
    id: "LMU Hacks",
    label: "Professional Development",
    title: "1st Place - LMU Hacks 2026",
    description:
      "Sebastian Rocha (26'), Diego Cuartos (26'), and Jesus Lopez (27') built CareCompanion, an AI-powered hospital patient assistant, at LMU Hacks 2026. Using Next.js and OpenAI, the platform enables patients to interact with their care team while allowing nurses to monitor chats and manage alerts in real time. The system includes clinical guardrails that escalate urgent messages to staff.",
    image: "/LMUhacks2026.jpg",
  },
    {
    id: "2nd LMU Datathon 2026",
    label: "Leadership",
    title: "2nd Place - LMU Datathon 2026",
    description:
      "Marcia Aguirre Castro (’26) participated in the LMU Datathon, a hands-on competition where students work in teams to solve real-world business and data challenges. Participants analyze datasets, build models, and present their insights to industry professionals. The event emphasizes collaboration, technical skills, and data-driven decision making, with top teams earning recognition and awards.",
    image: "/bestbootcamp2.png",
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