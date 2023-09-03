import { Suspense } from 'react';
import Loading from './loading';

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
