import React from 'react';
import {
  FaShoppingCart,
  FaStar,
  FaFire,
  FaBolt,
  FaShippingFast,
} from 'react-icons/fa';

const BookDetails = ({ books, onBuyNow }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Featured Electronics
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our premium collection of cutting-edge electronics and gaming
          gear
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-md shadow-2xl overflow-hidden hover:shadow-2xl  border border-gray-100"
          >
            {/* Product Image with Badge */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />

              {/* Hot Badge */}
              {product.combo && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg">
                  <FaFire className="text-white" />
                  <span>HOT DEAL</span>
                </div>
              )}

              {/* Save Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg">
                Save ${product.originalPrice - product.price}
              </div>

              {/* Brand Overlay */}
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">
                {product.brand}
              </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 h-14">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
                  {product.description}
                </p>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }
                        size={16}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center space-x-1 text-orange-500">
                  <FaBolt size={14} />
                  <span className="text-sm font-semibold">BESTSELLER</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {product.features.slice(0, 2).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-xs text-gray-600 truncate">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-gray-800">
                    ${product.price}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                </div>
                <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {product.details.warranty} Warranty
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onBuyNow(product)}
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-orange-200 flex items-center justify-center space-x-3 group"
              >
                <FaShoppingCart className="group-hover:scale-110 transition-transform duration-300" />
                <span>ADD TO CART</span>
                <div className="flex items-center space-x-1 text-amber-200">
                  <FaShippingFast size={12} />
                  <span className="text-xs">FREE SHIPPING</span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-200">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
              <div className="text-2xl">🚚</div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Free Shipping</h3>
            <p className="text-gray-600 text-sm">On orders over $200</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
              <div className="text-2xl">🔒</div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Secure Payment</h3>
            <p className="text-gray-600 text-sm">256-bit SSL encryption</p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
              <div className="text-2xl">⚡</div>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">Same day shipping available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
