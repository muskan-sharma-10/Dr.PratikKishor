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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Pratik Kishore</h4>
            <div className="space-y-3">
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">MBBS</div>
                <p className="text-amber-900 font-semibold text-sm">Bachelor of Medicine</p>
                <p className="text-amber-700 text-xs text-uppercase">Bachelor of Surgery</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">MD</div>
                <p className="text-amber-900 font-semibold text-sm">Doctor of Medicine</p>
                <p className="text-amber-700 text-xs text-uppercase">General Medicine</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">DM</div>
                <p className="text-amber-900 font-semibold text-sm">Doctorate in Medicine</p>
                <p className="text-amber-700 text-xs text-uppercase">Neurology, NIMHANS</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg border border-amber-200 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">FNB</div>
                <p className="text-amber-900 font-semibold text-sm">Fellowship</p>
                <p className="text-amber-700 text-xs text-uppercase">Neurovascular Intervention (NVI)</p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Shalini</h4>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">MBBS</div>
                <p className="text-amber-900 font-semibold text-sm">Bachelor of Medicine</p>
                <p className="text-gray-600 text-xs text-uppercase">Bachelor of Surgery</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">DCP</div>
                <p className="text-amber-900 font-semibold text-sm">Diploma in Clinical Pathology</p>
                <p className="text-gray-600 text-xs text-uppercase">Diagnostic Excellence</p>
              </div>
              <div className="bg-white p-3 rounded-lg border border-amber-100 shadow-sm relative overflow-hidden group">
                <div className="absolute top-0 right-0 px-2 py-1 bg-amber-600 text-white rounded-bl-lg font-bold text-[8px] tracking-widest uppercase">DNB</div>
                <p className="text-amber-900 font-semibold text-sm">Diplomate of National Board</p>
                <p className="text-gray-600 text-xs text-uppercase">Pathology</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    experience: {
      icon: <FaBriefcase />,
      title: "Work Experience",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Pratik Kishore</h4>
            <ul className="list-disc pl-5 text-amber-700 space-y-2 text-sm">
              <li>Senior Consultant – Neurology & Neurovascular Intervention, BLK-Max Super Speciality Hospital</li>
              <li>Lead Specialist at Neuropoint Medical Centre, New Rohtak Road</li>
              <li>Extensive clinical experience in neurovascular procedures and stroke management</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Shalini</h4>
            <ul className="list-disc pl-5 text-amber-700 space-y-2 text-sm">
              <li>Specialist Pathologist at Neuropoint Medical Centre</li>
              <li>Expertise in laboratory medicine and diagnostic histopathology</li>
              <li>Focus on clinical-pathological correlation for precise patient evaluation</li>
            </ul>
          </div>
        </div>
      ),
    },
    achievements: {
      icon: <FaAward />,
      title: "Achievements",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Pratik Kishore</h4>
            <ul className="list-disc pl-5 text-amber-700 space-y-2 text-sm">
              <li>Recognized for expertise in diagnosing and treating complex neurological disorders</li>
              <li>Specialized in minimally invasive neurovascular interventional techniques</li>
              <li>Experienced in advanced stroke management and endovascular procedures</li>
            </ul>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Shalini</h4>
            <ul className="list-disc pl-5 text-amber-700 space-y-2 text-sm">
              <li>Awarded for academic excellence in Pathology specialization</li>
              <li>Member of Indian Association of Pathologists and Microbiologists (IAPM)</li>
              <li>Published case studies in peer-reviewed pathology journals</li>
            </ul>
          </div>
        </div>
      ),
    },
    publications: {
      icon: <FaBook />,
      title: "Publications",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Pratik Kishore</h4>
            <p className="text-amber-700 text-sm italic">"Review of Endovascular Management in Acute Ischemic Stroke" - Journal of Interventional Neurology</p>
            <p className="text-amber-700 text-sm mt-2 font-semibold">Multiple Case Studies in Neurovascular Interventions</p>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Dr. Shalini</h4>
            <p className="text-amber-700 text-sm italic">"Diagnostic Challenges in Cytopathology of Thyroid Lesions" - National Journal of Pathology</p>
            <p className="text-amber-700 text-sm mt-2 font-semibold">Co-authored research on Molecular Diagnostics in Pathological Screening</p>
          </div>
        </div>
      ),
    },
    personal: {
      icon: <FaAward />,
      title: "Personal Life & Clinic",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-amber-700">
          <div>
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Neuropoint Medical Centre</h4>
            <p className="text-sm">A state-of-the-art facility located at <strong>New Rohtak Road</strong> dedicated to advanced neurology and diagnostics. Dr. Pratik Kishore leads the clinical side, ensuring patients receive the highest standard of neurological care with modern interventional capabilities.</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="aspect-video overflow-hidden rounded-lg shadow-sm border border-amber-100">
                <img src="/images/2.jpg" alt="Clinic Interior" className="w-full h-full object-cover transform transition-transform hover:scale-110" />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg shadow-sm border border-amber-100">
                <img src="/images/3.jpg" alt="Diagnostics" className="w-full h-full object-cover transform transition-transform hover:scale-110" />
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h4 className="text-lg font-bold text-amber-800 mb-4 border-b border-amber-100 pb-2">Diagnostic Excellence</h4>
            <p className="text-sm">Dr. Shalini manages the diagnostic and pathological services at Neuropoint, ensuring total accuracy in laboratory findings. This seamless collaboration between clinical neurology and precise pathology is what defines the holistic approach at our clinic.</p>
            <p className="mt-3 text-sm italic">"Providing accurate results for life-saving decisions."</p>
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
          className="absolute inset-0 opacity-40 z-0"
          style={{
            backgroundImage: `url('/images/neuropoint_board.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'brightness(0.6) contrast(1.2)'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 text-uppercase">
              Dr. Pratik Kishore
            </h1>
            <p className="text-xl md:text-2xl text-blue-200 font-light">
              Senior Consultant – Neurology & Neurovascular Intervention
              <br />
              <span className="text-lg font-semibold text-white/80">MBBS, MD (Med), DM (Neurology), FNB (NVI)</span>
            </p>
          </div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-5 space-y-4 relative">
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden shadow-2xl border-8 border-white/10 max-w-[300px] mx-auto">
                <img
                  src="/images/about1.jpg"
                  alt="Dr. Pratik Kishore"
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                  style={{ objectPosition: 'center 20%' }}
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
              <br />
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">MBBS</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">DCP</span>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-bold shadow-sm">DNB (Pathology)</span>
              </div>
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
              <div className="aspect-w-1 aspect-h-1 rounded-full overflow-hidden shadow-2xl border-8 border-amber-50 max-w-[300px] mx-auto">
                <img
                  src="/images/dr_shalini.JPG"
                  alt="Dr. Shalini"
                  className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-110"
                  style={{ objectPosition: 'center 15%' }}
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
              <div className="bg-white rounded-2xl shadow-2xl p-8 min-h-[500px]">
                <h2 className="text-3xl font-extrabold text-amber-600 mb-8 flex items-center gap-3">
                  <span className="p-2 bg-amber-100 rounded-lg">{sections[activeSection as keyof typeof sections].icon}</span>
                  {sections[activeSection as keyof typeof sections].title}
                </h2>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {sections[activeSection as keyof typeof sections].content}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;