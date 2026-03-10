import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Video, Brain, Microscope, Activity, Dna } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeroSectionProps {
  showBackground?: boolean;
  showSubtitle?: boolean;
  onSpecialtyClick?: (specialtyText: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  showBackground = true,
  showSubtitle = true,
  onSpecialtyClick
}) => {
  const navigate = useNavigate();
  const specialties = [
    { icon: Brain, text: "Stroke Management", id: "stroke-management", image: "/images/stroke-management.png" },
    { icon: Microscope, text: "Interventional Neurology", id: "neurovascular-intervention", image: "/images/neurovascular-intervention.png" },
    { icon: Activity, text: "Neuro Diagnostics", id: "neuro-diagnostics", image: "/images/neuro-diagnostics.png" },
    { icon: Dna, text: "Hyperacute Care", id: "specialized-therapies", image: "/images/specialized-therapies.png" }
  ];

  return (
    <section
      className={`relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-cover bg-center ${!showBackground ? 'bg-transparent' : ''}`}
      style={showBackground ? { backgroundImage: "url('/images/neuropoint_board.jpg')" } : {}}
    >
      {showBackground && (
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
      )}
      <div className="container mx-auto px-4 z-10">
        <div className="text-center mb-12">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4 font-fraunces"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Neurological Excellence
          </motion.h1>
          {showSubtitle && (
            <motion.p
              className="text-xl md:text-3xl text-blue-200 mb-8 font-work-sans"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dr. Pratik Kishore
            </motion.p>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {specialties.map((specialty, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-xl h-32 md:h-40 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => onSpecialtyClick && onSpecialtyClick(specialty.id)}
            >
              <img
                src={specialty.image}
                alt={specialty.text}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-40"
              />
              <div className="absolute inset-0 bg-teal-900/40 group-hover:bg-teal-900/20 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
                <specialty.icon className="w-8 h-8 md:w-10 md:h-10 mb-2 text-blue-200" />
                <h3 className="text-sm md:text-base font-bold text-white text-center leading-tight">{specialty.text}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button
            className="bg-white text-teal-800 font-bold px-8 py-3 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:bg-blue-100 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            Schedule Consultation
            <Calendar className="ml-3 w-5 h-5" />
          </motion.button>
          <motion.button
            className="bg-teal-500 text-white font-bold px-8 py-3 rounded-lg flex items-center justify-center text-lg transition-all duration-300 hover:bg-blue-400 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.blkmaxhospital.com/book-an-appointment', '_blank')}
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