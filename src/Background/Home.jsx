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
        <div className="flex flex-col gap-2 m-2">
          <div className="flex justify-center w-full gap-2">
            <Link
              to="/useEffect"
              className="px-6 py-3 text-lg text-2xl font-semibold no-underline rounded-lg bg-rose-600"
            >
              useEffect()
            </Link>
            <Link
              to="/useContext"
              className="px-6 py-3 text-lg text-2xl font-semibold no-underline bg-teal-600 rounded-lg"
            >
              useContext()
            </Link>
            <Link
              to="/useRef"
              className="px-6 py-3 text-lg text-2xl font-semibold no-underline bg-orange-500 rounded-lg"
            >
              useRef()
            </Link>
          </div>
          <div className="flex justify-center w-full gap-2">
            <Link
              to="/password"
              className="flex items-center gap-2 px-6 py-3 text-lg text-2xl font-semibold no-underline rounded-lg bg-violet-600"
            >
              <MdWifiPassword size={25} />
              Password Generator
            </Link>
            <Link
              to="/search"
              className="flex items-center gap-2 px-6 py-3 text-lg text-2xl font-semibold no-underline rounded-lg bg-rose-600"
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
