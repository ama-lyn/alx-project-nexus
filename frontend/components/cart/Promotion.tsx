import React from 'react';
import Button from '@/components/common/Button';

const Promotion: React.FC = () => (
  <div className="mt-8">
    <h2 className="text-2xl font-bold mb-4">Promotion</h2>
    <div className="bg-blue-600 rounded-lg p-6 flex items-center gap-4">
    <input 
        type="text" 
        placeholder="Enter promo code if you have one" 
        className="flex-grow p-2 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white" 
      />
      <Button label="Validate Code" variant="secondary" />
    </div>
  </div>
);
export default Promotion;