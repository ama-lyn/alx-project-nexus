import React from 'react';
import { Users, ShieldCheck, Banknote } from 'lucide-react';

const features = [
  {
    icon: <Users size={40} className="text-white" />,
    title: 'Community of Readers',
    description: 'Connect with a vibrant community of fellow students and passionate readers. Our platform is more than a store; it\'s a space to share your love for books, discover new perspectives, and find your next great read.',
  },
  {
    icon: <ShieldCheck size={40} className="text-white" />,
    title: 'Safe and Secure',
    description: 'Your trust is our top priority. We handle all transactions and communications through our secure platform, so you can buy, sell, swap, and rent with complete confidence and peace of mind.',
  },
  {
    icon: <Banknote size={40} className="text-white" />,
    title: 'Affordable & Sustainable',
    description: 'Access textbooks and literature at a fraction of the cost, saving you money while you expand your library. By giving books a second life, you also contribute to a more sustainable and eco-friendly campus culture.',
  },
];


const Benefits: React.FC = () => {
  return (
    <section className="bg-[#6b35e8] text-white py-16 lg:py-24 w-full">
      <h2 className="text-4xl font-bold text-center mb-8">Why Choose The Circuit?</h2>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-10">
         
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">{feature.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-1 text-white/80">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundImage: ` url(/assets/images/paperplane.png)`,
        }} className="bg-no-repeat bg-center bg-cover max-w-[480px] h-64 lg:h-full">
        </div>
        
      </div>
    </section>
  );
};

export default Benefits;