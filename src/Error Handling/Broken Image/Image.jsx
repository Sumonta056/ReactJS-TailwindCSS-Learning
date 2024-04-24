import React from "react";
import Team from "./Team.png";
function Image() {
  return (
    <div className="w-2/4 p-5 mx-auto">
      <h2 className="w-full p-4 mx-auto text-xl text-center border-2 shadow-lg">
        Broken Image Handler
        <p className="p-1 text-sm text-gray-400">
          To see effect change src in Browser Developer Tools
        </p>
      </h2>

      <img
        src={Team}
        alt="Google Logo"
        onError={(e) => {
          e.target.onerror = null; // Prevents infinite loop if fallback image also fails
          e.target.src = "./vite.png";
        }}
        className="flex justify-center w-full p-2"
      />
    </div>
  );
}

export default Image;
