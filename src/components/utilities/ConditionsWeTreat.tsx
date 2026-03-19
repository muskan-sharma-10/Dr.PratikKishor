import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaStethoscope, FaHeartbeat, FaProcedures, FaSyringe, FaNotesMedical, FaUserMd } from 'react-icons/fa';

const conditions = [
    { title: 'Neurointerventional Procedures', icon: <FaProcedures />, desc: 'Advanced, minimally invasive procedures for complex neurovascular conditions.' },
    { title: 'Headache', icon: <FaBrain />, desc: 'Comprehensive diagnosis and specialized treatment for all types of severe headaches.' },
    { title: 'Epilepsy', icon: <FaHeartbeat />, desc: 'Expert management, monitoring, and tailored care plans for seizure disorders.' },
    { title: 'Parkinson\'s Disease', icon: <FaUserMd />, desc: 'Advanced therapies and continuous care for Parkinson’s and movement disorders.' },
    { title: 'Stroke', icon: <FaBrain />, desc: 'Rapid, life-saving interventions, acute management and long-term stroke recovery.' },
    { title: 'Neuropathy', icon: <FaSyringe />, desc: 'Effective diagnostic approaches and treatments for nerve damage and associated pain.' },
    { title: 'Backache', icon: <FaStethoscope />, desc: 'Accurate diagnoses and effective relief strategies for acute and chronic back pain.' },
    { title: 'Neuroinfection', icon: <FaNotesMedical />, desc: 'Prompt, precise, and critical care for life-threatening infections of the nervous system.' }
];

const ConditionsWeTreat: React.FC = () => {
    return (
        <section className="py-20 bg-zinc-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl opacity-60 translate-y-1/3 -translate-x-1/3" />
            
            <div className="container mx-auto px-4 relative z-10 max-w-6xl">
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 font-pt-serif-regular tracking-tight"
                    >
                        Specialized Treatments & Procedures
                    </motion.h2>
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1.5 bg-amber-600 mx-auto rounded-full mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-lg text-zinc-600 max-w-3xl mx-auto"
                    >
                        Providing world-class neurological care and advanced neurointerventional procedures across a comprehensive range of conditions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 cursor-default">
                    {conditions.map((condition, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 border border-zinc-100/80 group flex flex-col h-full"
                        >
                            <div className="w-12 h-12 bg-amber-50/80 text-amber-600 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-sm group-hover:bg-amber-600 group-hover:text-white group-hover:shadow-amber-200 group-hover:shadow-lg transition-all duration-300 transform group-hover:-rotate-3 group-hover:scale-105">
                                {condition.icon}
                            </div>
                            <h3 className="text-lg font-bold text-zinc-800 mb-2 group-hover:text-amber-700 transition-colors duration-300 leading-tight">
                                {condition.title}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed text-sm flex-grow">
                                {condition.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ConditionsWeTreat;
