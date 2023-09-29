import Image from 'next/image';

const EmptyCart = () => {
  return (
    <div className='flex w-full h-full items-center justify-center'>
      <Image
        src={'/empty-cart.svg'}
        width={200}
        height={200}
        alt="empty-cart"
      />
    </div>
  );
};

export default EmptyCart;
