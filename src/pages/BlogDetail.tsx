import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaCalendarAlt,
  FaClock,
  FaUserMd,
  FaTag,
  FaArrowLeft,
  FaChevronRight,
  FaBrain,
  FaHeartbeat,
} from "react-icons/fa";
import blogPostsRaw from "../data/blogs.json";
import { tagColors, BlogPost } from "../data/blog-config";
import AppointmentSection from "../components/utilities/services/AppointmentSection";

const blogPosts: BlogPost[] = blogPostsRaw as BlogPost[];

/* ── helpers ──────────────────────────────────────────────────────────── */

/** Splits the content string on double-newline into paragraphs */
const renderParagraphs = (content: string) =>
  content
    .split(/\n\n+/)
    .filter(Boolean)
    .map((para, i) => (
      <p key={i} className="text-gray-700 leading-relaxed text-base mb-5">
        {para.trim()}
      </p>
    ));

/** Derive a paragraph "section title" heuristic – first sentence if short */
const sectionLabel = (para: string): string | null => {
  const first = para.split(".")[0];
  return first.length < 80 ? first : null;
};

/* ── component ────────────────────────────────────────────────────────── */

const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const post = blogPosts.find((p) => p.slug === slug);
  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 mt-20">
        <FaBrain className="text-6xl text-amber-300 mb-6" />
        <h1 className="text-3xl font-bold text-gray-800 mb-3">Article Not Found</h1>
        <p className="text-gray-500 mb-8">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="bg-amber-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    );
  }

  const paragraphs = post.content.split(/\n\n+/).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{`${post.title} | Dr. Pratik Kishore`}</title>
        <meta name="description" content={post.excerpt} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            author: { "@type": "Person", name: post.author },
            datePublished: post.date,
            image: post.image,
          })}
        </script>
      </Helmet>

      {/* ── HERO BANNER ───────────────────────────────────────────────── */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden mt-20">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end container mx-auto px-4 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-amber-300 mb-4">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <FaChevronRight className="text-xs opacity-60" />
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <FaChevronRight className="text-xs opacity-60" />
              <span className="text-white/70 truncate max-w-xs">{post.title}</span>
            </nav>

            {/* category chip */}
            <span className="inline-flex items-center gap-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              <FaTag className="text-[10px]" /> {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight max-w-4xl mb-5">
              {post.title}
            </h1>

            {/* meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-300">
              <span className="flex items-center gap-2">
                <FaUserMd className="text-amber-400" /> {post.author}
              </span>
              <span className="flex items-center gap-2">
                <FaCalendarAlt className="text-amber-400" /> {post.date}
              </span>
              <span className="flex items-center gap-2">
                <FaClock className="text-amber-400" /> {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── BODY ──────────────────────────────────────────────────────── */}
      <section className="py-14 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── MAIN CONTENT ────────────────────────────────────────── */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:flex-1 min-w-0"
          >
            {/* back button */}
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm text-amber-600 font-semibold mb-8 hover:gap-3 transition-all"
            >
              <FaArrowLeft /> Back to articles
            </button>

            {/* excerpt highlight */}
            <div className="border-l-4 border-amber-500 bg-amber-50 rounded-r-xl px-6 py-5 mb-10">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                {post.excerpt}
              </p>
            </div>

            {/* article body — split into sections per paragraph */}
            <div className="prose prose-gray max-w-none">
              {paragraphs.map((para, i) => {
                const label = sectionLabel(para);
                return (
                  <div key={i} className="mb-8">
                    {label && i > 0 && (
                      <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="inline-block w-2.5 h-2.5 rounded-full bg-amber-500" />
                        {label}
                      </h2>
                    )}
                    {renderParagraphs(para)}
                  </div>
                );
              })}
            </div>

            {/* tags */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Tagged under
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
                      tagColors[tag] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* author card */}
            <div className="mt-10 bg-white border border-amber-100 rounded-2xl p-6 flex gap-5 items-start shadow-sm">
              <div className="w-16 h-16 rounded-full bg-amber-600 flex items-center justify-center flex-shrink-0 text-white text-2xl font-bold shadow">
                PK
              </div>
              <div>
                <p className="font-bold text-gray-900 text-lg">{post.author}</p>
                <p className="text-amber-600 text-sm font-medium mb-2">
                  Senior Consultant Neurologist · Neuropoint Medical Centre, New Delhi
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Dr. Pratik Kishore is a leading neurologist specialising in stroke,
                  epilepsy, Parkinson's disease, and neuro-interventions. He combines
                  evidence-based medicine with culturally relevant guidance for Indian patients.
                </p>
              </div>
            </div>
          </motion.article>

          {/* ── SIDEBAR ─────────────────────────────────────────────── */}
          <aside className="lg:w-80 xl:w-96 flex-shrink-0 space-y-8">

            {/* Quick Info card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaBrain className="text-amber-500" /> Article Info
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-center gap-3">
                  <FaUserMd className="text-amber-500 flex-shrink-0" />
                  <span><span className="font-semibold text-gray-800">Author:</span> {post.author}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaCalendarAlt className="text-amber-500 flex-shrink-0" />
                  <span><span className="font-semibold text-gray-800">Published:</span> {post.date}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaClock className="text-amber-500 flex-shrink-0" />
                  <span><span className="font-semibold text-gray-800">Read time:</span> {post.readTime}</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaTag className="text-amber-500 flex-shrink-0" />
                  <span><span className="font-semibold text-gray-800">Category:</span> {post.category}</span>
                </li>
              </ul>
            </motion.div>

            {/* CTA banner */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-2xl p-6 text-white text-center shadow-lg"
            >
              <FaHeartbeat className="text-4xl mx-auto mb-3 text-amber-200" />
              <h3 className="text-lg font-bold mb-2">Have a Concern?</h3>
              <p className="text-amber-100 text-sm mb-5 leading-relaxed">
                Don't wait. Early diagnosis makes all the difference. Book a
                consultation with Dr. Pratik Kishore today.
              </p>
              <Link
                to="/contact"
                className="block bg-white text-amber-700 font-bold px-5 py-2.5 rounded-full hover:bg-amber-50 transition-colors text-sm"
              >
                Book Appointment
              </Link>
            </motion.div>

            {/* Related Articles */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-5">Related Articles</h3>
              <div className="space-y-4">
                {related.map((r) => (
                  <Link
                    key={r.id}
                    to={`/blog/${r.slug}`}
                    className="flex gap-3 group"
                  >
                    <img
                      src={r.image}
                      alt={r.title}
                      className="w-16 h-16 rounded-xl object-cover flex-shrink-0 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                        {r.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
                        <FaClock className="text-amber-400" /> {r.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                to="/blog"
                className="mt-6 flex items-center justify-center gap-1 text-sm text-amber-600 font-semibold hover:gap-2 transition-all"
              >
                View all articles <FaChevronRight className="text-xs" />
              </Link>
            </motion.div>
          </aside>
        </div>
      </section>

      {/* ── APPOINTMENT CTA ───────────────────────────────────────────── */}
      <AppointmentSection />
    </div>
  );
};

export default BlogDetail;
