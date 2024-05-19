import Image from "next/image"
import { useTranslation } from "react-i18next";

export default function PaginaInicial() {
  const { t } = useTranslation()
  
  return (
    <>
      <div className="w-full xl:h-[100vh] lg:h-[120vh] md:h-[150vh] h-[100vh] bg-cover bg-no-repeat bg-[url('/assets/home/homepage/fundo2.jpg')]">
        <div className="bg-preto/50 w-full xl:h-[100vh] lg:h-[120vh] md:h-[150vh] h-[100vh] flex justify-center">
          <div className="lg:w-[80%] flex justify-around items-center lg:flex-row flex-col pt-40">
            <div>
              <h1 className="font-calistoga xs:pb-8 xs:text-6xl md:text-[8rem] text-branco">Calmo<span className="text-amarelo1">Milla</span></h1>
              <h2 className="font-calistoga xs:text-4xl md:text-6xl text-branco"><span className="text-amarelo1">{t("paginaInicial1")}</span> {t("paginaInicial2")}<br />{t("paginaInicial3")}<br /> <span className="text-amarelo1">{t("paginaInicial4")}</span></h2>
              <button className="text-xl lg:text-3xl xs:text-3xl bg-branco mt-20 px-10 py-4 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out">{t("paginaInicialBotao")}</button>
            </div>
            <Image className="lg:block hidden" width={300} height={300} src="/assets/millazinha/milla02.png" alt=""/>
          </div>
        </div>
      </div>
    </>
  )
}