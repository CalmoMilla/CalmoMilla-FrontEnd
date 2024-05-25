import Link from "next/link"

export default function SelecaoJogos() {
  return (
    <div className="w-[100%] lg:w-[30%] h-auto flex flex-col justify-center items-center">
      <h1 className="text-roxo font-calistoga text-6xl pb-40 text-center">Jogos</h1>
      <button className="bg-roxo hover:scale-110 px-8 py-3 text-branco font-calistoga rounded-full transition duration-300 ease-out text-3xl">
        Todos os jogos
      </button>
      <p className="py-10 text-xl hover:scale-125 hover:text-roxo duration-500 transition ease-in-out"><Link href={"/jogomemoria"}>Jogo da Memória</Link></p>
      <p className="py-10 text-xl hover:scale-125 hover:text-roxo duration-500 transition ease-in-out"><Link href={"/sudoku"}>Sudoku</Link></p>
      <p className="py-10 text-xl hover:scale-125 hover:text-roxo duration-500 transition ease-in-out"><Link href={"#"}>Insira um nome</Link></p>
      <p className="py-10 text-xl hover:scale-125 hover:text-roxo duration-500 transition ease-in-out"><Link href={"#"}>Insira um nome</Link></p>

    </div>
  )
}