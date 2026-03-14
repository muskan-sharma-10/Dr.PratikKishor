import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/images/1.jpeg",
      alt: "Dr. Pratik Kishore at Neuropoint Medical Centre",
      title: "Expert Neurological Care",
      subtitle: "Comprehensive solutions for complex neurological disorders",
    },
    {
      url: "/images/2.jpg",
      alt: "Dr. Pratik with medical team",
      title: "Advanced Neurovascular Intervention",
      subtitle: "Pioneering minimally invasive stroke and aneurysm treatments",
    },
    // {
    //   url: "/images/3.jpg",
    //   alt: "Dr. Pratik consulting",
    //   title: "Patient-Centric Approach",
    //   subtitle: "Dedicated to improving life through specialized brain and spine care",
    // },
    {
      url: "/images/4.jpg",
      alt: "Dr. Pratik research",
      title: "Academic Excellence",
      subtitle: "Leading research and clinical trials in modern neurology",
    },
    {
      url: "/images/5.jpg",
      alt: "Dr. Pratik research",
      title: "Neuropoint Medical Centre",
      subtitle: "Your trusted partner for neurological wellness and intervention",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  const slideVariants = {
    enter: { opacity: 0, scale: 1.1 },
    center: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.95, transition: { duration: 1, ease: "easeIn" } }
  };

  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate('/contact');
  };

  return (
    <section className="relative w-full h-[600px] md:h-[85vh] lg:h-screen overflow-hidden group">
      {/* Slides Container */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentSlide}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />
            <img
              src={slides[currentSlide].url}
              alt={slides[currentSlide].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content Overlay */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
        <motion.div
          key={`content-${currentSlide}`}
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-200 text-sm font-medium mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-amber-500 mr-2 animate-pulse" />
            Senior Consultant Neurologist and Neurovascular Interventionist
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1]"
          >
            {slides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i} className={word === 'Neurological' || word === 'Neurovascular' ? 'text-amber-400' : ''}>
                {word}{' '}
              </span>
            ))}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed"
          >
            {slides[currentSlide].subtitle}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={handleBookAppointment}
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-amber-900/20 flex items-center gap-2"
            >
              Book Appointment
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center px-6 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white">
              <span className="text-gray-300 mr-2">Practicing at:</span>
              <span className="font-medium">BLK-Max Hospital</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="group py-4 px-1 focus:outline-none"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div className={`h-1 rounded-full transition-all duration-500 ${currentSlide === index ? 'w-8 bg-amber-500' : 'w-4 bg-white/30 group-hover:bg-white/50'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Side Decorative Elements */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 flex flex-col justify-center items-center gap-8 text-white/20 pointer-events-none hidden lg:flex">
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <span className="rotate-90 whitespace-nowrap text-xs tracking-[0.5em] uppercase font-light">Advanced Neurology</span>
        <div className="h-32 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default Carousel;
