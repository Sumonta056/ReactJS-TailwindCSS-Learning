import React, { useState, useEffect } from "react";

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [text, setText] = useState("Light Mode On");

  useEffect(() => {
    const modeText = darkMode ? "Dark Mode On" : "Light Mode On";
    document.title = modeText;
    setText(modeText);

    if (darkMode) {
      setShowModal(true);
      setTimeout(() => setShowModal(false), 600);
    }
  }, [darkMode]);

  const handleCheckboxChange = () => setDarkMode((prev) => !prev);

  return (
    <div
      className={`w-full flex flex-col justify-center items-center justify-center ${
        darkMode ? "bg-gray-800" : "bg-white "
      }`}
    >
      <div className="p-6 max-w-md w-full space-y-8 bg-white rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">
            useEffect use case - 3
          </h2>
          <h3 className="text-xl mb-4">
            Running Mount When Clicking Dark Mode
          </h3>
        </div>
        <div className="border-2 p-5 border-gray-400 flex justify-center items-center gap-4">
          <label htmlFor="darkMode" className="">
            Dark Mode
          </label>
          <input
            name="darkMode"
            type="checkbox"
            checked={darkMode}
            onChange={handleCheckboxChange}
            className="h-6 w-6"
          />
        </div>
      </div>

      {showModal && (
        <div className="absolute top-4 flex justify-center bg-rose bg-opacity-50">
          <div className="bg-white p-4 rounded">
            <h2 className="text-black">Dark Mode Activated</h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default DarkModeToggle;
