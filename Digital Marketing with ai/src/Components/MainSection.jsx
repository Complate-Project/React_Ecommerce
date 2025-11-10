import React from 'react';
import { FaBook, FaLaptop } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 py-7 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-5">
            <span className="text-white text-sm font-semibold">
              🎯 Limited Time Offer
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Digital Marketing
            <span className="ml-2 bg-gradient-to-r from-amber-300 to-pink-300 bg-clip-text text-transparent">
              With AI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            স্মার্ট মার্কেটিং, দ্রুত ফলাফল, সব সম্ভব AI–এর সাথে
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 bg-pink-400 rounded-full animate-bounce"></div>
      </section>

      {/* Trainer section */}
      <section className="py-6 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              👨‍🏫 কোর্সের বিস্তারিত
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              ১০+ বছরের অভিজ্ঞতা নিয়ে আপনার পাশে
            </p>
          </div>

          {/* Main Flex Container */}
          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Trainer Card */}
            <div className="flex-1">
              <div className="overflow-hidden border border-gray-200 rounded-2xl bg-white shadow-sm">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Image Section */}
                  <div className="md:w-2/5 relative group">
                    <img
                      src="https://i.postimg.cc/BnhW44gq/43546.jpg"
                      alt="Dilouar Hossain"
                      className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  {/* Info Section */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      {/* Badges */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                          🎯 Expert Trainer
                        </span>
                        <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                          🏆 10+ Years
                        </span>
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                          👨‍🎓 500+ Students
                        </span>
                        <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                          💻 Giveaway Laptop
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md">
                          📑 Ai Design Course
                        </span>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-3 mb-6">
                        <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                          <div className="text-xl sm:text-2xl font-bold text-purple-600">
                            10+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center p-3 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                          <div className="text-xl sm:text-2xl font-bold text-pink-500">
                            500+
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600">
                            Students Trained
                          </div>
                        </div>
                      </div>

                      {/* Trainer Details */}
                      <div className="mb-6">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                          Dilouar Hossain
                        </h3>
                        <p className="text-base sm:text-lg text-purple-600 font-semibold mb-1">
                          Digital Marketing Trainer | 10+ Years Experience
                        </p>
                        <p className="text-gray-600 text-sm sm:text-base">
                          Founder | Zero Degree Agency & Future Lab Institute
                        </p>
                      </div>
                    </div>

                    {/* CTA */}
                    <a href="https://wa.me/8801978866933" target="_blank">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2 text-sm sm:text-base">
                        <span className="text-lg sm:text-xl">📞</span>
                        <span>ট্রেইনারের সাথে কথা বলুন</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="lg:w-96 w-full">
              <div className="p-4 border border-gray-100 rounded-2xl bg-white shadow-sm h-full">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center flex items-center justify-center gap-2">
                  <span className="text-2xl">📅</span> ক্লাসের সময়সূচী
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  {/* Batch Info */}
                  <div className="flex items-center p-4 sm:p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100 hover:shadow-md transition-all">
                    <div className="text-2xl mr-3 text-purple-600">🎯</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-base sm:text-lg">
                        Batch No-20251101
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        Class Start: 01 December 2025
                      </p>
                    </div>
                  </div>

                  {/* Class Time */}
                  <div className="flex items-center p-4 sm:p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
                    <div className="text-2xl mr-3 text-blue-600">⏰</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-base sm:text-lg">
                        Class Time
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        9PM to 11PM (Night) <br /> Sunday, Tuesday, Thursday
                      </p>
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="flex items-center p-4 sm:p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-md transition-all">
                    <div className="text-2xl mr-3 text-green-600">📚</div>
                    <div>
                      <p className="font-semibold text-gray-800 text-base sm:text-lg">
                        Course Duration
                      </p>
                      <p className="text-gray-600 text-sm sm:text-base">
                        12 Weeks | Online <br /> Beginner to Advanced
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Benefits Section */}
      <section className="pt-10 pb-4 px-4 md:px-0 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              💰 কোর্স ফি ও সুবিধা
            </h2>
            <p className="text-xl text-gray-600">
              একবার ইনভেস্ট, আজীবন সক্ষমতা
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:gap-8 mb-12">
            {/* Pricing Card - Premium Version */}
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden mb-2 md:mb-0">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                {/* Header */}
                <div>
                  <h3 className="text-3xl font-extrabold mb-2 tracking-wide text-amber-400">
                    💰 কোর্স ফি
                  </h3>
                  <p className="text-gray-300 text-sm uppercase">
                    সীমিত সময়ের জন্য অফার
                  </p>
                </div>

                {/* Price Section */}
                <div className="bg-white/10 rounded-2xl p-6 w-full">
                  <div className="text-5xl font-extrabold mb-2 text-amber-300">
                    ৳ 9,999
                  </div>
                  <p className="text-lg text-gray-300 line-through">৳ 90,300</p>
                  <p className="text-sm text-gray-300 mt-1">
                    এককালীন পেমেন্টে{' '}
                    <span className="text-amber-400 font-semibold">
                      ৮০% ছাড়
                    </span>
                  </p>
                </div>

                {/* Offer Highlights */}
                <ul className="text-left space-y-3 text-gray-200 text-sm md:text-base">
                  <li className="flex items-center ">
                    <span>লাইফটাইম এক্সেস এবং আপডেট কোর্স কনটেন্ট</span>
                  </li>
                </ul>

                {/* Payment Options */}
                <div className="flex justify-center items-center gap-5 mt-2">
                  <Link to="/bkash-pay">
                    <img
                      src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2024/08/24/bKash-050c0ebc9e3a0f1772fbfa9c715790c0.jpg"
                      alt="bKash Logo"
                      className="w-20 h-10 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                  <Link to="/nagod-pay">
                    <img
                      src="https://freepnglogo.com/images/all_img/1725618513nagad-logo.png"
                      alt="Nagad Logo"
                      className="w-20 h-10 object-contain rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>

                {/* Enroll Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-2xl flex items-center justify-center gap-3 group transition-all duration-300 hover:scale-105 ">
                    <span className="text-xl">🚀</span>
                    <span className="text-lg">এখনই এনরোল করুন</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </a>
                {/* Guarantee */}
                <div className="text-xs text-gray-400 ">
                  🔒 100% Secure Payment | 📞 Support: +8801978866933
                </div>
              </div>
            </div>

            {/* Free Benefits - Responsive with Total Price */}
            <div className="bg-gradient-to-br col-span-2 from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

              {/* Content Wrapper */}
              <div className="relative z-10 space-y-10">
                {/* Two Sections */}
                <div className="flex flex-col md:flex-row justify-between gap-8">
                  {/* Left Column */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      🎁 কোর্সে যা ফ্রি পাবেন
                    </h3>

                    <div className="space-y-4">
                      {[
                        { name: 'ডোমেইন নাম (১ বছরের জন্য)', price: 2000 },
                        { name: 'হোস্টিং (১ বছরের জন্য)', price: 1500 },
                        { name: 'রেসপনসিভ ওয়েবসাইট', price: 25000 },
                        { name: 'মেটা বিজ্ঞাপন অ্যাকাউন্ট', price: 5000 },
                        { name: 'ইনভেসমেন্ট এর সুবিধা', price: 50000 },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="font-semibold">
                            {item.price.toLocaleString()} ৳
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      🎯 বিশেষ গিফট প্যাক
                    </h3>

                    <div className="space-y-4">
                      {[
                        { name: 'ব্র্যান্ডিং সহ টিশার্ট', price: 500 },
                        { name: 'প্রিন্টেড মাগ', price: 500 },
                        { name: 'ব্র্যান্ডিং সহ ক্যাপ', price: 300 },
                        { name: 'ডিজিটাল মার্কেটিং With Ai বই', price: 500 },
                        { name: 'প্রোডাক্ট সোর্সিং এর সুবিধা', price: 5000 },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                        >
                          <div className="flex items-center">
                            <div className="text-lg mr-3">🎁</div>
                            <span className="font-medium">{item.name}</span>
                          </div>
                          <span className="font-semibold">
                            {item.price.toLocaleString()} ৳
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Total Calculation */}
                <div className="pt-6 border-t border-white/20 flex justify-center items-end gap-4">
                  <h4 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
                    💰 মোট মূল্য:
                  </h4>
                  <p className="text-3xl font-extrabold text-yellow-300">
                    {(
                      2000 +
                      1500 +
                      25000 +
                      5000 +
                      50000 +
                      500 +
                      500 +
                      300 +
                      500 +
                      5000
                    ).toLocaleString()}{' '}
                    ৳
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Minimal Laptop Offer */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 my-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">
                  লটারির&nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    পুরস্কার
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  প্রত্যেক ব্যাচে একটি করে{' '}
                  <span className="font-semibold text-cyan-300">
                    💻 ল্যাপটপ
                  </span>{' '}
                  লটারির মাধ্যমে দেওয়া হবে!
                </p>
                <Link
                  target="_blank"
                  to={
                    'https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform'
                  }
                >
                  <button className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors duration-300">
                    অংশগ্রহণ করুন
                  </button>
                </Link>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  {/* Laptop */}
                  <div className="bg-gray-800 rounded-xl p-3 border-4 border-gray-700 transform rotate-3 shadow-2xl">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg w-64 h-40 flex items-center justify-center">
                      <div className="text-white text-center">
                        <div className="text-3xl mb-2">💻</div>
                        <div className="text-3xl mb-2">ল্যাপটপ</div>
                        <div className="text-3xl mb-2">পুরস্কার</div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-blue-500 rounded-2xl blur-xl opacity-20 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-6 px-4 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📚 কোর্স মডিউল
            </h2>
            <p className="text-xl text-gray-600">
              AI-পাওয়ারড ডিজিটাল মার্কেটিং এর সম্পূর্ণ কারিকুলাম
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modulesData.map((module, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 hover:border-purple-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {module.emoji}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
                  {module.title}
                </h3>
                <ul className="space-y-2">
                  {module.points.map((point, pointIndex) => (
                    <li
                      key={pointIndex}
                      className="flex items-start text-gray-600 text-sm"
                    >
                      <span className="text-purple-500 mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all">
              🎯 সম্পূর্ণ কারিকুলাম ডাউনলোড করুন
            </button>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Option 1: Simple & Clean */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20 flex justify-center items-center gap-5">
            <div className="border-r border-white pr-5">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                🚀 এখনই এনরোল করুন
              </h3>

              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                বিস্তারিত জানতে হোয়াটসঅ্যাপে যোগাযোগ করুন –
                <span className="font-bold text-white text-xl">
                  {' '}
                  01978866933
                </span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 animate-bounce flex items-center gap-3">
                    <span>📱</span>
                    Enroll Now
                  </button>
                </a>
                <a
                  href="https://wa.me/8801978866933"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-3">
                    <span>💬</span>
                    WhatsApp এ মেসেজ করুন
                  </button>
                </a>
              </div>
            </div>

            {/* payment */}
            <div className="">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                💰 কিভাবে Payment করবেন
              </h3> {/* Support Text */}
              <div className="mt-6">
                <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
                  <span>❓</span>
                  পেমেন্টে কোন সমস্যা হলে কল করুন:
                  <span className="font-bold text-green-600">01978866933</span>
                </p>
              </div><br />
              <div className="flex justify-center items-center gap-4">
                {/* bKash */}
                <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl p-3 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-8 w-12 object-contain rounded"
                      src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2024/08/24/bKash-050c0ebc9e3a0f1772fbfa9c715790c0.jpg"
                      alt="bKash"
                    />
                    <span className="text-white font-semibold text-sm">
                      এ Payment করুন
                    </span>
                  </div>
                </button><br />

                {/* Nagad */}
                <button className="bg-white/20 hover:bg-white/30 border border-white/30 rounded-xl p-3 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-2">
                    <img
                      className="h-8 w-12 object-contain"
                      src="https://freepnglogo.com/images/all_img/1725618513nagad-logo.png"
                      alt="Nagad"
                    />
                    <span className="text-white font-semibold text-sm">
                       এ Payment করুন
                    </span>
                  </div>
                </button>
              </div>
             
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <div className="bg-black/30 rounded-2xl p-6 border border-white/10">
              <h4 className="text-white text-xl font-bold mb-4">
                📞 সরাসরি কথা বলুন
              </h4>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white/80">
                <div className="flex items-center gap-2">
                  <span className="text-green-400">📱</span>
                  <span className="font-mono text-lg">01978866933</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">📧</span>
                  <span>info@futurelabinstitute.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🕒</span>
                  <span>সকাল ১০টা - রাত ১০টা</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Modules data remains the same
const modulesData = [
  {
    emoji: '📈',
    title: 'Module 1: Introduction to Digital Marketing & AI',
    points: [
      'What is Digital Marketing?',
      'AI in Marketing & Benefits',
      'Types of AI: ML, NLP, Generative AI, Predictive Analytics',
    ],
  },
  {
    emoji: '✍️',
    title: 'Module 2: AI in Content Creation & Copywriting',
    points: [
      'AI Tools: ChatGPT, Jasper, Copy.ai',
      'Prompt Engineering Basics',
      'Best Practices: Ethics, Originality, SEO',
    ],
  },
  {
    emoji: '📱',
    title: 'Module 3: AI in Social Media Marketing',
    points: [
      'Smart Scheduling & Automation',
      'AI-powered Audience Insights',
      'AI Image & Video Tools: Canva AI, Lumen5, Pictory',
    ],
  },
  {
    emoji: '🔍',
    title: 'Module 4: AI in SEO & SEM',
    points: [
      'AI Keyword Research: Ubersuggest, Frase, Semrush AI',
      'Content Optimization: SurferSEO / NeuronWriter',
      'Google & Meta Ads with AI Targeting',
    ],
  },
  {
    emoji: '📧',
    title: 'Module 5: Email Marketing & Chatbots',
    points: [
      'AI Email Personalization',
      'Subject Line Optimization',
      'AI Chatbots: Tidio, ManyChat, Chatfuel',
    ],
  },
  {
    emoji: '📊',
    title: 'Module 6: Analytics & Predictive Marketing with AI',
    points: [
      'AI in Google Analytics & Meta Insights',
      'Customer Segmentation & CLV Prediction',
      'A/B Testing with AI Insights',
    ],
  },
  {
    emoji: '🎨',
    title: 'Module 7: AI Tools for Design & Video',
    points: [
      'Graphics: Canva AI, Adobe Firefly',
      'AI Video Editors: Runway ML, Pictory, Synthesia',
      'Voice-over & Avatar Tools',
    ],
  },
  {
    emoji: '🏆',
    title: 'Module 8: Capstone Project & Certification',
    points: [
      'Complete Marketing Funnel Project using AI',
      'Peer Review & Instructor Feedback',
      'Certificate of Completion',
    ],
  },
  {
    emoji: '💼',
    title: 'Module 9: Career Guideline',
    points: [
      'Discussion of what you can do as a digital marketer',
      'Difference between job and business',
      'Discussing the full benefits of doing business',
      'Discussion about references in various places regarding the job',
    ],
  },
];

export default MainSection;
