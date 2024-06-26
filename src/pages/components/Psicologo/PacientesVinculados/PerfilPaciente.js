import Image from "next/image"
import EmocaoPaciente from "./PerfilPaciente/EmocaoPaciente"
import VisaoGeralPaciente from "./PerfilPaciente/VisaoGeralPaciente"
import InformacoesPessoaisPaciente from "./PerfilPaciente/InformacoesPessoaisPaciente"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { use } from "i18next";

export default function PerfilPaciente({user, onClick}) {

  const anoNascimento = user ? user.dataNasc[0] : 0;
  const mesNascimento = user ? user.dataNasc[1] : 0;
  const diaNascimento = user ? user.dataNasc[2] : 0;
  
  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  let diferencaAnos = anoAtual - anoNascimento;

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
    diferencaAnos--;
  }

  const idade = diferencaAnos;

  return (
    <div className="w-full h-fit relative flex flex-col gap-8 items-center justify-center py-10">
      <div className="flex justify-center items-center md:flex-row flex-col gap-12">
        <Image src={user ? user.foto : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={300} height={300} className="rounded-full" quality={100}/>
        <div className="md:text-left text-center">
          <h2 className="font-nunito text-6xl font-bold">{user && user.nome}</h2>
          <p className="font-nunito text-xl font-bold mt-8">Primeiro atendimento em: 00/00/2024</p>
          <p className="font-nunito text-xl font-bold">{idade && idade} anos</p>
          <p className="font-nunito text-xl font-bold">Santa Teresa - RJ</p>
        </div>
      </div>
      <div className="w-[90%] lg:w-[50%] h-fit">
        <EmocaoPaciente user={user && user}/>
        <VisaoGeralPaciente/>
        <InformacoesPessoaisPaciente user={user && user}/>
      </div>
      <IoIosArrowDropleftCircle className="fixed top-32 left-5 text-7xl text-amarelo1 hover:scale-110 cursor-pointer duration-500 ease-in-out" onClick={onClick && onClick}/>
    </div>
  )
}