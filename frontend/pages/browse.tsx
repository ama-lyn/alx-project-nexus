import { GetStaticProps, NextPage } from 'next';
import { Book } from '@/interfaces';
import BookCard from '@/components/common/BookCard';
import { Search } from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { mockBooks } from '@/constants';

interface BrowsePageProps {
    allBooks: Book[];
}

const BrowsePage: NextPage<BrowsePageProps> = ({ allBooks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Categories');
  const [activeSort, setActiveSort] = useState('Newest Arrivals');

  // useMemo ensures this complex filtering only re-runs when needed
  const filteredAndSortedBooks = useMemo(() => {
    let filtered = allBooks;

    // Filter by Category
    if (activeCategory !== 'All Categories') {
      filtered = filtered.filter(book => book.genre.includes(activeCategory));
    }

    // Filter by Search Term
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Sort the results
    switch (activeSort) {
      case 'Price':
        return filtered.sort((a, b) => a.price - b.price);
      case 'Newest Arrivals':
        return filtered.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
      // Add more sorting cases like 'Popularity' later
      default:
        return filtered;
    }
  }, [allBooks, activeCategory, searchTerm, activeSort]);


  const categories = ['All Categories', 'Fiction', 'Business', 'Textbooks', 'Tech'];
  const sortOptions = ['Newest Arrivals', 'Price', 'Condition', 'Popularity'];
  
  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold">Browse Books</h1>
      <p className="text-lg text-gray-600 mt-2">Explore a wide range of books available for purchase, sale, or swap.</p>

      {/* Search Bar */}
      <div className="relative mt-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input 
          type="text"
          placeholder="Search for books by title, author, or ISBN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg border-transparent focus:border-blue-500 focus:bg-white focus:ring-0"
        />
      </div>

      {/* Category Filters */}
      <section className="mt-8">
        <div className="flex flex-wrap gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                activeCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Sort By Filters */}
      <section className="mt-6">
        <div className="flex items-center gap-4">
          <h3 className="text-md font-semibold">Sort By</h3>
          <div className="flex flex-wrap gap-3">
            {sortOptions.map(opt => (
              <button
                key={opt}
                onClick={() => setActiveSort(opt)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeSort === opt ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Book Grid */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10">
        {filteredAndSortedBooks.map(book => (
          <BookCard key={book.id} {...book} />
        ))}
      </div>

      {/* No Results Message */}
      {filteredAndSortedBooks.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold">No books match your criteria.</h2>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
    // const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books`;
    // const res = await fetch(apiUrl);
    // const allBooks: Book[] = await res.json();

    
    return { 
      props: { 
        allBooks: mockBooks,
      },
      revalidate: 60, 
    };
  };
export default BrowsePage;