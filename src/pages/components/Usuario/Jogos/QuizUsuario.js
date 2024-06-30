import Head from "next/head";
import Script from "next/script";
import "../../../../app/[locale]/globals.css"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import Link from "next/link";

export default function QuizUsuario() {
  return (
    <div className="absolute w-full h-[100vh]">
      <Head>    
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Awesome Quiz App | CodingNepal</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
      </Head>
      <div className="start_btn">
        <button>Começar o Quiz</button>
      </div>
      <div className="info_box">
        <div className="info-title">
          <span>Algumas Regras do Quiz</span>
        </div>
        <div className="info-list">
          <div className="info">
            1. Você vai ter apenas <span>15 segundos</span> por questão
          </div>
          <div className="info">
            2. Depois de selecionada, a resposta não pode ser mudada
          </div>
          <div className="info">
            3. Você não pode selecionar uma resposta quando o tempo acabar
          </div>
          <div className="info">4. Você não pode sair no meio do Quiz</div>
          <div className="info">
            5. Você ganha pontos pela sua quantidade de acertos
          </div>
        </div>
        <div className="buttons">
          <button className="quit">Sair</button>
          <button className="restart">Continuar</button>
        </div>
      </div>
      <div className="quiz_box">
        <header>
          <div className="title">Quiz</div>
          <div className="timer">
            <div className="time_left_txt">Tempo</div>
            <div className="timer_sec">15</div>
          </div>
          <div className="time_line" />
        </header>
        <section>
          <div className="que_text">
          </div>
          <div className="option_list">
          </div>
        </section>
        <footer>
          <div className="total_que">
          </div>
          <button className="next_btn">Próxima</button>
        </footer>
      </div>
      <div className="result_box">
        <div className="icon">
          <i className="fas fa-crown" />
        </div>
        <div className="complete_text">Você completou o Quiz!</div>
        <div className="score_text">   
        </div>
        <div className="buttons">
          <button className="restart">Reiniciar Quiz</button>
          <button className="quit">Sair</button>
        </div>
      </div>
      <Link href={"/usuario"}>
        <IoIosArrowDropleftCircle className='absolute top-5 left-5 text-5xl text-amarelo1'/>
      </Link>
      <Script src="../quiz/questoes.js"/>
      <Script src="../quiz/quiz.js"/>
    </div>
  )
}