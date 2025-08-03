import { Book, SwapRequest } from "@/interfaces";

//images
export const IMAGES = {
  hero: '/assets/images/hero-image.png',
};


// Sample Books
export const MOCK_BOOKS: Book[] = [
  {
    id: "1",
    title: "Atomic Habits",
    author: "James Clear",
    description: "A book on small habits that lead to big change.",
    genre: ["Self-help", "Productivity"],
    condition: "like new",
    imageUrl: "/assets/books/atomic-habits.jpg",
    price: 10,
    swapAvailable: true,
    ownerId: "user123",
    postedAt: "2025-07-30T10:00:00Z",
  },
  {
    id: "2",
    title: "The Midnight Library",
    author: "Matt Haig",
    description: "A novel about second chances and regrets.",
    genre: ["Fiction", "Fantasy"],
    condition: "used",
    imageUrl: "/assets/books/midnight-library.jpg",
    price: 12,
    swapAvailable: false,
    ownerId: "user456",
    postedAt: "2025-07-25T12:00:00Z",
  }
];
