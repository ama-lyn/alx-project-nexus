import React from 'react';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { CartItem, removeItem } from '@/redux/cartSlice';
import { Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

interface CartItemRowProps {
  item: CartItem;
}

const CartItemRow: React.FC<CartItemRowProps> = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
    toast.error(`${item.title} removed from cart.`);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src={item.imageUrl} alt={item.title} width={60} height={80} className="rounded-md object-cover" />
        <div>
          <p className="font-bold text-gray-800">{item.title}</p>
          <p className="text-sm text-gray-500">{item.author}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold">KSh {item.price.toFixed(2)}</span>
        <button className="text-gray-400 hover:text-red-500 cursor-pointer" onClick={handleRemove}>
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItemRow;