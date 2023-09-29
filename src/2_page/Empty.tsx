import Image from 'next/image';

const Empty = () => {
  return (
    <div className="w-full min-h-[100%] flex flex-col items-center justify-center">
      <h2>Data not found! Try it again...</h2>
      <Image
        src={'/data_not_found.png'}
        width={500}
        height={500}
        alt="no data"
      />
    </div>
  );
};

export default Empty;
