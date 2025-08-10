import { IMAGES } from '../constants';
import Button from '@/components/common/Button';
import HowItWorks from '@/components/landingpage/HowItWorks';
import FeaturedBooks from '@/components/landingpage/FeaturedBooks';
import Benefits from '@/components/landingpage/Benefits'
import type { FeaturedBook } from '@/interfaces';
import JoinToday from '@/components/landingpage/JoinToday';
import TrustedBy from '@/components/landingpage/TrustedBy'
import { GetStaticProps, NextPage } from 'next/types';
import Link from 'next/link';
import { mockBooks } from '@/constants';

interface HomeProps {
  featuredBooks: FeaturedBook[];

}

const Home: NextPage<HomeProps> = ({ featuredBooks }) => {
  return (
    <main>
      <div className='flex flex-col max-w-[1200px] mx-auto px-4'>
      <section
        style={{
          backgroundImage: ` url(${IMAGES.hero})`,
        }}
        className="w-full h-[480px] bg-no-repeat bg-center bg-cover rounded-2xl my-6"
      >
        <div className='flex flex-col items-center justify-center text-white text-center h-full gap-6'>
          <p className='text-4xl md:text-6xl font-semibold'>Your Next Chapter Starts Here</p>
          <p className='text-lg md:text-2xl max-w-3xl'> Buy, sell, or swap books with fellow students and readers. Find your next great read or give your old books a new home.</p>
          <Link href='/browse' className='cursor-pointer'> <Button label="Browse Books" variant="primary" /> </Link>
         
        </div>
      </section>
      </div>

      <div className='flex flex-col max-w-[1200px] mx-auto px-4'>
        <HowItWorks/>

        <h2 className="text-3xl font-bold text-center mb-8">Featured Books</h2>
        <FeaturedBooks featuredBooks={featuredBooks} />
      </div>
      
      <Benefits/>

      <div className='flex flex-col max-w-[1200px] mx-auto px-4'> 
        <TrustedBy/>
      </div>
      <JoinToday/>
    
    </main>
    
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // This URL should be the deployed backend URL in production
 // const apiUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/books`;
// const res = await fetch(apiUrl);
const featuredBooks: FeaturedBook[] = mockBooks.map(
  ({ id, title, author, imageUrl }) => ({
    id,
    title,
    author,
    imageUrl,
  })
);

  return {
    props: {
      featuredBooks,
    },
  };
};

export default Home;
