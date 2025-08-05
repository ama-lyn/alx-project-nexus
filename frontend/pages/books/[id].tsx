import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/cartSlice';
import { Book } from '@/interfaces';
import Button from '@/components/common/Button';
import Image from 'next/image';

interface BookPageProps {
  book: Book;
}

const BookPage: NextPage<BookPageProps> = ({ book }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(book));
    // trigger the toast notification here
  };

  if (!book) return <p>Book not found.</p>;

  return (
    <div className="max-w-4xl mx-auto p-4 grid md:grid-cols-2 gap-8">
      <div>
        <Image src={book.imageUrl} alt={book.title} width={400} height={600} className="rounded-lg shadow-lg" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{book.title}</h1>
        <p className="text-xl text-gray-700 mt-2">by {book.author}</p>
        <p className="text-2xl font-bold text-[#6b35e8] my-4">KSh {book.price.toFixed(2)}</p>
        <p className="text-gray-600 mb-6">{book.description}</p>
        <Button label="Add to Cart" variant="primary" onClick={handleAddToCart} />
      </div>
    </div>
  );
};

// --- Data Fetching ---
// mock API endpoint for a single book
// e.g., pages/api/books/[id].ts

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch all book IDs to pre-render the paths
  const res = await fetch('http://localhost:3000/api/books');
  const books: Book[] = await res.json();
  const paths = books.map((book) => ({
    params: { id: book.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:3000/api/books/${params?.id}`);
  const book = await res.json();
  return { props: { book } };
};

export default BookPage;