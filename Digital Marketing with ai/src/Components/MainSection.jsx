import React from 'react';
import { Link } from 'react-router-dom';

const MainSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/30">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-pink-700 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm mb-8">
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

      {/* Lottery & Schedule Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Lottery Card */}
            <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 rounded-md p-8 text-white shadow-2xl overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 rounded-full"></div>

              <div className="relative z-10">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-3xl font-bold mb-4">
                  বিশেষ লটারির পুরস্কার
                </h2>
                <p className="text-xl mb-6">
                  প্রত্যেক ব্যাচে একটি করে{' '}
                  <span className="font-bold">💻 ল্যাপটপ</span> লটারির মাধ্যমে
                  দেওয়া হবে!
                </p>
                <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                  <div className="text-4xl mb-2">💻</div>
                  <p className="text-lg font-semibold">Latest Model Laptop</p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-white rounded-md p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                📅 ক্লাসের সময়সূচী
              </h3>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-2xl mr-4">🎯</div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Batch No-20251101
                    </p>
                    <p className="text-gray-600">
                      Class Start: 01 December 2025
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-2xl mr-4">⏰</div>
                  <div>
                    <p className="font-semibold text-gray-800">Class Time</p>
                    <p className="text-gray-600">
                      9PM to 11PM (Night) | Sunday,Tuesday,Thursday
                    </p>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-xl">
                  <div className="text-2xl mr-4">📚</div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      Course Duration
                    </p>
                    <p className="text-gray-600">
                      12-15 Weeks | Online | Beginner to Advanced
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trainer Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              👨‍🏫 আপনার ট্রেইনার
            </h2>
            <p className="text-xl text-gray-600">
              ১০+ বছরের অভিজ্ঞতা নিয়ে আপনার পাশে
            </p>
          </div>

          <div className="bg-white rounded-md shadow-2xl overflow-hidden border border-gray-200">
            <div className="md:flex">
              <div className="md:w-2/5 relative">
                <img
                  src="https://i.postimg.cc/BnhW44gq/43546.jpg"
                  alt="Dilouar Hossain"
                  className="w-full h-80 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3">
                  <p className="font-bold text-gray-800">Dilouar Hossain</p>
                  <p className="text-sm text-gray-600">
                    Digital Marketing Expert
                  </p>
                </div>
              </div>

              <div className="md:w-3/5 p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                    🎯 Expert Trainer
                  </span>
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                    🏆 10+ Years
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    👨‍🎓 500+ Students
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Dilouar Hossain
                </h3>
                <p className="text-lg text-purple-600 font-semibold mb-2">
                  Digital Marketing Trainer | 10+ Years Experience
                </p>
                <p className="text-gray-600 mb-6">
                  Founder | Zero Degree Agency & Future Lab Institute
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-purple-600">
                      10+
                    </div>
                    <div className="text-sm text-gray-600">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-2xl font-bold text-pink-500">500+</div>
                    <div className="text-sm text-gray-600">
                      Students Trained
                    </div>
                  </div>
                </div>

                <a href="tel:+8801717468814">
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                    📞 ট্রেইনারের সাথে কথা বলুন
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Benefits Section */}
      <section className="py-16 px-4 md:px-0 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              💰 কোর্স ফি ও সুবিধা
            </h2>
            <p className="text-xl text-gray-600">
              একবার ইনভেস্ট, আজীবন সক্ষমতা
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Pricing Card */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 text-white shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">কোর্স ফি</h3>
                <div className="text-5xl font-bold mb-2">৳ ৯৯৯৯</div>
                <p className="text-gray-300">ওয়ান টাইম পেমেন্ট</p>
              </div>

              <div className="space-y-4 mb-8">
                {/* bKash Button - Matching Pink Color Scheme */}
                <Link to={'/bkash-pay'}>
                  <button className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 text-white py-4 rounded-xl font-bold  shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group">
                    <div className="bg-white p-1 rounded-lg">
                      <img
                        src="https://ecdn.dhakatribune.net/contents/cache/images/1200x630x1xxxxx1/uploads/media/2024/08/24/bKash-050c0ebc9e3a0f1772fbfa9c715790c0.jpg"
                        alt="bKash Logo"
                        className="w-12 h-5 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-lg">বিকাশে পেমেন্ট করুন</span>
                    <span className="text-xl">→</span>
                  </button>
                </Link>

                {/* Nagad Button - Matching Green Color Scheme */}
                <Link to={'/nagod-pay'}>
                  <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white py-4 rounded-xl font-bold  shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group mt-2">
                    <div className="bg-white p-1 rounded-lg">
                      <img
                        src="https://freepnglogo.com/images/all_img/1725618513nagad-logo.png"
                        alt="Nagad Logo"
                        className="w-12 h-5 object-contain group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <span className="text-lg">নগদে পেমেন্ট করুন</span>
                    <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>

              {/* WhatsApp Enroll Button */}
              <a
                href="https://wa.me/8801717468814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white py-4 rounded-xl font-bold hover:shadow-xl  flex items-center justify-center gap-3 group">
                  <span className="text-xl">🚀</span>
                  <span className="text-lg">এনরোল নাও</span>
                  <span className="text-xl group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </button>
              </a>
            </div>

            {/* Free Benefits */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-md p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                🎁 কোর্সে যা ফ্রি পাবেন
              </h3>

              <div className="space-y-4">
                {[
                  'ডোমেইন নাম (১ বছর)',
                  'হোস্টিং – নিরাপদ ও দ্রুত (১ বছর)',
                  'সম্পূর্ণ রেসপনসিভ ওয়েবসাইট',
                  'বিনামূল্যে মেটা বিজ্ঞাপন অ্যাকাউন্ট',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gift Pack */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-md p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                🎯 বিশেষ গিফট প্যাক
              </h3>

              <div className="space-y-4">
                {[
                  'ব্র্যান্ডিং সহ টি-শার্ট',
                  'প্রিন্টেড মাগ',
                  'ব্র্যান্ডিং সহ ক্যাপ',
                  'ডিজিটাল মার্কেটিং উইথ এ আই PDF বই',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-3 bg-white/10 rounded-xl backdrop-blur-sm"
                  >
                    <div className="text-lg mr-3">🎁</div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
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
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-3">
                <span>📱</span>
                Enroll Now
              </button>
              <a
                href="https://wa.me/8801717468814"
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
                  <span>info@digitalmarketing.com</span>
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
