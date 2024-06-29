"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { IoIosArrowDown } from "react-icons/io";
import Parceiro from "./Parceiro";
import ParceriaEscolhida from "./ParceriaEscolhida";
import { useState } from "react";

export default function Parceiros() {

  const { t } = useTranslation()

  const [parceiro, setParceiro] = useState(null)

  let data = [
    {id: 1, titulo: "Clube de Meditação", desc: "Com o objetivo de ajudar as pessoas a terem uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.", cor1: "bg-gradient-to-r from-[#1D9D90] to-[#1785B6]", cor2: "text-branco", logo: "/assets/home/parceiros/clubedemeditacao.png", foto1: "/assets/home/parceiros/cm/meditacao1.jpeg", foto2: "/assets/home/parceiros/cm/meditacao2.jpeg"},

    {id: 2, titulo: "Casa de Marias", desc: "A Casa de Marias é um espaço de escuta e de acolhimento destinado à todas as pessoas que buscam apoio (psicológico, social e jurídico) e, olha com especial atenção, destinando projetos/vagas com exclusividade, para os grupos que sofrem opressões produzidas pelo sistema capitalista, racista e patriarcal que – ainda – vivemos: mulheres (cis e trans), negras, pobres, periféricas, indígenas, quilombolas, imigrantes e refugiadas.", cor1: "bg-branco", cor2: "text-roxo", logo: "/assets/home/parceiros/casamarias.png", foto1: "/assets/home/parceiros/marias/psicologas.jpg", foto2: "/assets/home/parceiros/marias/arvore.jpg"},

    {id: 3, titulo: "Intermentes", desc: "A Intermentes é uma plataforma que facilita o acesso à psicologia para que as pessoas possam cuidar da sua saúde mental. Para isso, oferecem sessões online com valores acessíveis para todos os públicos, diversidade de profissionais com especialidades variadas para diferentes situações, e a oportunidade para que pessoas sem condições financeiras também possam cuidar da sua mente, por meio da centralização de ONGs que oferecem esse cuidado gratuitamente.", cor1: "bg-gradient-to-r from-[#E5B8FA] to-[#B66FD8]", cor2: "text-branco", logo: "/assets/home/parceiros/intermentes.png", foto1: "/assets/home/parceiros/itm/itm1.jpeg", foto2: "/assets/home/parceiros/itm/itm2.jpeg"},

    {id: 4, titulo: "Mundo da Estampa", desc: "O Mundo da Estampa se destaca pela alta qualidade de seus produtos e serviços. Eles utilizam técnicas de estamparia modernas e duráveis, garantindo que suas camisetas, banners e outros itens personalizados durem por muito tempo. Além disso, oferecem uma grande variedade de estampas para você escolher, desde designs clássicos até os mais criativos e modernos.", cor1: "bg-branco", cor2: "text-[#1EB2B1]", logo: "/assets/home/parceiros/mundodaestampa.png", foto1: "/assets/home/parceiros/me/me1.jpg", foto2: "/assets/home/parceiros/me/me2.jpg"},
  ]

  return (
    <div id="parceiros">
      <div className="w-full h-fit bg-amarelo1 pt-32 flex justify-around items-center gap-4 flex-col md:flex-row py-5">
        <div className="w-60 h-60 border-branco border-solid border-4 rounded-full overflow-hidden">
          <Image src={"/assets/millazinha/milla02.png"} alt="Imagem da Milla" width={150} height={150} className="mx-auto block"/>
        </div>
        <div className="flex flex-col justify-around items-center w-[70%]">
          <h1 className="font-calistoga text-6xl lg:text-7xl text-branco">{t('parceirosTit')}</h1>
          <h2 className="font-calistoga text-3xl lg:text-5xl text-branco text-center w-[70%]">{t('parceirosDesc')}</h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {data && data.map((parceiro) => (
          <Parceiro key={parceiro.id} parceiro={parceiro} funcao={setParceiro}/>
        ))}
      </div>
      {parceiro && 
        <ParceriaEscolhida parceiro={parceiro} funcao={() => setParceiro(null)}/>
      }
    </div>
  );
}
