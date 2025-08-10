import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import OrderSummary from '@/components/cart/OrderSummary';
import CartItemRow from '@/components/cart/CartItemRow';
import EmptyCart from '@/components/cart/EmptyCart';
import Promotion from '@/components/cart/Promotion';
import BillingDetails from '@/components/cart/BillingDetails';
import { validatePromoCode, PromoCode } from '@/lib/promoService';
import toast from 'react-hot-toast';

const CartPage: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [promoInput, setPromoInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState<PromoCode | null>(null);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleValidateCode = async () => {
    if (!promoInput) {
      setPromoError('Please enter a code.');
      return;
    }
    setIsLoading(true);
    setPromoError(null);
    try {
      const validCode = await validatePromoCode(promoInput);
      setAppliedDiscount(validCode);
      toast.success(`Promo code "${validCode.code}" applied!`);
    } catch (error) {
      if (error instanceof Error) {
        setPromoError(error.message);
      } else {
        setPromoError('An unknown error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveCode = () => {
    setAppliedDiscount(null);
    setPromoInput('');
    setPromoError(null);
    toast('Promo code removed.');
  };

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Review & Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
        
        {/* Left*/}
        <div className="lg:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="flex justify-between font-semibold text-gray-600 border-b pb-3 mb-4">
              <span>Product</span>
              <span>Price</span>
            </div>
            <div className="space-y-6">
              {cartItems.map((item) => (
                <CartItemRow key={item.id} item={item} />
              ))}
            </div>
          </div>
          
          <Promotion 
            inputValue={promoInput}
            onInputChange={setPromoInput}
            onValidate={handleValidateCode}
            onRemove={handleRemoveCode}
            appliedCode={appliedDiscount}
            error={promoError}
            isLoading={isLoading}
          />
          <BillingDetails />
        </div>

        {/* Right*/}
        <div>
          <OrderSummary items={cartItems} appliedDiscount={appliedDiscount} />
        </div>

      </div>
    </div>
  );
};

export default CartPage;