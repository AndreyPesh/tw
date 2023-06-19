'use client';

import Image from 'next/image';

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <Image width={400} height={500} alt="Error page" src="./error.svg" />
      <h2>Something went wrong!</h2>
    </div>
  );
}
