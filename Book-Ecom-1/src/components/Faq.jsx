import React, { useState } from 'react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is the warranty period for electronic products?',
      answer:
        'All our electronic items come with a standard 1-year warranty. Some premium brands may offer extended warranty options.',
      icon: '🛡️',
    },
    {
      question: 'Do you offer home delivery for electronic devices?',
      answer:
        'Yes! We provide fast and secure home delivery across the country. Delivery time may vary depending on your location.',
      icon: '🚚',
    },
    {
      question: 'Can I return a damaged or defective product?',
      answer:
        'Absolutely. If your product is damaged or not functioning properly upon arrival, you can request a replacement or full refund within 7 days.',
      icon: '🔄',
    },
    {
      question: 'Are your electronic products original and brand new?',
      answer:
        'Yes, all our electronics are 100% genuine and brand new. We source directly from authorized distributors and brands.',
      icon: '✅',
    },
    {
      question: 'Do you provide installation support for large appliances?',
      answer:
        'Yes, we offer free installation support for large electronic appliances like TVs, refrigerators, and washing machines.',
      icon: '🔧',
    },
  ];

  const toggleFaq = index => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 min-h-screen">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
          <span className="text-2xl">⚡</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about our electronics products and
          services
        </p>
      </div>

      {/* FAQ Items */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`bg-white rounded-xl shadow-lg transition-all duration-500 ease-in-out transform hover:scale-[1.02] ${
              openIndex === index ? ' shadow-xl' : 'hover:shadow-xl'
            }`}
          >
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex items-center justify-between p-6 text-left group"
            >
              <div className="flex items-center space-x-4">
                <span className="text-2xl">{faq.icon}</span>
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {faq.question}
                </span>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div
                  className={`w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center transition-all duration-500 transform ${
                    openIndex === index
                      ? 'rotate-180 bg-gradient-to-r from-purple-500 to-blue-500'
                      : ''
                  }`}
                >
                  <svg
                    className={`w-4 h-4 text-white transition-transform duration-500 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? 'max-h-48 opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-4 text-gray-600 leading-relaxed bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
