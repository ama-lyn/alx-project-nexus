import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";
import { useSelector, useDispatch  } from 'react-redux';
import { RootState } from '@/redux/store';  
import { ShoppingCart } from "lucide-react"; 
import CartPopover from "@/components/cart/CartPopover";
import { logout } from '@/redux/authSlice';


const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);

  const [isBannerVisible, setIsBannerVisible] = useState(true);
  // Get the cart items array from the Redux store
  const cartItems = useSelector((state: RootState) => state.cart.items);
  // Calculate the total number of items for the badge
  const totalItems = Array.isArray(cartItems)
    ? cartItems.reduce((total, item) => total + (item.quantity || 0), 0)
    : 0;
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="w-full mb-4">
      {/* Top banner*/}
      {isBannerVisible && (
        <div className="relative flex justify-center items-center bg-[#710A94] min-h-[50px] mb-2 px-4 md:px-8 py-2">
          <p className="text-white text-xs md:text-sm lg:font-semibold">
            Black Friday in August Sales
          </p>
          <button
            onClick={() => setIsBannerVisible(false)}
            className="absolute right-4 text-white hover:bg-white/20 rounded-full p-1"
            aria-label="Dismiss banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Link href='/' className="cursor-pointer">
            <img src="/assets/logos/Logo.png" alt="Logo" className="h-12 w-[100px]" />
            </Link>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">Browse Books</span>
            </Link>
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">Community</span>
            </Link>
            <Link href="#">
              <span className="text-sm text-gray-800 hover:text-[#6b35e8]">About</span>
            </Link>

              <div 
              className="relative flex items-center"
              onMouseEnter={() => setIsCartVisible(true)}
              onMouseLeave={() => setIsCartVisible(false)}
            >
              <Link href="/cart" className="relative p-2">
                <ShoppingCart className="text-gray-700 hover:text-[#6b35e8]" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#710A94] text-xs font-bold text-white">
                    {totalItems}
                  </span>
                )}
              </Link>
              {isCartVisible && <CartPopover items={cartItems} />}
            </div>
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Hi, {user?.name}</span>
                <Button label="Log Out" variant="secondary" onClick={handleLogout} />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link href="/signup"><Button label="Sign Up" variant="primary" /></Link>
                <Link href="/login"><Button label="Log In" variant="secondary" /></Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
