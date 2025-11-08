import { useRef, useState, useMemo } from 'react';
import Navbar from '../../components/Navbar';
import Heading from '../../components/Heading';
import BookDetails from '../../components/BookDetails';
import CheckoutModal from '../../components/CheckoutModal';
import ContactIcon from '../../components/ContactIcon';
import Footer from '../../components/Footer';
import Faq from '../../components/Faq';

const Home = () => {
  const [quantity, setQuantity] = useState(1);
  const [showCheckout, setShowCheckout] = useState(false);
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
        'https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2068&q=80',
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
        'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2042&q=80',
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
        'https://images.unsplash.com/photo-1599669454699-248893623440?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
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
  ];

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitOrder = e => {
    e.preventDefault();
    setTimeout(() => {
      // Handle order completion
    }, 2000);
  };

  // ✅ Memoized totalPrice and savings
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

  // Checkout section ref
  const checkoutRef = useRef(null);

  // ✅ Buy Now handler
  const handleBuyNow = (product = null) => {
    setSelectedProduct(product);
    setShowCheckout(true);
    setTimeout(() => {
      checkoutRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100); // delay ensures CheckoutModal is rendered before scrolling
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-100">
      <Navbar quantity={quantity} setShowCheckout={setShowCheckout} />
      {/* Heading */}
      <Heading onBuyNow={handleBuyNow} />

      {/* faq */}
      <Faq></Faq>

      {/* Product Details or Checkout */}
      {!showCheckout ? (
        <BookDetails
          books={products}
          quantity={quantity}
          setQuantity={setQuantity}
          totalPrice={totalPrice}
          setShowCheckout={setShowCheckout}
          onBuyNow={handleBuyNow}
        />
      ) : (
        <div ref={checkoutRef}>
          <CheckoutModal
            book={selectedProduct}
            quantity={quantity}
            setQuantity={setQuantity}
            savings={savings.toFixed(2)}
            totalPrice={totalPrice}
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmitOrder={handleSubmitOrder}
            setShowCheckout={setShowCheckout}
          />
        </div>
      )}
      <ContactIcon />
      <Footer />
    </div>
  );
};

export default Home;
