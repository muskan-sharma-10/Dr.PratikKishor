import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { FaGraduationCap, FaBriefcase, FaAward, FaBook, FaLinkedin } from "react-icons/fa";
import { ChevronDown, ChevronUp } from "lucide-react";


const About: React.FC = () => {
  const [activeSection, setActiveSection] = useState("education");
  const [mobileActive, setMobileActive] = useState<string | null>("education");

  const sections = {
    education: {
      icon: <FaGraduationCap />,
      title: "Education",
      content: (
        <ul className="list-disc pl-5 text-amber-600 space-y-2">
          <li>MBBS</li>
          <li>MD (Medicine)</li>
          <li>DM (Neurology)</li>
          <li>FNB (Neurovascular Intervention)</li>
        </ul>
      ),
    },
    experience: {
      icon: <FaBriefcase />,
      title: "Work Experience",
      content: (
        <ul className="list-disc pl-5 text-amber-600 space-y-2">
          <li>Senior Consultant – Neurology & Neurovascular Intervention, BLK-Max Super Speciality Hospital, New Delhi</li>
          <li>Extensive clinical experience in neurovascular procedures and stroke management</li>
          <li>Worked in advanced diagnostic and interventional neurology settings</li>
        </ul>
      ),
    },
    achievements: {
      icon: <FaAward />,
      title: "Achievements",
      content: (
        <ul className="list-disc pl-5 text-amber-600 space-y-2">
          <li>Recognized for expertise in diagnosing and treating complex neurological disorders</li>
          <li>Specialized in minimally invasive neurovascular interventional techniques</li>
          <li>Experienced in advanced stroke management and endovascular procedures</li>
        </ul>
      ),
    },
    publications: {
      icon: <FaBook />,
      title: "Publications",
      content: (
        <div className="text-amber-600">
          <p>Dr. Pratik Kishore has contributed to professional medical literature. For more information, please refer to hospital records or contact the clinic.</p>
        </div>
      ),
    },
    personal: {
      icon: <FaAward />,
      title: "Personal Life & Clinic",
      content: (
        <div className="space-y-4 text-amber-600">
          <div className="border-l-4 border-amber-600 pl-4 mb-6">
            <h4 className="text-xl font-bold text-amber-800">Neuropoint Medical Centre</h4>
            <p className="mt-2 italic">A dedicated facility for advanced neurological care and diagnostics.</p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1">
              <h4 className="text-lg font-bold text-amber-800 flex items-center gap-2">
                <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                Family & Support
              </h4>
              <p className="mt-2">
                Dr. Pratik Kishore is married to <strong>Dr. Shalini</strong>, a distinguished medical professional in her own right.
              </p>
              <div className="mt-4 p-4 bg-amber-50 rounded-lg border border-amber-100">
                <p className="font-semibold text-amber-900">Dr. Shalini</p>
                <p className="text-sm">MBBS, DCP, DNB (Pathology)</p>
                <p className="mt-1">Specialist in Pathology, providing essential diagnostic support and expertise in medical science.</p>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="aspect-video overflow-hidden rounded-lg shadow-sm border border-amber-100">
                  <img src="/images/2.jpg" alt="Clinic Interior" className="w-full h-full object-cover transform transition-transform hover:scale-110" />
                </div>
                <div className="aspect-video overflow-hidden rounded-lg shadow-sm border border-amber-100">
                  <img src="/images/3.jpg" alt="Diagnostics" className="w-full h-full object-cover transform transition-transform hover:scale-110" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  };

  const toggleMobileSection = (key: string) => {
    setMobileActive(mobileActive === key ? null : key);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-800 to-gray-900 text-white mt-20">
      <Helmet>
        <title>About Dr. Pratik Kishore | Expert Neurologist & Neurovascular Specialist</title>
        <meta name="description" content="Learn about Dr. Pratik Kishore's education, extensive work experience, and achievements in neurology and neurovascular intervention." />
      </Helmet>
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 z-0"
          style={{
            backgroundImage: `url('/images/about-bg.gif')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-uppercase">
              Dr. Pratik Kishore
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light">
              Senior Consultant – Neurology & Neurovascular Intervention
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4 relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/images/about1.jpg"
                  alt="Dr. Pratik Kisore Almeida"
                  className="object-cover object-center w-full h-full transform transition-transform duration-500 hover:scale-105"
                />
              </div>

            </div>
            <div className="md:col-span-7 space-y-6 text-lg">
              <p className="text-gray-300 leading-relaxed">
                Dr. Pratik Kishore is a highly experienced Neurologist and Neurovascular Intervention Specialist practicing at BLK-Max Super Speciality Hospital, New Delhi. He is recognized for his expertise in diagnosing and treating a wide range of complex neurological and cerebrovascular disorders using both medical and minimally invasive interventional techniques.
              </p>
              <p className="text-gray-300 leading-relaxed">
                He combines a patient-centric approach with advanced procedural skills to deliver comprehensive neurological care — focusing on improving outcomes and quality of life for patients with acute and chronic neurological conditions.
              </p>
              <div className="pt-4">
                <h2 className="text-2xl font-semibold mb-3 text-white">Specializations</h2>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {["Neurology", "Neurovascular Intervention", "Stroke Management", "Endovascular Procedures", "Neurophysiological Diagnostics", "Deep Brain Stimulation"].map((spec) => (
                    <li key={spec} className="flex items-center">
                      <span className="mr-2 text-white">&#8226;</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex space-x-4 pt-4">
                <a href="https://www.linkedin.com/in/pratik-kishore-83072a184?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="text-white transition-colors">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Dr. Shalini Profile Section */}
      <section className="relative py-20 overflow-hidden bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-600 uppercase">
              Dr. Shalini
            </h2>
            <p className="text-xl md:text-2xl text-amber-800 font-light">
              Specialist – Pathology
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center flex-row-reverse">
            <div className="md:col-span-7 space-y-6 text-lg">
              <p className="text-gray-700 leading-relaxed">
                Dr. Shalini is a distinguished Pathology specialist with a focus on diagnostic excellence and medical science. She brings extensive expertise in laboratory medicine, providing critical diagnostic support that is foundational to effective patient treatment and care.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her commitment to precision and accuracy in diagnostics ensures that patients at Neuropoint Medical Centre receive the highest standard of medical evaluation. She plays a pivotal role in the comprehensive care team, bridging clinical symptoms with definitive laboratory findings.
              </p>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-3 text-amber-800">Expertise</h3>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                  {["Clinical Pathology", "Diagnostic Histopathology", "Cytopathology", "Laboratory Management", "Quality Assurance", "Molecular Diagnostics"].map((spec) => (
                    <li key={spec} className="flex items-center">
                      <span className="mr-2 text-amber-600">&#8226;</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-semibold mb-3 text-amber-800">Qualifications</h3>
                <p className="text-gray-700">MBBS, DCP, DNB (Pathology)</p>
              </div>
            </div>
            <div className="md:col-span-5 space-y-4 relative">
              <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden shadow-2xl border-4 border-amber-50">
                <img
                  src="/images/dr_shalini.JPG"
                  alt="Dr. Shalini"
                  className="object-cover object-center w-full h-full transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            {/* Navigation Column */}
            <nav className="hidden lg:block">
              <ul className="space-y-4">
                {Object.entries(sections).map(([key, { icon, title }]) => (
                  <li key={key}>
                    <button
                      onClick={() => setActiveSection(key)}
                      className={`flex items-center space-x-2 w-full text-left px-4 py-2 rounded transition-colors ${activeSection === key ? 'bg-white text-amber-800' : 'text-gray-300 hover:bg-amber-800'
                        }`}
                    >
                      {icon}
                      <span>{title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Accordion */}
            <div className="lg:hidden space-y-4">
              {Object.entries(sections).map(([key, { icon, title, content }]) => (
                <div key={key} className="overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm">
                  <button
                    onClick={() => toggleMobileSection(key)}
                    className="flex items-center justify-between w-full text-left px-4 py-3 text-white hover:bg-white/20 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-amber-400">{icon}</span>
                      <span className="font-medium">{title}</span>
                    </div>
                    {mobileActive === key ? (
                      <ChevronUp className="w-5 h-5 text-amber-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-amber-400" />
                    )}
                  </button>
                  <div
                    className={`transition-all duration-200 ease-in-out ${mobileActive === key
                      ? 'max-h-[1000px] opacity-100'
                      : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-4 py-3 bg-white text-gray-900 rounded-b-lg">
                      {content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Column for desktop */}
            <div className="mt-8 lg:mt-0 lg:col-span-3 hidden lg:block">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <h2 className="text-2xl font-bold text-amber-600 mb-4">
                  {sections[activeSection as keyof typeof sections].title}
                </h2>
                {sections[activeSection as keyof typeof sections].content}
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;