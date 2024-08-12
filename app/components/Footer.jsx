import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="container mx-auto text-center">
        <div className="mb-6">
          <h4 className="text-xl font-semibold mb-4 text-red-500">Stay Connected</h4>
          <div className="flex justify-center space-x-6">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        <div className="text-sm mb-6">
          <p>© 2024 Martyrs' Legacy. All rights reserved.</p>
          <p>Designed with love and respect for the fallen heroes.</p>
        </div>
        <div className="text-xs">
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
