import Image from 'next/image';
import Rating from '@/src/6_shared/UI/rating/Rating';

const PreviewProductCard = ({ perPage }: { perPage: number }) => {
  const listCards = new Array(perPage).fill('');

  return (
    <div className="py-5 w-full flex flex-wrap justify-center gap-5">
      {listCards.map(() => (
        <div className="p-5 w-full sm:max-w-xs box-border text-sm border rounded-lg cursor-pointer hover:shadow-lg animate-flickering bg-gray-200">
          <div className="rounded overflow-hidden select-none">
            <Image
              src={'/white.jpg'}
              width={500}
              height={500}
              alt={'Phone loading '}
            />
          </div>
          <h3 className="my-2">
            <b className="w-40 h-5 bg-slate-300 block rounded-md"></b>
          </h3>
          <h3 className="w-20 h-3 bg-slate-300 block rounded"></h3>
          <div className="my-1">
            <Rating rating={0} empty />
          </div>
          <span className="w-full inline-flex justify-between items-center">
            <h3 className="w-60 h-6 bg-slate-300 block rounded"></h3>
          </span>
        </div>
      ))}
    </div>
  );
};

export default PreviewProductCard;

{
  /* <div className="p-5 w-full sm:max-w-xs box-border text-sm border rounded-lg cursor-pointer hover:shadow-lg">
           <Image
            src={'/avatar.svg'}
            width={500}
            height={500}
            alt={'Phone loading '}
          />
          <h3>
            <b>{'brandName'}</b>
          </h3>
          <h3>{'model'}</h3>
          <div>
            <Rating rating={0} />
          </div>
          <span className="p-2 w-full inline-flex justify-between items-center">
            <h3 className="font-bold text-base">Price: {0} &#36;</h3>
           
          </span>
        </div> */
}
