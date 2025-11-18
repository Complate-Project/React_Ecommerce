import { useState, useMemo, useRef } from 'react';
import Navbar from '../../components/Navbar';
import Heading from '../../components/Heading';
import CheckoutModal from '../../components/CheckoutModal';
import ContactIcon from '../../components/ContactIcon';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';
import ReviewSection from '../../components/ReviewSection';

const Home = () => {
  const productSectionRef = useRef(null); // add this

  // scroll handler
  const scrollToProducts = () => {
    productSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const products = [
    {
      id: 1,
      title: 'Gaming Laptop Pro',
      brand: 'ASUS ROG',
      price: 1499,
      originalPrice: 1799,
      rating: 4.8,
      reviews: 1560,
      description:
        'High-performance gaming laptop with RTX 4070, Intel i9 processor, and 16GB RAM. Perfect for gaming and professional work.',
      image:
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
      features: [
        'NVIDIA RTX 4070 8GB',
        'Intel Core i9-13900H',
        '16GB DDR5 RAM',
        '1TB NVMe SSD',
      ],
      details: {
        weight: '2.3kg',
        origin: 'Taiwan',
        display: '15.6" FHD 165Hz',
        warranty: '2 Years',
        manufacturer: 'ASUS',
      },
    },
    {
      id: 2,
      title: '4K Gaming Monitor',
      brand: 'Samsung',
      price: 429,
      originalPrice: 529,
      rating: 4.7,
      reviews: 980,
      description:
        '27-inch 4K gaming monitor with 144Hz refresh rate and HDR support for immersive gaming experience.',
      image:
        'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2042&q=80',
      features: [
        '27" 4K UHD Display',
        '144Hz Refresh Rate',
        '1ms Response Time',
        'AMD FreeSync',
      ],
      details: {
        weight: '5.8kg',
        origin: 'South Korea',
        panel: 'IPS',
        warranty: '2 Years',
        manufacturer: 'Samsung Electronics',
      },
    },
  ];

  // Set first product as default selected
  useMemo(() => {
    if (!selectedProduct && products.length > 0)
      setSelectedProduct(products[0]);
  }, [selectedProduct, products]);

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = e => {
    e.preventDefault();
    setTimeout(() => {
      alert('Order submitted successfully!');
      // Reset form and quantity if needed
      setQuantity(1);
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        cardNumber: '',
        expiryDate: '',
        cvv: '',
      });
    }, 1000);
  };

  // Memoized totalPrice and savings
  const totalPrice = useMemo(
    () => ((selectedProduct?.price || 0) * quantity).toFixed(2),
    [selectedProduct?.price, quantity]
  );
  const savings = useMemo(
    () =>
      ((selectedProduct?.originalPrice || 0) - (selectedProduct?.price || 0)) *
      quantity,
    [selectedProduct?.originalPrice, selectedProduct?.price, quantity]
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100">
      <Navbar quantity={quantity} />
      <Heading scrollToProducts={scrollToProducts} />

      <ReviewSection></ReviewSection>
      {/* <Faq /> */}

      {/* product section */}
      <div ref={productSectionRef} className="min-h-screen bg-gray-50 p-6 ">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              📚 অর্ডার করতে নিচের ফরমটি পূরণ করুন
            </h1>
          </div>

          {/* Checkout Section - BOTTOM */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Product List - TOP Section */}
            <div className="bg-white  p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Available Books
              </h2>

              <div className="grid sm:grid-cols-2 gap-6">
                {products.map(product => (
                  <div
                    key={product.id}
                    onClick={() => setSelectedProduct(product)}
                    className={`
        group relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ease-out
        border-2 bg-white overflow-hidden
        ${
          selectedProduct?.id === product.id
            ? 'border-indigo-500 shadow-xl scale-[1.02] ring-2 ring-indigo-200 ring-opacity-50'
            : 'border-gray-100 hover:border-indigo-300 hover:shadow-lg'
        }
      `}
                  >
                    {/* Selection indicator */}
                    {selectedProduct?.id === product.id && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                        <i className="fas fa-check text-white text-xs"></i>
                      </div>
                    )}

                    <div className="flex items-start space-x-4">
                      {/* Image container */}
                      <div className="flex-shrink-0">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-gray-100 group-hover:bg-gray-200 transition-colors">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 leading-tight group-hover:text-indigo-700 transition-colors">
                          {product.title}
                        </h3>

                        <div className="flex items-center justify-between mt-3">
                          <p className="text-2xl font-bold text-indigo-600">
                            ${product.price}
                          </p>

                          {/* Hover arrow */}
                          <div className="opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                            <i className="fas fa-arrow-right text-indigo-400 text-sm"></i>
                          </div>
                        </div>

                        {/* Optional badge */}
                        {product.category && (
                          <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-indigo-100 text-indigo-800 rounded-full">
                            {product.category}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Background glow effect for selected state */}
                    {selectedProduct?.id === product.id && (
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-white opacity-60 -z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            {selectedProduct ? (
              <CheckoutModal
                book={selectedProduct}
                quantity={quantity}
                setQuantity={setQuantity}
                savings={savings.toFixed(2)}
                totalPrice={totalPrice}
                formData={formData}
                handleInputChange={handleInputChange}
                handleSubmitOrder={handleSubmitOrder}
                setShowCheckout={() => {}}
              />
            ) : (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-12 h-12 text-indigo-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    Select a Book
                  </h2>
                  <p className="text-gray-600">
                    Choose a book from the top section to start your purchase
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <ContactIcon />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
