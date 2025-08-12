import React from 'react';
import Image from 'next/image';
import StarIcon from '../common/StarIcon';

const testimonials = [
    {
      quote: "The Circuit is a lifesaver! I sold my old textbooks and got enough swap credits to get almost all the books for my next semester without spending a dime.",
      name: 'Amina Yusuf',
      university: 'University of Nairobi',
      avatarUrl: '/assets/avatars/amina.jpg',
      rating: 5,
    },
    {
      quote: "As a student on a budget, renting my most expensive books from The Circuit has saved me so much money. The process is super easy and trustworthy.",
      name: 'David Okoth',
      university: 'Strathmore University',
      avatarUrl: '/assets/avatars/david.jpg',
      rating: 5,
    },
    {
      quote: "I love how I can just browse the entire store's inventory online instead of having to visit. Found a rare book I needed for my dissertation. Highly recommend!",
      name: 'Chidinma Adebayo',
      university: 'University of Lagos',
      avatarUrl: '/assets/avatars/chidinma.jpg',
      rating: 4, 
    },
    {
      quote: "The quality of the secondhand books is amazing. Everything is checked properly, so you know you&apos;re not getting a book that&apos;s falling apart. So much better than other online groups.",
      name: 'Thabo Mbeki',
      university: 'University of Cape Town',
      avatarUrl: '/assets/avatars/thabo.jpg',
      rating: 5,
    },
  ];

const Testimonials: React.FC = () => {
  const extendedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="mb-8 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">What Our Readers Are Saying</h2>
      </div>

      {/* The marquee container uses the 'group' class for the hover-pause effect */}
      <div className="group relative w-full">
        {/* Inner container with the animation class */}
        <div className="flex animate-marquee">
          {extendedTestimonials.map((testimonial, index) => (
            // Each individual testimonial card
            <div key={index} className="flex-shrink-0 w-[350px] mx-4 p-6 bg-white border rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-700 italic">&quot;{testimonial.quote}&quot;</p>
              <div className="flex items-center mt-4">
                <Image
                  src={testimonial.avatarUrl}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;