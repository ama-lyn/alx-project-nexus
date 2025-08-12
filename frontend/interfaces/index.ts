// For Book Card or Listing
  export interface Book {
    id: string; // SKU or ISBN from the bookstore
    title: string;
    author: string;
    description: string;
    condition: string;
    imageUrl: string;
    price: number; // Every book has a price
    isSwappable: boolean; // Can this book be acquired with Swap Credits?
    isRentable: boolean; // Is this book available for rent?
    postedAt: string; // When the store listed it
    tags?: ('Bestseller' | 'New Arrival')[]; 
    availability: 'In Stock' | 'Out of Stock';
    genre: string[];
  }

export type FeaturedBook = Pick<Book, 'id' | 'title' | 'author' | 'imageUrl'>;

export interface CartItem extends Book {
  quantity: number;
}

export interface UserSubmission {
  id: string;
  bookTitle: string;
  status: 'Pending Inspection' | 'Accepted' | 'Rejected';
  submittedDate: string;
  creditValue?: number; // Value in Swap Credits if accepted
  payoutValue?: number; // Payout in cash if accepted
  rejectionReason?: string; // Reason if rejected
}
export interface UserRental {
  id: string;
  bookTitle: string;
  imageUrl: string;
  rentalDate: string;
  returnDate: string;
  status: 'Rented' | 'Returned' | 'Overdue';
}

export interface UserMessage {
  id: string;
  subject: string;
  lastMessage: string;
  lastMessageDate: string;
  isRead: boolean;
  relatedTo?: string; // e.g., "Order #TC1234"
} 
  // For Swap Requests
export interface SwapRequest {
    id: string;
    requesterId: string;
    requesterBookId: string;
    ownerId: string;
    ownerBookId: string;
    status: 'pending' | 'accepted' | 'declined' | 'cancelled';
    createdAt: string;
  }
  
  // User Info
  export interface User {
    id: string;
    name: string;
    email: string;
    avatarUrl?: string;
    location: string;
    bio?: string;
    swapCreditBalance: number;
  }
  
  // For Reusable Buttons
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
    className?: string;  
    icon?: React.ReactNode;

  }
  
// Book Categories
export type BookCategory = | 'course-books' | 'novels' | 'self-help'
  | 'language-learning'
  | 'technical-hobby'
  | 'religious-spiritual';

export type BookCondition = 
  | 'new'
  | 'like-new'
  | 'good'
  | 'fair'
  | 'poor';

export type BookAvailability = 
  | 'available'
  | 'pending'
  | 'sold'
  | 'swapped'
  | 'reserved';

  export interface FooterLinksProps {
    links: {
      first: string;
      second: string;
      third: string;
      fourth: string;
    }
  }