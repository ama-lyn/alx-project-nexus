import Link from "next/link";
import { useState } from "react";
import Button from "../common/Button";
import { useSelector, useDispatch  } from 'react-redux';
import { RootState } from '@/redux/store';  
import { ShoppingCart } from "lucide-react"; 
import CartPopover from "@/components/cart/CartPopover";
import { logout } from '@/redux/authSlice';
import PromoBanner from "../common/PromoBanner";
import Image from 'next/image';


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

  const promoCode = "SAVE10";
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + 3); // 3 days from now 


  return (
    <header className="w-full mb-4">
       {isBannerVisible && (
        <PromoBanner 
          promoCode={promoCode}
          expiryDate={expiryDate}
          onClose={() => setIsBannerVisible(false)} 
        />
      )}
      {/* Navigation */}
      <nav className="border-b border-gray-200 px-4 md:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex-shrink-0">
            <Link href='/' className="cursor-pointer">
            <Image src="/assets/logos/Logo.png" alt="Logo" width={100} height={60} />
            </Link>
          </div>

          <div className="flex items-center gap-6 flex-wrap">
            <Link href="/browse">
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
