import React from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

export interface ShortItem {
  id: string;
  title: string;
  description?: string;
  category?: string;
}

export const youtubeShortsData: ShortItem[] = [
  {
    id: "KCqzvRflYCo",
    title: "Neuro Conference | BLK-Max Super Speciality Hospital",
    description: "Dr. Pratik Kishore presenting key neurology discussions at the Neuro Conference.",
    category: "Neuro Conference",
  },
  {
    id: "OoP2zaMbLHo",
    title: "Stroke Treatment: How Paralysis Can Be Reversed During Surgery",
    description: "Learn how acute neurovascular intervention and timely surgery help reverse stroke paralysis.",
    category: "Stroke Treatment",
  },
];

interface YouTubeShortsProps {
  title?: string;
  subtitle?: string;
  className?: string;
  limit?: number;
  bgDark?: boolean;
}

const YouTubeShorts: React.FC<YouTubeShortsProps> = ({
  title = "YouTube Shorts & Quick Health Tips",
  subtitle = "Watch quick, informative reels and expert health advice from Dr. Pratik Kishore.",
  className = "",
  limit,
  bgDark = false,
}) => {
  const displayShorts = limit ? youtubeShortsData.slice(0, limit) : youtubeShortsData;

  const bgClasses = bgDark
    ? "bg-slate-900 text-white"
    : "bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 text-gray-800";

  const cardClasses = bgDark
    ? "bg-slate-800/90 text-white border-slate-700/60 hover:border-amber-500/50"
    : "bg-white text-gray-800 border-amber-100 hover:border-amber-400 shadow-lg hover:shadow-xl";

  const headerTagClasses = bgDark
    ? "bg-red-600/20 text-red-400 border-red-500/30"
    : "bg-red-100 text-red-700 border-red-200";

  return (
    <section className={`py-16 ${bgClasses} ${className}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-sm font-semibold mb-4 ${headerTagClasses}`}>
            <FaYoutube className="text-red-600 text-lg" />
            <span>YouTube Shorts</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          <p className={`${bgDark ? "text-gray-300" : "text-gray-600"} text-lg`}>
            {subtitle}
          </p>
        </div>

        {/* Shorts Grid */}
        <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
          {displayShorts.map((short, index) => (
            <motion.div
              key={short.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`w-full max-w-[320px] rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col ${cardClasses}`}
            >
              {/* Category Tag & Link */}
              <div className="p-3.5 flex justify-between items-center border-b border-gray-100 dark:border-slate-700/50">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                  {short.category}
                </span>
                <a
                  href={`https://youtube.com/shorts/${short.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium text-red-600 hover:text-red-700 flex items-center gap-1 transition-colors"
                >
                  <FaYoutube className="text-sm" />
                  <span>Open Shorts</span>
                  <FaExternalLinkAlt className="text-[10px]" />
                </a>
              </div>

              {/* Vertical Embed */}
              <div className="relative w-full aspect-[9/16] bg-black">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${short.id}?rel=0`}
                  title={short.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Info Footer */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2">
                    {short.title}
                  </h3>
                  {short.description && (
                    <p className={`text-sm ${bgDark ? "text-gray-400" : "text-gray-600"} line-clamp-2`}>
                      {short.description}
                    </p>
                  )}
                </div>
                <a
                  href={`https://youtube.com/shorts/${short.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full py-2.5 px-4 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FaYoutube className="text-base" />
                  <span>Watch on YouTube Shorts</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default YouTubeShorts;
