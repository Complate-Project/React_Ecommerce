import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCatd/ProductCard'; // ✅ Ensure correct path
import Spinner from '../../Shared/Spinner/Spinner';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);

  // 🔹 Fetch products from API
  const fetchProducts = async page => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/products?page=${page}`
      );

      // Safely handle response
      setProducts(response.data?.data || []);
      setCurrentPage(response.data?.current_page || 1);
      setLastPage(response.data?.last_page || 1);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Fetch products whenever currentPage changes
  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // 🔹 Pagination handlers
  const handleNext = () => {
    if (currentPage < lastPage) {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-text-2-500">
          Featured Products
        </h2>
        <p className="text-text-3-500 mb-10">Discover our most popular items</p>

        {/* Conditional product Rendering  */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-500">
                No products found.
              </p>
            )}
          </div>
        )}

        {/* Pagination Controls */}
        <div className="flex items-center justify-end gap-3 mt-8">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full shadow-sm hover:shadow-md disabled:opacity-40 disabled:shadow-none transition-all"
          >
            <svg
              className="w-4 h-4"
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
            <span>Prev</span>
          </button>

          <div className="px-4 py-2 bg-sec-500 text-white rounded-full text-sm font-medium">
            {currentPage} / {lastPage}
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === lastPage}
            className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-full shadow-sm hover:shadow-md disabled:opacity-40 disabled:shadow-none transition-all"
          >
            <span>Next</span>
            <svg
              className="w-4 h-4"
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
        </div>
      </div>
    </div>
  );
};

export default Products;
