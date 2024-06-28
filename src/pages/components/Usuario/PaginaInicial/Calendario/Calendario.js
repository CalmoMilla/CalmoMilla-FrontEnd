import LinhaRotina from "./LinhaRotina"
import LinhaEmocoes from "./LinhaEmocoes"
import { useState,useEffect } from "react"
import { useTranslation } from "react-i18next"

export default function Calendario({titulo, emocoes}) {

  const [tituloPego, setTitulo] = useState(null)

  const { t } = useTranslation()

  useEffect(() => {
    definirTraducao()
  }, [])

  const definirTraducao = () => {
    if (titulo == "Calendário de Humor") {
      setTitulo(
        <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{t('calendarioHumor')}</h2>
      )
    }
    else if (titulo == "Rotina") {
      setTitulo(
        <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{t('calendarioRotina')}</h2>
      )
    } else {
      setTitulo(
        <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{titulo}</h2>
      )
    }
  }


  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{tituloPego}</h2>
      <div className="md:w-[80%] w-[95%] bg-branco border-solid border-2 border-verde2/50 rounded-lg">
        {emocoes ? 
        <LinhaEmocoes/> : <LinhaRotina/>
        }      
      </div>
    </div>
  )
}