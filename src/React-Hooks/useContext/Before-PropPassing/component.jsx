export const ComponentA = ({ user }) => (
  <div className="p-4 bg-blue-200">
    <h1 className="text-xl font-bold">Component A</h1>
    <p className="text-md p-2">
      Username: {user.name} +{" "}
      <span className="font-bold text-green-700"> I got data from Parent</span>
    </p>

    <ComponentB user={user} />
  </div>
);

// Component B
export const ComponentB = ({ user }) => (
  <div className="p-4 bg-blue-300">
    <h1 className="text-xl font-bold">Component B</h1>
    <p className="text-md p-2">
      Username: {user.name} +{" "}
      <span className="font-bold text-green-700">
        {" "}
        I got data from Component A
      </span>
    </p>
    <ComponentC user={user} />
  </div>
);

// Component C
export const ComponentC = ({ user }) => (
  <div className="p-4 bg-blue-400">
    <h1 className="text-xl font-bold">Component C</h1>
    <p className="text-lg">Username: {user.name}</p>
    <p className="text-lg">Role: {user.role}</p>
    <p className="text-md p-2">
      Username: {user.name} +{" "}
      <span className="font-bold text-green-700">
        {" "}
        I got data from Component B
      </span>
    </p>
  </div>
);
