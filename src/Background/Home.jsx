import React from "react";
import { Link } from "react-router-dom";
import HomeBack from "./assets/Home.jpg";
import "./home.css";
import { FaSearch } from "react-icons/fa";
import { MdWifiPassword } from "react-icons/md";

function Home() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HomeBack})` }}>
      <div className="content">
        <h1>Be REACT.</h1>
        <p>
          Get ready to transform your React applications into visually stunning
          experiences.
        </p>
        <div className="flex gap-2 flex-col m-2">
          <div className="w-full flex gap-2 justify-center">
            <Link
              to="/useEffect"
              className="px-6 py-3 text-lg text-2xl no-underline bg-rose-600 rounded-lg font-semibold"
            >
              useEffect()
            </Link>
            <Link
              to="/useContext"
              className="px-6 py-3 text-lg text-2xl no-underline bg-teal-600 rounded-lg font-semibold"
            >
              useContext()
            </Link>
          </div>
          <div className="w-full flex gap-2 justify-center">
            <Link
              to="/password"
              className="px-6 py-3 text-lg text-2xl no-underline bg-violet-600 rounded-lg font-semibold flex gap-2 items-center"
            >
              <MdWifiPassword size={25} />
              Password Generator
            </Link>
            <Link
              to="/search"
              className="px-6 py-3 text-lg text-2xl no-underline bg-rose-600 rounded-lg font-semibold flex gap-2 items-center"
            >
              <FaSearch size={25} />
              Search Filter List
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
