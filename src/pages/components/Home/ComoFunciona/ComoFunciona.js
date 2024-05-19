import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function ComoFunciona() {

  const { t } = useTranslation()

  return (
    <div id="comofunciona">
      <div className="w-full h-[90%]">
        <div className="flex justify-around items-center lg:flex-row flex-col pt-60">
          <div className="w-[80%] lg:w-[45%] mb-40">
            <h1 className="font-calistoga text-6xl pb-20 lg:pb-4 md:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] text-verdeagua">{t("comoFuncionaTitulo")}</h1>
            <p className="font-nunito text-justify text-2xl font-medium">{t("comoFuncionaTexto1")}<br />{t("comoFuncionaTexto2")}<br />{t("comoFuncionaTexto3")}<br /><br />

            {t("comoFuncionaTexto4")}<br />{t("comoFuncionaTexto5")}<br />{t("comoFuncionaTexto6")} <br /> <br />{t("comoFuncionaTexto7")} <br /> {t("comoFuncionaTexto8")} <br /><br />

            {t("comoFuncionaTexto9")}<br /><br />{t("comoFuncionaTexto10")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[20%]">
            <Image data-aos="fade-left" className="" width={300} height={300} src="/assets/millazinha/milla03.png" alt=""/>
          </div>
        </div>
      </div> 
    </div>
  )
}