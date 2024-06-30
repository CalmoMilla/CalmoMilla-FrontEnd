import Image from "next/image"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function ParceriaEscolhida({parceiro, funcao }) {

  const { t } = useTranslation()

  const [desc, setDesc] = useState(null)

  useEffect(() => {
    definirTraducao()
  }, [parceiro])

  const definirTraducao = () => {
    if (parceiro.titulo == "Clube de Meditação"){
      setDesc(t('parceirosDescCmt'))
    }
    if (parceiro.titulo == "Casa de Marias"){
      setDesc(t('parceirosDescCma'))
    }
    if (parceiro.titulo == "Intermentes"){
      setDesc(t('parceirosDescItm'))
    }
    if (parceiro.titulo == "Mundo da Estampa"){
      setDesc(t('parceirosDescMe'))
    }
  }

  return (
    <div className={`${parceiro.cor1} w-[97%] h-fit mx-auto rounded-lg p-10 my-10 flex flex-col justify-around items-center gap-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] relative`}>
      <div className="w-full h-fit flex flex-col lg:flex-row gap-8 justify-around items-center">
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <Image src={parceiro.logo} alt="Imagem de um Parceiro" width={300} height={300} quality={100} className="mx-auto"/>
          <h2 className={`${parceiro.cor2} text-6xl font-calistoga text-center`}>{parceiro.titulo}</h2>
        </div>
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <h2 className={`${parceiro.cor2} text-5xl font-calistoga text-center`}>{t('parceirosQuemSao')}</h2>
          <h2 className={`${parceiro.cor2} text-2xl font-nunito w-[70%] text-center mx-auto`}>{desc}</h2>
        </div>
      </div>
      <div className="w-full h-fit flex flex-col 2xl:flex-row gap-8 justify-around items-center">
        <Image src={parceiro.foto1} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
        <Image src={parceiro.foto2} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
      </div>
      <IoIosArrowDropleftCircle className={`absolute top-5 left-5 text-7xl ${parceiro.cor2} cursor-pointer hover:scale-110 duration-500 ease-in-out`} onClick={funcao}/>
    </div>
  )
}