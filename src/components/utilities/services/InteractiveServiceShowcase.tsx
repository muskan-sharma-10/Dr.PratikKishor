import React from 'react';
import { motion } from 'framer-motion';
import { services } from './services';
import { useNavigate } from 'react-router-dom';

const AlternatingServicesShowcase: React.FC = () => {

  const navigate = useNavigate();
  // Take first 6 services
  const selectedServices = services.slice(0, 6).map((service, index) => {
    const images = ['/images/1.jpeg', '/images/2.jpg', '/images/3.jpg', '/images/4.jpg', '/images/5.jpg', '/images/about2.jpg'];
    return { ...service, image: images[index % images.length] };
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {selectedServices.map((service, index) => {
            // Determine layout style based on index
            const isOverlayStyle = index % 3 === 0 || index % 3 === 2;

            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="relative rounded-xl overflow-hidden shadow-lg h-[400px]"
              >
                {/* Image */}
                <img
                  src={service.image || '/api/placeholder/800/800'}
                  alt={service.name}
                  className="h-full w-full object-cover"
                />

                {isOverlayStyle ? (
                  // Overlay style (text over image)
                  <div className="absolute inset-0 bg-teal-900/80 p-6 flex flex-col justify-center text-white">
                    <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                    <p className="text-sm leading-relaxed">{service.shortDescription}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate(`/services/${service.id}`)}
                      className="mt-6 self-start rounded-full border-2 border-white px-6 py-2 text-sm 
                               font-semibold transition-colors duration-300 hover:bg-white hover:text-teal-900"
                    >
                      Learn More
                    </motion.button>
                  </div>
                ) : (
                  // Bottom text style
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                    <h3 className="text-xl font-bold mb-2 text-teal-900">{service.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{service.shortDescription}</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="rounded-full bg-teal-900 text-white px-6 py-2 text-sm font-semibold
                               transition-colors duration-300 hover:bg-teal-800"
                      onClick={() => navigate(`/services/${service.id}`)}
                    >
                      Learn More
                    </motion.button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default AlternatingServicesShowcase;