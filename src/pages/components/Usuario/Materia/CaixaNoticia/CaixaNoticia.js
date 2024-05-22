import { FaUser } from "react-icons/fa"

export default function CaixaNoticia(){
  return (
    <div className="bg-branco w-[60%] h-[200vh] rounded-lg">
      <h1 className="text-6xl font-calistoga text-center pt-14 ">Insira o seu texto</h1>
      <div className="pl-10 h-fit">
        <div className="flex pt-10 gap-4 items-center pb-10">
          <div className="w-fit h-fit bg-gray-400 p-3 rounded-full">
            <FaUser className="text-5xl cursor-pointer text-branco"/>
          </div>
          <p>Revisão por: Insira um nome <br /> Insira a profissão </p>
        </div>
        <div className="w-[90%] h-[24rem] bg-gray-400 pt-10 flex items-center justify-center rounded-lg" >
          <h2 className="text-3xl">Insira uma imagem</h2>
        </div>
      </div>
    </div>
  )
}