import { FaUser } from "react-icons/fa"
 
export default function CaixaNoticia(props){
  return (
    <div className="bg-branco w-[60%] h-[200vh] rounded-lg shadow-xl">
      <h1 className="text-6xl font-calistoga text-center pt-14">{props.titulo}</h1>
      <div className="pl-10 h-fit">
        <div className="flex pt-10 gap-4 items-center pb-10">
          <div className="w-fit h-fit bg-gray-200 p-3 rounded-full">
            <FaUser className="text-5xl cursor-pointer text-branco"/>
          </div>
          <p>Revisão por: {props.nome} <br /> {props.profissao}</p>
        </div>
        <div className="flex flex-col justify-center items-center pr-10">
          <div className="w-[100%] h-[24rem] bg-gray-200 pt-10 flex items-center justify-center rounded-lg" >
            <h2 className="text-3xl">Insira uma imagem</h2>
          </div>
        </div>
        <p class="font-nunito text-xl pt-10 w-[90%]">
       
          {props.texto}
        </p>
      </div>
    </div>
  )
}