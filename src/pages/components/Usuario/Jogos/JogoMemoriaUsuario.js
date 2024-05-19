import Head from 'next/head';
import Script from 'next/script';
import "../../../../app/[locale]/globals.css"

export default function JogoMemoria(props) {

  const dificuldade = props.dificuldade

  return (
    <>
      <div className='bg-gradient-to-r from-roxo to-amarelo1 h-screen w-screen font-sanss'>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Jogo da Memoria</title>
        </Head>    
        <div className="wrapper hide">
          <div className="stats-container">
            <div id="moves-count" />
            <div id="time" />
            <div id="dificuldade" />
          </div>
          <div className="game-container" />
          <button id="stop" className="hide">
            Parar o Jogo
          </button>
        </div>
        <div className="controls-container">
          <p id="result" />
          <button className='bg-white' id="start">Começar o Jogo</button>
        </div>
        <Script src="../jogomemoria/jogomemoria.js"/>
      </div>
    </>
  );
}