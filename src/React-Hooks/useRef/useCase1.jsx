import React, { useRef } from "react";

function App() {
  // Creating a ref object using useRef hook
  const focusPoint = useRef(null);
  const onClickHandler = () => {
    focusPoint.current.value = "The quick brown fox jumps over the lazy dog";
    focusPoint.current.focus();
  };
  return (
    <div className="flex flex-col items-center justify-center w-3/6 h-screen gap-4 bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">React useRef Hook</h1>
        <h2 className="pb-5 text-base text-gray-600 px-7">
          Using useRef Hook to Focus and Populate Text in a Textarea in React
        </h2>
      </div>
      <div className="container max-w-lg px-6 py-8 shadow-md rounded-xl bg-rose-400">
        <div className="flex justify-center mb-4">
          <button
            onClick={onClickHandler}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Generate
          </button>
        </div>
        <p className="mb-4 text-center">
          Click on the action button to focus and populate the text.
        </p>
        <textarea
          ref={focusPoint}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows="4"
        />
      </div>
    </div>
  );
}

export default App;
