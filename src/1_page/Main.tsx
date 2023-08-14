'use client';

import { main } from '@/prisma/seed';

const Main = () => {
  const add = async () => {
    await main();
    fetch('/api/phone/all')
      .then((res) => res.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <button onClick={add}>Add random category</button>
    </div>
  );
};

export default Main;
