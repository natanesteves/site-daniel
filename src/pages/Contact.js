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
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
        
         <a href="https://www.instagram.com/danielhornmusic/"> <p>@danielhornmusic (instagram)</p> </a>
          <p> danielhornmusic@gmail.com (email)</p>
           <p>+55 21 9 9755-2228 (telefone e whatsapp)</p>

        </form>
      </div>
    </div>
  );
}

export default Contact;
