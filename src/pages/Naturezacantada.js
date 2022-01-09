import React from 'react';
import YouTube from 'react-youtube';
import '../styles/Naturezacantada.css'

class Example extends React.Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return(<> 
    <div className="essa">
    <YouTube className="video" videoId="dzKwsxjPAbg" 
    opts={opts} onReady={this._onReady} />
    
    <h3 className='natuh3'>DEPOIMENTO:</h3>
    <p className='natup'>

No Samba de Canteiro tive a oportunidade de conviver com algumas das pessoas 
mais incríveis que conheci nesta vida. Bate uma saudade de recordar os primeiros 
encontros no quintal da casa da minha grande amiga Júlia Moretti e a gestação da 
pequena Janaína, a ida para a Amazônia do nosso percussionista Antônio Neto, a 
musicalidade onipresente da Alana Gambarini, a presença e equilíbrio da Fernanda 
Esteves, os tambores do Yan Schmitt e a chegada da Júlia Castro com toda sua leveza 
e encanto.
</p><p className='natup'>O que se iniciou como um encontro de pessoas no “Grupo de Danças e Ritmos
 Brasileiros Oro Ari” logo culminou neste projeto paralelo, no qual nos encontrávamos 
 semanalmente para compor e estudar música, fizemos isto de 20	14 à 2018 e daí nasceram 
 muitas composições magníficas. Decidimos então selecionar algumas destas músicas e gravar
  um disco. O primeiro disco do grupo Samba de Canteiro “Natureza Cantada” também foi a 
  minha primeira experiência profissional e a porta de entrada neste mundo da produção 
  fonográfica. Todas as pessoas presentes neste processo de composição e gravação das 
  músicas, dotadas com suas magias e talentos, tornaram possível um álbum igualmente mágico 
  e único. Músicas singelas e delicadas que tocam a alma e trazem luz e esperança às 
  pessoas, e que abordam temas transversais como a importância do cuidado à natureza e a 
  manutenção de grandes amizades.</p>
<p  className='natup'>Recheado de ritmos como o Samba de Coco e Samba de Roda, o uso de uma instrumentação 
percussiva muito potente, aliados à um universo de arranjos vocais muito singelos, o álbum 
leva a ouvinte por uma viagem através dos cantos e encantos da nossa rica cultura popular 
brasileira. Contamos ainda com a participação super especial do Mestre de Coco de Toré 
Nilton Júnior, do grupo Pandeiro do Mestre, de Recife - PE. Nilton foi um padrinho musical 
para nós e nos presenteou com uma música que ele mesmo compôs ali na hora no estúdio durante a 
sessão, que é a faixa bônus “Frio da Saudade” que encerra este disco.</p>
<p className='natup'>Gravado nos estúdios da Fatec em Tatuí - SP e em Rio Claro - SP pelo engenheiro de áudio 
Raphael Marques (o Rastaman) e mixado por Vitor Gomes (o Vitinho), o álbum foi lançado e
 distribuído pela Tratore em 2018. Devido à enorme distância geográfica entre os integrante
  e dos rumos individuais que suas vidas se sucederam, o grupo pausa suas atividades em 
  2020. Continuamos a nos encontrar uma vez ao ano para cantarmos nossas músicas e compormos 
  juntos e quem sabe (aviso especial aos fãs) gravemos um segundo disco, isto, só o tempo 
  dirá...</p>
<p className='natup'>Parafraseando o próprio grupo:
“Cantamos as matas, as praias e mares, os campos e as montanhas. Cantamos a natureza humana 
manifestada com beleza e leveza, nas amizades, na família e nos amores. Cantamos e tocamos nossos 
tambores e flautas na esperança de tocar também outros corações e contribuir para um mundo com mais 
harmonia e alegria.”</p>

<h3>LINKS:</h3>

<a href= "https://naturezacantada.wixsite.com/sambadecanteiro"><h4>Site</h4></a>

<a href="https://open.spotify.com/album/4bYf4eV4Hmq8P6d14Hcpkc?si=d7gF9oosS4KveQN4j9Tu_g">
Álbum Natureza Cantada Spotify</a>
</div>

    </>
    );
}

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Example;