import React, { Suspense } from "react";
// Define your data directly in your code
const data = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
  },
  {
    firstName: "Anna",
    lastName: "Smith",
    age: 28,
    email: "anna.smith@example.com",
  },
  {
    firstName: "Peter",
    lastName: "Jones",
    age: 45,
    email: "peter.jones@example.com",
  },
];

const DataComponent = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-center">Refresh Page To See Loading Effect</p>
      {data.map((item, index) => (
        <div key={index} className="p-4 m-4 bg-blue-200 rounded shadow-lg">
          <h2 className="mb-2 text-xl font-bold">
            {item.firstName} {item.lastName}
          </h2>
          <p className="text-gray-700">Age: {item.age}</p>
          <p className="text-gray-700">Email: {item.email}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-1/2 mx-auto">
          <DataComponent />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
