import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Film,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export interface ClinicVideoItem {
  id: string;
  src: string;
  title: string;
  category: "Clinic Tour" | "Clinical Insights" | "Stroke Care" | "Diagnostics" | "Recovery & Care";
  description: string;
  highlights: string[];
  tag?: string;
}

export const clinicVideosData: ClinicVideoItem[] = [
  {
    id: "video-1",
    src: "/videos/neuropointcentre1.mp4",
    title: "Neuropoint Medical Centre Tour & Clinical Overview",
    category: "Clinic Tour",
    description:
      "A comprehensive walkthrough of our modern neurology outpatient clinic, diagnostic facilities, and patient-first care environment.",
    highlights: [
      "Modern Outpatient Consultation Suites",
      "Advanced Diagnostic Setup",
      "Compassionate Patient Care Support",
    ],
    tag: "Featured Walkthrough",
  },
  {
    id: "video-2",
    src: "/videos/neuropointcentre2.mp4",
    title: "Advanced Neurological Consultation & Patient Care",
    category: "Clinical Insights",
    description:
      "Dr. Pratik Kishore explains personalized clinical evaluations for complex neurological and nerve conditions.",
    highlights: [
      "Evidence-Based Neurological Evaluation",
      "Personalized Treatment Protocols",
      "Specialized Patient Guidance",
    ],
    tag: "Clinical Care",
  },
  {
    id: "video-3",
    src: "/videos/neuropointcentre3.mp4",
    title: "Brain Stroke Awareness & Emergency Golden Hour Care",
    category: "Stroke Care",
    description:
      "Crucial awareness on recognizing early stroke symptoms (BE FAST) and timely acute neurovascular interventions.",
    highlights: [
      "Recognizing Early Warning Signs",
      "Importance of Golden Hour Response",
      "Preventive Stroke Strategies",
    ],
    tag: "Stroke Awareness",
  },
  {
    id: "video-4",
    src: "/videos/neuropointcentre4.mp4",
    title: "Advanced Neuro-Diagnostics & Precision Treatment",
    category: "Diagnostics",
    description:
      "State-of-the-art diagnostic evaluations for headache, epilepsy, tremors, neuropathy, and spine disorders.",
    highlights: [
      "High-Precision Neuro-Assessments",
      "Tailored Treatment Roadmaps",
      "Multidisciplinary Diagnostics",
    ],
    tag: "Diagnostic Care",
  },
  {
    id: "video-5",
    src: "/videos/neuropointcentre5.mp4",
    title: "Neurological Recovery, Rehabilitation & Brain Wellness",
    category: "Recovery & Care",
    description:
      "Step-by-step guidance on neuro-rehabilitation, long-term wellness, and proactive lifestyle habits for optimal brain health.",
    highlights: [
      "Post-Stroke Neuro-Rehab Support",
      "Cognitive & Mobility Recovery",
      "Long-Term Brain Health Practices",
    ],
    tag: "Patient Wellness",
  },
];

interface ClinicVideosProps {
  title?: string;
  subtitle?: string;
  className?: string;
  limit?: number;
  showCategoryFilter?: boolean;
  bgDark?: boolean;
}

const categories = [
  "All Videos",
  "Clinic Tour",
  "Clinical Insights",
  "Stroke Care",
  "Diagnostics",
  "Recovery & Care",
] as const;

