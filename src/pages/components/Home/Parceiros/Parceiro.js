import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Parceiro({parceiro, funcao}) {
  return (
    <div className={`h-96 w-80 ${parceiro && parceiro.cor1} rounded-2xl flex flex-col justify-around items-center cursor-pointer hover:scale-105 duration-500 ease-in-out shadow-2xl mx-auto my-10`} onClick={() => funcao(parceiro) }>
      <Image src={parceiro && parceiro.logo} alt="Imagem de um Parceiro" width={150} height={150}/>
      <h2 className={`${parceiro && parceiro.cor2} font-calistoga text-5xl text-center`}>{parceiro && parceiro.titulo}</h2>
      <IoIosArrowDown className={`${parceiro && parceiro.cor2} text-7xl`}/>
    </div>
  )
}