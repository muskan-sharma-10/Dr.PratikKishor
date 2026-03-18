import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PatientStories: React.FC = () => {
    return (
        <div className="min-h-screen bg-white mt-20">
            <Helmet>
                <title>Patient Stories | Neuropoint Medical Centre</title>
                <meta name="description" content="Success stories and testimonials from patients who have received care at Neuropoint Medical Centre for various neurological conditions." />
            </Helmet>
            <section className="py-20 bg-amber-50">
                <div className="container mx-auto px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-amber-800 mb-6"
                    >
                        Patient Stories
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-amber-600 max-w-2xl mx-auto"
                    >
                        Read about the journeys and success stories of patients treated by Dr. Pratik Kishore.
                    </motion.p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center py-10">
                        <p className="text-2xl text-gray-500 italic">"Coming Soon: Inspiring stories of recovery and hope."</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PatientStories;
