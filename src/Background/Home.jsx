import React from "react";
import { Link } from "react-router-dom";
import HomeBack from "./assets/Home.jpg";
import "./home.css";

function Home() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${HomeBack})` }}>
      <div className="content">
        <h1>Be Creative.</h1>
        <p>
          Get ready to transform your React applications into visually stunning
          experiences.
        </p>
        <div className="flex gap-2">
        <Link
          to="/password"
          className="px-6 py-3 text-lg text-2xl no-underline bg-purple-500 rounded-lg font-semibold"
        >
          Password Generator
        </Link>

        <Link
          to="/useContext"
          className="px-6 py-3 text-lg text-2xl no-underline bg-purple-500 rounded-lg"
        >
          useContext()
        </Link>
        </div>
     
      </div>
    </section>
  );
}

export default Home;
