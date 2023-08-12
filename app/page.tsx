import { Suspense } from 'react';
import Loading from './loading';
import Main from '@/src/1_page/Main';


const Home = async () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="container">main</main>
        <Main />
      </Suspense>
    </>
  );
};

export default Home;
