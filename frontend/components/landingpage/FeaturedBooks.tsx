import BookCard from '../common/BookCard';
import type { FeaturedBook } from '@/interfaces'; 

export interface FeaturedBooksProps {
  featuredBooks: FeaturedBook[];
}

const FeaturedBooks: React.FC<FeaturedBooksProps> = ({ featuredBooks }) => {
  return (
    <section className="my-14">
      <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
      <div className="flex items-stretch space-x-6 overflow-x-auto pb-4 no-scrollbar">
        {/*
          THIS IS THE KEY:
          I use .slice(0, 5) to create a new array containing only the first 5 items.
          Then, map over that new, smaller array.
        */}
        {featuredBooks.slice(0, 5).map((book) => (
          <div key={book.id} className="flex-shrink-0 w-[200px] md:w-[240px]">
            <BookCard
              title={book.title}
              author={book.author}
              imageUrl={book.imageUrl}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;