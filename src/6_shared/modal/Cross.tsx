import { RxCross1 } from 'react-icons/rx';

const Cross = () => {
  return (
    <>
      <RxCross1 size={25} className="absolute top-5 right-5" />
      <span
        className="absolute bg-transparent block w-[25px] h-[25px] top-5 right-5 cursor-pointer"
        data-modal="close"
      ></span>
    </>
  );
};

export default Cross;
