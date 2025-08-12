import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { CartItem, removeItem } from '@/redux/cartSlice';
import Button from '../common/Button';

interface CartPopoverProps {
  items: CartItem[];
}

const CartPopover: React.FC<CartPopoverProps> = ({ items }) => {
  const dispatch = useDispatch();
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="absolute top-full right-0 mt-1 w-96 bg-white border rounded-lg shadow-2xl p-4 z-50">
      {/* Case 1: Cart is empty */}
      {items.length === 0 && (
        <div className="text-center p-4">
          <div  className='flex flex-col items-center justify-center'>
          <p className="font-semibold text-gray-800 mb-2">This is a bit empty.</p>
          <p className="text-sm text-gray-600 mb-4">Let&apos;s start adding some products to your cart.</p>
          <Link href='/browse' className='cursor-pointer'>
            <Button label="Start Shopping" variant="primary" />
          </Link>
          
          </div>
          <hr className="my-4" />
          <p className="text-sm text-gray-600 mb-4">Sign in to see items you may have added previously.</p>
          <div className="flex gap-2 items-center justify-center">
          <Link href='/login' className='cursor-pointer'>
            <Button label="Sign In" variant="primary" className="flex-1" />
          </Link>
          <Link href='/signup' className='cursor-pointer'>
            <Button label="Create Account" variant="secondary" className="flex-1" />
          </Link>
          </div>
        </div>
      )}

      {/* Case 2: Cart has items */}
      {items.length > 0 && (
        <>
          <div className="flex flex-col gap-4 max-h-80 overflow-y-auto pr-2">
            {items.map((item) => (
              <div key={item.id} className="flex items-start gap-4">
                <Image src={item.imageUrl} alt={item.title} width={60} height={80} className="rounded object-cover" />
                <div className="flex-grow">
                  <p className="font-semibold text-sm leading-tight">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.quantity} × KSh {item.price.toFixed(2)}</p>
                </div>
                <button onClick={() => dispatch(removeItem(item.id))} className="text-gray-400 hover:text-red-500 p-1">
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between items-center font-bold text-lg">
            <span>Total:</span>
            <span>KSh {total.toFixed(2)}</span>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <Link href='/dashboard/cart' className='cursor-pointer'><Button label="Proceed to Checkout" variant="primary" className="w-full"/></Link>
            <Link href='/dashboard/cart' className='cursor-pointer'>  <Button label="View cart" variant="secondary" className="w-full" /> </Link>

          </div>
        </>
      )}
    </div>
  );
};

export default CartPopover;