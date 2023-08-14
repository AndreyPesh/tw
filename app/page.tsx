import { Suspense } from 'react';
import Loading from './loading';
import Pagination from '@/src/3_features/pagination/Pagination';

const Home = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="container">main</main>
        <div className="p-5">
          <Pagination></Pagination>
        </div>
      </Suspense>
    </>
  );
};

export default Home;
