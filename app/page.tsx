import { Suspense } from 'react';
import Loading from './loading';
import InfinityCarousel from '@/src/3_features/infinity/Infinity';

const Home = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="container">main
        </main>
      </Suspense>
    </>
  );
};

export default Home;
