import React from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { Book, Search } from 'lucide-react'; // Import icons from Lucide

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center p-4">
      
      <div className="relative w-40 h-40">
        <Book
          className="w-full h-full text-gray-300"
          strokeWidth={1}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-search-magnify">
          <Search
            className="w-20 h-20 text-blue-500"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <h1 className="mt-8 text-3xl font-bold text-gray-800">
        Oops! This page is off the shelf.
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        We searched our catalog, but this page couldn&apos;t be found.
      </p>

      <div className="mt-8">
        <Link href="/">
          <Button label="Return to Homepage" variant="primary" />
        </Link>
      </div>
    </div>
  );
};

export default Custom404;