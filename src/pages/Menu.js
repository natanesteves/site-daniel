import React from "react";
import Margherita from "../assets/xamp.JPG";
import PedroTechSpecial from "../assets/baile.jpg";
import Vegan from "../assets/capa.jpg";
import Pineapple from "../assets/Caroneiro.jpg";
import Expensive from "../assets/Mantratropical.png";
import Pepperoni from "../assets/frutyobruto.jpeg";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Discografia</h1>
      <div className="menuList">
      <div className="menuItem">
      <div style={{ backgroundImage: `url(${Pepperoni})` }}></div>
      <p>Fruto Bruto </p>
    </div>
    
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Vegan})` }}></div>
      <p>Natureza cantada </p>
      <Link to="/Naturezacantada">
        <button>ver</button>
      </Link>
    </div>
    
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Expensive})` }}></div>
      <p>Manta Tropical </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Pineapple})` }}></div>
      <p>Caroneiro </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Margherita})` }}></div>
      <p>Xapamurú </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${PedroTechSpecial})` }}></div>
      <p>Baile Artesanal </p>
    </div>
      </div>
      
    </div>
  );
}

export default Menu;
