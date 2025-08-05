import type { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '@/interfaces';

// lib/mockData.ts later :)
const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "Published in 1925, this novel explores themes of wealth, love, and the American Dream during the Roaring Twenties. It follows the enigmatic millionaire Jay Gatsby and his pursuit of Daisy Buchanan.",
    genre: ["Classic", "Fiction"],
    condition: "like new",
    imageUrl: "/assets/images/book-gatsby.png", 
    price: 12.00,
    swapAvailable: true,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2024-10-01T10:00:00Z"
  },
  {
    id: "2",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners written by Jane Austen in 1813. The novel follows the character development of Elizabeth Bennet.",
    genre: ["Classic", "Romance"],
    condition: "used",
    imageUrl: "/assets/images/book-pride-prejudice.png",
    price: 12.50,
    swapAvailable: false,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2024-10-02T11:30:00Z"
  },
  {
    id: "3",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel by Harper Lee published in 1960. Instantly successful, it is a classic of modern American literature, winning the Pulitzer Prize.",
    genre: ["Classic", "Fiction"],
    condition: "new",
    imageUrl: "/assets/images/book-mockingbird.png",
    price: 18.00,
    swapAvailable: true,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2024-10-03T14:00:00Z"
  },
  {
    id: "4",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel and cautionary tale by English writer George Orwell. It was published on 8 June 1949.",
    genre: ["Dystopian", "Sci-Fi"],
    condition: "like new",
    imageUrl: "/assets/images/book-1984.png",
    price: 16.25,
    swapAvailable: true,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2024-10-04T16:45:00Z"
  },
  {
    id: "5",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A novel about racial injustice in the Deep South.",
    genre: ["Classic", "Drama"],
    condition: "like new",
    imageUrl: "/assets/images/book-mockingbird.jpg",
    price: 11,
    swapAvailable: true,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2025-07-22T18:00:00Z",
  },
  {
    id: "6",
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel on surveillance and control.",
    genre: ["Dystopian", "Political Fiction"],
    condition: "used",
    imageUrl: "/assets/images/book-1984.jpg",
    price: 7,
    swapAvailable: true,
    owner: {
        id: "user_123",
          name: "Sophia Clark",
        avatarUrl: "/assets/images/avatar-sophia.png", 
        joinDate: "Joined 2021",
    },
    postedAt: "2025-07-18T14:00:00Z",
  },
  
];


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Book | { message: string }>
) {
  const { id } = req.query;

  const book = mockBooks.find((b) => b.id === id);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
}