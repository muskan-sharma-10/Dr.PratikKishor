import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaYoutube, FaExternalLinkAlt, FaNewspaper, FaVideo } from 'react-icons/fa';

const videos = [
    {
        id: 'OoP2zaMbLHo',
        title: 'Brain Stroke Awareness',
        type: 'short',
        thumbnail: 'https://img.youtube.com/vi/OoP2zaMbLHo/maxresdefault.jpg'
    },
    {
        id: '-bCl4saVchc',
        title: 'Medical Discussion on Health',
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/-bCl4saVchc/maxresdefault.jpg'
    },
    {
        id: 'JVcUU07ljBw',
        title: 'Stroke Management & Prevention',
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/JVcUU07ljBw/maxresdefault.jpg'
    },
    {
        id: '74EUP3FJT_s',
        title: 'Expert Medical Advice',
        type: 'video',
        thumbnail: 'https://img.youtube.com/vi/74EUP3FJT_s/maxresdefault.jpg'
    }
];

const articles = [
    {
        title: 'हफ़्ते में 90 घंटे काम करने से शरीर पर क्या होता है असर?',
        source: 'BBC News Hindi',
        link: 'https://www.bbc.com/hindi/articles/clynz3xdn7go',
        description: 'वर्किंग आवर पर क्यों छिड़ी बहस, हफ़्ते में 90 घंटे काम करने से शरीर पर क्या होता है असर'
    },
    {
        title: 'ब्रेन स्ट्रोक के मरीज़ों के लिए क्या होता है गोल्डन पीरियड?',
        source: 'BBC News Hindi',
        link: 'https://www.bbc.com/hindi/articles/cqleqnq6ngpo',
        description: 'Stroke awareness and the importance of the Golden Hour in treatment.'
    },
    {
        title: 'Understanding Stroke: Early Signs, Risk Factors & Prevention Strategies',
        source: 'BW Healthcare World',
        link: 'https://bwhealthcareworld.com/article/understanding-stroke-early-signs-risk-factors-prevention-strategies-534689',
        description: 'A comprehensive guide on stroke identification and prevention.'
    }
];

const MediaNews: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 mt-20">
            <Helmet>
                <title>Media & News | Dr. Pratik Kishore</title>
                <meta name="description" content="Latest news, articles, and health education videos from Dr. Pratik Kishore. Stay informed about neurological health and neurovascular advancements." />
            </Helmet>
            {/* Hero Section */}
            <section className="relative py-16 bg-amber-600 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="h-full w-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 100 C 20 0 50 0 100 100 Z" />
                    </svg>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-4"
                    >
                        Media & News
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-amber-100 max-w-3xl mx-auto"
                    >
                        Stay updated with the latest medical insights, interviews, and health education from Dr. Pratik Kishore.
                    </motion.p>
                </div>
            </section>

            {/* Doctor's Special Video Section */}
            <section className="py-16 container mx-auto px-4">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-100">
                    <div className="md:flex items-center">
                        <div className="md:w-1/2 p-8 md:p-12">
                            <div className="flex items-center space-x-2 text-amber-600 font-bold uppercase tracking-wider mb-4">
                                <FaVideo />
                                <span>Featured Video</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                A Message from Dr. Pratik Kishore
                            </h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Join Dr. Pratik Kishore as he discusses the latest advancements in neurology and shares vital tips for maintaining brain health. This simple guide is designed to help you understand complex medical conditions in an easy-to-follow format.
                            </p>
                            <button className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2">
                                <FaYoutube className="text-2xl" />
                                <span>Watch on YouTube</span>
                            </button>
                        </div>
                        <div className="md:w-1/2 bg-gray-900 aspect-video relative group cursor-pointer">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/-bCl4saVchc"
                                title="Doctor Message"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* YouTube Gallery */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Video Gallery</h2>
                        <a href="#" className="text-amber-600 font-semibold flex items-center space-x-2 hover:underline">
                            <span>Visit Channel</span>
                            <FaExternalLinkAlt size={14} />
                        </a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videos.map((video, index) => (
                            <motion.div
                                key={video.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video mb-4">
                                    <iframe
                                        className="w-full h-full"
                                        src={`https://www.youtube.com/embed/${video.id}`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all flex items-center justify-center pointer-events-none">
                                        <FaYoutube className="text-white text-6xl opacity-80 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors uppercase">
                                    {video.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* News & Articles */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <div className="inline-block p-3 bg-amber-100 rounded-full mb-4">
                            <FaNewspaper className="text-amber-600 text-3xl" />
                        </div>
                        <h2 className="text-4xl font-extrabold text-gray-900">In The News</h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Read the latest articles and features about neurology and neurovascular interventions.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {articles.map((article, index) => (
                            <motion.a
                                key={index}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="bg-white p-8 rounded-2xl shadow-md border-l-8 border-amber-600 hover:shadow-xl transition-all group"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
                                        {article.source}
                                    </span>
                                    <FaExternalLinkAlt className="text-gray-400 group-hover:text-amber-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-amber-600 transition-colors">
                                    {article.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2">
                                    {article.description}
                                </p>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-900 text-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8">Have Questions?</h2>
                    <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
                        For consultations and expert opinions on neurological conditions, reach out to Dr. Pratik Kishore.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-amber-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-amber-700 transition-colors shadow-[0_0_20px_rgba(217,119,6,0.5)]"
                    >
                        Book an Appointment
                    </a>
                </div>
            </section>
        </div>
    );
};

export default MediaNews;
