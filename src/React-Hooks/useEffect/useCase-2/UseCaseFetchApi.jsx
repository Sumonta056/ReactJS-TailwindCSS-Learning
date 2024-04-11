import { useState, useEffect } from "react";

const UseCaseFetchApi = () => {
  // useState is needed in order to display the result on the screen
  const [bio, setBio] = useState({});

  // Empty dependencies array will make useEffect to run only once at startup
  // because that array never changes
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://swapi.dev/api/people/1/");
      const data = await response.json();
      console.log(data);
      setBio(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full flex flex-col border-2 border-stone-300 justify-center items-center min-h-screen bg-gray-100 py-2 sm:py-0">
        <div className="p-6 max-w-md w-full space-y-8 bg-white rounded-xl shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-2">
              useEffect use case - 2
            </h2>
            <h3 className="text-xl mb-4">
              Running once on mount: fetch API data
            </h3>
            <p>API: https://swapi.dev/api/people/1/</p>
            <p className="font-bold">Bio of {bio.name} </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Name</span>
              <span>{bio.name}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Height</span>
              <span>{bio.height}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Mass</span>
              <span>{bio.mass}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Hair Color</span>
              <span>{bio.hair_color}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Skin Color</span>
              <span>{bio.skin_color}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Eye Color</span>
              <span>{bio.eye_color}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Birth Year</span>
              <span>{bio.birth_year}</span>
            </div>
            <div className="flex flex-col bg-gray-50 p-4 rounded shadow">
              <span className="font-bold text-gray-700">Gender</span>
              <span>{bio.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCaseFetchApi;
