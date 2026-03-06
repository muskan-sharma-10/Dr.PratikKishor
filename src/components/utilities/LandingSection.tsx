import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      url: "/images/1.jpeg",
      alt: "Dr. pratik performing surgery",
    },
    {
      url: "/images/2.jpg",
      alt: "Dr. pratik with medical team",
    },
    {
      url: "/images/3.jpg",
      alt: "Dr. pratik consulting",
    },
    {
      url: "/images/4.jpg",
      alt: "Dr. pratik research",
    },
     {
      url: "/images/5.jpg",
      alt: "Dr. pratik research",
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
    // eslint-disable-next-line
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full">
      {/* Mobile Text - Only visible on mobile/smaller screens */}
      <motion.div
        className="md:hidden px-4 py-6 text-center bg-white"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl text-amber-800 font-bold mb-3"
          variants={itemVariants}
        >
          Dr. Pratik Kishore
        </motion.h1>
        <div className="text-amber-600 space-y-2">
          <motion.div
            className="font-semibold text-lg mb-3"
            variants={itemVariants}
          >
            Senior Consultant – Neurology & Neurovascular Intervention
          </motion.div>
          <motion.div
            className="text-base space-y-1"
            variants={itemVariants}
          >
            <p className="font-medium">BLK-Max Super Speciality Hospital</p>
            <p>Specializing in Neurology & Neurovascular Intervention</p>
          </motion.div>
          <motion.div
            className="mt-4 text-sm space-y-1 text-amber-700"
            variants={itemVariants}
          >
            <p>Pusa Road, Rajendra Place</p>
            <p>New Delhi, India</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Carousel Container */}
      <div className="relative w-full overflow-hidden">
        <div className="relative w-full md:min-h-screen h-[400px]">
          {/* Slides container */}
          <div
            className="absolute w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="absolute w-full h-full flex">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="relative w-full h-96 md:h-full flex-shrink-0"
                >
                  <img
                    src={slide.url}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="absolute bottom-16 left-0 right-0 flex justify-center gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Carousel;