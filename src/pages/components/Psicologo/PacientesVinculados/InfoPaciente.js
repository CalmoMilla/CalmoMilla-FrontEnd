import Image from "next/image"
import { IoIosClose } from "react-icons/io";

export default function InfoPaciente({nome, idade, cidade, onClose}) {
  return (
    <div className="w-[15%] h-fit shadow-2xl py-5 rounded-xl flex flex-col justify-center items-center gap-4">
      <div className="w-full flex justify-end">
        <IoIosClose className="w-16 h-16 hover:cursor-pointer text-preto hover:text-amarelo1 duration-500 ease-in-out"
        onClick={onClose}/>
      </div>
      <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={200} height={200} className="rounded-full"/>
      <h2 className="font-nunito text-xl font-bold">{nome}</h2>
      <h2 className="font-nunito text-xl font-bold">{idade}</h2>
      <h2 className="font-nunito text-xl font-bold">{cidade}</h2>

      <button className="font-nunito px-8 py-3 bg-amarelo1 hover:bg-amarelo2 duration-500 ease-in-out rounded-3xl">Abrir perfil</button>
    </div>
  )
}