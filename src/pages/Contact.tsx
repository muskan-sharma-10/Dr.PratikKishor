import React, { useRef, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useForm, ValidationError } from '@formspree/react';
import { Helmet } from 'react-helmet';

import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});

const Contact: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const position: [number, number] = [28.6605, 77.1869];
  const mapRef = useRef<HTMLDivElement>(null);

  const scrollToMap = () => {
    mapRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: "smooth" });
    }
  }

  const [state, handleSubmit] = useForm("xpqylbgy");

  return (
    <>
      <Helmet>
        <title>Contact Neuropoint Medical Centre | Dr. Pratik Kishore</title>
        <meta name="description" content="Schedule a consultation at Neuropoint Medical Centre with Dr. Pratik Kishore, a leading neurologist and neurovascular intervention specialist in New Delhi." />
        <meta name="keywords" content="Neuropoint Medical Centre, Dr. Pratik Kishore, Neurologist, Neurovascular, Stroke Management, Delhi" />
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@id": "https://www.delhineuropointcentre.com/contact#breadcrumb",
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
                "name": "Contact",
                "item": "https://www.delhineuropointcentre.com/contact"
              }
            ]
          }
          `}
        </script>
      </Helmet>
      <main className="py-8 mt-6 md:mt-10 bg-zinc-50">
        <section className="hero relative overflow-hidden bg-gradient-to-r from-teal-600 to-teal-800 text-white py-24 md:py-32">
          <motion.div className="container mx-auto px-4 relative z-10">
            <motion.div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Expert Neurological Care
              </h1>
              <p className="text-xl md:text-2xl mb-8 leading-relaxed text-zinc-100">
                Connect with Dr. Pratik Kishore, a leading neurologist and neurovascular intervention specialist.
              </p>
              <a
                href="#contact-form"
                onClick={scrollToForm}
                className="inline-block bg-amber-600 text-white font-semibold shadow-lg py-3 px-8 text-lg transition duration-300 ease-in-out hover:bg-amber-300 hover:shadow-xl rounded-md"
              >
                Schedule a Consultation
              </a>
            </motion.div>
          </motion.div>
          <motion.div className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent to-transparent z-0 opacity-90"></motion.div>
        </section>

        <section className="contact-info py-24 bg-white">
          <motion.div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-zinc-800">Contact Dr. Pratik Kishore</h2>
            <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <ContactItem
                icon={<FaMapMarkerAlt className="text-teal-500" />}
                title="Address"
                content="Neuropoint Medical Centre, New Rohtak Road, New Delhi"
                gradientClass="from-teal-400 to-teal-600"
                action={scrollToMap}
              />
              <ContactItem
                icon={<FaPhone className="text-teal-500" />}
                title="Phone"
                content="+91-8368123184"
                gradientClass="from-teal-400 to-teal-600"
                action={() => window.location.href = 'tel:+918368123184'}
              />
              <ContactItem
                icon={<FaEnvelope className="text-teal-500" />}
                title="Appointment"
                content="Book via Hospital Portal"
                gradientClass="from-teal-400 to-teal-600"
                action={() => window.open('https://www.blkmaxhospital.com/book-an-appointment', '_blank')}
              />
            </motion.div>
          </motion.div>
        </section>

        <section id="contact-form" className="contact-form bg-zinc-50 py-20">
          <motion.div className="container mx-auto px-4">
            <motion.div className="max-w-6xl mx-auto">
              <motion.div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-xl overflow-hidden">
                <motion.div className="w-full lg:w-1/2 lg:pl-8 mb-8 lg:mb-0 order-1 lg:order-2 p-8">
                  <img
                    src="/images/about2.jpg"
                    alt="Dr. Pratik Kisore Almeida"
                    className="rounded-lg shadow-lg w-full h-auto object-cover"
                  />
                </motion.div>
                <motion.div className="w-full lg:w-1/2 lg:pr-8 order-2 lg:order-1 p-8">
                  {state.succeeded ? (
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-teal-800 text-center">
                        Thank you for your message
                      </h3>
                      <p className="text-teal-600 text-center">We will get back to you soon.</p>
                    </div>
                  ) : (
                    <motion.div>
                      <h3 className="text-3xl font-bold mb-8 text-zinc-800 text-center lg:text-left">Schedule Your Consultation</h3>

                      <form onSubmit={handleSubmit} className="space-y-6">
                        <motion.div className="mb-8">
                          <label htmlFor="name" className="block text-zinc-700 text-sm font-semibold mb-2">Name</label>
                          <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            placeholder="Your Name"
                            className="border-b-2 border-zinc-200 py-2 px-4 text-sm w-full focus:border-teal-500 focus:outline-none transition-colors duration-200"
                          />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="email" className="block text-zinc-700 text-sm font-semibold mb-2">Email Address</label>
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            placeholder="Your Email Address"
                            className="border-b-2 border-zinc-200 py-2 px-4 text-sm w-full focus:border-teal-500 focus:outline-none transition-colors duration-200"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="phone" className="block text-zinc-700 text-sm font-semibold mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="Your Phone Number"
                            className="border-b-2 border-zinc-200 py-2 px-4 text-sm w-full focus:border-teal-500 focus:outline-none transition-colors duration-200"
                          />
                        </motion.div>

                        <motion.div className="mb-8">
                          <label htmlFor="message" className="block text-zinc-700 text-sm font-semibold mb-2">Message</label>
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message"
                            required
                            className="border-2 border-zinc-200 py-2 px-4 text-sm w-full rounded-lg focus:border-teal-500 focus:outline-none transition-colors duration-200 max-h-72 min-h-24 h-24 resize-vertical"
                          ></textarea>
                        </motion.div>

                        <button
                          type="submit"
                          className="w-full bg-teal-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-teal-500 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          Send Message
                        </button>
                      </form>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section ref={mapRef} className="map-section py-20 bg-white">
          <motion.div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-zinc-800">Our Location</h2>
            <motion.div className="h-96 rounded-lg overflow-hidden shadow-xl">
              <MapContainer center={position} zoom={15} style={{ height: '400px', width: '100%' }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position} icon={customIcon}>
                  <Popup>
                    Dr. Pratik Kishore - Neuropoint Medical Centre
                  </Popup>
                </Marker>
              </MapContainer>
            </motion.div>
          </motion.div>
        </section>

        <section className="social-media py-20 bg-zinc-50">
          <motion.div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-zinc-800">Connect with Dr. Pratik Kishore</h2>
            <motion.div className="flex justify-center space-x-8">
              <a href="https://www.linkedin.com/in/pratik-kishore-83072a184?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-4xl text-zinc-600 hover:text-teal-500 transition-colors duration-300">
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  );
};

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  gradientClass: string;
  action: () => void;
}

const ContactItem: React.FC<ContactCardProps> = ({ icon, title, content, gradientClass, action }) => (
  <motion.div
    className="rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300 bg-white border-2 border-zinc-100 hover:border-teal-500 cursor-pointer group"
    onClick={action}
  >
    <motion.div className="relative z-10 flex flex-col items-center justify-center h-full">
      <motion.div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300 text-teal-500">
        {icon}
      </motion.div>
      <h3 className="text-2xl font-bold mb-3 text-zinc-800">{title}</h3>
      <p className="text-zinc-600 text-lg leading-relaxed max-w-xs mx-auto">{content}</p>
    </motion.div>
  </motion.div>
);

export default Contact;