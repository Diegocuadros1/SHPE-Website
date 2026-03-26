

// Updates Page
export type Category =
  | "Professional Development"
  | "Social"
  | "Guest Speakers"
  | "Outreach"
  | "General Meeting"
  | "Conference"
  | "Region 2";

export type Initiative = {
  id: string;
  category: Category;
  title: string;
  excerpt: string;
  highlight: string;
  image?: string;
  video?: string;
};

export type FeaturedUpdate = {
  id: string;
  date: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string;
  instagramUrl?: string;
  details?: string[];
  gallery?: string[];
  pill: string;
};

export type TagLegendItem = {
  label: string;
  desc: string;
  dot: string;
  chip: string;
};

export const categoryStyles = {
  "Professional Development": {
    pill: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  Social: {
    pill: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  },
  "Guest Speakers": {
    pill: "bg-purple-500/10 text-purple-700 border-purple-500/20",
  },
  Outreach: {
    pill: "bg-amber-500/10 text-amber-800 border-amber-500/20",
  },
  "General Meeting": {
    pill: "bg-[#0076A5]/10 text-[#0076A5] border-[#0076A5]/20",
  },
  Conference: {
    pill: "bg-[#AB0C2F]/10 text-[#AB0C2F] border-[#AB0C2F]/20",
  },
  "Region 2": {
    pill: "bg-[#AB0C2F]/10 text-[#AB0C2F] border-[#AB0C2F]/20",
  },
} satisfies Record<Category, { pill: string }>;
