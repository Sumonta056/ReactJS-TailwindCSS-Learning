import React, { useContext } from "react";
import { UserContext } from "./index.jsx";

// Component A
export const ComponentA = () => {
  const user = useContext(UserContext);
  return (
    <div className="p-4 bg-blue-200">
      <h1 className="text-xl font-bold">Component A</h1>
      <p className="text-md p-2">
        Username: {user.name} +{" "}
        <span className="font-bold text-rose-700">
          {" "}
          I got data from Parent-Context
        </span>
      </p>
      <ComponentB />
    </div>
  );
};

// Component B
export const ComponentB = () => {
  const user = useContext(UserContext);
  return (
    <div className="p-4 bg-blue-300">
      <h1 className="text-xl font-bold">Component B</h1>
      <p className="text-md p-2">
        Username: {user.name} +{" "}
        <span className="font-bold text-rose-700">
          {" "}
          I got data from Parent-Context
        </span>
      </p>
      <ComponentC />
    </div>
  );
};

// Component C
export const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div className="p-4 bg-blue-400">
      <h1 className="text-xl font-bold">Component C</h1>
      <p className="text-lg">Username: {user.name}</p>
      <p className="text-lg">Role: {user.role}</p>

      <p className="text-md p-2">
        Username: {user.name} +{" "}
        <span className="font-bold text-rose-700">
          {" "}
          I got data from Parent-Context
        </span>
      </p>
    </div>
  );
};
