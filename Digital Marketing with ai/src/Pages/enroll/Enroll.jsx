import React, { useState } from 'react';
import {
  CheckCircle,
  Shield,
  Clock,
  Award,
  ArrowRight,
  User,
  Mail,
  Phone,
  BookOpen,
  Sparkles,
} from 'lucide-react';

export const Enroll = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // Here you would typically send data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    // Reset form
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '' });
    }, 5000);
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 py-8 px-4 sm:px-6 lg:px-8 font-bangla">
      <div className="max-w-7xl mx-auto">
        {/* Success Message */}
        {isSubmitted && (
          <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-2xl shadow-2xl animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="bg-white/20 p-3 rounded-full">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">🎉 রেজিস্ট্রেশন সফল!</h3>
                  <p className="text-white/90 mt-1">
                    আমরা আপনার ইমেইলে কনফার্মেশন ডিটেইলস পাঠিয়েছি। আপনার ইনবক্স
                    চেক করুন!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">
              🚀 এক্সক্লুসিভ লঞ্চ অফার
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              ডিজিটাল মার্কেটিং উইথ এআই
            </span>{' '}
            কোর্সে এনরোল করুন
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            বাংলাদেশের সবচেয়ে কম্প্রিহেন্সিভ এআই-পাওয়ারড ডিজিটাল মার্কেটিং
            কোর্সে আপনার সিট সুরক্ষিত করুন
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Course Highlights */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-md shadow-xl overflow-hidden mb-8">
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      সম্পূর্ণ এনরোলমেন্ট ফর্ম
                    </h2>
                    <p className="text-gray-500 mt-1">
                      কোর্সে যোগ দিতে আপনার বিস্তারিত দিন
                    </p>
                  </div>
                  <div className="hidden sm:block bg-yellow-50 border border-yellow-200 px-4 py-2 rounded-full">
                    <span className="text-yellow-700 font-bold text-sm">
                      ১ম ধাপ / ২
                    </span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <User className="w-4 h-4 text-purple-600" />
                      পুরো নাম
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all duration-300 outline-none text-lg"
                        placeholder="আপনার পুরো নাম লিখুন"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500">
                        <User className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      জাতীয় আইডি কার্ড অনুযায়ী
                    </p>
                  </div>

                  {/* Email Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Mail className="w-4 h-4 text-purple-600" />
                      ইমেইল এড্রেস
                      <span className="text-red-500">*</span>
                      <span>
                        {' '}
                        <p className="text-sm text-gray-500 mt-2">
                          ( আমরা কোর্সের বিস্তারিত এখানে পাঠাবো )
                        </p>
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all duration-300 outline-none text-lg"
                        placeholder="you@example.com"
                      />
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500">
                        <Mail className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Phone Field */}
                  <div className="group">
                    <label className="flex items-center gap-2 text-gray-700 font-medium mb-2">
                      <Phone className="w-4 h-4 text-purple-600" />
                      ফোন নম্বর
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                        <span className="text-gray-500 font-medium">+৮৮০</span>
                        <div className="w-px h-6 bg-gray-300"></div>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 pl-24 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:bg-white transition-all duration-300 outline-none text-lg"
                        placeholder="1XXXXXXXXXX"
                        pattern="[0-9]{10}"
                        maxLength="10"
                      />
                      <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500">
                        <Phone className="w-5 h-5" />
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      হোয়াটসঅ্যাপ আপডেট এবং সাপোর্টের জন্য
                    </p>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <input
                      type="checkbox"
                      id="terms"
                      required
                      className="mt-1 w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <label htmlFor="terms" className="text-gray-700 text-sm">
                      আমি{' '}
                      <a
                        href="#terms"
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        শর্তাবলী
                      </a>{' '}
                      এবং{' '}
                      <a
                        href="#privacy"
                        className="text-purple-600 hover:text-purple-800 font-medium"
                      >
                        গোপনীয়তা নীতি
                      </a>{' '}
                      মেনে চলতে সম্মত। আমি বুঝতে পেরেছি যে এটি একটি লাইভ কোর্স
                      এবং সর্বোত্তম শেখার জন্য উপস্থিতি আবশ্যক।
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="flex items-center justify-center gap-3">
                      <span>এনরোলমেন্ট সম্পন্ন করুন</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                    <p className="text-sm font-normal mt-1 opacity-90">
                      সম্পূর্ণ কোর্স এক্সেসের জন্য মাত্র ৳999
                    </p>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right Column - Summary & Benefits */}
          <div className="space-y-8">
            {/* Price Card */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-md shadow-2xl p-6 md:p-8 text-white">
              <div className="text-center mb-6">
                <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-3">
                  <span className="text-sm font-bold">🔥 সীমিত সময় অফার</span>
                </div>

                <div className="mb-2">
                  <p className="text-white/80">ডিস্কাউন্টেড মূল্য</p>
                  <span className="flex gap-2 item-center justify-center">
                    {' '}
                    <p className="text-4xl md:text-6xl font-bold ">৳999</p>
                    <p className="text-2xl line-through opacity-60 mt-3">
                      ৳৩,০০০
                    </p>
                  </span>
                </div>
                <div className="bg-white/20 px-4 py-2 rounded-full inline-block">
                  <span className="font-bold">৬৭% ছাড়</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>৭ দিনের লাইভ ক্লাস</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>লাইফটাইম এক্সেস</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>সমাপনী সার্টিফিকেট</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span>সমস্ত বোনাস ম্যাটেরিয়াল</span>
                </div>
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-white rounded-md shadow-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                🎁 আপনি যা পাচ্ছেন
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">লাইভ ক্লাস</h4>
                    <p className="text-gray-600 text-sm">
                      ৭ দিন ইন্টারেক্টিভ ট্রেনিং
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Award className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">সার্টিফিকেট</h4>
                    <p className="text-gray-600 text-sm">
                      অফিসিয়াল কমপ্লিশন সার্টিফিকেট
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      সুরক্ষিত পেমেন্ট
                    </h4>
                    <p className="text-gray-600 text-sm">
                      ১০০% মানি-ব্যাক গ্যারান্টি
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      ২৪/৭ সাপোর্ট
                    </h4>
                    <p className="text-gray-600 text-sm">
                      হোয়াটসঅ্যাপ সাপোর্ট গ্রুপ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 bg-white rounded-md shadow-xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ❓ সাধারণ জিজ্ঞাসা
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: 'এই কোর্সটি লাইভ নাকি রেকর্ডেড?',
                a: 'সমস্ত ক্লাস জুমের মাধ্যমে লাইভ অনুষ্ঠিত হবে এবং রেকর্ডিং লাইফটাইম এক্সেসের জন্য উপলব্ধ থাকবে।',
              },
              {
                q: 'ক্লাস মিস করলে কি হবে?',
                a: 'আপনি ২৪ ঘন্টার মধ্যে রেকর্ডেড সেশন পাবেন এবং যেকোনো সময় দেখতে পারবেন।',
              },
              {
                q: 'আগের কোনো এক্সপেরিয়েন্স প্রয়োজন কি?',
                a: 'কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই। আমরা একেবারে বেসিক থেকে শুরু করব।',
              },
              {
                q: 'রিফান্ড পলিসি কি?',
                a: 'প্রথম ক্লাসের পর সন্তুষ্ট না হলে ১০০% মানি-ব্যাক গ্যারান্টি।',
              },
              {
                q: 'কোর্সের পরে কি সাপোর্ট পাব?',
                a: 'হ্যাঁ, আলাদা হোয়াটসঅ্যাপ গ্রুপে লাইফটাইম সাপোর্ট পাবেন।',
              },
              {
                q: 'কোর্সের ম্যাটেরিয়াল কিভাবে পাব?',
                a: 'সকল স্লাইড, টুলস লিস্ট এবং রিসোর্স পিডিএফ এবং ভিডিও আকারে দেয়া হবে।',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:border-purple-300 transition-colors"
              >
                <h4 className="font-semibold text-gray-800 mb-2">{faq.q}</h4>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} ফিউচার ল্যাব ইনস্টিটিউট। সর্বস্বত্ব
            সংরক্ষিত।
          </p>
          <p className="mt-1">
            এনরোল করার মাধ্যমে, আপনি আমাদের শর্তাবলী মেনে চলতে সম্মত।
          </p>
        </div>
      </div>
    </div>
  );
};
