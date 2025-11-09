import React from 'react';
import { Link } from 'react-router-dom';

const BkashPay = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              ← Back to Home
            </button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            bKash Payment
          </h1>
          <p className="text-xl text-gray-600">
            সহজ ৪ স্টেপে পেমেন্ট সম্পন্ন করুন
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Payment Steps */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-pink-500 text-white p-3 rounded-xl">
                <img
                  src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2024/08/24/bKash-050c0ebc9e3a0f1772fbfa9c715790c0.jpg"
                  alt="bKash"
                  className="h-8 object-contain"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  bKash পেমেন্ট
                </h2>
                <p className="text-gray-600">কোর্স ফি: ৳ ৯,৯৯৯</p>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    1
                  </div>
                  <div className="w-1 h-full bg-pink-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    bKash App ওপেন করুন
                  </h3>
                  <p className="text-gray-600">
                    আপনার bKash মোবাইল অ্যাপ্লিকেশন ওপেন করুন
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    2
                  </div>
                  <div className="w-1 h-full bg-pink-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Send Money নির্বাচন করুন
                  </h3>
                  <p className="text-gray-600">"Send Money" অপশনে ক্লিক করুন</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    3
                  </div>
                  <div className="w-1 h-full bg-pink-200 mt-2"></div>
                </div>
                <div className="flex-1 pb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    নম্বর ও টাকা দিন
                  </h3>
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <p className="font-mono text-lg font-bold text-gray-800">
                      01898879001
                    </p>
                    <p className="text-gray-600">টাকা: ৳ ৯,৯৯৯</p>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-pink-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    4
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    রেফারেন্স দিন
                  </h3>
                  <p className="text-gray-600">
                    রেফারেন্সে আপনার <strong>নাম</strong> লিখুন
                  </p>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
              <h4 className="font-semibold text-yellow-800 mb-2">
                📌 গুরুত্বপূর্ণ নোট
              </h4>
              <ul className="text-yellow-700 text-sm space-y-1">
                <li>• পেমেন্টের পর Screenshot সংরক্ষণ করুন</li>
                <li>• রেফারেন্সে অবশ্যই আপনার নাম লিখুন</li>
                <li>• কোনো সমস্যা হলে WhatsApp এ сообщение দিন</li>
              </ul>
            </div>
          </div>

          {/* Payment Confirmation */}
          <div className="space-y-6">
            {/* Payment Details Card */}
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl">
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

              <div className="mt-8 bg-white/20 rounded-xl p-4">
                <p className="text-center font-bold text-xl">
                  bKash Account : <span className="font-mono">01898879001</span>
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
                  href="https://wa.me/8801717468814?text=Hello! I just made a bKash payment for the Digital Marketing course. Here are my details:"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3">
                    <span>📱</span>
                    WhatsApp এ কনফার্ম করুন
                  </button>
                </a>

                <button className="w-full border-2 border-pink-500 text-pink-600 hover:bg-pink-50 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-3">
                  <span>📸</span>
                  Screenshot WhatsApp এ send করুন
                </button>

                <Link to="/nagod-pay">
                  <button className="w-full border-2 border-gray-300 text-gray-600 hover:bg-gray-50 py-3 rounded-xl font-medium transition-colors">
                    Nagad পেমেন্ট মাধ্যম ব্যবহার করুন
                  </button>
                </Link>
              </div>
            </div>

            {/* Support Info */}
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">
                🛠️ সাহায্য প্রয়োজন?
              </h4>
              <div className="space-y-2 text-blue-700">
                <p>
                  📞 কল করুন: <strong>01978866933</strong>
                </p>
                <p>
                  💬 WhatsApp: <strong>01978866933</strong>
                </p>
                <p>🕒 সময়: সকাল ১০টা - রাত ১০টা</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Footer */}
        <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg border border-gray-200">
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">⚡</div>
              <p className="font-semibold">দ্রুত কনফার্মেশন</p>
              <p className="text-sm text-gray-600">৫ মিনিটের মধ্যে</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🔒</div>
              <p className="font-semibold">সুরক্ষিত পেমেন্ট</p>
              <p className="text-sm text-gray-600">১০০% সেফ</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl mb-2">🎯</div>
              <p className="font-semibold">ইনস্ট্যান্ট এনরোলমেন্ট</p>
              <p className="text-sm text-gray-600">অবিলম্বে এক্সেস</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BkashPay;
