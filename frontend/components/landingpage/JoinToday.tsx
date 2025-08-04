import React from 'react';
import Button from '../common/Button'; 

const JoinToday: React.FC = () => {
  return (
    <section className="bg-gray-50 my-18 py-20">
      <div className="flex flex-col items-center justify-center max-w-[1200px] mx-auto px-4 text-center">
       
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Join Zelia Today </h2>
        <p className="max-w-xl mx-auto text-gray-600 text-lg mb-8"> Sign up now and start buying, selling, or swapping books with ease. </p>
    
        <Button
          label="Sign Up"
          variant="primary"
          onClick={() => console.log('Navigate to sign-up page')}
        />
        
      </div>
    </section>
  );
};

export default JoinToday;