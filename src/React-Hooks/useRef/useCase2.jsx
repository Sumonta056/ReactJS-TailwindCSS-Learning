import React, { useState, useEffect, useRef } from "react";

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  });

  const prevCount = prevCountRef.current;

  return (
    <div className="flex flex-col items-center justify-center w-2/6 h-screen bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">React useRef Hook</h1>
        <h2 className="pb-5 text-base text-gray-600 px-7">
          Using useRef Hook to Track Previous State Value
        </h2>
      </div>
      <div className="p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold text-gray-700">
          Now: {count}, before: {prevCount}
        </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full py-2 text-white transition duration-500 ease-in-out rounded bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 focus:outline-none"
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default App;
