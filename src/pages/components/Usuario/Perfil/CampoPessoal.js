import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export default function CampoPessoal(props) {

  const [texto1, setTexto1] = useState()
  const [texto2, setTexto2] = useState()
  const { t } = useTranslation()

  useEffect(() => {
    definirTraducao()
  }, [props])

  const definirTraducao = () => {
    if (props) {
      if (props.texto1 == "Nome") {
        setTexto1(t('perfilCampoPessoal1'))
      }
      if (props.texto1 == "Data de nascimento") {
        setTexto1(t('perfilCampoPessoal2'))
      }
      if (props.texto1 == "Gênero") {
        setTexto1(t('perfilCampoPessoal3'))
      }
    }
  }

  return (
    <div className="w-[80%] flex justify-between md:flex-row flex-col md:items-center py-5">
      <p className="text-xl">{texto1}</p>
      <p className="text-xl">{props.texto2}</p>
    </div>
  )
}