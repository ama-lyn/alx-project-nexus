import React from 'react';
import FeatureCard from '@/components/common/FeatureCard';
import { Users, ShieldCheck, Banknote } from 'lucide-react';


const benefits = [
  {
    icon: <Users size={32} />,
    title: 'Community of Readers',
    description: 'Connect with a community of students and readers. Share your love for books and discover new reads.',
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Safe and Secure',
    description: 'Our platform ensures secure transactions and user safety. Buy and sell with confidence.',
  },
  {
    icon: <Banknote size={32} />,
    title: 'Affordable Books',
    description: 'Find books at affordable prices. Save money while expanding your library.',
  },
];

const Benefits: React.FC = () => {
  return (
    <section className="my-14 text-center">
      <h2 className="text-3xl font-bold mb-4">Why Choose The Circuit?</h2>
      <p className="max-w-2xl mx-auto text-gray-600 mb-12">
        The Circuit offers a unique platform for book lovers. Here are some reasons to choose The Circuit.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit) => (
          <FeatureCard
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Benefits;