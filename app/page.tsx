import Header from '@/src/2_widgets/header/Header';
import { Suspense } from 'react';
import Loading from './loading';
import { getUserData } from '@/src/5_shared/utils/server/fetching/user/data';

const Home = async () => {
  const userData = await getUserData();
  return (
    <>
      <Header user={userData} />
      <Suspense fallback={<Loading />}>
        <main className="container">main</main>
      </Suspense>
    </>
  );
};

export default Home;
