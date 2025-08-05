// For Book Card or Listing
export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    genre: string[];
    condition: 'new' | 'like new' | 'used' | 'heavily used';
    imageUrl: string;
    price: number; // if it's being sold
    swapAvailable: boolean;
    owner: Owner;
    postedAt: string;
  }

export type FeaturedBook = Pick<Book, 'id' | 'title' | 'author' | 'imageUrl'>;

export interface Owner {
  id: string;
  name: string;
  avatarUrl: string;
  joinDate: string; // "Joined 2021"
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
  }
  
  // For Reusable Buttons
  export interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary';
    type?: 'submit' | 'button';
    className?: string;
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