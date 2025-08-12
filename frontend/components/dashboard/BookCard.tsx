import Image from 'next/image';
import Link from 'next/link'

interface BookCardProps {
  id: string;
  imageUrl: string;
  title: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ id, imageUrl, title, author }) => {
  return (

    <Link href={`/dashboard/books/${id}`} className="text-center group">
      <div className="bg-[#F9F9F7] rounded-lg mb-4 p-3 flex items-center justify-center aspect-[3/4] cursor-pointer group-hover:shadow-xl transition-shadow">
        <Image src={imageUrl} alt={`Cover of ${title}`} width={150} height={200} className="object-contain shadow-md" />
      </div>
      <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate">By {author}</p>
    </Link>
  );
};

export default BookCard;