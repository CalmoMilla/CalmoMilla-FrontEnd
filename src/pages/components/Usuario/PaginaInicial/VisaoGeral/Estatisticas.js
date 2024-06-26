import { useTranslation } from "react-i18next"
import Estatistica from "./Estatistica"

export default function Estatisticas() {

  const {t} = useTranslation()

  return (
    <>
      <div className="pt-2 m-auto md:p-8 w-[80%] md:w-auto">
        <h1 className="text-3xl md:text-5xl font-nunito text-amarelo2 text-center">{t('visaoGeral')}</h1>
        <h2 className="text-2xl md:text-3xl font-nunito text-amarelo1 text-center pt-10">{t('suasEstatisticas')}</h2>
      </div>
      <Estatistica titulo={"Memória"} resul={"w-[60%]"}/>
      <Estatistica titulo={"Resolução de Problemas"} resul={"w-[40%]"}/>
      <Estatistica titulo={"Atenção"} resul={"w-[80%]"}/>
      <Estatistica titulo={"Velocidade"} resul={"w-[90%]"}/>
    </>
  )
}