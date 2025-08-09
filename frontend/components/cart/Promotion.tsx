import React from 'react';
import Button from '../common/Button';
import { PromoCode } from '@/lib/promoService';
import { CheckCircle, XCircle } from 'lucide-react';

interface PromotionSectionProps {
  inputValue: string;
  onInputChange: (value: string) => void;
  onValidate: () => void;
  onRemove: () => void;
  appliedCode: PromoCode | null;
  error: string | null;
  isLoading: boolean;
}

const Promotion: React.FC<PromotionSectionProps> = ({
  inputValue, onInputChange, onValidate, onRemove, appliedCode, error, isLoading
}) => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Promotion</h2>
    <div className="bg-blue-600 rounded-lg p-6">
      {appliedCode ? (
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-300" />
            <p className="font-semibold text-white">Code Applied: {appliedCode.code}</p>
          </div>
          <button onClick={onRemove} className="text-sm text-white/80 hover:text-white underline">Remove</button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <input 
            type="text" 
            placeholder="Enter promo code" 
            className="flex-grow bg-white p-2 rounded-md shadow-sm disabled:opacity-70"
            value={inputValue}
            onChange={(e) => onInputChange(e.target.value)}
            disabled={isLoading}
          />
          <Button 
            label={isLoading ? 'Validating...' : 'Validate Code'}
            variant="secondary"
            className="!bg-white !text-blue-600 hover:!bg-blue-100"
            onClick={onValidate}
            disabled={isLoading}
          />
        </div>
      )}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-200">
          <XCircle size={16} />
          <p className="text-sm">{error}</p>
        </div>
      )}
    </div>
  </div>
);
export default Promotion;