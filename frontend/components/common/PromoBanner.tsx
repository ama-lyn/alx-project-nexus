import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';


interface PromoBannerProps {
  promoCode: string;
  expiryDate: Date;
  onClose: () => void; 
}

const PromoBanner: React.FC<PromoBannerProps> = ({ promoCode, expiryDate, onClose }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +expiryDate - +new Date();
      let timeLeftString = '';

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        
        timeLeftString = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      } else {
        timeLeftString = 'Offer Expired!';
      }
      
      return timeLeftString;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);

  }, [expiryDate]);

  return (
    <div className="relative flex flex-wrap justify-center items-center gap-x-4 gap-y-2 bg-[#FF4D8D] min-h-[50px] mb-2 px-12 md:px-8 py-2 text-white">
      <p className="text-xs md:text-sm lg:font-semibold">
        Special Offer! Use code <strong className="bg-white/20 px-2 py-1 rounded">{promoCode}</strong> for 10% off your next purchase.
      </p>
      {timeLeft && (
        <div className="flex items-center gap-2 text-sm font-mono bg-white/10 px-3 py-1 rounded-md">
          <Clock size={16} />
          <span>{timeLeft}</span>
        </div>
      )}
      <button
        onClick={onClose}
        className="absolute right-4 text-white hover:bg-white/20 rounded-full p-1"
        aria-label="Dismiss banner"
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default PromoBanner;