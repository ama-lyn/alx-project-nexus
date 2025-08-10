import React from 'react';
import FeatureCard from '@/components/common/FeatureCard'; 
import { BookOpen, DollarSign, ArrowRightLeft } from 'lucide-react';

const steps = [
    {
      icon: <BookOpen size={36} strokeWidth={1.5} />,
      title: 'Buy Books',
      description: 'Explore a wide selection of books from other users. Find the books you need at great prices.',
    },
    {
      icon: <DollarSign size={36} strokeWidth={1.5} />,
      title: 'Sell Books',
      description: 'List your books for sale and earn money. Connect with other users looking for your books.',
    },
    {
      icon: <ArrowRightLeft size={36} strokeWidth={1.5} />,
      title: 'Swap Books',
      description: 'Exchange books with other readers. Find new books to read while giving your old books a new life.',
    },
];
  

const HowItWorks: React.FC = () => {
  return (
    <section className="my-14 text-center">
      <h2 className="text-3xl font-bold mb-4">How The Circuit Works</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        The Circuit makes it easy to buy, sell, and swap books. Here&apos;s how you can get started:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((step) => (
          <FeatureCard
            key={step.title}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;