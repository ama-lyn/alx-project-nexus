import React from 'react';
import Button from '../common/Button'; 
import Link from 'next/link';

const JoinToday: React.FC = () => {
  return (
    <section className="bg-[#FFE4EF] mt-18 py-20">
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4 text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join The Circuit Today </h2>
        <p className="max-w-xl mx-auto text-gray-600 text-lg mb-8"> Sign up now and start buying, selling, or swapping books with ease. </p>
    
    <Link href='/signup'>
    <Button
          label="Sign Up"
          variant="primary"
        />
    </Link>
      </div>
    </section>
  );
};

export default JoinToday;