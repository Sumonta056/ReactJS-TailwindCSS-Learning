import React from "react";
import { ComponentA } from "./component";

function index() {
  const user = {
    name: "John Doe",
    role: "Admin",
  };
  return (
    <div className="w-1/2 m-10 p-10 bg-violet-200">
      <h1 className="text-3xl font-bold w-full flex justify-between text-center p-3 text-teal-800">
        Using Prop-Passing
      </h1>
      <ComponentA user={user} />
    </div>
  );
}

export default index;
