import CardForm from './CardForm';

const Card = () => {
  return (
    <div className="p-[13px] w-full flex flex-col justify-between max-w-[324px] min-h-[192px] bg-gradient-to-r from-[#FD0E0E] via-[#AE2743] to-[#703C6D] text-white rounded-lg ">
      <div className="w-full flex justify-between">
        <span className="w-[26.5px] h-[25px] bg-bank inline-flex"></span>
        <span className="pl-[7px] grow uppercase">Fyi bank</span>
        <span className="uppercase">Credit</span>
      </div>
      <CardForm />
      <div className="text-end font-bold">
        <span className="uppercase">Visa</span>
      </div>
    </div>
  );
};

export default Card;
