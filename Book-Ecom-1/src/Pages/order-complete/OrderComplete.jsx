import React, { useEffect, useState } from 'react';
import {
  FaCheckCircle,
  FaPrint,
  FaDownload,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaBook,
  FaCalendarAlt,
  FaCreditCard,
  FaShoppingCart,
  FaShippingFast,
  FaEnvelope,
  FaTag,
} from 'react-icons/fa';

const OrderComplete = () => {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // Mock single order data
    const singleOrder = {
      orderId: 'ORD-2025-001',
      orderDate: new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      orderTime: new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      }),
      customer: {
        name: 'Md Meherab',
        phone: '+880 1310 520842',
        address: 'Rajshahi, Bangladesh',
        email: 'meherab@example.com',
      },
      book: {
        title: 'Atomic Habits',
        author: 'James Clear',
        price: 380,
        quantity: 1,
        isbn: '978-1847941831',
        genre: 'Self-Help, Personal Development',
      },
      payment: {
        method: 'Cash on Delivery',
        total: 380,
        subtotal: 350,
        shipping: 30,
        discount: 0,
      },
      status: 'Confirmed',
      estimatedDelivery: 'December 28, 2025',
    };

    setOrder(singleOrder);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    alert('PDF download feature will be added here');
  };

  if (!order) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin h-16 w-16 border-4 border-indigo-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading order details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 py-10 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Single Main Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8 text-white">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 bg-white/20 rounded-full flex items-center justify-center">
                  <FaCheckCircle className="text-3xl" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    Order Confirmed!
                  </h1>
                  <p className="text-indigo-100 mt-1">
                    Thank you for your purchase. Your order is being processed.
                  </p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <p className="text-sm text-indigo-200">Order ID</p>
                <p className="text-xl font-bold">{order.orderId}</p>
                <p className="text-sm text-indigo-200 mt-1 flex items-center justify-center gap-1">
                  <FaCalendarAlt /> {order.orderDate}
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Book & Customer Info */}
              <div className="lg:col-span-2 space-y-6">
                {/* Book Information */}
                <div className="border border-gray-100 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <FaBook className="text-indigo-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Book Details
                    </h2>
                  </div>

                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4">
                      <div className="h-48 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center border border-indigo-100">
                        <div className="text-center">
                          <FaBook className="text-5xl text-indigo-300 mx-auto mb-2" />
                          <p className="text-xs text-gray-500">Atomic Habits</p>
                        </div>
                      </div>
                    </div>

                    <div className="md:w-3/4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {order.book.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        by {order.book.author}
                      </p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div>
                          <p className="text-sm text-gray-500">Price</p>
                          <p className="text-lg font-bold text-gray-900">
                            {order.book.price}৳
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Quantity</p>
                          <p className="text-lg font-bold text-gray-900">
                            {order.book.quantity}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ISBN</p>
                          <p className="font-medium text-gray-900">
                            {order.book.isbn}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Genre</p>
                          <p className="font-medium text-gray-900">
                            {order.book.genre}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer & Delivery Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Customer Info */}
                  <div className="border border-gray-100 rounded-xl p-6 bg-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FaUser className="text-purple-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Customer Info
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
                          <FaUser className="text-blue-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Name</p>
                          <p className="font-medium">{order.customer.name}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <FaPhone className="text-green-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Phone</p>
                          <p className="font-medium">{order.customer.phone}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-red-50 rounded-lg flex items-center justify-center">
                          <FaEnvelope className="text-red-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Email</p>
                          <p className="font-medium">{order.customer.email}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Delivery Info */}
                  <div className="border border-gray-100 rounded-xl p-6 bg-white">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-10 w-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <FaShippingFast className="text-red-600" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">
                        Delivery Info
                      </h2>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-yellow-50 rounded-lg flex items-center justify-center">
                          <FaMapMarkerAlt className="text-yellow-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Address</p>
                          <p className="font-medium">
                            {order.customer.address}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-indigo-50 rounded-lg flex items-center justify-center">
                          <FaCalendarAlt className="text-indigo-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">
                            Estimated Delivery
                          </p>
                          <p className="font-medium">
                            {order.estimatedDelivery}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-green-50 rounded-lg flex items-center justify-center">
                          <FaCheckCircle className="text-green-600 text-sm" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Status</p>
                          <p className="font-medium text-green-600">
                            {order.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary & Actions */}
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="border border-gray-100 rounded-xl p-6 bg-gradient-to-b from-white to-gray-50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FaShoppingCart className="text-amber-600" />
                    </div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Order Summary
                    </h2>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <p className="text-gray-600">Subtotal</p>
                      <p className="font-medium">{order.payment.subtotal}৳</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-gray-600 flex items-center gap-1">
                        <FaTag className="text-xs" /> Shipping
                      </p>
                      <p className="font-medium">{order.payment.shipping}৳</p>
                    </div>

                    <div className="flex justify-between">
                      <p className="text-gray-600 flex items-center gap-1">
                        <FaTag className="text-xs" /> Discount
                      </p>
                      <p className="font-medium text-green-600">
                        -{order.payment.discount}৳
                      </p>
                    </div>

                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-gray-900">
                          Total Amount
                        </p>
                        <p className="text-2xl font-bold text-indigo-700">
                          {order.payment.total}৳
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-blue-50 rounded-lg flex items-center justify-center">
                        <FaCreditCard className="text-blue-600 text-sm" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Payment Method</p>
                        <p className="font-medium">{order.payment.method}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border border-gray-100 rounded-xl p-6 bg-white">
                  <h3 className="font-bold text-gray-900 mb-4">Actions</h3>

                  <div className="space-y-3">
                    <button
                      onClick={handlePrint}
                      className="w-full flex items-center justify-center gap-3 border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium rounded-xl py-3 transition duration-200"
                    >
                      <FaPrint />
                      Print Invoice
                    </button>

                    <button
                      onClick={handleDownload}
                      className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 font-medium rounded-xl py-3 transition duration-200 shadow-md"
                    >
                      <FaDownload />
                      Download PDF
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
