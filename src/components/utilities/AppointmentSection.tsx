import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';

const AppointmentSection = () => {
  const [state, handleSubmit] = useForm("mqaawkpe");
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    text: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  if (state.succeeded) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-blue-600 text-center text-lg font-semibold">
          Thank you for your appointment request! We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <section id="Appointment" className="w-full bg-gray-50 py-12 sm:py-16 bg-teal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
          {/* Left Content Section */}
          <div className="flex flex-col justify-center lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-600 mb-6 text-center lg:text-left">
              CONTACT US FOR<br />
              A CONSULTATION OR<br />
              SECOND OPINION
            </h2>
            <div className="space-y-4 text-white">
              <p className="text-center lg:text-left">We will do our best to contact you back within 24-48 hours</p>
              <p className="text-center lg:text-left">Please be ready to provide medical records and imaging studies</p>
              <p className="text-center lg:text-left">Your case will be carefully evaluated and will provide our recommendation and eligibility for surgical intervention</p>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                  </div>

                  <div>
                    <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="text" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="text"
                    name="text"
                    rows={4}
                    value={formData.text}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div className="flex justify-center lg:justify-end">
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="px-8 py-3 bg-amber-600 text-white font-medium rounded-full hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    {state.submitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;