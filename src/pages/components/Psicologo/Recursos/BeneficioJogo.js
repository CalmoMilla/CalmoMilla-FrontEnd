import Image from "next/image"
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function BeneficioJogo({funcao, jogo}) {

  return (
    <div className="w-full h-fit relative">
      <div className="w-[90%] md:w-[70%] h-fit relative mx-auto shadow-2xl rounded-xl">
        <h1 className="text-center text-7xl font-calistoga mt-10 pt-10">{jogo && jogo[1]}</h1>
        <h2 className="text-center text-3xl font-nunito">Sua história e benefícios</h2>
        <Image src={jogo && jogo[2]} alt={"Imagem do Benefício"} width={800} height={800} className="mx-auto pt-12 rounded-xl"/>
        <p className="w-[70%] font-nunito text-xl mx-auto py-10">{jogo[4] && jogo[4]}</p>
      </div>
      {/* <p className="text-center text-xl font-bold font-nunito py-5">{jogo && jogo[3]}</p> */}
      <IoIosArrowDropleftCircle className="absolute top-5 left-7 text-5xl md:top-5 md:left-10 md:text-7xl text-amarelo1 hover:text-amarelo2 duration-500 ease-in-out hover:cursor-pointer hover:scale-110" onClick={funcao} />
    </div>
  )
}