export const ClinicVideos: React.FC<ClinicVideosProps> = ({
  title = "Neuropoint Medical Centre in Action",
  subtitle = "Watch clinical walkthroughs, patient education, and neurological care insights from Dr. Pratik Kishore.",
  className = "",
  limit,
  showCategoryFilter = true,
  bgDark = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Videos");
  const [activeModalVideo, setActiveModalVideo] = useState<ClinicVideoItem | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  const filteredVideos = clinicVideosData.filter((v) =>
    selectedCategory === "All Videos" ? true : v.category === selectedCategory
  );

  const displayedVideos = limit ? filteredVideos.slice(0, limit) : filteredVideos;

  // Handle modal video playback
  useEffect(() => {
    if (activeModalVideo && modalVideoRef.current) {
      modalVideoRef.current.currentTime = 0;
      modalVideoRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [activeModalVideo]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const togglePlay = () => {
    if (modalVideoRef.current) {
      if (modalVideoRef.current.paused) {
        modalVideoRef.current.play();
        setIsPlaying(true);
      } else {
        modalVideoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleMute = () => {
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = !modalVideoRef.current.muted;
      setIsMuted(modalVideoRef.current.muted);
    }
  };

  const handleTimeUpdate = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
      setDuration(modalVideoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (modalVideoRef.current) {
      modalVideoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleNextVideo = () => {
    if (!activeModalVideo) return;
    const currentIndex = clinicVideosData.findIndex((v) => v.id === activeModalVideo.id);
    const nextIndex = (currentIndex + 1) % clinicVideosData.length;
    setActiveModalVideo(clinicVideosData[nextIndex]);
  };

  const handlePrevVideo = () => {
    if (!activeModalVideo) return;
    const currentIndex = clinicVideosData.findIndex((v) => v.id === activeModalVideo.id);
    const prevIndex = (currentIndex - 1 + clinicVideosData.length) % clinicVideosData.length;
    setActiveModalVideo(clinicVideosData[prevIndex]);
  };

  const toggleFullScreen = () => {
    if (modalVideoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        modalVideoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section
      className={`py-16 md:py-24 relative overflow-hidden ${
        bgDark
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 text-gray-800"
      } ${className}`}
    >
      {/* Background Decorative Accents */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50 text-xs md:text-sm font-semibold uppercase tracking-wider mb-4"
          >
            <Film className="w-4 h-4 text-amber-600 dark:text-amber-400" />
            <span>Neuropoint Video Highlights</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`text-base md:text-lg ${
              bgDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {subtitle}
          </motion.p>

          {/* Category Filter Pills */}
          {showCategoryFilter && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center gap-2 mt-8"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 scale-105"
                      : bgDark
                      ? "bg-slate-800 text-gray-300 hover:bg-slate-700"
                      : "bg-white text-gray-700 hover:bg-amber-50 border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`group rounded-2xl overflow-hidden border transition-all duration-300 flex flex-col justify-between ${
                bgDark
                  ? "bg-slate-900/90 border-slate-800 hover:border-amber-500/50 shadow-xl"
                  : "bg-white border-amber-100/80 hover:border-amber-400 hover:shadow-2xl shadow-md"
              }`}
            >
              {/* Video Thumbnail & Preview Container */}
              <div
                className="relative aspect-video bg-zinc-900 overflow-hidden cursor-pointer group/video"
                onClick={() => setActiveModalVideo(video)}
              >
                <video
                  src={video.src}
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                  onMouseEnter={(e) => {
                    e.currentTarget.play().catch(() => {});
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.pause();
                    e.currentTarget.currentTime = 0;
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-600/90 text-white backdrop-blur-sm shadow">
                    {video.category}
                  </span>
                  {video.tag && (
                    <span className="px-2.5 py-0.5 text-[11px] font-medium rounded-full bg-black/60 text-amber-300 border border-amber-400/30 backdrop-blur-sm flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {video.tag}
                    </span>
                  )}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-amber-600 text-white flex items-center justify-center shadow-lg group-hover/video:scale-110 group-hover/video:bg-amber-500 transition-all duration-300">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Bottom Video Duration/Hint */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white/90 font-medium pointer-events-none">
                  <span className="flex items-center gap-1 text-amber-300">
                    <Film className="w-3.5 h-3.5" /> Watch Video
                  </span>
                  <span className="bg-black/70 px-2 py-0.5 rounded text-[10px] text-gray-200">
                    Click to Play
                  </span>
                </div>
              </div>

              {/* Video Content & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3
                    className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 hover:text-amber-600 transition-colors cursor-pointer"
                    onClick={() => setActiveModalVideo(video)}
                  >
                    {video.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 line-clamp-2 ${
                      bgDark ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {video.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="space-y-1.5 mb-5">
                    {video.highlights.slice(0, 2).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-300"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Play Full Video Button */}
                <button
                  onClick={() => setActiveModalVideo(video)}
                  className="w-full mt-2 py-2.5 px-4 rounded-xl bg-amber-50 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-amber-800 dark:text-amber-300 dark:hover:bg-amber-600 dark:hover:text-white font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 border border-amber-200 dark:border-slate-700 shadow-sm"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Play Full Video</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={() => setActiveModalVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 flex items-center justify-between border-b border-zinc-800/80 bg-zinc-900/80">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-600 text-white">
                    {activeModalVideo.category}
                  </span>
                  <h4 className="font-semibold text-sm md:text-base text-zinc-100 line-clamp-1">
                    {activeModalVideo.title}
                  </h4>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setActiveModalVideo(null)}
                    className="p-2 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
                    title="Close modal (Esc)"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-black flex items-center justify-center">
                <video
                  ref={modalVideoRef}
                  src={activeModalVideo.src}
                  className="w-full h-full object-contain"
                  controls={false}
                  onTimeUpdate={handleTimeUpdate}
                  onEnded={() => setIsPlaying(false)}
                  onClick={togglePlay}
                  playsInline
                />

                {/* Big Center Play/Pause button when paused */}
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <div className="w-20 h-20 rounded-full bg-amber-600/90 text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
                      <Play className="w-10 h-10 fill-white translate-x-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Video Controls Bar */}
              <div className="p-4 bg-zinc-900/95 border-t border-zinc-800 space-y-3">
                {/* Seek Bar */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-zinc-400">
                    {formatTime(currentTime)}
                  </span>
                  <input
                    type="range"
                    min="0"
                    max={duration || 100}
                    step="0.1"
                    value={currentTime}
                    onChange={handleSeek}
                    className="w-full h-1.5 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <span className="text-xs font-mono text-zinc-400">
                    {formatTime(duration)}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={togglePlay}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-amber-600 hover:text-white transition-colors"
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5" />
                      ) : (
                        <Play className="w-5 h-5 fill-current" />
                      )}
                    </button>

                    <button
                      onClick={toggleMute}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      title={isMuted ? "Unmute" : "Mute"}
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-red-400" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-zinc-300" />
                      )}
                    </button>

                    <div className="hidden sm:flex items-center gap-1 border-l border-zinc-700 pl-3 ml-1">
                      <button
                        onClick={handlePrevVideo}
                        className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        title="Previous Video"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={handleNextVideo}
                        className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                        title="Next Video"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleFullScreen}
                      className="p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Video Info Summary in Modal */}
                <div className="pt-2 border-t border-zinc-800/80">
                  <p className="text-sm text-zinc-300">{activeModalVideo.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ClinicVideos;
