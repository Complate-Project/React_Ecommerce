import React from 'react';
import { Link } from 'react-router-dom';

const NagadPay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              ← Back to Home
            </button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nagad Payment
          </h1>
          <p className="text-xl text-gray-600">
            সহজ ৪ স্টেপে পেমেন্ট সম্পন্ন করুন
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Steps */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-xl">
                <img
                  src="https://freepnglogo.com/images/all_img/1725618513nagad-logo.png"
                  alt="Nagad"
                  className="h-8 w-16 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Nagad পেমেন্ট
                </h2>
                <p className="text-gray-600">কোর্স ফি: ৳ ৯,৯৯৯</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="w-1 h-full bg-green-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Nagad App ওপেন করুন
                  </h3>
                  <p className="text-gray-600">
                    আপনার Nagad মোবাইল অ্যাপ্লিকেশন ওপেন করুন
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="w-1 h-full bg-green-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Payment নির্বাচন করুন
                  </h3>
                  <p className="text-gray-600">
                    " Merchant Pay" অপশনে ক্লিক করুন
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="w-1 h-full bg-green-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    নম্বর ও টাকা দিন
                  </h3>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="font-mono text-lg font-bold text-gray-800">
                      01898879001
                    </p>
                    <p className="text-gray-600 mt-1">টাকা: ৳ ৯,৯৯৯</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    রেফারেন্স দিন
                  </h3>
                  <p className="text-gray-600">
                    রেফারেন্সে <strong>"DM Course"</strong> লিখুন
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mt-2">
                    <p className="text-sm text-yellow-800 font-medium">
                      💡 রেফারেন্সে "DM Course" লিখতে ভুলবেন না!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-4">
              <h4 className="font-semibold text-amber-800 mb-2">
                📌 গুরুত্বপূর্ণ নোট
              </h4>
              <ul className="text-amber-700 text-sm space-y-1">
                <li>• পেমেন্টের পর ট্রানজেকশন Screenshot সংরক্ষণ করুন</li>
                <li>• রেফারেন্সে অবশ্যই "DM Course" লিখুন</li>
                <li>• কোনো সমস্যা হলে সরাসরি কল করুন</li>
                <li>• পেমেন্ট কনফার্মেশন ৫-১০ মিনিটের মধ্যে পেয়ে যাবেন</li>
              </ul>
            </div>
          </div>

          {/* Payment Confirmation */}
          <div className="space-y-6">
            {/* Payment Details Card */}
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold mb-6">পেমেন্ট ডিটেইলস</h3>

              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>কোর্স ফি:</span>
                  <span className="font-bold">৳ ৯,৯৯৯</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                  <span>পরিষেবা চার্জ:</span>
                  <span className="font-bold">৳ ০</span>
                </div>
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>মোট টাকা:</span>
                  <span>৳ ৯,৯৯৯</span>
                </div>
              </div>

              <div className="mt-8 bg-white/20 rounded-xl p-4 text-center">
                <p className="font-bold mb-2 text-xl">
                  Nagad Account Number : 01898879001
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                পেমেন্ট কনফার্মেশন
              </h4>

              <div className="space-y-4">
                <a
                  href="https://wa.me/8801717468814?text=Hello! I just made a Nagad payment for the Digital Marketing course. Transaction details:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                    <span>💬</span>
                    WhatsApp এ কনফার্ম করুন
                  </button>
                </a>

                <button className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-3">
                  <span>📸</span>
                  Screenshot WhatsApp এ send করুন
                </button>

                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <p className="text-blue-800 text-sm text-center">
                    📞 সরাসরি কথা বলুন: <strong>01978866933</strong>
                  </p>
                </div>

                <Link to="/bkash-pay">
                  <button className="w-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-medium transition-colors">
                    bKash এ পেমেন্ট করুন
                  </button>
                </Link>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">
                🛠️ সাহায্য প্রয়োজন?
              </h4>
              <div className="space-y-3 text-blue-700">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>
                    কল করুন: <strong>01978866933</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>💬</span>
                  <span>
                    WhatsApp: <strong>01978866933</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🕒</span>
                  <span>সময়:সকাল ১০টা - রাত ১০টা</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Footer */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-semibold text-green-800">দ্রুত কনফার্মেশন</p>
              <p className="text-sm text-green-600">৫-১০ মিনিটের মধ্যে</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🔒</div>
              <p className="font-semibold text-green-800">সুরক্ষিত পেমেন্ট</p>
              <p className="text-sm text-green-600">Nagad সিকিউরিটি</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="text-2xl mb-2">🎯</div>
              <p className="font-semibold text-green-800">
                ইনস্ট্যান্ট এনরোলমেন্ট
              </p>
              <p className="text-sm text-green-600">অবিলম্বে এক্সেস</p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-6 text-center">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-4 inline-block">
            <p className="text-red-700 font-semibold">
              🚨 জরুরি সমস্যা? সরাসরি কল করুন:{' '}
              <span className="text-lg">01978866933</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NagadPay;
