// CheckoutModal.jsx
import { useState } from 'react';
import { FaArrowLeft, FaLock } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import SuccessModal from './Modal/SuccessModal';

function CheckoutModal({
  book,
  quantity,
  setQuantity,
  savings,
  totalPrice,
  formData,
  handleInputChange,
  setShowCheckout,
}) {
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔹 Function to generate unique order ID
  const generateOrderId = () => {
    const datePart = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const randomPart = Math.random().toString(36).substring(2, 7).toUpperCase();
    return `ORD-${datePart}-${randomPart}`;
  };

  // 🔹 Handle form submit
  const handleSubmitOrder = async e => {
    e.preventDefault();

    const orderId = generateOrderId();
    const finalQuantity = book?.combo ? 10 : quantity;

    const order = {
      orderId, // unique order ID
      product: {
        id: book.id,
        title: book.title,
        author: book.author,
        price: book.price,
        image: book.image,
      },
      combo: book.combo,
      quantity: finalQuantity, // from radio button
      savings,
      totalPrice,
      customer: formData,
      status: 'Pending',
    };

    try {
      const response = await axios.post('http://localhost:5000/orders', order);
      console.log('✅ Order Submitted:', response.data);

      setShowSuccess(true);
    } catch (error) {
      console.error('❌ API Error:', error);
      alert('Failed to submit order. Please try again.');
    }
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    setShowCheckout(false);
  };

  return (
    <div className="max-w-7xl mx-auto md:px-2 mt-10  relative">
      <div className="bg-white  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* অর্ডার সারাংশ */}
          <div className="bg-gray-50 rounded-xl px-2 md:px-6">
            <div className="flex justify-between pb-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  প্রোডাক্টের বিস্তারিত
                </h3>
              </div>
            </div>

            {/* পরিমাণ নির্ধারণ - Compact Mobile device */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
              <div className="flex flex-col xs:flex-row xs:items-center xs:justify-between gap-3">
                {/* বইয়ের নাম */}
                <div className="flex-1">
                  <span className="text-gray-700 font-semibold text-sm xs:text-base line-clamp-2">
                    {book.title}
                  </span>
                </div>

                <div className="flex items-center justify-between xs:justify-end gap-4 w-full xs:w-auto">
                  {/* পরিমাণ কন্ট্রোল */}
                  <div className="flex items-center space-x-2 xs:space-x-3">
                    <button
                      type="button"
                      onClick={() =>
                        setQuantity(prev => (prev > 1 ? prev - 1 : 1))
                      }
                      className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                    >
                      <FaMinus className="text-gray-600 text-xs" />
                    </button>

                    <span className="w-8 xs:w-12 text-center font-bold text-base xs:text-lg text-gray-800">
                      {quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => setQuantity(prev => prev + 1)}
                      className="w-7 h-7 xs:w-8 xs:h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                    >
                      <FaPlus className="text-gray-600 text-xs" />
                    </button>
                  </div>

                  {/* মূল্য */}
                  <div>
                    <p className="text-indigo-600 font-semibold text-sm xs:text-base whitespace-nowrap">
                      {book.price} টাকা
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* মূল্য সংক্ষিপ্তসার */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">একক মূল্য</span>
                <span className="font-semibold">{book.price} টাকা</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">পরিমাণ</span>
                <span className="font-semibold">{quantity} টি</span>
              </div>

              {/* {savings > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">আপনি সাশ্রয় করেছেন</span>
                  <span className="font-semibold text-orange-500">
                    {savings} টাকা
                  </span>
                </div>
              )} */}

              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                <span>মোট মূল্য</span>
                <span className="text-indigo-600">{totalPrice} টাকা</span>
              </div>
              <div className="flex items-center justify-center gap-2  bg-gradient-to-r from-red-500 to-orange-400  text-white py-2 px-4 rounded-xl shadow-md mt-12">
                {/* Truck Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 animate-bounce"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17a2 2 0 100 4 2 2 0 000-4zm6 0a2 2 0 100 4 2 2 0 000-4zM3 3h12v12H3V3zm12 0l6 6v6h-6V3z"
                  />
                </svg>

                {/* Text */}
                <span className="font-bold text-sm tracking-wide">
                  ডেলিভারি চার্জ ফ্রি
                </span>
              </div>
            </div>
          </div>

          {/* চেকআউট ফর্ম */}
          <div className="px-2 px-0">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              ডেলিভারি তথ্য দিন
            </h3>
            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* নাম */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  পূর্ণ নাম
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="আপনার পূর্ণ নাম লিখুন"
                />
              </div>

              {/* ফোন নম্বর */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  মোবাইল নম্বর
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="আপনার মোবাইল নম্বর লিখুন"
                />
              </div>

              {/* ঠিকানা */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ডেলিভারি ঠিকানা
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-4 py-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="আপনার সম্পূর্ণ ডেলিভারি ঠিকানা লিখুন"
                />
              </div>

              {/* সাবমিট বোতাম */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#054923] transition duration-300 shadow-md hover:shadow-lg"
              >
                অর্ডার সম্পন্ন করুন - {totalPrice} টাকা
              </button>

              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <FaLock />
                <span className="text-sm">
                  আপনার পেমেন্ট সম্পূর্ণ নিরাপদ ও এনক্রিপ্টেড
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <SuccessModal
          message={`✅ Order placed successfully! Order ID: ${generateOrderId()} for ${quantity} Kg of "${
            book.title
          }".`}
          onClose={handleSuccessClose}
        />
      )}
    </div>
  );
}

export default CheckoutModal;
