import { FaUser } from "react-icons/fa"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
 
export default function CaixaNoticia({materia}){

  const [titulo, setTitulo] = useState(null)

  const { t } = useTranslation();

  useEffect(() => {
    if (materia.tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
      setTitulo(t('tituloPostagem1'))
    } 
    if (materia.tituloPostagem == "Entenda a relação entre atividade física e saúde mental") {
      setTitulo(t('tituloPostagem2'))
    } 
    if (materia.tituloPostagem == "Técnicas de relaxamento para ansiedade") {
      setTitulo(t('tituloPostagem3'))
    } 
    if (materia.tituloPostagem == "O que é autocuidado? Por que é tão importante?") {
      setTitulo(t('tituloPostagem4'))
    } 
    if (materia.tituloPostagem == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde.") {
      setTitulo(t('tituloPostagem5'))
    } 
    if (materia.tituloPostagem == "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
      setTitulo(t('tituloPostagem6'))
    } 
    if (materia.tituloPostagem == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
      setTitulo(t('tituloPostagem7'))
    } 
    if (materia.tituloPostagem == "Como cuidar da saúde de jovens e adolescentes?") {
      setTitulo(t('tituloPostagem8'))
    } 
  }, [])

  const definirTraducao = () => {
    if (materia.tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
      setTitulo(t('tituloPostagem1'))
    } 
    if (materia.tituloPostagem == "Entenda a relação entre atividade física e saúde mental") {
      setTitulo(t('tituloPostagem2'))
    } 
    if (materia.tituloPostagem == "Técnicas de relaxamento para ansiedade") {
      setTitulo(t('tituloPostagem3'))
    } 
    if (materia.tituloPostagem == "O que é autocuidado? Por que é tão importante?") {
      setTitulo(t('tituloPostagem4'))
    } 
    if (materia.tituloPostagem == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde") {
      setTitulo(t('tituloPostagem5'))
    } 
    if (materia.tituloPostagem == "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
      setTitulo(t('tituloPostagem6'))
    } 
    if (materia.tituloPostagem == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
      setTitulo(t('tituloPostagem7'))
    } 
    if (materia.tituloPostagem == "Como cuidar da saúde de jovens e adolescentes?") {
      setTitulo(t('tituloPostagem8'))
    } 
  }

  return (
    <div className="bg-branco w-[90%] md:w-[60%] h-fit py-5 rounded-lg shadow-xl">
      <h1 className="text-5xl w-[80%] mx-auto font-calistoga text-center pt-14">{titulo}</h1> 
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