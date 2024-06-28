import { FaUser } from "react-icons/fa"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
 
export default function CaixaNoticia({materia}){

  const [tituloPostagem, setTituloPostagem] = useState(null)

  const { t } = useTranslation();

  useEffect(() => {
    definirTitulo()
  }, [])

  const definirTitulo = () => {
    if (materia.tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
      setTituloPostagem( 
        <h1 className="text-5xl w-[80%] mx-auto font-calistoga text-center pt-14">{t("tituloPostagem1")}</h1> 
      ) 
    } else {
      setTituloPostagem (
        <h1 className="text-5xl w-[80%] mx-auto font-calistoga text-center pt-14">{materia.tituloPostagem}</h1>
      )
    }
  }

  return (
    <div className="bg-branco w-[90%] md:w-[60%] h-fit py-5 rounded-lg shadow-xl">
      {tituloPostagem}
      <div className="pl-10 h-fit">
        <div className="flex pt-10 gap-4 items-center pb-10">
          <Image width={70} height={70} src={materia.autor.foto} alt="..." className="rounded-full" />
          <p>Revisão por: {materia.autor.nome} <br /></p>
        </div>
        <div className="flex flex-col justify-center items-center pr-10">
          <Image width={1000} height={1000} src={materia.foto} alt="..." className="rounded-lg" />
        </div>
        <p className="font-nunito text-xl pt-10 w-[90%]">
          {materia.descPostagem}
        </p>
      </div>
    </div>
  )
}