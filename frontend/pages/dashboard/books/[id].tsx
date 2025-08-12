import { GetStaticPaths, GetStaticProps } from 'next';
import { useDispatch } from 'react-redux';
import { addItem } from '@/redux/cartSlice';
import toast from 'react-hot-toast';
import { Book, FeaturedBook } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import Tag from '@/components/common/Tag';
import FeaturedBooks from '@/components/landingpage/FeaturedBooks';
import { ShoppingCart, ArrowRightLeft, CalendarClock } from 'lucide-react';
import { mockBooks } from '@/constants';
import DashboardLayout from '@/components/layout/DashboardLayout';
import type { NextPageWithLayout } from '../../_app';

interface BookPageProps {
  book: Book;
  swapSuggestions: FeaturedBook[];
}
const BookPage: NextPageWithLayout<BookPageProps> = ({ book, swapSuggestions }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => { dispatch(addItem(book)); toast.success(`${book.title} added to cart!`); };
  const handleSwap = () => toast.error('Swap functionality coming soon!');
  const handleRent = () => toast.error('Rental functionality coming soon!');

  if (!book) return <div className="text-center p-12">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/browse" className="hover:underline">Books</Link><span> / {book.title}</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {/* Left Column: Image */}
        <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-sm flex items-center justify-center">
          <Image src={book.imageUrl} alt={book.title} width={400} height={600} className="object-contain" />
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-bold text-gray-900">{book.title}</h1>
          <p className="text-xl text-gray-600 mt-1">by {book.author}</p>

          {/* Tags */}
          <div className="flex items-center gap-2 my-4">
            {book.tags?.map(tag => (
              <Tag key={tag} label={tag} color={tag === 'Bestseller' ? 'green' : 'blue'} />
            ))}
          </div>

          {/* Synopsis */}
          <h2 className="text-lg font-semibold mt-4 mb-2">Synopsis</h2>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>
          
          {/* Meta Info Block */}
          <div className="mt-6 space-y-2 text-sm">
            <p><span className="font-semibold text-gray-800">Genre:</span> {book.genre.join(', ')}</p>
            <p><span className="font-semibold text-gray-800">Condition:</span> {book.condition}</p>
            <p><span className="font-semibold text-gray-800">Availability:</span>
              <span className="text-green-600 font-medium ml-1">{book.availability}</span>
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="mt-8 flex items-center gap-3">
            <Button 
              label={`Buy - KSh ${book.price.toFixed(2)}`} 
              variant="primary" 
              onClick={handleAddToCart}
              icon={<ShoppingCart size={18} />}
            />
            <Button 
              label="Request Swap" 
              variant="secondary" 
              onClick={handleSwap}
              disabled={!book.isSwappable}
              icon={<ArrowRightLeft size={18} />}
            />
            <Button 
              label="Rent" 
              variant="secondary" 
              onClick={handleRent}
              disabled={!book.isRentable}
              icon={<CalendarClock size={18} />}
            />
          </div>
        </div>
      </div>

      {/* Swap Suggestions */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">Swap Suggestions</h2>
        <FeaturedBooks featuredBooks={swapSuggestions} />
      </div>
    </div>
  );
};

// --- Data Fetching ---
export const getStaticPaths: GetStaticPaths = async () => {
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books`;
  // const res = await fetch(apiUrl);
  // const books: Book[] = await res.json();
  const paths = mockBooks.map((book) => ({ params: { id: book.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  // const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books`;
  // const id = params?.id as string;
  // const bookRes = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books${id}`);
  
  // if (!bookRes.ok) {
  //  return { notFound: true }; // Handle case where book doesn't exist
  // }

  const book = mockBooks.find(b => b.id === id);
  
  // Handle case where book is not found
  if (!book) {
    return { notFound: true };
  }
  
  // const allBooksRes = await fetch(apiUrl);
  // const allBooks: FeaturedBook[] = await allBooksRes.json();
  // const swapSuggestions = allBooks.filter(b => b.id !== id);
  // Get swap suggestions by filtering the main array
  const swapSuggestions = mockBooks
    .filter(b => b.id !== id)
    .map(({ id, title, author, imageUrl }) => ({ id, title, author, imageUrl })); // Ensure it matches FeaturedBook type

  return { 
    props: { 
      book,
      swapSuggestions,
    },
    revalidate: 60,
  };
};

BookPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default BookPage;