import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaSearch,
  FaChevronRight,
  FaBrain,
  FaHeartbeat,
  FaUserMd,
} from "react-icons/fa";
import blogPostsRaw from "../data/blogs.json";
import { categories, tagColors, BlogPost } from "../data/blog-config";

/* ---------- data from JSON ---------- */
const blogPosts: BlogPost[] = blogPostsRaw as BlogPost[];

/* ---------- component ---------- */
const Blog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = blogPosts.filter((post) => {
    const matchCat =
      activeCategory === "All" || post.category === activeCategory;
    const matchSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = blogPosts.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <Helmet>
        <title>Blog | Dr. Pratik Kishore | Neuropoint Medical Centre</title>
        <meta
          name="description"
          content="Expert neurology insights, brain health tips, and stroke awareness articles by Dr. Pratik Kishore – Senior Consultant Neurologist at Neuropoint Medical Centre, New Delhi."
        />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.delhineuropointcentre.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://www.delhineuropointcentre.com/blog"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-amber-700 via-amber-600 to-amber-800 text-white relative overflow-hidden">
        {/* decorative circles */}
        <div className="absolute -top-16 -left-16 w-72 h-72 bg-white/5 rounded-full" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/5 rounded-full" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBrain className="text-amber-200 text-3xl" />
              <span className="text-amber-200 uppercase tracking-widest text-sm font-semibold">
                Neuro Health Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
              Insights from a&nbsp;
              <span className="text-amber-200">Neurologist's Desk</span>
            </h1>
            <p className="text-xl text-amber-100 max-w-2xl mx-auto">
              Evidence-based articles on brain health, stroke prevention,
              epilepsy, and more — written by Dr. Pratik Kishore.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED POST ────────────────────────────────────── */}
      {featured && (
        <section className="py-12 container mx-auto px-4">
          <div className="mb-6 flex items-center gap-2">
            <span className="h-px flex-1 bg-amber-200" />
            <span className="text-amber-600 font-semibold uppercase tracking-widest text-sm">
              Featured Article
            </span>
            <span className="h-px flex-1 bg-amber-200" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl overflow-hidden shadow-xl border border-amber-100 md:flex group"
          >
            <div className="md:w-1/2 h-72 md:h-auto overflow-hidden relative">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              <span className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                Featured
              </span>
            </div>

            <div className="md:w-1/2 p-10 flex flex-col justify-center">
              <span className="inline-flex items-center gap-1 text-amber-600 font-semibold text-sm mb-3">
                <FaTag className="text-xs" /> {featured.category}
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
                {featured.title}
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-1">
                  <FaCalendarAlt /> {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock /> {featured.readTime}
                </span>
                <span className="flex items-center gap-1">
                  <FaUserMd /> {featured.author}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {featured.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      tagColors[tag] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to={`/blog/${featured.slug}`}
                className="inline-flex items-center gap-2 bg-amber-600 text-white px-7 py-3 rounded-full font-bold hover:bg-amber-700 transition-colors w-fit"
              >
                Read Full Article <FaChevronRight />
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* ── SEARCH + FILTER ──────────────────────────────────── */}
      <section className="py-6 container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* search */}
          <div className="relative w-full md:max-w-xs">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 text-sm"
            />
          </div>

          {/* categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-amber-600 text-white shadow-md"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-amber-400 hover:text-amber-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE GRID ─────────────────────────────────────── */}
      <section className="py-8 pb-20 container mx-auto px-4">
        {rest.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <FaBrain className="text-5xl mx-auto mb-4 opacity-30" />
            <p className="text-xl font-semibold">No articles found</p>
            <p className="text-sm mt-2">Try adjusting your search or filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      color: "#b45309",
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-extrabold text-gray-900 mb-3 leading-snug group-hover:text-amber-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                          tagColors[tag] ?? "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock /> {post.readTime}
                      </span>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-amber-600 font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read <FaChevronRight className="text-xs" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900 text-white text-center relative overflow-hidden">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <FaHeartbeat className="text-5xl text-amber-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Have a Neurological Concern?</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Don't wait. Early diagnosis and treatment make all the difference.
            Book a consultation with Dr. Pratik Kishore today.
          </p>
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-10 py-4 rounded-full font-bold hover:bg-amber-700 transition-colors inline-block"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Blog;
