import Head from "next/head"
import Script from "next/script"
import "../../../../app/[locale]/globals.css"
import { CiPause1 } from "react-icons/ci";

export default function SudokuUsuario() {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#fff" />
                <title>Sudoku</title>
            </Head>
            {/* main */}
            <div className="main">
                <div className="screen" id="screen">
                {/* start screen */}
                <div className="startScreen active" id="startScreen">
                    <input
                    type="text"
                    placeholder="Nome"
                    maxLength={11}
                    className="inputName"
                    id="inputName"
                    />
                    <div className="btn" id="btnLevel">
                    Fácil
                    </div>
                    <div className="btn" id="btnContinue">
                    Continuar
                    </div>
                    <div className="btn btnBlue" id="btnPlay">
                    Novo Jogo
                    </div>
                </div>
                <div className="mainGame" id="gameScreen">
                    <div className="mainSudokuGrid">
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    <div className="mainGridCell" />
                    </div>
                    <div className="mainGameInfo">
                    <div className="mainGameInfoBox mainGameInfoName">
                        <span id="playerName" />
                    </div>
                    <div className="mainGameInfoBox mainGameInfoLevel">
                        <span id="gameLevel">Fácil</span>
                    </div>
                    </div>
                    <div className="mainGameInfoBox mainGameInfoTime">
                    <span id="gameTime">10:20</span>
                    <div className="pauseBtn" id="btnPause">
                        <CiPause1/>
                    </div>
                    </div>
                    <div className="numbers">
                    <div className="number">1</div>
                    <div className="number">2</div>
                    <div className="number">3</div>
                    <div className="number">4</div>
                    <div className="number">5</div>
                    <div className="number">6</div>
                    <div className="number">7</div>
                    <div className="number">8</div>
                    <div className="number">9</div>
                    <div className="delete" id="btnDelete">
                        X
                    </div>
                    </div>
                </div>
                {/* end game screen */}
                {/* pause screen */}
                <div className="pauseScreen" id="pauseScreen">
                    <div className="btn btnBlue" id="btnResume">
                    Continuar
                    </div>
                    <div className="btn" id="btnNewGame">
                    Novo Jogo
                    </div>
                </div>
                {/* end pause screen */}
                {/* result screen */}
                <div className="resultScreen" id="resultScreen">
                    <div className="congrate">Completo</div>
                    <div className="info">Tempo</div>
                    <div id="resultTime" />
                    <div className="btn" id="btnNewGame2">
                    Novo Jogo
                    </div>
                </div>
                {/* end result screen */}
                </div>
                <Script src="../sudoku/constant.js"/>
                <Script src="../sudoku/sudoku.js"/>
                <Script src="../sudoku/app.js"/>
            </div>
        </>
    )
}