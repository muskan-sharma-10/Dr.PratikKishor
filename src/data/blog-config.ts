/** Blog categories used for the filter bar */
export const categories: string[] = [
  "All",
  "Stroke",
  "Neurology",
  "Epilepsy",
  "Headache",
  "Patient Care",
];

/** Tailwind class map for blog post tags */
export const tagColors: Record<string, string> = {
  Stroke: "bg-red-100 text-red-700",
  Epilepsy: "bg-purple-100 text-purple-700",
  Headache: "bg-yellow-100 text-yellow-700",
  Neurology: "bg-blue-100 text-blue-700",
  "Patient Care": "bg-green-100 text-green-700",
  Emergency: "bg-orange-100 text-orange-700",
  Awareness: "bg-pink-100 text-pink-700",
  Migraine: "bg-amber-100 text-amber-700",
  DBS: "bg-indigo-100 text-indigo-700",
  "Parkinson's": "bg-teal-100 text-teal-700",
  Prevention: "bg-lime-100 text-lime-700",
  Lifestyle: "bg-emerald-100 text-emerald-700",
  Neurovascular: "bg-sky-100 text-sky-700",
  Intervention: "bg-cyan-100 text-cyan-700",
  Dementia: "bg-rose-100 text-rose-700",
};

/** TypeScript shape for a single blog post */
export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  tags: string[];
}
