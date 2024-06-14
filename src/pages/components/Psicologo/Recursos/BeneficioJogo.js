"use client"

import Image from "next/image"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useEffect } from "react";

export default function BeneficioJogo({funcao, jogo}) {

  return (
    <div className="w-full h-fit relative">
      <div className="w-[70%] h-fit relative mx-auto shadow-2xl rounded-xl">
        <h1 className="text-center text-7xl font-calistoga">{jogo[1]}</h1>
        <h2 className="text-center text-3xl font-nunito">Sua história e benefícios</h2>
        <Image src={"/assets/psicologo/recursos/jogomemoria.png"} alt={"Imagem do Benefício"} width={800} height={800} className="mx-auto pt-12"/>
        <p className="w-[70%] font-nunito text-xl mx-auto py-10">Lorem ipsum dolor sit amet. Eos laboriosam nesciunt vel aliquam harum est voluptates natus est officiis voluptas. Qui eveniet rerum ut officia dolores et odit autem ad dicta quia nam fuga nihil et internos reiciendis est asperiores aperiam! Ut blanditiis ducimus est libero pariatur sit saepe quia hic sunt doloribus. Et assumenda repudiandae sed necessitatibus voluptas et officia temporibus quo aliquid ratione At officiis officiis. Sit magni tempora et architecto dolore eum distinctio quasi ut laboriosam totam eos dignissimos tempora non natus aliquam! Ut laudantium itaque est architecto debitis sit accusantium beatae sed nisi iure sed consequatur iure quo quis voluptates ea nemo quae. Sed animi reiciendis ex possimus unde sed veniam repudiandae.
        Qui excepturi dolorum ut omnis dolor non labore deserunt est quos quia vel quod debitis. Qui repellat delectus qui similique culpa sed voluptas illum vel unde consequatur aut officia corporis hic dolor quas vel molestias fuga. Qui cumque deleniti a harum adipisci hic placeat iste est quibusdam magni 33 aspernatur galisum? A autem porro eos voluptate aperiam qui consequatur labore non sunt ipsum est molestiae repellat ab vero ipsam. Aut expedita neque ad accusamus eaque aut cupiditate rerum.
        Eum incidunt Quis ex debitis suscipit est consequatur modi aut voluptatem perspiciatis sed minima possimus eos atque aspernatur! Et magnam fugit eos repellat voluptates et quas molestiae. Qui cumque sint aut voluptatem maiores ex eius nisi qui consectetur sunt At quia praesentium? Est consequatur rerum et repellendus excepturi eum neque minus ea quis voluptatem. Eos dolor maiores aut accusamus obcaecati aut commodi reprehenderit aut maxime consectetur eos aliquam cupiditate ab molestiae provident a cumque debitis.</p>
      </div>
      <p className="text-center text-xl font-bold font-nunito py-5">Fonte: https://urllongaparadedéuaqui.com.br (Acesso em 00/00/0000)</p>
      <IoIosArrowDropleftCircle className="absolute top-5 left-10 text-7xl text-amarelo1 hover:text-amarelo2 duration-500 ease-in-out hover:cursor-pointer hover:scale-110" onClick={funcao} />
    </div>
  )
}