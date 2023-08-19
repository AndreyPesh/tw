import { fetchBrandListPhone } from '@/src/5_shared/utils/server/fetching/phone/data';

const FilterForm = async () => {
  const responseListBrandPhone = await fetchBrandListPhone();

  return (
    <div className="w-1/3">
      Filter form
      <form action="">
        <div>
          <label>Name:</label>
          <select name="phone_name">
            {responseListBrandPhone &&
              responseListBrandPhone.data.length > 0 &&
              responseListBrandPhone.data.map((brand) => (
                <option key={brand.id} value={brand.id}>
                  {brand.name}
                </option>
              ))}
          </select>
        </div>
        <div className="p-2 border rounded">
          <label>Price:</label>
          <span>From</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>To</span>
          <input className="w-20 border rounded" type="number"></input>
          <span>&#36;</span>
        </div>
        <div>
          <input type="range" step={1} max={5} />
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
