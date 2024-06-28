import Image from "next/image";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import Parceiro from "./Parceiro";
import ParceriaEscolhida from "./ParceriaEscolhida";

export default function Parceiros() {
  let data = [
    {id: 1, titulo: "Clube de Meditação", desc: "Com o objetivo de ajudar as pessoas a terem uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.", cor1: "bg-gradient-to-r from-[#1D9D90] to-[#1785B6]", cor2: "text-branco", logo: "/assets/home/parceiros/clubedameditacao.png"},
    {id: 2, titulo: "Casa de Marias", desc: "Com o objetivo de ajudar as pessoas a terem uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.", cor1: "bg-gradient-to-r from-[#1D9D90] to-[#1785B6]", cor2: "text-branco", logo: "/assets/home/parceiros/clubedameditacao.png"},
    {id: 3, titulo: "Intermentes", desc: "Com o objetivo de ajudar as pessoas a terem uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.", cor1: "bg-gradient-to-r from-[#1D9D90] to-[#1785B6]", cor2: "text-branco", logo: "/assets/home/parceiros/clubedameditacao.png"},
    {id: 4, titulo: "Mundo da Estampa", desc: "Com o objetivo de ajudar as pessoas a terem uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.", cor1: "bg-gradient-to-r from-[#1D9D90] to-[#1785B6]", cor2: "text-branco", logo: "/assets/home/parceiros/clubedameditacao.png"},
  ]

  return (
    <div id="parceiros">
      <div className="w-full h-fit bg-amarelo1 flex justify-around items-center gap-4 flex-col md:flex-row py-5">
        <div className="w-60 h-60 border-branco border-solid border-4 rounded-full overflow-hidden">
          <Image src={"/assets/millazinha/milla02.png"} alt="Imagem da Milla" width={150} height={150} className="mx-auto block"/>
        </div>
        <div className="flex flex-col justify-around items-center w-[70%]">
          <h1 className="font-calistoga text-6xl lg:text-7xl text-branco">Parceiros</h1>
          <h2 className="font-calistoga text-3xl lg:text-5xl text-branco text-center w-[70%]">Conheçam as nossas parcerias que sustentam o nosso projeto</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data && data.map((parceiro) => (
          <Parceiro key={parceiro.id} parceiro={parceiro}/>
        ))}
      </div>
      {/* <ParceriaEscolhida/> */}
    </div>
  );
}
