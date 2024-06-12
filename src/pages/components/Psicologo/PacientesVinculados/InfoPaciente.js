import Image from "next/image"

export default function InfoPaciente() {
  return (
    <div className="w-[15%] h-fit shadow-2xl py-5 rounded-xl flex flex-col justify-center items-center gap-4">
      <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={200} height={200} className="rounded-full"/>
      <h2 className="font-nunito text-xl font-bold">Vitor Hugo da Silva</h2>
      <h2 className="font-nunito text-xl font-bold">18 Anos</h2>
      <h2 className="font-nunito text-xl font-bold">Guaianases - SP</h2>

      <button className="font-nunito px-8 py-3 bg-amarelo1 hover:bg-amarelo2 duration-500 ease-in-out rounded-3xl">Abrir perfil</button>
    </div>
  )
}