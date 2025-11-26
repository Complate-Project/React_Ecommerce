import React from 'react';
import Image1 from '../assets/product/1.png';

const Heading = ({ scrollToProducts }) => {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Video Section */}
      <div className="flex justify-center mb-16">
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl shadow-2xl">
          {/* Keep ratio clean */}
          <div className="relative" style={{ paddingTop: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={import.meta.env.VITE_VIDEO_URL}
              title="Technology Trends"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Product 1 Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-200">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          কি কি <span className="text-purple-600">কাজ করবে </span>?
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Image1}
              alt="Electronic Products"
              className="rounded-xl h-[300px] w-[250px]  max-w-md "
            />
          </div>

          {/* Right - Product Details */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Fast & Free Shipping
                  </h3>
                  <p className="text-gray-600">
                    Get your orders delivered within 2-3 business days
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    2-Year Warranty
                  </h3>
                  <p className="text-gray-600">
                    Extended protection on all electronic products
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Easy Returns
                  </h3>
                  <p className="text-gray-600">
                    30-day return policy, no questions asked
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Expert Support
                  </h3>
                  <p className="text-gray-600">
                    24/7 customer service and technical support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={scrollToProducts}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mt-4"
          >
            দ্রুত অর্ডার করুন
          </button>
        </div>
      </div>
      {/* Product 2 Features Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-purple-200 mt-5">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          কেন আমাদের <span className="text-purple-600">কাছ থেকে নিবেন</span>?
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* left - Product Details */}
          <div className="lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    কাজ না করলে টাকা ফেরত !
                  </h3>
                  {/* <p className="text-gray-600">
                    Get your orders delivered within 2-3 business days
                  </p> */}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    আন্তর্জাতিক মানের পণ্য !
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    লক্ষ মানুষের উপকারের রিভিউ !
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-purple-600 font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    দ্রুত ও ক্যাশ অন ডেলিভারী !
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* right - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={Image1}
              alt="Electronic Products"
              className="rounded-xl h-[300px] w-[250px]  max-w-md "
            />
          </div>
        </div>
        <div className="text-center">
          <button
            onClick={scrollToProducts}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mt-4"
          >
            দ্রুত অর্ডার করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
