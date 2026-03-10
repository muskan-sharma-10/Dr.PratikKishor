import React from 'react';
import { Link } from 'react-router-dom';

const DrKishoreHomeSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage: "url('/images/neuropoint_board.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-lg md:text-2xl font-bold text-center text-yellow-600 mb-8">
            About Dr. Pratik Kishore
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-zinc-700 text-md md:text-lg">
              Dr. Pratik Kishore is a highly experienced Neurologist and Neurovascular Intervention Specialist. He is recognized for his expertise in diagnosing and treating a wide range of complex neurological and cerebrovascular disorders using both medical and minimally invasive interventional techniques.
            </p>
            <p className="text-zinc-700 text-lg">
              He combines a patient-centric approach with advanced procedural skills to deliver comprehensive neurological care — focusing on improving outcomes and quality of life for patients with acute and chronic neurological conditions.
            </p>
            <p className="text-zinc-700 text-lg mb-4">
              With extensive clinical experience in neurovascular procedures and stroke management, Dr. Kishore is dedicated to providing state-of-the-art care at <strong>Neuropoint Medical Centre</strong> and BLK-Max Super Speciality Hospital.
            </p>
            <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl mb-10 border border-amber-200 shadow-xl flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-100 mb-4 shadow-md">
                  <img src="/images/about1.jpg" alt="Dr. Pratik Kishore" className="w-full h-full object-cover" style={{ objectPosition: 'center 20%' }} />
                </div>
                <p className="text-amber-800 text-xl font-bold">Dr. Pratik Kishore</p>
                <div className="flex flex-wrap justify-center gap-1 mt-1">
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">MBBS</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">MD</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">DM</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">FNB</span>
                </div>
              </div>
              <div className="hidden md:block h-24 w-px bg-amber-200"></div>
              <div className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-amber-100 mb-4 shadow-md">
                  <img src="/images/dr_shalini.JPG" alt="Dr. Shalini" className="w-full h-full object-cover" style={{ objectPosition: 'center 15%' }} />
                </div>
                <p className="text-amber-800 text-xl font-bold">Dr. Shalini</p>
                <div className="flex flex-wrap justify-center gap-1 mt-1">
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">MBBS</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">DCP</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">DNB</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">

              <Link
                to="/about"
                className="inline-block border-2 border-amber-600 text-amber-600 px-8 py-3 rounded-full hover:bg-amber-600 hover:text-white transition-colors font-medium text-lg"
              >
                View Profile
              </Link>
              <a
                href="/about"
                className="inline-block bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors font-medium text-lg"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DrKishoreHomeSection;
