import Link from "next/link";

export default function JogoDisponivel({nome, link, foto, jogo}) {


  const onClickJogo = () => {
    let jogoPego = localStorage.getItem("jogo");

    if (jogoPego != null) { 
      jogoPego = jogo
      localStorage.setItem("jogo", JSON.stringify(jogoPego))
    } else {
      localStorage.setItem("jogo", JSON.stringify(jogo))
    }

  }

  return (
    <div className="w-[90%] h-80 shadow-2xl rounded-xl mx-auto">
    <div className="w-full h-[60%] flex justify-start items-end p-5 rounded-xl" style={{ backgroundImage: `url(${foto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
    </div>
    <div className="w-full h-[40%] py-2 px-5 flex flex-col justify-center gap-4">
      <h2 className="font-nunito text-xl font-bold xl:text-3xl">{nome == "CacaPalavras" ? "Caça Palavras" : nome }</h2>
      <Link href={link} onClick={onClickJogo}>
        <button className="text-lg lg:text-xl md:text-md text-branco bg-roxo/70 hover:bg-roxo py-2 md:py-0 xl:py-2 rounded-3xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out w-full xl:w-[70%]">Jogar</button>
      </Link>
    </div>
  </div>
  );
}
