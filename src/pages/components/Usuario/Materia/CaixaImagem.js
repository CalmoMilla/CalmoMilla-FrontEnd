import Image from "next/image"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function CaixaImagem({materia, funcao}) {

    const [titulo, setTitulo] = useState(null)

    const { t } = useTranslation();
  
    useEffect(() => {
      definirTraducao()
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
      }

    return (
        <div className="flex flex-col justify-center my-4 items-center py-2 relative rounded-lg bg-preto/10 cursor-pointer hover:scale-105 duration-500 ease-in-out" onClick={() => funcao(materia)}>
            <Image src={materia.foto} width={300} height={300} alt={materia.tituloPostagem} className="rounded-lg mt-2"/>
            <p className="text-center font-nunito text-xl w-[90%] my-2">{titulo}</p>
        </div>
    )
}