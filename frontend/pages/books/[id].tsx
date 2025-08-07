import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Book, FeaturedBook } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/common/Button';
import { addItem } from '../../redux/cartSlice';
import toast from 'react-hot-toast';
import FeaturedBooks from '@/components/landingpage/FeaturedBooks';

interface BookPageProps {
  book: Book;
  swapSuggestions: FeaturedBook[];
}

const BookPage: NextPage<BookPageProps> = ({ book, swapSuggestions }) => {
  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-6">
        <Link href="/browse" className="hover:underline">Books</Link>
        <span> / </span>
        <span>{book.title}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div className="bg-gray-100 p-8 rounded-lg flex items-center justify-center">
          <Image src={book.imageUrl} alt={book.title} width={300} height={450} className="rounded-lg shadow-2xl" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{book.title}</h1>
          <p className="text-lg text-gray-600 mt-2">F. {book.author}</p>
          <p className="text-base text-gray-700 mt-4">{book.description}</p>
        </div>
      </div>

      <div className="mt-12 space-y-10">
        <section>
          <h2 className="text-xl font-bold mb-3">Condition</h2>
          <p className="text-gray-700">{book.condition}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-3">Owner</h2>
          <div className="flex items-center gap-4">
            <Image src={book.owner.avatarUrl} alt={book.owner.name} width={48} height={48} className="rounded-full" />
            <div>
              <p className="font-semibold text-gray-800">{book.owner.name}</p>
              <p className="text-sm text-gray-500">{book.owner.joinDate}</p>
            </div>
          </div>
        </section>

        <div className="flex items-center gap-4">
          {book.price && (
            <Button 
              label={`Buy - KSh ${book.price.toFixed(2)}`} 
              variant="primary" 
              // This would later navigate to a checkout page with the book's info
              onClick={() => console.log('Navigate to checkout for:', book.id)}
            />
          )}
          {book.swapAvailable && (
            <Button 
              label="Request Swap" 
              variant="secondary"
              // This would open a modal or start the swap request flow
              onClick={() => console.log('Initiate swap request for:', book.id)}
            />
          )}
        </div>
      </div>

      <div className="mt-20">
        <FeaturedBooks featuredBooks={swapSuggestions} />
      </div>
    </div>
  );
};

// --- Data Fetching ---
// Backend API 

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/books');
  const books: Book[] = await res.json();
  const paths = books.map((book) => ({
    params: { id: book.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  
  // Fetch the main book's details
  const bookRes = await fetch(`http://localhost:3000/api/books/${id}`);
  const book = await bookRes.json();
  
  // Fetch all books for swap suggestions
  const allBooksRes = await fetch('http://localhost:3000/api/books');
  const allBooks: FeaturedBook[] = await allBooksRes.json();
  
  // Filter out the current book from suggestions
  const swapSuggestions = allBooks.filter(b => b.id !== id);

  return { 
    props: { 
      book,
      swapSuggestions,
    },
    revalidate: 60, // Optional: re-generate the page every 60 seconds
  };
};

export default BookPage;