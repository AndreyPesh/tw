const FilterForm = () => {
  return (
    <div className="w-1/3">
      Filter form
      <form action="">
        <div>
          <label>Name:</label>
          <select name="phone_name">
            <option value="phone 1">Phone 1</option>
            <option value="phone 2">Phone 2</option>
            <option value="phone 3">Phone 3</option>
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
          <input type="range" step={1} max={5}/>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;
