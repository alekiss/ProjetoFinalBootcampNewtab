import React from "react";
import "./home.scss";
import HomeImage from "./../../assets/home.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home__container">
      <span className="home__title">
        <h1>Está preparado para navegar no mundo</h1>
        <h1>de Rick and Morty?</h1>
      </span>
      <img src={HomeImage} alt="Rick and Morty" />
      <Link to={"/characters"}>
        <button>Iniciar Aventura</button>
      </Link>
      <small>&copy;rickandmortyapi.com</small>
    </div>
  );
};

export default Home;
