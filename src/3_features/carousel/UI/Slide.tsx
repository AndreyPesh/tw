import { FC } from 'react';
import Image from 'next/image';

interface SlideProps {
  urlImage: string;
}

const Slide: FC<SlideProps> = ({ urlImage }) => {
  return (
    <div className='min-w-[100%]'>
      <Image
        src={urlImage}
        width={500}
        height={500}
        alt={`Image ${urlImage}`}
        className='m-auto'
      />
    </div>
  );
};

export default Slide;
