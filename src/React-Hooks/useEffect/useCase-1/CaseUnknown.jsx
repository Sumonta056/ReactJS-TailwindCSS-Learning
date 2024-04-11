import { useState, useEffect } from "react";

const RandomNumber = () => {
  const [number, setNumber] = useState(Math.random());

  useEffect(() => {
    document.title = `Random number: ${number}`;
  });

  const generateRandomNumber = () => {
    setNumber(Math.random());
  };

  return (
    <div className="w-full p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div className="p-6 max-w-md w-full space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            useEffect use case - 1
          </h2>
          <h3 className="text-xl mb-4">Running on every re-render</h3>
          <p className="p-2 text-white bg-stone-800">Random number: {number}</p>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={generateRandomNumber}
          >
            Refresh Screen
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomNumber;
