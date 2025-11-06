import { FaLaptop, FaShoppingCart } from 'react-icons/fa';

function Navbar({ quantity, setShowCheckout }) {
  return (
    <nav className="bg-white shadow-lg top-0 z-50 sticky">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FaLaptop className="text-3xl text-[#6b21a8]" />
            <span className="text-2xl font-bold text-gray-800">
              Electronic Zone{' '}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-[#6b21a8] text-white px-6 py-2 rounded-full hover:bg-[#581c87] transition duration-300 flex items-center space-x-2"
            >
              <FaShoppingCart />
              <span>Checkout ({quantity})</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
