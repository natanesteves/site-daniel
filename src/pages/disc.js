import React from "react";
import { Link } from "react-router-dom";

import BannerImage from "../assets/fundo.jpg";
import "../styles/Disc.css";

function Disc() {
  return (
     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 > Biografia </h1>
               <p className='headerContainer p'>Multi-instrumentista, compositor, produtor e educador musical.

Nasci e cresci no Rio de Janeiro até os 17 anos, e em 2011 fui morar em Rio Claro-SP, onde estudei Ecologia na Unesp, me formando em 2016 com meu Trabalho de Conclusão de Curso intitulado “Ecologia, Cultura e Arte”, que revela um panorama de imersão em minhas experiências musicais, recheado de composições e poesias autorais. Neste mesmo Campus, em 2013 com 19 anos de idade, dei meus primeiros passos na música através do projeto de extensão “Oro Ari - Danças e Ritmos Brasileiros”, onde realizei processos imersivos em oficinas com Mestres e Mestras da Cultura Popular. Neste grupo iniciei meus estudos de forma muito lúdica e intuitiva, aprendendo diversos instrumentos de percussão, principalmente ligados aos gêneros de Samba, Côco, Maracatu, entre outros ritmos da cultura popular brasileira. Trabalhei em um projeto de musicalização infantil em duas escolas do município de Rio Claro entre os anos de 2013 à 2014.
</p>
        <p className='headerContainer p'>Sentindo a necessidade de me aprimorar num estudo mais técnico da música, entrei no Conservatório de Tatuí no ano de 2015, onde estudei Teoria Musical com Tânia Tonus e Darli Ventura, e Percussão Popular com o professor Rodrigo Moura, Rodrigo Braz e Betinho Sodré, e no mesmo ano comecei a estudar saxofone com o professor Marco Abreu, maestro e arranjador da Big Band PiraJazz em Piracicaba. Em 2016 ingressei no curso de saxofone em Tatuí, estudando com os professores Benedito de Paula, Rafael Migliani, Marcel Villa e Marcos Pedroso. No conservatório, busquei participar de variados grupos como a Banda Sinfônica, Big Band, Escola de Samba, Jazz Combo, Grupo de Choro e Grupo de Saxofones; sob a regência de nomes como Dario Sotelo, Diego Garbin, José Bauab, Joseval Paes, Marcos Pedroso, Paulo Malheiros, Rodrigo Moura e Rodrigo Braz. Ainda no conservatório, estudei violão complementar com Alberto Bento Dias, flauta transversal com Anselmo Pereira, percepção com Marcelo Silva e harmonia com Sérgio Frigério e Fábio Leal.
</p>
        <p className='headerContainer p'>Em Tatuí-SP, trabalhei como músico no grupo de teatro "Garagem e Companhia" nos anos de 2017 e 2018, onde desenvolvi trabalhos em festivais de teatro, Circuito SESI de Artes e SESCs. Em 2018, gravei meu primeiro álbum autoral intitulado “Natureza Cantada”, em parceria com o grupo Samba de Canteiro, de Rio Claro-SP, gravado nos estúdios da Fatec-Tatuí e distribuído pela Tratore.
</p>
        <p className='headerContainer p'>Em 2019 resolvi retornar ao Rio de Janeiro e fui estudar saxofone e improvisação com o Marcelo Martins, amigo querido, professor e grane referência no assunto. Realizei uma oficina de Música Universal com Itiberê Zwarg também em 2019 e tive algumas aulas de Harmonia com o mesmo. Estudei na Escola Portátil de Música neste mesmo ano: harmonia aplicada ao choro com Marcílio Lopes, composição com Maurício Carrilho, saxofone com Rui Alvim, flauta transversal com Naomi Kumamoto e clarinete com Pedro Paes. Neste ano também gravei a sessão de sopros (saxofones, flautas e clarinete) do álbum Caroneiro Vol.I, com composições de Gustavo Borges (piano e arranjos) e Erick Castro (violão, produção e mixagem).
</p>
        <p className='headerContainer p'>Realizei shows e gravações com a banda “Baile Artesanal” no ano de 2019 e nos apresentamos em casas de shows na Lapa, Laranjeiras e Santa Teresa. Trabalhei como professor de saxofone, flauta transversal e percussão no projeto social “Orquestra nas Escolas” nos anos de 2019 e 2020, e atualmente sigo ministrando aulas particulares presenciais e online para alunos(as) no Rio de Janeiro. Em 2019 e 2020 trabalhei como saxofonista e flautista no musical Rua Azusa, e me apresentei no Teatro João Caetano, Teatro Bangu Shopping, Teatro NetRio, entre outros espaços culturais da cidade.
</p>
        <p className='headerContainer p'>Em 2020 senti a necessidade de aprender mais sobre o processo de produção fonográfica, montei um home studio em minha residência e iniciei trabalhos de gravações para artistas independentes. Realizei um curso de edição e mixagem pelo SESC com a Florencia Saravia e um curso online da Audio Master Class – Inglaterra. No mesmo ano, gravei a sessão de sopros (flautas, saxofones e clarinete) no álbum instrumental do Eduardo Manhães, que conta com participações especiais de Marcelo Martins, Rafael Barata e Leandro Braga. Realizei meus primeiros trabalhos como arranjador no EP do compositor Alan Bernardes “Fruto Bruto”, no álbum “Resistir” do músico André Luiz, ambos artistas do Rio de Janeiro. Assinei um contrato com a gravadora “Roots Rio” da Califórnia para arranjar e gravar o naipe de sopros do primeiro disco de Reggae da Banda Joá intitulado “Paraty”, trabalho este que leva o mesmo nome do local de composição e gravação das músicas.
</p>
        <p className='headerContainer p'>Em 2021 formo com mais três integrantes um conjunto de música instrumental chamado Xapamurú 4Tet e começamos a nos apresentar em casas tradicionais de Jazz do Rio como o Beco das Garrafas, Pub Panqss e Circuito de Jazz da Lavradio. No mesmo ano conclui o curso de pós graduação em Música Popular Brasileira no Conservatório Brasileiro de Música, onde tive a oportunidade de estudar Arranjo com Neil Carlos Teixeira, Improvisação com Leandro Braga, Análise com Douglas Fonseca, Harmonia com Anne Amberget, dentre outros(as). Também em 2021 inicio meus estudos de Harmonia e Arranjo com o querido professor e amigo Vittor Santos, grande instrumentista, arranjador e referência na didática musical no estudo de Harmonia no Brasil e no mundo, sigo me aperfeiçoando com o mesmo atualmente.
</p>
        <p className='headerContainer p'>Fora o estudo mais formal e acadêmico realizei aulas e oficinas com grandes Mestres da Cultura Popular como Mestres Wálter de França e Maurício Soares (Nação de Maracatu Estrela Brilhante do Recife-PE) e Mestre Nilton Júnior (Grupo Pandeiro do Mestre, Recife-PE), no ano de 2018 quando passei por um processo de imersão de alguns meses no estado de Pernambuco. Participei também em festivais como o Festival de Música de Ourinhos em 2018, onde tive aulas com Nailor Proveta, César Roversi, Dinho Nogueira, Zé Barbeiro e Alessandro Penezzi. Também fui contemplado em alguns editais culturais municipais e estaduais como oficineiro, produtor e instrumentista, além de ter participado como artista convidado de editais nos estados do Rio de Janeiro e São Paulo.
</p>
        <p className='headerContainer p'>Atualmente sigo trabalhando em gravações, arranjos, ministrando aulas presenciais e online, e me apresento semanalmente acompanhando musicistas do Rio de Janeiro em diversos eventos e formações das mais variadas como bares, casas de show, cerimônias de casamento, eventos corporativos, shows, etc. Passei a estudar instrumentos diversos como piano, contrabaixo, violão, guitarra e minhas mais recentes pesquisas musicais incluem a música eletroacústica e diálogos entre ritmos brasileiros, loop e música eletrônica; através da qual tenho desenvolvido um projeto autoral e inédito, em breve mais novidades...
</p>
        <Link to="/menu">
          <button> Mais Sobre </button>
        </Link>
 
      </div>
    </div>
  );
}

export default Disc;
