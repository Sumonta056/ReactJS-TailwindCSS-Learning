import React from "react";
import Effect1 from "./useCase-2/UseCaseFetchApi";
import Effect2 from "./useCase-3/DarkModeToggle";
import Effect3 from "./useCase-1/CaseUnknown";

function useEffect() {
  return (
    <div className="flex">
      <Effect3 />
      <Effect1 />
      <Effect2 />
    </div>
  );
}

export default useEffect;
