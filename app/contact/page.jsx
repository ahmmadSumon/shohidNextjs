"use client"
import React, { useState } from 'react';

const DonatePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [donationAmount, setDonationAmount] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDonationChange = (e) => {
    setDonationAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="donate-section  py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-white text-center mb-12">Help Those In Need</h2>

        {/* Two-column layout for Donation and Contact Forms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Donation Section */}
          <div className=" rounded-xl shadow-lg p-8 lg:p-16 space-y-8">
            <h3 className="text-2xl font-semibold text-white text-center mb-4">
              Your contribution can make a real difference in the lives of those affected.
            </h3>
            <p className="text-lg text-whitetext-center mb-6">
              Every donation helps provide immediate aid to the victims and their families. Join us in offering support.
            </p>

            {/* Donation Form */}
            <div className="donation-form space-y-6">
              <div className="flex ">
                <div className="w-1/2 flex justify-between gap-10">
                  <label htmlFor="donationAmount" className="block text-xl font-semibold text-white mb-2">
                    Enter your donation amount:
                  </label>
                  <input
                    type="number"
                    id="donationAmount"
                    name="donationAmount"
                    value={donationAmount}
                    onChange={handleDonationChange}
                    placeholder="Amount in USD"
                    className=" w-[500px]
                     px-2 py-1 text-lg text-gray-800 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300">
                  Donate ${donationAmount || 'Now'}
                </button>
              </div>
            </div>

            <div className="text-center mt-6 text-gray-500">
              <p className="text-sm">
                All donations go directly to the victims. For bank transfers or other methods, please contact us.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form  p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-semibold text-white mb-6 text-center">Have Questions? Reach Out to Us</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-white mb-2">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white mb-2">
                  Your Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
                  Your Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                  rows="4"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 text-white">
          <p className="text-sm">
            If you'd prefer to donate via bank transfer or another method, please contact us directly at{' '}
            <a href="mailto:support@donation.com" className="text-indigo-600 hover:underline">
              support@donation.com
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonatePage;
