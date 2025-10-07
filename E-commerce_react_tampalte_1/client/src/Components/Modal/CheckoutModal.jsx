import React, { useState } from 'react';
import { FaTimes, FaPhone, FaMapMarkerAlt, FaTrash } from 'react-icons/fa';
import { useCart } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const CheckoutModal = ({ isOpen, onClose, cartItems }) => {
  const { removeFromCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    deliveryOption: 'inside_dhaka',
  });

  if (!isOpen) return null;

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOrder = e => {
    e.preventDefault();
    const { name, mobile, address, deliveryOption } = formData;

    if (!name.trim() || !mobile.trim() || !address.trim()) {
      alert('সব ফিল্ড পূরণ করুন।');
      return;
    }

    if (!/^\d{11}$/.test(mobile)) {
      toast.warning('মোবাইল নম্বর ১১ ডিজিট হতে হবে।');
      return;
    }

    // Calculate product total using consistent logic
    const productTotal = cartItems.reduce((total, item) => {
      const price = Number(
        item.sale_price ?? item.discountPrice ?? item.price ?? 0
      );
      const qty = Number(item.quantity ?? 1);
      return total + price * qty;
    }, 0);

    const deliveryCharge = deliveryOption === 'inside_dhaka' ? 60 : 120;
    const finalTotal = productTotal + deliveryCharge;

    const orderData = {
      customer: formData,
      cartItems,
      total: finalTotal,
      deliveryCharge,
      productTotal, // Add productTotal to orderData
    };

    toast.success(`অর্ডার সফল! মোট: ৳${finalTotal.toFixed(2)}`);
    onClose();
    navigate('/checkout-order', { state: orderData });
  };

  return (
    <div className="fixed inset-0 backdrop-blur-sm bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-md md:max-w-2xl relative max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-primary-500 text-white p-4 rounded-t-lg relative">
          <h2 className="text-xl font-semibold text-center">
            অর্ডার সম্পূর্ণ করুন
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Cart Items */}
        <div className="max-h-72 overflow-y-auto">
          {cartItems.map(item => (
            <div
              key={item.id}
              className="flex items-center p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-150"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-gray-200 rounded-md overflow-hidden">
                <img
                  src={
                    item.image
                      ? `${import.meta.env.VITE_API_URL}/product/${item.image}`
                      : '/placeholder.png'
                  }
                  alt={item.title || item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="ml-3 flex-1 min-w-0">
                <h5 className="text-sm font-medium text-gray-800 truncate">
                  {item.title || item.name}
                </h5>
                <p className="text-xs text-gray-500">
                  {item.brand?.name || item.category?.name || 'No Brand'}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-sm font-bold text-purple-700">
                    ৳{' '}
                    {Number(
                      item.sale_price ?? item.discountPrice ?? item.price ?? 0
                    )}
                  </span>
                  <span>
                    <span className="mr-5">x {item.quantity || 1}</span>৳
                    <span className="ml-0.5">
                      {(
                        (item.sale_price ??
                          item.discountPrice ??
                          item.price ??
                          0) * (item.quantity || 1)
                      ).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-2 p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors duration-150"
                aria-label="Remove item"
              >
                <FaTrash size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Checkout Form */}
        <form onSubmit={handleOrder} className="p-5">
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-800 mb-3 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-primary-500" /> ডেলিভারি তথ্য
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">
                  নাম *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="আপনার পুরো নাম"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1 flex items-center">
                  <FaPhone className="mr-1 text-primary-500" /> মোবাইল নম্বর *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                  placeholder="01XXXXXXXXX"
                  maxLength={11}
                />
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800 mb-1">
              সম্পূর্ণ ঠিকানা *
            </label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              rows="2"
              required
              placeholder="বাড়ি নং, রোড নাম, এলাকা"
            />
            <div className="mt-4 flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="inside_dhaka"
                  checked={formData.deliveryOption === 'inside_dhaka'}
                  onChange={handleInputChange}
                  className="text-primary-500 focus:ring-purple-500"
                />
                <span className="ml-2">ঢাকার ভিতরে (৳ ৬০)</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="deliveryOption"
                  value="outside_dhaka"
                  checked={formData.deliveryOption === 'outside_dhaka'}
                  onChange={handleInputChange}
                  className="text-primary-500 focus:ring-purple-500"
                />
                <span className="ml-2">ঢাকার বাইরে (৳ ১২০)</span>
              </label>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <h3 className="text-lg font-medium text-gray-800 mb-3">
              অর্ডার সারাংশ
            </h3>
            {(() => {
              // Calculate product total once and reuse
              const productTotal = cartItems.reduce((total, item) => {
                const price = Number(
                  item.sale_price ?? item.discountPrice ?? item.price ?? 0
                );
                const qty = Number(item.quantity ?? 1);
                return total + price * qty;
              }, 0);

              const deliveryCharge =
                formData.deliveryOption === 'inside_dhaka' ? 60 : 120;
              const finalTotal = productTotal + deliveryCharge;

              return (
                <>
                  <div className="flex justify-between mb-2">
                    <span>পণ্যের মূল্য:</span>
                    <span>৳ {productTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>ডেলিভারি চার্জ:</span>
                    <span>৳ {deliveryCharge}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg border-t pt-2">
                    <span>মোট :</span>
                    <span>৳ {finalTotal.toFixed(2)}</span>
                  </div>
                </>
              );
            })()}
          </div>

          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2.5 rounded-md font-medium transition-colors"
            >
              বাতিল
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary-500 hover:bg-purple-700 text-white py-2.5 rounded-md font-medium transition-colors"
            >
              পেমেন্ট
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
