import JogoDisponivel from "./JogoDisponivel";

export default function JogosDisponiveis() {
  return (
    <div className="w-[70%] h-screen">
      <div className="w-[100%] h-[100%] lg:h-[50%] flex justify-around items-center flex-col lg:flex-row">
        <JogoDisponivel titulo={"Jogo da Memória"} texto={"Para você se divertir enquanto treina a memória"} 
        jogo={"/jogomemoria"}/>
        <JogoDisponivel titulo={"Sudoku"} texto={"Sudoku é um jogo de lógica simples que ajuda a melhorar a sua habilidade mental."} 
        jogo={"/sudoku"}/>
      </div>
      <div className="w-[100%] h-[100%] lg:h-[50%] flex justify-around items-center flex-col lg:flex-row">
        <JogoDisponivel titulo={"Xadrez"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
        <JogoDisponivel titulo={"Palavras Cruzadas"} texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}/>
      </div>
    </div>
  )
}