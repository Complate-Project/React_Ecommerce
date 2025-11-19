import React, { useEffect, useState } from 'react';
import Review1 from '../assets/screenshot/1.jpg';
import Review2 from '../assets/screenshot/2.jpg';
import Review3 from '../assets/screenshot/3.jpg';
import Review4 from '../assets/screenshot/4.jpg';
import Review5 from '../assets/screenshot/5.jpg';
import Review6 from '../assets/screenshot/6.jpg';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing product! Highly recommend it.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      productImage: Review1,
      rating: 5,
      product: 'Wireless Headphones',
    },
    {
      id: 2,
      name: 'Sarah Lee',
      text: 'Very good quality and fast delivery!',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      productImage: Review2,
      rating: 5,
      product: 'Smart Watch',
    },
    {
      id: 3,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage: Review3,
      rating: 4,
      product: 'Bluetooth Speaker',
    },
    {
      id: 4,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage: Review4,
      rating: 4,
      product: 'Bluetooth Speaker',
    },
    {
      id: 5,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage: Review5,
      rating: 4,
      product: 'Bluetooth Speaker',
    },
    {
      id: 6,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage: Review6,
      rating: 4,
      product: 'Bluetooth Speaker',
    },
  ];

  const [current, setCurrent] = useState(0);
  const visibleCards = 1; // ONE-BY-ONE SLIDE

  // ⭐ Star rating
  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map(star => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent(prev => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <div className="max-w-7xl mx-auto overflow-hidden py-10 px-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">
          সম্মানিত কাস্টমার রিভিও
        </h2>
      </div>

      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 z-10"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 md:p-3 shadow-lg hover:scale-110 z-10"
        >
          <svg
            className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
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

        {/* Slider */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {reviews.map(review => (
              <div
                key={review.id}
                className="w-full flex-shrink-0 px-2 md:px-3"
              >
                <div className="bg-white shadow-lg p-3 md:p-5 rounded-xl">
                  {/* Responsive Image */}
                  <img
                    src={review.productImage}
                    alt={review.product}
                    className="w-full 
                  h-48 sm:h-64 md:h-80 lg:h-[500px] 
                  object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition-all 
            ${index === current ? 'bg-blue-600 scale-125' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
