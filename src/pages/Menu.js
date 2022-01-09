import React from "react";
import Margherita from "../assets/xamp.JPG";
import PedroTechSpecial from "../assets/baile.jpg";
import Vegan from "../assets/capa.jpg";
import Pineapple from "../assets/Caroneiro.jpg";
import Expensive from "../assets/Mantratropical.png";
import Pepperoni from "../assets/frutyobruto.jpeg";
import BannerImage from "../assets/fundo.jpg";
import { Link } from "react-router-dom";
import "../styles/Menu.css";

function Menu() {
  return (
    <div className="menu" style={{ backgroundImage: `url(${BannerImage})` }}>
      <h1 className="menuTitle">Discografia</h1>
      <div className="menuList">
      <div className="menuItem">
      <div className="menufoto" style={{ backgroundImage: `url(${Pepperoni})` }}></div>
      <p className="disc1">Fruto Bruto </p>
      <p className="disc2">Ano: 2021 </p>
    </div>
    
    <div className="menuItem">
    <Link to="/Naturezacantada">
      <div style={{ backgroundImage: `url(${Vegan})` }}></div> </Link>
      <p className="disc1">Natureza cantada </p>
      <p className="disc2">Ano: 2018 </p>
    </div>
   
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Expensive})` }}></div>
      <p className="disc1">Manta Tropical </p>
      <p className="disc2">Ano: 2022 </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Pineapple})` }}></div>
      <p className="disc1">Caroneiro </p>
      <p className="disc2">Ano: 2020 </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${Margherita})` }}></div>
      <p className="disc1">Xapamurú </p>
      <p className="disc2">Ano: 2021 </p>
    </div>
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${PedroTechSpecial})` }}></div>
      <p className="disc1">Baile Artesanal </p>
      <p className="disc2">Ano: 2019 </p>
    </div>
      </div>
      
    </div>
  );
}

export default Menu;
