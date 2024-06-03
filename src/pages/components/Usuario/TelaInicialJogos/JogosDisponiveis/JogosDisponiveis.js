import JogoDisponivel from "./JogoDisponivel";

export default function JogosDisponiveis() {
  return (
    <div className=" w-[85%] lg:w-[70%] h-screen mt-4">
      <div className="text-roxo font-calistoga text-6xl mb-3 mt-4 text-center lg:hidden">
        <p>Jogos</p>
      </div>
      <div className="w-[100%] md:h-[50%] gap-5 lg:gap-0 flex justify-around  xs:items-start lg:items-center flex-col md:flex-row">
        <JogoDisponivel
          titulo={"Jogo da Memória"}
          texto={"Para você se divertir enquanto treina a memória"}
          jogo={"/jogomemoria"}
        />
        <JogoDisponivel
          titulo={"Sudoku"}
          texto={
            "Sudoku é um jogo de lógica simples que ajuda a melhorar a sua habilidade mental."
          }
          jogo={"/sudoku"}
        />
      </div>
      <div className="w-[100%]  md:h-[50%] mt-16 lg:mt-20  gap-5 lg:gap-0 flex justify-around  xs:items-start lg:items-center flex-col md:flex-row">
        <JogoDisponivel
          titulo={"Xadrez"}
          texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
        />
        <JogoDisponivel
          titulo={"Palavras Cruzadas"}
          texto={"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
        />
      </div>
    </div>
  );
}
