import { FaArrowLeft, FaLock, FaPlus, FaMinus } from 'react-icons/fa';

function CheckoutModal({
  book,
  quantity,
  setQuantity,
  savings,
  totalPrice,
  formData,
  handleInputChange,
  handleSubmitOrder,
  setShowCheckout,
}) {
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="max-w-7xl mx-auto md:px-2 md:py-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
          {/* অর্ডার বিস্তারিত */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              অর্ডার বিস্তারিত
            </h3>

            {/* পরিমাণ নিয়ন্ত্রণ */}
            <div className="bg-white rounded-lg p-4 mb-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between">
                <span className="text-gray-700 font-semibold">
                  {book?.title}
                  <p className="text-gray-600 text-sm">লেখক: {book.author}</p>
                </span>
                <div className="flex items-center space-x-3">
                  <button
                    type="button"
                    onClick={decreaseQuantity}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                  >
                    <FaMinus className="text-gray-600 text-xs" />
                  </button>
                  <span className="w-12 text-center font-bold text-lg text-gray-800">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={increaseQuantity}
                    className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition-colors duration-200"
                  >
                    <FaPlus className="text-gray-600 text-xs" />
                  </button>
                </div>
                <div>
                  <p className="text-indigo-600 font-semibold text-lg">
                    {book.price} Tk
                  </p>
                </div>
              </div>
            </div>

            {/* দাম সংক্ষেপ */}
            <div className="space-y-3 border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-gray-600">একক মূল্য</span>
                <span className="font-semibold"> {book.price} Tk</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">পরিমাণ</span>
                <span className="font-semibold">{quantity}</span>
              </div>

              {/* {savings > 0 && (
                <div className="flex justify-between">
                  <span className="text-gray-600">আপনি সাশ্রয় করছেন</span>
                  <span className="font-semibold text-green-600">
                    {savings}
                    Tk{' '}
                  </span>
                </div>
              )} */}
              <div className="flex justify-between text-lg font-bold border-t border-gray-200 pt-3">
                <span>সর্বমোট</span>
                <span className="text-indigo-600"> {totalPrice} Tk</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-700 text-center">
                📚 ডেলিভারি চার্জ ফ্রি !
              </p>
            </div>
          </div>

          {/* শিপিং ও পেমেন্ট */}
          <div>
            <form onSubmit={handleSubmitOrder} className="space-y-6">
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ফোন নাম্বার
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="আপনার ফোন নাম্বার লিখুন"
                />
              </div>

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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="সম্পূর্ণ শিপিং ঠিকানা লিখুন"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-4 rounded-lg font-semibold text-2xl hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
              >
                অর্ডার সম্পূর্ণ করুন - {totalPrice} Tk
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;
