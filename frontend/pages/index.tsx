import { IMAGES } from '../constants';
import Button from '@/components/common/Button';

const Home: React.FC = () => {
  return (
    <div className='flex flex-col max-w-[1200px] mx-auto px-4'>
      <section
        style={{
          backgroundImage: ` url(${IMAGES.hero})`,
        }}
        className="w-full h-[480px] bg-no-repeat bg-center bg-cover rounded-2xl my-6"
      >
        <div className='flex flex-col items-center justify-center text-white text-center h-full gap-6'>
          <p className='text-4xl md:text-6xl font-semibold'>Your Next Chapter Starts Here</p>
          <p className='text-lg md:text-2xl max-w-3xl'>
            Buy, sell, or swap books with fellow students and readers. Find your next great read or give your old books a new home.
          </p>
          <Button label="Browse Books" variant="primary" />
        </div>
      </section>
    </div>
  );
};

export default Home;
