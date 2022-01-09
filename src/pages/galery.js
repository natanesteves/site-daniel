import "../styles/Galery.css";
import { Carousel } from "../lib/index";

import Pepperoni from "../assets/galeria1.JPG";
import Pepperoni2 from "../assets/galeria2.JPG";
import Pepperoni3 from "../assets/galeria3.JPG";
import Pepperoni4 from "../assets/galeria4.JPG";
import Pepperoni5 from "../assets/galeria5.JPG";
import Pepperoni6 from "../assets/galeria6.jpg";
import Pepperoni7 from "../assets/galeria7.jpg";
import Pepperoni8 from "../assets/galeria8.jpg";
import Pepperoni9 from "../assets/galeria9.jpg";

function Galery() {
  const data = [
    {
      image: Pepperoni,
      caption: `<div>
        Rio de Janeiro - RJ<br/>
      </div>`,
    },
    {
      image:
       Pepperoni3,
      caption: "<div>Xapamuru 4tet</div>",
    },
    {
      image:
       Pepperoni4,
      caption: "<div>Xapamuru 4tet</div>",
    },
    {
      image:
       Pepperoni5 ,
      caption: "<div>São Paulo - SP</div>",
    },
    {
      image:
       Pepperoni6 ,
      caption: "<div>Circuito SESI de Artes</div> <p>Grupo de teatro garagem e cia</p>",
    },
    {
      image:
       Pepperoni7,
      caption: "Grupo Saxofone porque choras<br> Tatui - SP",
    },
    {
      image:
       Pepperoni8 ,
      caption: "<div>Grupo de Saxofones do Conservatório de Tatuí</div>",
    },
    {
      image:
      Pepperoni9 ,
      caption: "<div>Jazz Combo do Conservatório de Tatuí</div>",
    },
    {
      image:
        Pepperoni2,
      caption: "<div>Xapamuru 4tet</div>",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="Galery">
      <div style={{ textAlign: "center" }}>
        <h2 className="titugalery"> Galeria de Fotos</h2>
        
        <div
          style={{
            padding: "0 20px",
          }}
        >
          <Carousel
            data={data}
            time={1500}
            width="850px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            showNavBtn={true}
            style={{
              textAlign: "center",
              maxWidth: "850px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Galery;