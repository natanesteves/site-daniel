import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/fotohome.JPG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Site Daniel </h1>
        <p> Musica de qualidade</p>
        <Link to="/menu">
          <button> Mais Sobre </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
