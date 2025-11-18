import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaShippingFast,
  FaLock,
  FaHeadset,
  FaRecycle,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4 col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 p-2 rounded-lg">
                <div className="text-white font-bold text-xl">EZ</div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Electronic Zone
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              Your premier destination for cutting-edge electronics, gaming
              gear, and tech innovations. We bring you the latest technology
              with unbeatable prices and exceptional service.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaTwitter className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                href="#"
                className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 ">
            <h3 className="text-xl font-bold text-white mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <FaMapMarkerAlt className="text-white text-sm" />
                </div>
                <span className="text-gray-300">
                  123 Tech Street, Digital City
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <FaPhone className="text-white text-sm" />
                </div>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-orange-500 p-2 rounded-full">
                  <FaEnvelope className="text-white text-sm" />
                </div>
                <span className="text-gray-300">
                  support@electroniczone.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024{' '}
              <span className="text-orange-400 font-semibold">
                Electronic Zone
              </span>
              . All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-all duration-300 hover:underline"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
