import React from 'react';
import Image from 'next/image';
import Testimonials from './Testimonials';

const universities = [
  { 
    name: 'Riara University', 
    src: '/assets/logos/riara.jpg', 
    width: 180, 
    height: 80 
  },
  { 
    name: 'Strathmore University', 
    src: '/assets/logos/strathmore.jpg', 
    width: 180, 
    height: 80 
  },
  { 
    name: 'University of Cape Town', 
    src: '/assets/logos/uct.png',
    width: 300, 
    height: 200
  },
  { 
    name: 'Kabarak University', 
    src: '/assets/logos/kabarak.png',
    width: 180, 
    height: 80
  },
  { 
    name: 'African Leadership University', 
    src: '/assets/logos/alu.svg', 
    width: 180, 
    height: 80
  },
];

const TrustedBy: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <Testimonials/>
      <div className="max-w-screen-xl mx-auto px-8 md:px-8">
        <h3 className="text-center text-sm text-gray-500 font-semibold tracking-wider">
          JOINED BY STUDENTS FROM UNIVERSITIES ACROSS AFRICA
        </h3>
        <div className="mt-8 flex justify-center items-center flex-wrap gap-x-12 gap-y-8">
          {universities.map((uni) => (
            <div key={uni.name} className="flex-shrink-0" title={uni.name}>
              <Image
                src={uni.src}
                alt={`${uni.name} logo`}
                width={uni.width}
                height={uni.height}
                className="filter grayscale hover:grayscale-0 transition-all duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;