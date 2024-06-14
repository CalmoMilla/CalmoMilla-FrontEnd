import Image from "next/image"

export default function JogoDispRecurso ({nome, funcao, funcao2, jogo}) {

  const funcaoCombinada = () => {
    funcao();
    let jogoFormatado = Object.values(jogo)
    funcao2(jogoFormatado);
    console.log(jogoFormatado)
  };

  return (
    <div className="w-[90%] h-60 shadow-2xl rounded-xl mx-auto">
      <div className="w-full h-[45%] flex justify-start items-end p-5 rounded-xl" style={{ backgroundImage: `url("assets/psicologo/recursos/materiacerebro.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </div>
      <div className="w-full h-[55%] py-2 px-5 flex flex-col justify-center gap-4">
        <h2 className="font-nunito text-3xl">{nome}</h2>
        <button className="text-xl text-branco bg-roxo/70 hover:bg-roxo py-2 rounded-3xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out w-[70%]" onClick={funcaoCombinada}>Ver benefícios</button>
      </div>
    </div>
  )
}