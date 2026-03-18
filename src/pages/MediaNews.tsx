import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaYoutube,
  FaExternalLinkAlt,
  FaNewspaper,
  FaVideo,
} from "react-icons/fa";

const videos = [
  {
    id: "OoP2zaMbLHo",
    title: "Brain Stroke Awareness",
  },
  {
    id: "-bCl4saVchc",
    title: "Medical Discussion on Health",
  },
  {
    id: "JVcUU07ljBw",
    title: "Stroke Management & Prevention",
  },
  {
    id: "74EUP3FJT_s",
    title: "Expert Medical Advice",
  },
];

const articles = [
  {
    title: "हफ़्ते में 90 घंटे काम करने से शरीर पर क्या होता है असर?",
    source: "BBC News Hindi",
    link: "https://www.bbc.com/hindi/articles/clynz3xdn7go",
    description:
      "वर्किंग आवर पर क्यों छिड़ी बहस, हफ़्ते में 90 घंटे काम करने से शरीर पर क्या होता है असर",
  },
  {
    title: "ब्रेन स्ट्रोक के मरीज़ों के लिए क्या होता है गोल्डन पीरियड?",
    source: "BBC News Hindi",
    link: "https://www.bbc.com/hindi/articles/cqleqnq6ngpo",
    description:
      "Stroke awareness and the importance of the Golden Hour in treatment.",
  },
  {
    title:
      "Understanding Stroke: Early Signs, Risk Factors & Prevention Strategies",
    source: "BW Healthcare World",
    link: "https://bwhealthcareworld.com/article/understanding-stroke-early-signs-risk-factors-prevention-strategies-534689",
    description:
      "A comprehensive guide on stroke identification and prevention.",
  },
];

const MediaNews: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 mt-20">
      <Helmet>
        <title>Media & News | Dr. Pratik Kishore | Neuropoint Medical Centre</title>
        <meta
          name="description"
          content="Latest news, articles, and health education videos from Neuropoint Medical Centre and Dr. Pratik Kishore."
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
                "name": "Media & News",
                "item": "https://www.delhineuropointcentre.com/media-news"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* HERO */}
      <section className="py-16 bg-amber-600 text-white text-center">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Media & News
          </motion.h1>

          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Stay updated with the latest medical insights, interviews, and
            health education from Dr. Pratik Kishore.
          </p>
        </div>
      </section>

      {/* FEATURE VIDEO */}
      <section className="py-16 container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border">
          <div className="md:flex">
            <div className="md:w-1/2 p-10">
              <div className="flex items-center text-amber-600 font-bold mb-4">
                <FaVideo className="mr-2" /> Featured Video
              </div>

              <h2 className="text-3xl font-bold mb-6">
                A Message from Dr. Pratik Kishore
              </h2>

              <p className="text-gray-600 mb-8">
                Join Dr. Pratik Kishore as he discusses the latest advancements
                in neurology and shares vital tips for maintaining brain health.
              </p>

              <a
                href="https://www.youtube.com/watch?v=-bCl4saVchc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-600 text-white px-8 py-3 rounded-full flex items-center w-fit hover:bg-amber-700"
              >
                <FaYoutube className="mr-2 text-xl" />
                Watch on YouTube
              </a>
            </div>

            <div className="md:w-1/2 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/-bCl4saVchc"
                title="Doctor Message"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO GALLERY */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between mb-10">
            <h2 className="text-3xl font-bold">Video Gallery</h2>

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 flex items-center"
            >
              Visit Channel <FaExternalLinkAlt className="ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <div key={video.id}>
                <div className="aspect-video rounded-xl overflow-hidden shadow">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>

                <h3 className="text-lg font-bold mt-3">{video.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <FaNewspaper className="text-4xl text-amber-600 mx-auto mb-3" />
            <h2 className="text-4xl font-bold">In The News</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.a
                key={index}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-xl shadow border-l-8 border-amber-600"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-sm font-bold text-amber-700">
                    {article.source}
                  </span>
                  <FaExternalLinkAlt />
                </div>

                <h3 className="text-xl font-bold mb-2">{article.title}</h3>

                <p className="text-gray-600">{article.description}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>

        <p className="text-gray-400 mb-8">
          For consultations and expert opinions on neurological conditions,
          reach out to Dr. Pratik Kishore.
        </p>

        <a
          href="/contact"
          className="bg-amber-600 px-8 py-4 rounded-full font-bold hover:bg-amber-700"
        >
          Book an Appointment
        </a>
      </section>
    </div>
  );
};

export default MediaNews;