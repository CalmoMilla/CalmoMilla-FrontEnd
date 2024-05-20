import JogoDisponivel from "./JogoDisponivel";

export default function JogosDisponiveis() {
  return (
    <div className="w-[70%] h-screen">
      <div className="w-[100%] h-[100%] lg:h-[50%] flex justify-around items-center flex-col lg:flex-row">
        <JogoDisponivel titulo={"Jogo da Memoria"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
        <JogoDisponivel titulo={"Sudoku"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
      </div>
      <div className="w-[100%] h-[100%] lg:h-[50%] flex justify-around items-center flex-col lg:flex-row">
        <JogoDisponivel titulo={"Xadrez"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
        <JogoDisponivel titulo={"Palavras Cruzadas"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
      </div>
    </div>
  )
}