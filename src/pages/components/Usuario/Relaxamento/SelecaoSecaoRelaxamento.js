import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function SelecaoSecaoRelaxamento({ funcao }) {

  const { t } = useTranslation()

  return (
    <div className="w-full h-fit pb-0 lg:pb-20 lg:h-[90vh] bg-verdeagua">
      <h1 className="text-center text-branco text-5xl font-calistoga mt-10">{t('relaxamentoTituloHome')}</h1>
      <div className="w-[80%] h-fit flex lg:justify-around justify-center items-center lg:items-start mx-auto mt-32 lg:flex-row flex-col">

        <Image src={"/assets/usuario/relaxamento/meditacao.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={() => funcao("m")} />

        <Image src={"/assets/usuario/relaxamento/respiracao.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={() => funcao("r")}/>

        <Image src={"/assets/usuario/relaxamento/yoga.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={() => funcao("y")}/>
      </div>
    </div>
  )
}