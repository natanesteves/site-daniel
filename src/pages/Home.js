import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/fotohome.JPG";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="home22">
       
      </div>
    </div>
  );
}

export default Home;
