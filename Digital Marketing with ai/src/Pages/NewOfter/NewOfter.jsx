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
            🚀 মাত্র <span className="text-yellow-300 ">999</span> টাকায় আপনার
            স্কিলকে নিয়ে যান পরবর্তী লেভেলে
          </p>
          <div className="mt-4">
            <span className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-lg font-semibold">
              Limited Seats Available!
            </span>
          </div>
        </div>
        {/* Price + Trainer Section */}
        <div className="bg-gray-900 text-white py-6 px-4 md:px-8 lg:px-16">
          <div className="max-w-6xl mx-auto border border-gray-700 rounded-2xl bg-gray-800 shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Image Section */}
              <div className="lg:w-2/5 relative group">
                <div className="aspect-[4/3] lg:aspect-auto lg:h-full">
                  <img
                    src="https://i.postimg.cc/BnhW44gq/43546.jpg"
                    alt="Dilouar Hossain"
                    className="w-full h-[500px] md:h-full object-cover group-hover:scale-105 transition-transform duration-500 lg:rounded-l-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent lg:from-black/40 lg:rounded-l-2xl"></div>
              </div>

              {/* Info Section */}
              <div className="lg:w-3/5 p-5 sm:p-6 md:p-8 flex flex-col">
                {/* Badges - Responsive */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  <span className="bg-purple-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md whitespace-nowrap">
                    🎯 Expert Trainer
                  </span>
                  <span className="bg-pink-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md whitespace-nowrap">
                    🏆 10+ Years
                  </span>
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md whitespace-nowrap">
                    👨‍🎓 500+ Students
                  </span>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="text-center p-3 sm:p-4 bg-gray-700 rounded-xl border border-gray-600">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                      10+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300 mt-1">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gray-700 rounded-xl border border-gray-600">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-pink-400">
                      500+
                    </div>
                    <div className="text-xs sm:text-sm text-gray-300 mt-1">
                      Students Trained
                    </div>
                  </div>
                </div>

                {/* Trainer Details */}
                <div className="mb-6 sm:mb-8">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                    Dilouar Hossain
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-purple-400 font-semibold mb-2">
                    Digital Marketing Trainer | 10+ Years Experience
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Founder | Zero Degree Agency & Future Lab Institute
                  </p>
                </div>

                {/* Price and Button Section */}
                <div className="mt-auto bg-gray-900 border-2 border-purple-600 rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg">
                  <div className="flex flex-col items-center text-center">
                    {/* Price Text */}
                    <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                      বিশেষ মূল্য
                    </p>

                    {/* Price Display */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                          999 টাকা
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-500 line-through">
                          5000 টাকা
                        </span>
                        <span className="ml-2 sm:ml-3 px-2 py-1 bg-green-900/30 text-green-400 text-xs sm:text-sm rounded-md">
                          80% OFF
                        </span>
                      </div>
                    </div>

                    <p className="text-green-400 font-semibold text-sm sm:text-base md:text-lg mb-4">
                      ✅ লাইফটাইম এক্সেস সহ
                    </p>

                    {/* Button */}
                    <button
                      onClick={() => navigate('/new-offer/enroll')}
                      className="w-full max-w-md bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg md:text-xl flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                      <span>এখনই Enroll করুন</span>
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>

                    {/* Offer Note */}
                    <div className="mt-4 sm:mt-5 flex items-center justify-center gap-2 text-yellow-300 text-xs sm:text-sm md:text-base">
                      <Star className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                      <span className="text-center">
                        Digital Marketing with Ai eBook প্রথম ৫০ জনের জন্য
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Section - Super Responsive & Premium Look */}
        <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-yellow-50 to-amber-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
            {/* Heading */}
            <div className="text-center mb-10 md:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Exclusive Bonus
                <span className="block text-2xl sm:text-3xl md:text-4xl text-amber-600 mt-2">
                  (মূল্য: ১৫,০০০+ টাকা) – আপনার একদম ফ্রি!
                </span>
              </h2>
            </div>

            {/* Bonus Grid - Responsive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
              {[
                {
                  title: '৩০ দিনের Content Calendar Template',
                  desc: 'প্লাগ অ্যান্ড প্লে – শুধু ফিল করে পোস্ট করুন',
                },
                {
                  title: 'Ready Ads Copy Templates (50+)',
                  desc: 'প্রমাণিত ফেসবুক অ্যাডস কপি – সরাসরি কপি করে চালান',
                },
                {
                  title: '৫০+ Canva AI Editable Templates',
                  desc: 'প্রফেশনাল ডিজাইন – AI দিয়ে এডিট করুন ১ মিনিটে',
                },
                {
                  title: 'AI Tools Premium Prompt Pack',
                  desc: 'ChatGPT, Gemini, Claude – ১০০+ প্রম্পট',
                },
                {
                  title: 'লাইফটাইম অ্যাক্সেস + আপডেট',
                  desc: 'কোনো মাসিক ফি নেই – সারাজীবন ফ্রি আপডেট',
                },
                {
                  title: 'Private Community Access',
                  desc: 'অন্য স্টুডেন্ট ও ট্রেইনারের সাথে নেটওয়ার্কিং',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative bg-white rounded-md p-6 md:p-8 shadow-lg hover:shadow-2xl border border-amber-200 hover:border-amber-400 transition-all duration-500 transform hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-md">
                      <Star className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Hover Shine Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-700 -skew-x-12 translate-x-full group-hover:translate-x-0"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
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
          </div>
          <p className="mt-6 text-yellow-300 font-bold text-lg">
            ⚡ Limited Seats | First Come, First Serve
          </p>
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
        </div>
      </div>
    </div>
  );
};
