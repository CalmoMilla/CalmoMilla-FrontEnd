import Image from "next/image"
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function ParceriaEscolhida({parceiro, funcao }) {
  return (
    <div className={`${parceiro.cor1} w-[97%] h-fit mx-auto rounded-lg p-10 my-10 flex flex-col justify-around items-center gap-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative`}>
      <div className="w-full h-fit flex flex-col lg:flex-row gap-8 justify-around items-center">
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <Image src={parceiro.logo} alt="Imagem de um Parceiro" width={300} height={300} quality={100} className="mx-auto"/>
          <h2 className={`${parceiro.cor2} text-6xl font-calistoga text-center`}>{parceiro.titulo}</h2>
        </div>
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <h2 className={`${parceiro.cor2} text-5xl font-calistoga text-center`}>Quem são?</h2>
          <h2 className={`${parceiro.cor2} text-2xl font-nunito w-[70%] text-center mx-auto`}>{parceiro.desc}</h2>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col 2xl:flex-row gap-8 justify-around items-center">
        <Image src={parceiro.foto1} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
        <Image src={parceiro.foto2} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
      </div>
      <IoIosArrowDropleftCircle className={`absolute top-5 left-5 text-7xl ${parceiro.cor2} cursor-pointer hover:scale-110 duration-500 ease-in-out`} onClick={funcao}/>
    </div>
  )
}