import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';

const Home = async () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <main className="container">main</main>
      </Suspense>
    </>
  );
};

export default Home;
