export type VideoItem = {
  id: number;
  title: string;
  category: string;
  duration: string;
  label: string;
  description: string;
};

export const videos: VideoItem[] = [
  { id: 1, title: "Featured Preview — Placeholder", category: "Featured", duration: "00:00", label: "DEMO", description: "Fictional catalogue entry. No video is attached." },
  { id: 2, title: "Studio Collection — Placeholder", category: "Studio", duration: "00:00", label: "DEMO", description: "Replace only after legal and rights clearance." },
  { id: 3, title: "New Releases — Placeholder", category: "New", duration: "00:00", label: "DEMO", description: "A sample card for layout testing." },
  { id: 4, title: "Popular Picks — Placeholder", category: "Popular", duration: "00:00", label: "DEMO", description: "Fictional content metadata for prototype use." },
  { id: 5, title: "Documentary Preview — Placeholder", category: "Documentary", duration: "00:00", label: "DEMO", description: "No media or third-party content included." },
  { id: 6, title: "Creator Showcase — Placeholder", category: "Creators", duration: "00:00", label: "DEMO", description: "Use only verified, licensed material after approval." }
];
