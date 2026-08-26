import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar, FaHeartbeat, FaCheckCircle, FaUserMd } from 'react-icons/fa';
import ClinicVideos from '../components/utilities/ClinicVideos';
import { Link } from 'react-router-dom';

const patientTestimonials = [
    {
        name: "Rajesh Sharma",
        age: "52 yrs",
        condition: "Acute Ischemic Stroke Recovery",
        story: "When my father showed sudden speech slurring and arm weakness, we reached the hospital within the golden hour. Dr. Pratik Kishore's swift intervention and post-stroke rehabilitation guidance saved his mobility completely. We are eternally grateful.",
        rating: 5,
        tag: "Stroke Care",
    },
    {
        name: "Pooja Verma",
        age: "36 yrs",
        condition: "Chronic Intractable Migraine Relief",
        story: "I suffered from debilitating headaches for over 6 years. Dr. Pratik Kishore thoroughly diagnosed the trigger factors and tailored a targeted preventive treatment. My quality of life has dramatically improved with zero frequent episodes now.",
        rating: 5,
        tag: "Headache Clinic",
    },
    {
        name: "Harish Gupta",
        age: "64 yrs",
        condition: "Parkinson's & Movement Disorder Management",
        story: "The detailed neurological assessment, accurate medication titration, and compassionate counseling at Neuropoint Medical Centre gave me back my confidence and daily independence.",
        rating: 5,
        tag: "Movement Care",
    },
];

const PatientStories: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 mt-20">
            <Helmet>
                <title>Patient Stories & Recovery Journeys | Dr. Pratik Kishore</title>
                <meta name="description" content="Read inspiring recovery journeys and watch clinical insights from patients treated by Dr. Pratik Kishore at Neuropoint Medical Centre." />
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
                        "name": "Patient Stories",
                        "item": "https://www.delhineuropointcentre.com/patient-stories"
                      }
                    ]
                  }
                  `}
                </script>
            </Helmet>

            {/* HERO SECTION */}
            <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700 text-white text-center relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/30 backdrop-blur-sm border border-amber-300/30 text-amber-100 text-sm font-semibold mb-4"
                    >
                        <FaHeartbeat className="text-amber-200" />
                        <span>Real Patients, Real Recoveries</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        Patient Stories & Clinical Insights
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto"
                    >
                        Discover how compassionate neurology care, accurate diagnostics, and personalized treatment at Neuropoint Medical Centre empower patients towards full recovery.
                    </motion.p>
                </div>
            </section>

            {/* CLINIC VIDEO HIGHLIGHTS */}
            <ClinicVideos
                title="Clinical Recovery & Patient Care Videos"
                subtitle="Watch informative clinical case studies, stroke awareness, and rehabilitation insights by Dr. Pratik Kishore."
            />

            {/* PATIENT TESTIMONIAL CARDS */}
            <section className="py-16 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <span className="text-amber-600 font-bold uppercase text-xs tracking-wider">Testimonials</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Words of Trust & Healing</h2>
                        <p className="text-gray-600">Hear directly from patients and families who experienced expert neurological care under Dr. Pratik Kishore.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {patientTestimonials.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="bg-amber-50/40 border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-800">
                                            {item.tag}
                                        </span>
                                        <div className="flex text-amber-500 gap-1 text-sm">
                                            {[...Array(item.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>
                                    </div>

                                    <FaQuoteLeft className="text-amber-300 text-2xl mb-3" />
                                    <p className="text-gray-700 text-sm leading-relaxed mb-6 italic">
                                        "{item.story}"
                                    </p>
                                </div>

                                <div className="border-t border-amber-100/80 pt-4 flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-gray-900 text-base">{item.name}</h4>
                                        <span className="text-xs text-gray-500">{item.condition}</span>
                                    </div>
                                    <FaCheckCircle className="text-emerald-500 text-lg" title="Verified Patient Review" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-16 bg-slate-900 text-white text-center">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FaUserMd className="text-5xl text-amber-500 mx-auto mb-4" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Expert Neurological Consultation?</h2>
                    <p className="text-gray-300 mb-8">
                        Get timely evaluation, second opinions, and state-of-the-art neurological care by Dr. Pratik Kishore.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            to="/contact"
                            className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-8 py-3.5 rounded-full transition-all shadow-lg hover:shadow-amber-600/30"
                        >
                            Book an Appointment
                        </Link>
                        <a
                            href="tel:+918368123184"
                            className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3.5 rounded-full border border-slate-700 transition-all"
                        >
                            Call +91-8368123184
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PatientStories;
