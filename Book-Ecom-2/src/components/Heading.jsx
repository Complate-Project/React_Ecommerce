import React from 'react';

const Heading = () => {
  return (
    <div className="max-w-7xl mx-auto pb-12">
      {/* Video Section */}
      <div className="relative mb-16">
        <div className="relative h-[40vh] min-h-[500px] overflow-hidden shadow-2xl">
          {/* Video */}
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
