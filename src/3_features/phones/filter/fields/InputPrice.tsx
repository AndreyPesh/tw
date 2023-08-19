import { UseFormRegisterReturn } from 'react-hook-form';

const InputPrice = ({
  register_min,
  register_max,
}: {
  register_min: UseFormRegisterReturn<'price_min'>;
  register_max: UseFormRegisterReturn<'price_max'>;
}) => {
  return (
    <div className="p-2 border rounded">
      <label>Price:</label>
      <span>From</span>
      <input
        className="w-20 border rounded"
        type="number"
        {...register_min}
      ></input>
      <span>To</span>
      <input
        className="w-20 border rounded"
        type="number"
        {...register_max}
      ></input>
      <span>&#36;</span>
    </div>
  );
};

export default InputPrice;
