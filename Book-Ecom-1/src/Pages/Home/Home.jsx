import { useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Heading from '../../components/Heading';
import CheckoutModal from '../../components/CheckoutModal';
import ContactIcon from '../../components/ContactIcon';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';

const Home = () => {
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
    {
      id: 3,
      title: 'Gaming Headset',
      brand: 'SteelSeries',
      price: 99,
      originalPrice: 129,
      rating: 4.6,
      reviews: 1240,
      description:
        'Professional gaming headset with surround sound and noise-canceling microphone for competitive gaming.',
      image:
        'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      features: [
        '7.1 Surround Sound',
        'Noise-Canceling Mic',
        'RGB Lighting',
        'Memory Foam Earcups',
      ],
      details: {
        weight: '350g',
        origin: 'Denmark',
        connectivity: '3.5mm + USB',
        warranty: '1 Year',
        manufacturer: 'SteelSeries',
      },
    },
    {
      id: 4,
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
        'Intel Core i5-13900H',
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
      <Heading />

      <Faq />

      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Header */}
            <div className="lg:hidden mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Book Store</h1>
              <p className="text-gray-600 mt-2">Select a book to purchase</p>
            </div>

            {/*  Checkout */}
            <div className="">
              <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 flex">
                {/* Left Sidebar - Product List */}
                <div className="lg:w-1/3 xl:w-1/4">
                  <div className=" sticky top-6">
                    <div className="hidden lg:block mb-6">
                      <h1 className="text-2xl font-bold text-gray-900">
                        Book Store
                      </h1>
                      <p className="text-gray-600 mt-2">
                        Select a book to purchase
                      </p>
                    </div>

                    <div className="space-y-4 ">
                      {products.map(product => (
                        <div
                          key={product.id}
                          className={`p-3 border-2 rounded-lg cursor-pointer transition-all duration-200 ${
                            selectedProduct?.id === product.id
                              ? 'border-purple-500 bg-purple-50 shadow-md scale-[1.02]'
                              : 'border-gray-200 hover:border-purple-300 hover:shadow-md'
                          }`}
                          onClick={() => setSelectedProduct(product)}
                        >
                          <div className="flex gap-3">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-16 h-20 object-cover rounded-lg flex-shrink-0"
                            />
                            <div className="min-w-0 flex-1">
                              <h3 className="text-sm font-semibold text-gray-900 line-clamp-2">
                                {product.title}
                              </h3>
                              <p className="text-lg font-bold text-purple-600 mt-1">
                                ${product.price}
                              </p>
                              <div className="flex items-center mt-1">
                                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                  In Stock
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
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
                      <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-12 h-12 text-purple-500"
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
                        Choose a book from the left panel to start your purchase
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContactIcon />
      <Footer />
    </div>
  );
};

export default Home;
