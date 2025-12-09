import React from 'react';
import {
  Sparkles,
  Rocket,
  CheckCircle,
  Star,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const NewOfter = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 flex items-center justify-center">
      <div className="w-full bg-white  overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6  py-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-8 h-8" />
            <h1 className="text-2xl md:text-4xl font-bold">
              Digital Marketing with AI – 7 Days Complete Course
            </h1>
            <Rocket className="w-8 h-8" />
          </div>
          <p className="text-lg md:text-2xl font-semibold">
            🚀 মাত্র 999 টাকায় আপনার স্কিলকে নিয়ে যান পরবর্তী লেভেলে
          </p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-semibold">
              Limited Seats Available!
            </span>
          </div>
        </div>
        {/* Price + Trainer Section */}
        <div className="bg-gray-900 text-white text-center py-6 px-4 md:px-16">
          <div className="max-w-5xl mx-auto overflow-hidden border border-gray-700 rounded-2xl bg-gray-800 shadow-lg">
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="md:w-2/5 relative group">
                <img
                  src="https://i.postimg.cc/BnhW44gq/43546.jpg"
                  alt="Dilouar Hossain"
                  className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Info Section */}
              <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
                    <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md">
                      🎯 Expert Trainer
                    </span>
                    <span className="bg-pink-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md">
                      🏆 10+ Years
                    </span>
                    <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md">
                      👨‍🎓 500+ Students
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-3 bg-gray-700 rounded-xl border border-gray-600">
                      <div className="text-xl sm:text-2xl font-bold text-purple-400">
                        10+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Years Experience
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gray-700 rounded-xl border border-gray-600">
                      <div className="text-xl sm:text-2xl font-bold text-pink-400">
                        500+
                      </div>
                      <div className="text-xs sm:text-sm text-gray-300">
                        Students Trained
                      </div>
                    </div>
                  </div>

                  {/* Trainer Details */}
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      Dilouar Hossain
                    </h3>
                    <p className="text-base sm:text-lg text-purple-400 font-semibold mb-1">
                      Digital Marketing Trainer | 10+ Years Experience
                    </p>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Founder | Zero Degree Agency & Future Lab Institute
                    </p>
                  </div>
                  {/* Price and Button - Compact Version */}
                  <div className="mt-8 bg-gray-900 border-2 border-purple-600 rounded-2xl p-6 md:p-8 shadow-lg max-w-xl mx-auto">
                    <div className="flex flex-col items-center text-center">
                      {/* Price Text */}
                      <p className="text-gray-400 text-xs md:text-sm mb-1">
                        বিশেষ মূল্য
                      </p>
                      <div className="flex flex-wrap items-baseline justify-center gap-1 sm:gap-2 md:gap-3 mb-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent leading-none">
                          999 টাকা
                        </span>

                        <span className="text-base sm:text-lg md:text-xl text-gray-500 line-through leading-none">
                          ৩০০০ টাকা
                        </span>
                      </div>

                      <p className="text-green-400 font-semibold text-xs md:text-sm">
                        ✅ লাইফটাইম এক্সেস সহ
                      </p>

                      {/* Button */}
                      <button
                        onClick={() => navigate('/new-offer/enroll')}
                        className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg flex items-center justify-center gap-2 md:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 mt-4"
                      >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                        <span>এখনই Enroll করুন</span>
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                      </button>

                      {/* Offer Text */}
                      <div className="mt-3 md:mt-4 flex  text-yellow-300 text-xs md:text-sm">
                        <Star className="w-3 h-3 md:w-4 md:h-4" />
                        <span>
                          প্রথম ২০ জনের জন্য অতিরিক্ত ৫% ছাড়Digital Marketing
                          with Ai eBook প্রথম ৫০ জনের জন্য
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          {/* Why This Course */}
          <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50">
            <div className="max-w-7xl  mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-700 mb-6">
                🔥 কেন এই কোর্সটি করবেন?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  '১০ মিনিটে পেশাদার কনটেন্ট তৈরি',
                  'AI দিয়ে Facebook Ads স্ট্র্যাটেজি',
                  'SEO & Keyword Research অটোমেটিক',
                  'Client Project ৫০% দ্রুত শেষ',
                  'নিজের ব্যবসায় Full AI Automation',
                  'AI দিয়ে Facebook Ads স্ট্র্যাটেজি',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-md"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Class Breakdown */}
          <div className="p-6 max-w-7xl  mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8">
              🎓 ৭ দিনের সম্পূর্ণ ক্লাস ব্রেকডাউন
            </h2>
            <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  day: 'Class 1',
                  title: 'Digital Marketing & AI Basics',
                  details: [
                    'ডিজিটাল মার্কেটিং & AI Overview',
                    'ChatGPT, Canva AI, Zapier পরিচিতি',
                    'First Practical: AI দিয়ে কনটেন্ট তৈরি',
                  ],
                  icon: '🚀',
                },
                {
                  day: 'Class 2',
                  title: 'Social Media Marketing with AI',
                  details: [
                    'AI দিয়ে Content Calendar',
                    'AI দিয়ে Caption, Hashtag, Creative Idea',
                    'Canva AI দিয়ে ডিজাইন',
                  ],
                  icon: '📱',
                },
                {
                  day: 'Class 3',
                  title: 'Facebook Ads Mastery with AI',
                  details: [
                    'AI দিয়ে Audience Targeting',
                    'AI দিয়ে Ad Copy + Creative',
                    'Competitor Research',
                  ],
                  icon: '📊',
                },
                {
                  day: 'Class 4',
                  title: 'AI Content Creation & Automation',
                  details: [
                    'Script, Blog, Email Writing with AI',
                    'AI Voiceover + Thumbnail',
                    'Automation Setup (Zapier/Make.com)',
                  ],
                  icon: '✍️',
                },
                {
                  day: 'Class 5',
                  title: 'SEO with AI',
                  details: [
                    'AI দিয়ে Keyword Research',
                    'Rankable Blog Writing',
                    'Competitor SEO Analysis',
                  ],
                  icon: '🔍',
                },
                {
                  day: 'Class 6',
                  title: 'AI for Business Growth',
                  details: [
                    'Business Plan using AI',
                    'Market Research Using AI',
                    'Full Marketing Strategy তৈরি',
                  ],
                  icon: '📈',
                },
                {
                  day: 'Class 7',
                  title: 'Monetization + Tools Mastery',
                  details: [
                    'Best ২৫ AI Tools',
                    'Freelancing with AI',
                    'Portfolio Building',
                  ],
                  icon: '💰',
                },
              ].map((cls, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-purple-200 hover:shadow-lg transition"
                >
                  <div className="text-3xl">{cls.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-purple-700">
                      {cls.day}: {cls.title}
                    </h3>
                    <ul className="mt-2 space-y-1">
                      {cls.details.map((detail, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Section */}
          <div className="p-6 bg-yellow-50 border-t-4 border-yellow-400 ">
            <div className="max-w-7xl  mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
                🎁 Exclusive Bonus (মূল্য: ১৫,০০০+ টাকা)
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
                {[
                  '৩০ দিনের Content Calendar Template',
                  'Ready Ads Copy Templates',
                  '৫০+ Canva AI Editable Templates',
                  'AI Tools Premium Prompt Pack',
                ].map((bonus, index) => (
                  <div
                    key={index}
                    className="flex items-center  justify-center gap-3"
                  >
                    <Star className="w-6 h-6 text-yellow-600" />
                    <span className="text-lg font-semibold">{bonus}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-700 to-blue-700 text-white p-8 text-center mt-5">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            👉 এখনই ভর্তি হন – AI এর শক্তিতে ভবিষ্যৎ বদলান!
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/new-offer/enroll"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <Phone className="w-5 h-5" />
              Enroll Now – 999 টাকা
            </a>
            <a
              href="https://chat.whatsapp.com/Hqlqidz0HS6BFdBNFqlSkH"
              target="_blank"
              className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <MessageSquare className="w-5 h-5" />
              Join WhatsApp Group
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition"
            >
              <MessageSquare className="w-5 h-5" />
              Contact for Details
            </a>
          </div>
          <p className="mt-6 text-yellow-300 font-bold text-lg">
            ⚡ Limited Seats | First Come, First Serve
          </p>
        </div>
      </div>
    </div>
  );
};
