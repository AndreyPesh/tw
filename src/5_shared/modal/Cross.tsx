import { RxCross1 } from 'react-icons/rx';

const Cross = () => {
  return (
    <span className="absolute z-200 bg-transparent flex w-[25px] h-[25px] border top-5 right-5 cursor-pointer" data-modal="close">
      <RxCross1 size={25} className='absolute z-[10]'/>
    </span>
  );
};

export default Cross;
