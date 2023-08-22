import { UseFormRegisterReturn } from 'react-hook-form';

const InputPrice = ({
  register_min,
  register_max,
}: {
  register_min: UseFormRegisterReturn<'price_min'>;
  register_max: UseFormRegisterReturn<'price_max'>;
}) => {
  return (
    <div className="p-2 mb-2 border rounded shadow-md">
      <label className='font-bold mr-2'>Price:</label>
      <input
        className="p-1 border rounded w-20"
        type="number"
        placeholder='From'
        min={1}
        {...register_min}
      ></input>
      <input
        className="p-1 ml-3 mr-3 border rounded w-20"
        placeholder='To'
        type="number"
        min={1}
        {...register_max}
      ></input>
      <span>&#36;</span>
    </div>
  );
};

export default InputPrice;
