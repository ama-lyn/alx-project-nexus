import React from 'react';
import { CartItem } from '@/interfaces';
import Button from '../common/Button';
import { CreditCard } from 'lucide-react';
import { PromoCode } from '@/lib/promoService';

interface OrderSummaryProps {
  items: CartItem[];
  appliedDiscount: PromoCode | null;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items, appliedDiscount }) => {
    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    let discountAmount = 0;
    if (appliedDiscount) {
      if (appliedDiscount.type === 'percentage') {
        discountAmount = subtotal * (appliedDiscount.value / 100);
      } else { 
        discountAmount = appliedDiscount.value;
      }
    }
  
    const total = subtotal - discountAmount;
  
    return (
      <div className="bg-[#6b35e8] text-white rounded-lg p-6 sticky top-24 w-[380px]">
         <h2 className="text-xl font-bold border-b border-white/20 pb-3 mb-4"> Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})</h2>
    <div className="space-y-3">
      <div className="flex justify-between text-white/90">
        <span>Subtotal</span>
        <span>KSh {subtotal.toFixed(2)}</span>
      </div>

      {appliedDiscount && (
        <div className="flex justify-between text-green-300 font-semibold">
          <span>Discount ({appliedDiscount.code})</span>
          <span>-KSh {discountAmount.toFixed(2)}</span>
        </div>
      )}
      {/* <div className="flex justify-between text-green-300">
          <span>Gateway Discount</span>
          <span>-KSh {discount.toFixed(2)}</span>
        </div> */}

      <p className="text-xs text-white/70 mt-1 italic">
        VAT already included in total price.
      </p>
      <div className="mt-4 bg-white/10 p-3 rounded-md">
        <p className="text-sm">
          📦 Estimated delivery: <span className="font-semibold">2–4 business days</span>
        </p>
      </div>
    </div>

    <div className="border-t border-white/20 mt-4 pt-4">
      <div className="flex justify-between items-center font-bold text-2xl">
        <span>Total Due</span>
        <span>KSh {total.toFixed(2)}</span>
      </div>
    </div>

    <div className="mt-6">
      <Button 
        label="Checkout" 
        variant="primary" 
        className="w-full !bg-white !text-[#6b35e8] hover:!bg-gray-200"
        icon={<CreditCard size={18} />}
      />
    </div>

    <div className="flex items-center mt-4">
      <input type="checkbox" id="terms" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
      <label htmlFor="terms" className="ml-2 block text-sm text-white/80">
        I have read and agree to the <a href="#" className="font-bold hover:underline">Terms of Service</a>
      </label>
    </div>

    <p className="text-xs text-white/70 mt-4 text-center">
      🔒 Secure payment & 7-day returns policy.
    </p>
  </div>
  );
};

export default OrderSummary;