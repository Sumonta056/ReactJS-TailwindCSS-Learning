import React from "react";
import BeforeContext from "./Before-PropPassing/index.jsx";
import AfterContext from "./After-usingContext/index.jsx";

function useContext() {
  return (
    <div className="flex gap-10 bg-teal-800 w-full h-screen">
      <BeforeContext />
      <AfterContext />
    </div>
  );
}

export default useContext;
