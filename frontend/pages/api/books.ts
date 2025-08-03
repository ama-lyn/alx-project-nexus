import type { NextApiRequest, NextApiResponse } from 'next';
import type { FeaturedBook } from '@/interfaces';
import { mockBooks } from '@/constants';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FeaturedBook[]>
) {
  if (req.method === 'GET') {
   //returning the first four as featured 
    res.status(200).json(mockBooks);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}