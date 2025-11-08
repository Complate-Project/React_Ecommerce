import React, { useState, useEffect } from 'react';

const Heading = ({ onBuyNow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image:
        'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Latest Gaming Laptops',
      description:
        'Powerful Processors & High-Performance GPUs for Ultimate Gaming Experience',
      badge: 'GAMING',
    },
    {
      id: 2,
      image:
        'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Premium Smartphones',
      description:
        'Cutting-Edge Technology with Stunning Displays and Professional Cameras',
      badge: 'SMARTPHONES',
    },
    {
      id: 3,
      image:
        'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2084&q=80',
      title: 'Professional Audio Gear',
      description:
        'Crystal Clear Sound Quality for Music Lovers and Content Creators',
      badge: 'AUDIO',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = index => {
    setCurrentSlide(index);
  };

  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Slider Section */}
      <div className="relative mb-16">
        <div className="relative h-[40vh] min-h-[500px] overflow-hidden shadow-2xl">
          {/* Slides */}
          <iframe
            width="1296"
            height="729"
            src="https://www.youtube.com/embed/KvN3JXICzdM"
            title="Top 20 New Technology Trends That Will Define the Future"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-md p-8 shadow-lg border border-purple-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Why Shop With Electronic Zone?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-white rounded-2xl p-4 shadow-md mb-3 inline-block">
              <span className="text-2xl">💻</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Latest Tech</h4>
            <p className="text-gray-600 text-sm">Always up-to-date products</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-4 shadow-md mb-3 inline-block">
              <span className="text-2xl">🏆</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Premium Brands</h4>
            <p className="text-gray-600 text-sm">Top quality manufacturers</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-4 shadow-md mb-3 inline-block">
              <span className="text-2xl">🔧</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Expert Support</h4>
            <p className="text-gray-600 text-sm">Technical assistance 24/7</p>
          </div>

          <div className="text-center">
            <div className="bg-white rounded-2xl p-4 shadow-md mb-3 inline-block">
              <span className="text-2xl">🚀</span>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Fast Setup</h4>
            <p className="text-gray-600 text-sm">Ready to use out of box</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
