import React from 'react';
import { Link } from 'react-router-dom';

const DrKishoreHomeSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-fixed py-20"
      style={{
        backgroundImage: "url('/images/homeabout.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h2 className="text-lg md:text-2xl font-bold text-center text-yellow-600 mb-8">
            About Dr. Pratik Kishore
          </h2>
          <div className="space-y-6 text-center">
            <p className="text-amber-500 text-md md:text-lg">
              Dr. Pratik Kishore is a highly experienced Neurologist and Neurovascular Intervention Specialist practicing at BLK-Max Super Speciality Hospital, New Delhi. He is recognized for his expertise in diagnosing and treating a wide range of complex neurological and cerebrovascular disorders using both medical and minimally invasive interventional techniques.
            </p>
            <p className="text-amber-500 text-lg">
              He combines a patient-centric approach with advanced procedural skills to deliver comprehensive neurological care — focusing on improving outcomes and quality of life for patients with acute and chronic neurological conditions.
            </p>
            <p className="text-amber-500 text-lg mb-4">
              With extensive clinical experience in neurovascular procedures and stroke management, Dr. Kishore has worked in advanced diagnostic and interventional neurology settings. He is dedicated to providing state-of-the-art care for stroke, aneurysms, and other neurological disorders at <strong>Neuropoint Medical Centre</strong> and BLK-Max Super Speciality Hospital.
            </p>
            <div className="bg-amber-50 p-4 rounded-lg mb-8 border border-amber-100 flex items-center justify-center space-x-4">
              <div className="text-left">
                <p className="text-amber-800 font-bold">Dr. Shalini</p>
                <p className="text-amber-600 text-sm">MBBS, DCP, DNB (Pathology)</p>
              </div>
              <div className="h-10 w-px bg-amber-200"></div>
              <p className="text-amber-700 text-sm italic">Diagnostic Excellence in Pathology</p>
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
