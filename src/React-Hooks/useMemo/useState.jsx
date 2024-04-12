import React, { useState, useMemo } from "react";

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
  }));

  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center justify-center gap-2">
        <h1 className="text-2xl font-bold text-gray-700">React useMemo Hook</h1>
        <h2 className="pb-5 text-base text-gray-600 px-7">
          Optimizing User Search in a List with React's useMemo Hook
        </h2>
      </div>
      <input
        className="w-full p-3 mb-4 border border-gray-400 rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search users..."
      />
      <ul className="flex flex-wrap gap-2">
        {filteredUsers.map((user) => (
          <li key={user.id} className="p-4 mb-2 border border-gray-400 rounded">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
