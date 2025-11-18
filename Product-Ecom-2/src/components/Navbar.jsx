import { FaLaptop, FaShoppingCart } from 'react-icons/fa';

function Navbar({ quantity, setShowCheckout }) {
  return (
    <div className="text-center">
      <h1 className="py-7 text-4xl font-semibold">
    সারাদেশে ডেলিভারি চার্জ ফ্রি তাই এখনই অর্ডার করুন !
      </h1>
    </div>
    // <nav className="bg-white  top-0 z-50 sticky">
    //   <div className="max-w-7xl mx-auto px-4">
    //     <div className="flex justify-between items-center py-4">
    //       <h2 className="font-bold text-2xl">Welcome to our shop </h2>

    //       <div className="flex items-center space-x-4">
    //         <button
    //           onClick={() => setShowCheckout(true)}
    //           className="bg-[#6b21a8] text-white px-6 py-2 rounded-full hover:bg-[#581c87] transition duration-300 flex items-center space-x-2"
    //         >
    //           <FaShoppingCart />
    //           <span>Checkout ({quantity})</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default Navbar;
