import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaMapMarkerAlt, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
    return (

        <footer className="relative bg-white text-black py-16">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 font-pt-serif-regular text-zinc-800">Dr. Pratik Kishore</h3>
                        <p className="mb-4 text-zinc-600">Senior Consultant – Neurology & Neurovascular Intervention</p>
                        <p className="mb-4 text-zinc-600">
                            MBBS, MD, DM (Neurology), FNB (NVI)
                        </p>
                        <p className='mb-4 text-zinc-600'>
                            Centre for Neurosciences, Neurology
                        </p>

                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/pratik-kishore-83072a184?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-800 transition-colors duration-300">
                                <FaLinkedinIn className='text-blue-600' size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-pt-serif-regular mb-6 text-zinc-800">Contact</h3>
                        <p className="flex items-center mb-3 text-zinc-700">
                            <FaMapMarkerAlt className="mr-3 text-zinc-400" />
                            Neuropoint Medical Centre, New Rohtak Road, New Delhi
                        </p>
                        <p className="flex items-center mb-3 text-zinc-700">
                            <FaPhone className="mr-3 text-zinc-400" />
                            +91-8368123184
                        </p>
                        {/* <p className="flex items-center mb-3 text-zinc-700">
                            <FaEnvelope className="mr-3 text-zinc-400" />
                            <a href="mailto:appointment@neuropoint.com" className="hover:underline">
                                appointment@neuropoint.com
                            </a>
                        </p> */}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <h3 className="text-2xl font-pt-serif-regular mb-6 text-zinc-800">Specialties</h3>
                        <ul className="space-y-2 text-zinc-700">
                            <li><Link to="/services/stroke-management" className="hover:text-amber-600 transition-colors">Stroke & Acute Stroke Management</Link></li>
                            <li><Link to="/services/neurovascular-intervention" className="hover:text-amber-600 transition-colors">Neurovascular Intervention</Link></li>
                            <li><Link to="/services/neuro-diagnostics" className="hover:text-amber-600 transition-colors">Neurophysiological Diagnostics</Link></li>
                            <li><Link to="/services/specialized-therapies" className="hover:text-amber-600 transition-colors">Specialized Neurology Therapies</Link></li>
                            <li><Link to="/services" className="hover:text-amber-600 transition-colors">Botox & Headache Therapy</Link></li>
                            <li><Link to="/services" className="hover:text-amber-600 transition-colors">DBS & Parkinson's Care</Link></li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <h3 className="text-2xl font-pt-serif-regular mb-6 text-zinc-800">Quick Links</h3>
                        <ul className="space-y-2 text-zinc-700">
                            <li><Link to="/about" className="hover:text-amber-600 transition-colors">About</Link></li>
                            <li><Link to="/services" className="hover:text-amber-600 transition-colors">Services</Link></li>
                            <li><Link to="/media-news" className="hover:text-amber-600 transition-colors">Media & News</Link></li>
                            <li><Link to="/patient-stories" className="hover:text-amber-600 transition-colors">Patient Stories</Link></li>
                            <li><Link to="/contact" className="hover:text-amber-600 transition-colors">Contact</Link></li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 pt-8 border-t border-zinc-200 text-center text-zinc-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <p className="mb-4">&copy; {new Date().getFullYear()} Dr. Pratik Kishore. All rights reserved.</p>
                    <p className="text-sm mb-2">
                        <a href="/" className="text-zinc-700 hover:underline">Hospital Profile</a>
                    </p>
                    <p className="text-sm">
                        website by: <a href="https://rnahealthtech.com" className="text-zinc-700 hover:underline">RNA HealthTech</a>
                    </p>
                </motion.div>
            </div>
        </footer>

    );
};

export default Footer;