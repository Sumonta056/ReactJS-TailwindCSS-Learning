import React, { useState, useRef } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const nameRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setName(nameRef.current.value);
    setMessage(messageRef.current.value);
    nameRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="flex flex-col items-center justify-center w-2.5/6 h-screen space-y-8 bg-gray-200">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">React useRef Hook</h1>
        <h2 className="text-gray-600 px-7 text-md">
          Using useRef Hook to Capture and Display Form Input Values in React
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        className="p-8 space-y-4 bg-white rounded shadow-md w-96"
      >
        <label className="block">
          <span className="text-gray-700">Name</span>
          <input
            ref={nameRef}
            type="text"
            placeholder="Enter your name"
            className="block w-full px-3 py-2 mt-1 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          />
        </label>
        <label className="block">
          <span className="text-gray-700">Message</span>
          <input
            ref={messageRef}
            type="text"
            placeholder="Enter a message"
            className="block w-full px-3 py-2 mt-1 mb-4 text-gray-700 border rounded-lg focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="w-full py-2 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
      {name && message && (
        <div className="p-4 text-xl text-gray-500 border-2 border-gray-400">{`Name: ${name}, Message: ${message}`}</div>
      )}
    </div>
  );
}

export default App;
