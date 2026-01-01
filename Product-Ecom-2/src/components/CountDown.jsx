import React, { useState, useEffect } from 'react';

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 1,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            }
          }
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(timer);
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatNumber = num => num.toString().padStart(2, '0');

  const handleBuyNow = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="max-w-7xl mx-auto my-10 p-8 md:p-12 border-4 border-dashed border-orange-500 rounded-2xl bg-white shadow-2xl text-center font-sans">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
          অফারের শেষ সময়
        </h2>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-16 mb-10 md:mb-16">
          {[
            { value: formatNumber(timeLeft.hours), label: 'Hours' },
            { value: formatNumber(timeLeft.minutes), label: 'Minutes' },
            { value: formatNumber(timeLeft.seconds), label: 'Seconds' },
          ].map((item, index) => (
            <div
              key={index}
              className="
        bg-orange-500 text-white
        py-4 px-4 sm:py-5 sm:px-6 md:py-6 md:px-8
        rounded-xl shadow-lg
        w-24 sm:w-28 md:w-32
        text-center
      "
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold leading-none">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm md:text-base mt-1 sm:mt-2">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12 text-2xl md:text-3xl">
          <p style={{ marginBottom: '20px', color: '#333' }}>
            রেগুলার প্রাইস:{' '}
            <span className="price-cross">
              ১৫০০ টাকা
              <span className="cross-line line-1"></span>
              <span className="cross-line line-2"></span>
            </span>
          </p>

          <p className="text-green-600 font-bold text-2xl md:text-3xl">
            অফার প্রাইস:{' '}
            <span className="underline underline-offset-4 decoration-wavy decoration-green-500">
              ৯৯৯ টাকা
            </span>
          </p>
        </div>

        <button
          onClick={handleBuyNow}
          className="bg-red-600 text-white text-2xl md:text-3xl font-bold py-3 px-8 rounded-full shadow-xl hover:bg-red-700 transition flex items-center gap-3 mx-auto"
        >
          <span className="text-2xl">🛒</span> অর্ডার করতে চাই
        </button>
      </div>
      {/* animation */}
      <style jsx>{`
        .price-cross {
          position: relative;
          display: inline-block;
          color: #e74c3c;
          font-weight: bold;
          padding: 0 6px;
        }

        .cross-line {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: #e74c3c;
          transform-origin: center;
          animation: crossAnim 2s infinite;
        }

        .line-1 {
          animation: crossAnim1 1.5s infinite;
        }

        .line-2 {
          animation: crossAnim2 1.5s infinite;
        }

        @keyframes crossAnim1 {
          0%,
          100% {
            transform: rotate(12deg) scaleX(0);
          }
          50% {
            transform: rotate(12deg) scaleX(1);
          }
        }

        @keyframes crossAnim2 {
          0%,
          100% {
            transform: rotate(-12deg) scaleX(0);
          }
          50% {
            transform: rotate(-12deg) scaleX(1);
            animation-delay: 0.3s;
          }
        }
      `}</style>
    </>
  );
};

export default CountDown;
