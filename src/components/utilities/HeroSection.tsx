import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Brain, Microscope, Activity, Dna } from 'lucide-react';

const HeroSection: React.FC = () => {
  const specialties = [
    { icon: Brain, text: "Skull Base Surgery" },
    { icon: Microscope, text: "Neuro-oncology" },
    { icon: Activity, text: "Endoscopic Surgery" },
    { icon: Dna, text: "Brain & Spine Care" }
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500">
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,0 C25,50 75,50 100,0 L100,100 L0,100 Z"
            fill="url(#grad1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-fraunces"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Neurosurgical Excellence
          </motion.h1>
          <motion.p 
            className="text-xl md:text-3xl text-blue-200 mb-8 font-work-sans"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dr. Pratik Kisore Almeida, MD PhD
          </motion.p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-lg p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <specialty.icon className="w-12 h-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-lg font-semibold text-white">{specialty.text}</h3>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-white text-teal-800 font-bold px-8 py-3 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:bg-blue-100 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule Consultation
            <Calendar className="ml-3 w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-teal-500 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:bg-blue-400 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Virtual Appointment
            <Video className="ml-3 w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;