import React from 'react';

const Bottom = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300 transition">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-blue-300 transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
