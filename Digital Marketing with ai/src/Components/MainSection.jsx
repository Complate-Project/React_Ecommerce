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

      {/* Trainer Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              👨‍🏫 কোর্সের বিস্তারিত
            </h2>
            <p className="text-xl text-gray-600">
              ১০+ বছরের অভিজ্ঞতা নিয়ে আপনার পাশে
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-stretch">
            {/* Main Trainer Card */}
            <div className="flex">
              <div className=" overflow-hidden border border-gray-200  ">
                <div className="md:flex h-full">
                  {/* Trainer Image Section */}
                  <div className="md:w-2/5 relative group">
                    <img
                      src="https://i.postimg.cc/BnhW44gq/43546.jpg"
                      alt="Dilouar Hossain"
                      className="w-full h-80 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <p className="font-bold text-gray-800 text-lg">
                        Dilouar Hossain
                      </p>
                      <p className="text-sm text-gray-600">
                        Digital Marketing Expert
                      </p>
                    </div>
                  </div>

                  {/* Trainer Info Section */}
                  <div className="md:w-3/5 p-8 flex flex-col justify-between">
                    <div>
                      {/* Badges */}
                      <div className="flex flex-wrap gap-3 mb-6">
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          🎯 Expert Trainer
                        </span>
                        <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          🏆 10+ Years
                        </span>
                        <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                          👨‍🎓 500+ Students
                        </span>
                        <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                          <FaLaptop /> Giveaway Laptop
                        </span>
                        <span className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
                          <FaBook /> Ai Design Course
                        </span>
                      </div>

                      {/* Trainer Details */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          Dilouar Hossain
                        </h3>
                        <p className="text-lg text-purple-600 font-semibold mb-2">
                          Digital Marketing Trainer | 10+ Years Experience
                        </p>
                        <p className="text-gray-600 mb-4">
                          Founder | Zero Degree Agency & Future Lab Institute
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                          <div className="text-2xl font-bold text-purple-600">
                            10+
                          </div>
                          <div className="text-sm text-gray-600">
                            Years Experience
                          </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border border-pink-100">
                          <div className="text-2xl font-bold text-pink-500">
                            500+
                          </div>
                          <div className="text-sm text-gray-600">
                            Students Trained
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Call to Action */}
                    <a href="https://wa.me/8801978866933" target="_blank">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2">
                        <span className="text-xl">📞</span>
                        <span>ট্রেইনারের সাথে কথা বলুন</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Schedule Card */}
              <div className="lg:w-96">
                <div className=" p-4 border border-gray-100 h-full  ">
                  <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center flex items-center justify-center gap-2">
                    <span className="text-2xl">📅</span>
                    ক্লাসের সময়সূচী
                  </h3>

                  <div className="space-y-6">
                    {/* Batch Info */}
                    <div className="flex items-center p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border border-purple-100 hover:shadow-md transition-all">
                      <div className="text-2xl mr-4 text-purple-600">🎯</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">
                          Batch No-20251101
                        </p>
                        <p className="text-gray-600">
                          Class Start: 01 December 2025
                        </p>
                      </div>
                    </div>

                    {/* Class Time */}
                    <div className="flex items-center p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-100 hover:shadow-md transition-all">
                      <div className="text-2xl mr-4 text-blue-600">⏰</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">
                          Class Time
                        </p>
                        <p className="text-gray-600">
                          9PM to 11PM (Night) <br /> Sunday,Tuesday,Thursday
                        </p>
                      </div>
                    </div>

                    {/* Course Duration */}
                    <div className="flex items-center p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-100 hover:shadow-md transition-all">
                      <div className="text-2xl mr-4 text-green-600">📚</div>
                      <div>
                        <p className="font-semibold text-gray-800 text-lg">
                          Course Duration
                        </p>
                        <p className="text-gray-600">
                          12-15 Weeks | Online <br /> Beginner to Advanced
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Benefits Section */}
      <section className="py-16 px-4 md:px-0 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              💰 কোর্স ফি ও সুবিধা
            </h2>
            <p className="text-xl text-gray-600">
              একবার ইনভেস্ট, আজীবন সক্ষমতা
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Pricing Card - Improved with better colors */}
            <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/5 rounded-full"></div>

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">কোর্স ফি</h3>
                  <div className="text-5xl font-bold mb-2">৳ ৯৯৯৯</div>
                  <p className="text-gray-300">এককালীন পেমেন্ট</p>
                </div>

                <div className="space-y-4 mb-8">
                  {/* bKash Button - Improved with better gradient */}
                  <Link to={'/bkash-pay'}>
                    <button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 hover:from-pink-700 hover:to-purple-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group transition-all duration-300 mb-2">
                      <div className="bg-white p-1 rounded-lg ">
                        <img
                          src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2024/08/24/bKash-050c0ebc9e3a0f1772fbfa9c715790c0.jpg"
                          alt="bKash Logo"
                          className="w-12 h-5 object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-lg">বিকাশে পেমেন্ট করুন</span>
                      <span className="text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </Link>

                  {/* Nagad Button - Improved with better gradient */}
                  <Link to={'/nagod-pay'}>
                    <button className="w-full bg-gradient-to-r from-emerald-600 to-green-700 hover:from-emerald-700 hover:to-green-800 text-white py-4 rounded-xl font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group transition-all duration-300">
                      <div className="bg-white p-1 rounded-lg">
                        <img
                          src="https://freepnglogo.com/images/all_img/1725618513nagad-logo.png"
                          alt="Nagad Logo"
                          className="w-12 h-5 object-contain group-hover:scale-110 transition-transform"
                        />
                      </div>
                      <span className="text-lg">নগদে পেমেন্ট করুন</span>
                      <span className="text-xl group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </button>
                  </Link>
                </div>

                {/* WhatsApp Enroll Button */}
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScU1PUUmjNosTOnnQmg4pCF9z6ifH7h2aJoMwIHYtxTr-KPuA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-xl flex items-center justify-center gap-3 group transition-all duration-300 animate-bounce">
                    <span className="text-xl">🚀</span>
                    <span className="text-lg">এনরোল করুন</span>
                    <span className="text-xl group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* Free Benefits - Improved with better gradient */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  🎁 কোর্সে যা ফ্রি পাবেন
                </h3>

                <div className="space-y-4">
                  {[
                    'ডোমেইন নাম ( ১ বছরের জন্য )',
                    'হোস্টিং – নিরাপদ ও দ্রুত ( ১ বছরের জন্য )',
                    'সম্পূর্ণ রেসপনসিভ ওয়েবসাইট',
                    'বিনামূল্যে মেটা বিজ্ঞাপন অ্যাকাউন্ট',
                    'ইনভেসমেন্ট এর সুবিধা',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gift Pack - Improved with better gradient */}
            <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  🎯 বিশেষ গিফট প্যাক
                </h3>

                <div className="space-y-4">
                  {[
                    'ব্র্যান্ডিং সহ টি-শার্ট',
                    'প্রিন্টেড মাগ',
                    'ব্র্যান্ডিং সহ ক্যাপ',
                    'ডিজিটাল মার্কেটিং উইথ এ আই PDF বই',
                    'প্রোডাক্ট সোর্সিং এর সুবিধা',
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/15 transition-colors duration-300"
                    >
                      <div className="text-lg mr-3">🎁</div>
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Lottery Card - Premium Offer Design */}
          <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden border border-gray-800">
            {/* Background Elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-xl"></div>
            <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-purple-500"></div>

            {/* Floating Particles */}
            <div className="absolute top-4 right-20 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-16 left-24 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
            <div className="absolute top-20 left-16 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-purple-500/20 px-4 py-2 rounded-full border border-emerald-500/30 mb-6">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                    <span className="text-sm font-semibold text-emerald-300">
                      Limited Time Offer
                    </span>
                  </div>

                  <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    বিশেষ লটারির{' '}
                    <span className="text-emerald-300">পুরস্কার</span>
                  </h2>

                  <p className="text-xl mb-6 text-gray-300 leading-relaxed">
                    প্রত্যেক ব্যাচে একটি করে{' '}
                    <span className="font-bold text-emerald-300">
                      হাই-এন্ড ল্যাপটপ
                    </span>{' '}
                    লটারির মাধ্যমে দেওয়া হবে!
                  </p>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Latest Model</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">High Performance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      </div>
                      <span className="text-gray-300">Free Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Laptop Image Container */}
                <div className="flex-1 relative">
                  <div className="relative group">
                    {/* Main Laptop Container */}
                    <div className="relative z-20 transform group-hover:scale-105 transition-transform duration-500">
                      {/* Laptop Screen */}
                      <div className="relative bg-gray-900 rounded-t-2xl p-4 border border-gray-700 mx-auto w-64 h-40">
                        {/* Screen Content */}
                        <div className="bg-gradient-to-br from-slate-800 to-gray-900 rounded-lg w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-2xl mb-2">🎯</div>
                            <div className="text-xs text-emerald-400 font-semibold">
                              YOU WIN!
                            </div>
                          </div>
                        </div>
                        {/* Webcam */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-600 rounded-full"></div>
                      </div>

                      {/* Laptop Body */}
                      <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-b-2xl p-6 border border-gray-700 border-t-0 mx-auto w-72 h-8 relative">
                        {/* Trackpad */}
                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-700 rounded-full"></div>
                      </div>

                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 z-10"></div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center z-30 group-hover:animate-bounce">
                      <div className="w-4 h-4 bg-emerald-400 rounded-full"></div>
                    </div>
                    <div className="absolute -bottom-2 -left-4 w-6 h-6 bg-purple-500/20 rounded-full flex items-center justify-center z-30 group-hover:animate-bounce">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-10 left-10 w-20 h-20 border-2 border-emerald-400 rounded-full"></div>
                    <div className="absolute bottom-10 right-10 w-16 h-16 border-2 border-purple-400 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="text-center mt-8 pt-6 border-t border-gray-800/50">
                <p className="text-sm text-gray-500">
                  🎉 প্রতি ব্যাচে একজন সৌভাগ্যবান বিজয়ী নির্বাচিত হবেন!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
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
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-white/20">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              🚀 এখনই এনরোল করুন
            </h3>

            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              বিস্তারিত জানতে হোয়াটসঅ্যাপে যোগাযোগ করুন –
              <span className="font-bold text-white text-xl"> 01978866933</span>
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
