import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-4 rounded-lg border bg-white p-6 text-left">
      <div className="text-[#6b35e8]">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900">
        {title}
      </h3>
     
      <p className="text-sm text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;