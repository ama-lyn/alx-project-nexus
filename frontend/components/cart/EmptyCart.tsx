import React from 'react';
import Button from '../common/Button';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';

const EmptyCart: React.FC = () => {
  return (
    <div className="text-center max-w-md mx-auto py-20">
      <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
        <ShoppingCart size={40} className="text-gray-500" />
      </div>
      <h1 className="text-2xl font-bold mb-2">Your Shopping Cart is Empty</h1>
      <Link href="/browse" className="inline-flex justify-center mt-4">
        <Button label="Start Shopping" variant="primary" />
      </Link>
    </div>
  );
};
export default EmptyCart;