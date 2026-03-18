import React from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { services, Service } from './services';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import AppointmentSection from './AppointmentSection';

const ServiceTemplatePage: React.FC = () => {

  const { id } = useParams<{ id: string }>();
  const service: Service | undefined = services.find(s => s.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>{`${service.name} | Dr. Pratik Kishore`}</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <div className="min-h-screen relative">
        {/* Background Image with Overlay */}
        <div
          className="fixed inset-0 z-0"
          style={{
            backgroundImage: `url(${service.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-zinc-900/90" />
        </div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 container mx-auto px-4 py-8 mt-20 sm:mt-28 lg:mt-32"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">{service.name}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-zinc-100/95 rounded-xl p-6 mb-8">
                <img src={service.image} alt={service.name} className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6" />
                <p className="text-lg sm:text-xl text-zinc-800 mb-6">{service.longDescription}</p>

                <div className="space-y-8">
                  {/* Procedures Section */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-700">Procedures</h2>
                    <ul className="space-y-3">
                      {service.procedures.map((procedure, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-teal-500 rounded-full" />
                          <div>
                            <span className="font-semibold text-zinc-800">{procedure.name}:</span>
                            <span className="text-zinc-600"> {procedure.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Symptoms Section */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-700">Symptoms</h2>
                    <ul className="space-y-3">
                      {service.symptoms.map((symptom, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-amber-500 rounded-full" />
                          <div>
                            <span className="font-semibold text-zinc-800">{symptom.name}:</span>
                            <span className="text-zinc-600"> {symptom.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Causes Section */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-teal-700">Causes</h2>
                    <ul className="space-y-3">
                      {service.causes.map((cause, index) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-block w-2 h-2 mt-2 mr-2 bg-zinc-500 rounded-full" />
                          <div>
                            <span className="font-semibold text-zinc-800">{cause.name}:</span>
                            <span className="text-zinc-600"> {cause.description}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              {/* Benefits Card */}
              <div className="bg-teal-50/95 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-teal-700">Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <FaCheckCircle className="text-teal-500 mr-2 flex-shrink-0" />
                      <span className="text-zinc-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risks Card */}
              <div className="bg-amber-50/95 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-amber-700">Risks</h3>
                <ul className="space-y-3">
                  {service.risks.map((risk, index) => (
                    <li key={index} className="flex items-center">
                      <FaExclamationTriangle className="text-amber-500 mr-2 flex-shrink-0" />
                      <span className="text-zinc-700">{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recovery Time Card */}
              <div className="bg-zinc-50/95 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-zinc-700">Recovery Time</h3>
                <p className="text-zinc-600">{service.recoveryTime}</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-semibold mb-6 text-white">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-white/95 shadow-lg rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-2 text-teal-700">{item.question}</h3>
                  <p className="text-zinc-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <AppointmentSection />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceTemplatePage;