import Image from 'next/image';

interface BookCardProps {
  imageUrl: string;
  title: string;
  author: string;
}

const BookCard: React.FC<BookCardProps> = ({ imageUrl, title, author }) => {
  return (
    <div className="text-center">
      <div className="bg-gray-100 rounded-lg mb-4 p-3 flex items-center justify-center aspect-[3/4] cursor-pointer">
        <Image src={imageUrl} alt={`Cover of ${title}`} width={150} height={200} className="object-contain shadow-md" />
      </div>
      <h3 className="font-semibold text-gray-800 truncate">{title}</h3>
      <p className="text-sm text-gray-500 truncate">By {author}</p>
    </div>
  );
};

export default BookCard;