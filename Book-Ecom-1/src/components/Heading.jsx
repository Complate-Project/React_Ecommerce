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
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 transform translate-x-0'
                  : 'opacity-0 transform translate-x-full'
              }`}
            >
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="max-w-2xl ml-8 md:ml-16 text-white">
                  {/* Badge */}
                  <div className="inline-block bg-[#6b21a8] text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-lg">
                    {slide.badge}
                  </div>

                  {/* Title */}
                  <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    {slide.title}
                  </h2>

                  {/* Description */}
                  <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
                    {slide.description}
                  </p>

                  {/* CTA Button */}
                  <button
                    onClick={onBuyNow}
                    className="bg-[#6b21a8] text-white text-lg font-semibold px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-purple-500/25"
                  >
                    🛒 Shop Now - Latest Technology
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-4 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 border-2 border-white ${
                  index === currentSlide
                    ? 'bg-purple-500 scale-125 border-purple-500'
                    : 'bg-transparent hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
            <div
              className="h-full bg-purple-500 transition-all duration-1000 ease-linear"
              style={{
                width: `${((currentSlide + 1) / slides.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200 text-center">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Same day shipping available</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200 text-center">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-bold text-gray-900 mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">SSL encrypted transactions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border border-purple-200 text-center">
            <div className="text-3xl mb-3">🔄</div>
            <h3 className="font-bold text-gray-900 mb-2">Easy Returns</h3>
            <p className="text-gray-600 text-sm">30-day return policy</p>
          </div>
        </div>
      </div>

      {/* Product Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-3xl p-8 shadow-lg border border-purple-200">
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
