import { useEffect, useState } from "react";

const array = [
  { key: "1", type: "Planet", value: "Tatooine" },
  { key: "2", type: "Planet", value: "Alderaan" },
  { key: "3", type: "Starship", value: "Death Star" },
  { key: "4", type: "Starship", value: "CR90 corvette" },
  { key: "5", type: "Starship", value: "Star Destroyer" },
  { key: "6", type: "Person", value: "Luke Skywalker" },
  { key: "7", type: "Person", value: "Darth Vader" },
  { key: "8", type: "Person", value: "Leia Organa" },
];

const UseCaseLiveFilter = (props) => {
  const [inputValue, setInputValue] = useState("");
  const [inputType, setInputType] = useState("");
  const [filteredArray, setFilteredArray] = useState(array);

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };

  const inputTypeHandler = (e) => {
    setInputType(e.target.value);
  };

  useEffect(() => {
    setFilteredArray((_) => {
      const newArray = array
        .filter((item) => item.value.includes(inputValue))
        .filter((item) => item.type.includes(inputType));
      return newArray;
    });
  }, [inputValue, inputType]);

  // Prepare array to be rendered
  const listItems = filteredArray.map((item) => (
    <tr className="border-2 border-gray-400">
        <td className="px-4 py-4 bg-blue-200 text-center text-black">{item.type}</td>
        <td className="px-4 py-4 bg-green-200 text-center text-black">{item.value}</td>
    </tr>
  ));

  return (
    <div className="container mx-auto px-4">
      <hr className="my-4" />
      <h2 className="text-2xl font-bold mb-2">useEffect use case</h2>
      <h3 className="text-lg mb-4">Running on state change: live filtering</h3>
      <form className="flex justify-between items-center mb-4 gap-5">
        <div className="w-full">
          <label htmlFor="input-type" className="p-2 block text-sm font-bold mb-2">
            Filter by <b>type</b>
          </label>
          <input
            type="text"
            id="input-type"
            autoComplete="off"
            placeholder="Search by type..........."
            onChange={inputTypeHandler}
            className="w-full px-3 py-2 border border-gray-500 rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="w-full">
          <label htmlFor="input-value" className="p-2 block text-sm font-bold mb-2">
            Filter by <b>value</b>
          </label>
          <input
            type="text"
            id="input-value"
            autoComplete="off"
            placeholder="Search by value..........."
            onChange={inputValueHandler}
            className="w-full px-3 py-2 border border-gray-500 rounded shadow appearance-none text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
      <table className="table-auto w-full border-2 border-gray-500">
        <thead>
          <tr className="border-2 border-gray-500">
            <th className="px-4 py-2 text-xl">Type</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    </div>
  );
};

export default UseCaseLiveFilter;
