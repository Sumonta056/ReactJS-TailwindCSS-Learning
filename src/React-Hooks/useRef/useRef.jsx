import React from "react";
import UseCase1 from "./useCase1.jsx";
import UseCase2 from "./useCase2.jsx";
import UseCase3 from "./useCase3.jsx";

function useRef() {
    return (
      <div className="flex items-center justify-center w-full h-screen gap-2">
        <UseCase1 />
        <UseCase2 />
        <UseCase3 />
      </div>
    );
  }

export default useRef;
