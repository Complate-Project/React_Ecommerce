import React, { useEffect, useState } from 'react';

const ReviewSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Doe',
      text: 'Amazing product! Highly recommend it.',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      productImage:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop',
      rating: 5,
      product: 'Wireless Headphones',
    },
    {
      id: 2,
      name: 'Sarah Lee',
      text: 'Very good quality and fast delivery!',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      productImage:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&h=100&fit=crop',
      rating: 5,
      product: 'Smart Watch',
    },
    {
      id: 3,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop',
      rating: 4,
      product: 'Bluetooth Speaker',
    },
    {
      id: 4,
      name: 'David Smith',
      text: 'Excellent experience, will buy again.',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      productImage:
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=100&h=100&fit=crop',
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
    <div className="max-w-2xl mx-auto overflow-hidden py-10">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-900">Customer Reviews</h2>
        <p className="text-gray-600 mt-2">
          See what our customers say about our products
        </p>
      </div>

      <div className="relative">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-110 -ml-6 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:scale-110 -mr-6 z-10"
        >
          <svg
            className="w-6 h-6 text-gray-600"
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
            style={{
              transform: `translateX(-${current * 100}%)`,
            }}
          >
            {reviews.map(review => (
              <div key={review.id} className="w-full flex-shrink-0 px-3">
                <div className="bg-white shadow-lg p-5 rounded-xl">
                  <div className="flex items-center space-x-3 mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-14 h-14 rounded-full border shadow-md"
                    />
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {review.name}
                      </h3>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{review.text}</p>

                  <img
                    src={review.productImage}
                    alt={review.product}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
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
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-blue-600 scale-125' : 'bg-gray-300'
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
