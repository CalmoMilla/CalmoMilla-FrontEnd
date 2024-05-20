export default function SelecaoJogos() {
  return (
    <div className="w-[30%] h-auto flex flex-col justify-center items-center">
      <h1 className="text-roxo font-calistoga text-6xl pb-40 text-center">Jogos</h1>
      <button className="bg-roxo hover:scale-110 px-8 py-3 text-branco font-calistoga rounded-full transition duration-300 ease-out text-3xl">
        Todos os jogos
      </button>
      <p className="py-10 text-xl">Insira um nome</p>
      <p className="py-10 text-xl">Insira um nome</p>
      <p className="py-10 text-xl">Insira um nome</p>
      <p className="py-10 text-xl">Insira um nome</p>
    </div>
  )
}