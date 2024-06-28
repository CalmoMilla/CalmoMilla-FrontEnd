import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function Estatistica(props) {

  const {t} = useTranslation()

  const [titulo, setTitulo] = useState(null)

  useEffect(() => {
    definirTraducao()
  }, [])

  const definirTraducao = () => {
    if (props.titulo == "Memória") {
      setTitulo(
        <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{t('statMem')}</h3>
      )
    }
    else if (props.titulo == "Resolução de Problemas") {
      setTitulo(
        <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{t('statRes')}</h3>
      )
    }
    else if (props.titulo == "Atenção") {
      setTitulo(
        <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{t('statAtn')}</h3>
      )
    }
    else if (props.titulo == "Velocidade") {
      setTitulo(
        <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{t('statVel')}</h3>
      )
    } else {
      setTitulo(
        <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{props.titulo}</h3>
      )
    }
  }

  return (
    <div className="flex justify-around md:flex-row flex-col items-center py-5">
      {titulo}
      <div className="w-[80%] md:w-[55%] h-6 bg-verde2/60">
        <div className={`${props.resul} h-full bg-verde2`}></div>
      </div>
    </div>
  )
}