import Image from "next/image"
import EmocaoPaciente from "./PerfilPaciente/EmocaoPaciente"
import VisaoGeralPaciente from "./PerfilPaciente/VisaoGeralPaciente"
import InformacoesPessoaisPaciente from "./PerfilPaciente/InformacoesPessoaisPaciente"

export default function PerfilPaciente() {
  return (
    <div className="w-full h-fit relative flex flex-col gap-8 items-center justify-center py-10">
      <div className="flex justify-center items-center md:flex-row flex-col gap-12">
        <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={300} height={300} className="rounded-full"/>
        <div className="md:text-left text-center">
          <h2 className="font-nunito text-6xl font-bold">Ana Souza Vieira dos Santos</h2>
          <p className="font-nunito text-xl font-bold mt-8">Primeiro atendimento em: 00/00/2024</p>
          <p className="font-nunito text-xl font-bold">27 Anos</p>
          <p className="font-nunito text-xl font-bold">Santa Teresa - RJ</p>
        </div>
      </div>
      <div className="w-[90%] lg:w-[50%] h-fit">
        <EmocaoPaciente/>
        <VisaoGeralPaciente/>
        <InformacoesPessoaisPaciente/>
      </div>
    </div>
  )
}