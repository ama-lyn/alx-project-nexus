import type { NextApiRequest, NextApiResponse } from 'next';
import { Book } from '@/interfaces';
import { mockBooks } from '@/constants';

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