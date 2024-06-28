import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export default function Parceiro({parceiro}) {
  return (
    <div className={`h-96 w-80 ${parceiro.cor1} rounded-2xl flex flex-col justify-around items-center cursor-pointer hover:scale-105 duration-500 ease-in-out shadow-2xl mx-auto my-10`}>
      <Image src={parceiro.logo} alt="Imagem de um Parceiro" width={150} height={150}/>
      <h2 className="text-branco font-calistoga text-5xl text-center">{parceiro.titulo}</h2>
      <IoIosArrowDown className="text-branco text-7xl"/>
    </div>
  )
}