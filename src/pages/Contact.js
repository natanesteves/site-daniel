import React from "react";
import PizzaLeft from "../assets/contato.JPG";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contato</h1>
        <form id="contact-form" method="POST">
          <div className="divi1">
        <h3 className="h3zin1">Daniel Horn Produções Artísticas</h3>
        <p className="Pzin15"> Rio de Janeiro - Brasil</p> 
        <p className="Pzin1"> danielhornmusic@gmail.com </p>
        </div>
        <div className="divi2">
        <h3 className="h3zin2">Instagram</h3>
         <a href="https://www.instagram.com/danielhornmusic/" > <p className="Pzin">@danielhornmusic </p> </a>
         </div>
         <div className="divi3">
         <h3 className="h3zin3">Contato Produção: </h3>
           <p className="Pzin">+55 21 9 9755-2228 </p>
           </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
