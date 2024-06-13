import Image from "next/image"
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function PaginaInicial() {
  const { t } = useTranslation()
  
  return (
    <>
      <div className="w-full xl:h-[100vh] lg:h-[120vh] md:h-[150vh] h-[100vh] bg-cover bg-no-repeat bg-[url('/assets/home/homepage/fundo2.jpg')] md:bg-[url('/assets/home/homepage/fundo3.jpg')]">
        <div className="bg-preto/50 w-full xl:h-[100vh] lg:h-[120vh] md:h-[150vh] h-[100vh] flex justify-center m-0" >
          <div className="w-[full] flex xl:justify-between xl:gap-20 items-center lg:flex-row flex-col pt-40">
            <div>
              <h1 className="font-calistoga xs:pb-8 xs:text-6xl md:text-[8rem] text-branco">Calmo<span className="text-amarelo1">Milla</span></h1>
              <h2 className="font-calistoga xs:text-4xl md:text-6xl text-branco"><span className="text-amarelo1">{t("paginaInicial1")}</span> {t("paginaInicial2")}<br />{t("paginaInicial3")}<br /> <span className="text-amarelo1">{t("paginaInicial4")}</span></h2>
              <Link href={"/login"} className="w-fit">
                <button className="text-xl lg:text-3xl xs:text-3xl bg-branco mt-20 px-10 py-4 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out">{t("paginaInicialBotao")}</button>
              </Link>
            </div>
            <div>
            <Image className="lg:block hidden m-0 " width={280} height={280} src="/assets/millazinha/milla02.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}