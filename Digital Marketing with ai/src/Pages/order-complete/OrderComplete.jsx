import React, { useRef } from 'react';
import { Printer, CheckCircle } from 'lucide-react';

const OrderComplete = () => {
  const invoiceRef = useRef();

  // Sample order data in Bangla
  const orderData = {
    orderId: 'অর্ডার-৭৮৯৪৫৬',
    orderDate: '১৫ ডিসেম্বর, ২০২৪',
    batchNumber: 'ব্যাচ-২০২৪-ডিএম-০৩',
    customer: {
      name: 'আলেক্স জনসন',
      email: 'alex.johnson@example.com',
      phone: '০ ১৭১২-৩৪৫৬৭৮',
    },
    course: {
      title: 'অ্যাডভান্সড ডিজিটাল মার্কেটিং মাস্টারক্লাস',
      duration: '১২ সপ্তাহ',
      startDate: '১০ জানুয়ারি, ২০২৫',
      instructor: 'সারাহ মিলার',
      price: '৯৯৯৳',
    },
    payment: {
      method: 'বিকাশ',
      status: 'পেমেন্ট সফল',
      transactionId: 'টিএক্সএন-৭৮৯১২৩৪৫৬',
      bkashNumber: '০১৭১২৩৪৫৬৭৮',
    },
  };

  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>ইনভয়েস - ${orderData.orderId}</title>
        <style>
          body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 30px; background: #f5f7fa; }
          .invoice { max-width: 800px; margin: 0 auto; background: white; border-radius: 12px; padding: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #3b82f6; padding-bottom: 20px; }
          .header h1 { color: #1e40af; margin: 10px 0; }
          .success-badge { background: #10b981; color: white; padding: 8px 16px; border-radius: 20px; display: inline-block; font-weight: 600; margin-top: 10px; }
          .content { display: flex; gap: 40px; margin-top: 30px; }
          .left-col { flex: 2; }
          .right-col { flex: 1; }
          .section { margin-bottom: 30px; padding-bottom: 20px; border-bottom: 1px solid #e5e7eb; }
          .section:last-child { border-bottom: none; }
          .section-title { font-size: 18px; font-weight: bold; margin-bottom: 15px; color: #1f2937; display: flex; align-items: center; gap: 8px; }
          .section-title::before { content: "▸"; color: #3b82f6; }
          .info-row { margin-bottom: 12px; display: flex; justify-content: space-between; }
          .label { color: #6b7280; font-size: 14px; }
          .value { font-weight: 500; color: #111827; }
          .total-box { background: #eff6ff; padding: 20px; border-radius: 8px; border: 1px solid #bfdbfe; margin-top: 20px; }
          .total-amount { font-size: 24px; font-weight: bold; color: #1e40af; text-align: right; margin-top: 10px; }
          .footer { text-align: center; margin-top: 40px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 13px; }
          @media print { 
            @page { margin: 0; }
            body { background: white; padding: 20px; }
            .invoice { box-shadow: none; padding: 20px; }
          }
        </style>
      </head>
      <body>
        <div class="invoice">
          <div class="header">
            <h1>অর্ডার কনফার্মেশন</h1>
            <h3>অর্ডার আইডি: ${orderData.orderId}</h3>
            <p>তারিখ: ${orderData.orderDate}</p>
            <div class="success-badge">✓ ${orderData.payment.status}</div>
          </div>
          <div class="content">
            <div class="left-col">
              <div class="section">
                <div class="section-title">কোর্সের বিস্তারিত</div>
                <div class="info-row"><strong style="font-size: 16px;">${orderData.course.title}</strong></div>
                <div class="info-row">
                  <span class="label">ব্যাচ নম্বর:</span>
                  <span class="value">${orderData.batchNumber}</span>
                </div>
                <div class="info-row">
                  <span class="label">শুরুর তারিখ:</span>
                  <span class="value">${orderData.course.startDate}</span>
                </div>
                <div class="info-row">
                  <span class="label">সময়কাল:</span>
                  <span class="value">${orderData.course.duration}</span>
                </div>
                <div class="info-row">
                  <span class="label">ইন্সট্রাক্টর:</span>
                  <span class="value">${orderData.course.instructor}</span>
                </div>
              </div>
              
              <div class="section">
                <div class="section-title">গ্রাহকের তথ্য</div>
                <div class="info-row">
                  <span class="label">নাম:</span>
                  <span class="value">${orderData.customer.name}</span>
                </div>
                <div class="info-row">
                  <span class="label">ইমেইল:</span>
                  <span class="value">${orderData.customer.email}</span>
                </div>
                <div class="info-row">
                  <span class="label">ফোন:</span>
                  <span class="value">${orderData.customer.phone}</span>
                </div>
              </div>
            </div>
            
            <div class="right-col">
              <div class="section">
                <div class="section-title">অর্ডার সামারি</div>
                <div class="info-row">
                  <span class="label">অর্ডার আইডি:</span>
                  <span class="value">${orderData.orderId}</span>
                </div>
                <div class="info-row">
                  <span class="label">অর্ডারের তারিখ:</span>
                  <span class="value">${orderData.orderDate}</span>
                </div>
                <div class="info-row">
                  <span class="label">পেমেন্ট মেথড:</span>
                  <span class="value">${orderData.payment.method}</span>
                </div>
                <div class="info-row">
                  <span class="label">বিকাশ নম্বর:</span>
                  <span class="value">${orderData.payment.bkashNumber}</span>
                </div>
                <div class="info-row">
                  <span class="label">ট্রানজেকশন আইডি:</span>
                  <span class="value">${orderData.payment.transactionId}</span>
                </div>
                
                <div class="total-box">
                  <div class="info-row">
                    <span class="label">কোর্স ফি:</span>
                    <span class="value">${orderData.course.price}</span>
                  </div>
                  <div class="total-amount">মোট: ${orderData.course.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <p>আমাদের সাথে থাকার জন্য আপনাকে ধন্যবাদ</p>
            <p>কোনো প্রশ্ন থাকলে কল করুন: +৮৮০ ১৭১২-৩৪৫৬৭৮ | ইমেইল: support@digitalcourse.com</p>
          </div>
        </div>
      </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            অর্ডার সম্পন্ন হয়েছে!
          </h1>
          <p className="text-gray-600 text-lg">
            আপনার অর্ডারটি সফলভাবে গৃহীত হয়েছে
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Invoice Header Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">ডিজিটাল মার্কেটিং কোর্স</h2>
                <p className="text-blue-100">অর্ডার কনফার্মেশন রিসিপ্ট</p>
              </div>
              <div className="mt-4 md:mt-0 bg-white/20 backdrop-blur-sm rounded-xl px-5 py-3">
                <p className="text-sm text-blue-100">অর্ডার আইডি</p>
                <p className="text-xl font-bold">{orderData.orderId}</p>
              </div>
            </div>
            <div className="mt-4 inline-flex items-center gap-2 bg-green-500/90 text-white px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5" />
              <span className="font-medium">{orderData.payment.status}</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Left Column - Course & Customer Info */}
              <div className="lg:w-2/3 space-y-8">
                {/* Course Details */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-8 bg-blue-500 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">
                      কোর্সের বিস্তারিত
                    </h2>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">
                        {orderData.course.title}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">ব্যাচ নম্বর</p>
                          <p className="font-medium text-gray-900">
                            {orderData.batchNumber}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">শুরুর তারিখ</p>
                          <p className="font-medium text-gray-900">
                            {orderData.course.startDate}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">সময়কাল</p>
                          <p className="font-medium text-gray-900">
                            {orderData.course.duration}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm text-gray-500">ইন্সট্রাক্টর</p>
                          <p className="font-medium text-gray-900">
                            {orderData.course.instructor}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Customer Information */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-8 bg-green-500 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">
                      গ্রাহকের তথ্য
                    </h2>
                  </div>
                  <div className="">
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">নাম</p>
                      <p className="font-medium text-gray-900">
                        {orderData.customer.name}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">ইমেইল</p>
                      <p className="font-medium text-gray-900">
                        {orderData.customer.email}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-500">ফোন নম্বর</p>
                      <p className="font-medium text-gray-900">
                        {orderData.customer.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Order Summary */}
              <div className="lg:w-1/3">
                <div className="bg-gradient-to-b from-gray-50 to-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-8 bg-purple-500 rounded-full"></div>
                    <h2 className="text-xl font-bold text-gray-900">
                      অর্ডার সামারি
                    </h2>
                  </div>

                  <div className="space-y-5">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">অর্ডার আইডি</span>
                      <span className="font-medium text-gray-900">
                        {orderData.orderId}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">তারিখ</span>
                      <span className="font-medium text-gray-900">
                        {orderData.orderDate}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">পেমেন্ট মেথড</span>
                      <span className="font-medium text-blue-600">
                        {orderData.payment.method}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <span className="text-gray-600">বিকাশ নম্বর</span>
                      <span className="font-medium text-gray-900">
                        {orderData.payment.bkashNumber}
                      </span>
                    </div>

                    {/* Price Section */}
                    <div className="pt-4">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-600">কোর্স ফি</span>
                        <span className="font-medium text-gray-900">
                          {orderData.course.price}
                        </span>
                      </div>
                      <div className="pt-4 border-t border-gray-300">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold text-gray-900">
                            মোট টাকা
                          </span>
                          <span className="text-2xl font-bold text-blue-600">
                            {orderData.course.price}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Print Button */}
                  <button
                    onClick={handlePrint}
                    className="w-full mt-8 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Printer className="w-5 h-5" />
                    <span>ইনভয়েস প্রিন্ট করুন</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-900 text-white p-6 text-center">
            <p className="mb-2 font-medium">© ২০২৪ ডিজিটাল লার্নিং একাডেমী</p>
            <p className="text-gray-400 text-sm">
              সাপোর্ট: +৮৮০ ১৭১২-৩৪৫৬৭৮ | ইমেইল: support@digitalcourse.com
            </p>
            <p className="text-gray-500 text-xs mt-2">
              এই রিসিপ্টটি অর্ডার নিশ্চিতকরণের জন্য তৈরি করা হয়েছে
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
