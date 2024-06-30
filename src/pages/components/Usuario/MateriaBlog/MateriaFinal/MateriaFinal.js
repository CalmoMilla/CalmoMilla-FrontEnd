import Image from "next/image"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MateriaFinal({funcao, blog}) {

    const [titulo, setTitulo] = useState(null)
    const [desc, setDesc] = useState(null)
  
    const { t } = useTranslation();
  
    useEffect(() => {
     definirTraducao()
    }, [blog])
  
    const definirTraducao = () => {
        if (blog) {
            if (blog[5].tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
              setTitulo(t('tituloPostagem1'))
              setDesc(t('descPostagem1'))
            } 
            if (blog[5].tituloPostagem == "Entenda a relação entre atividade física e saúde mental") {
              setTitulo(t('tituloPostagem2'))
              setDesc(t('descPostagem2'))
            } 
            if (blog[5].tituloPostagem== "Técnicas de relaxamento para ansiedade") {
              setTitulo(t('tituloPostagem3'))
              setDesc(t('descPostagem3'))
            } 
            if (blog[5].tituloPostagem == "O que é autocuidado? Por que é tão importante?") {
              setTitulo(t('tituloPostagem4'))
              setDesc(t('descPostagem4'))
            } 
            if (blog[5].tituloPostagem == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde") {
              setTitulo(t('tituloPostagem5'))
              setDesc(t('descPostagem5'))
            } 
            if (blog[5].tituloPostagem == "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
              setTitulo(t('tituloPostagem6'))
              setDesc(t('descPostagem6'))
            } 
            if (blog[5].tituloPostagem == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
              setTitulo(t('tituloPostagem7'))
              setDesc(t('descPostagem7'))
            } 
            if (blog[5].tituloPostagem == "Como cuidar da saúde de jovens e adolescentes?") {
              setTitulo(t('tituloPostagem8'))
              setDesc(t('descPostagem8'))
            } 
        }
    }

    return(
        <div className="flex lg:items-start items-center justify-center m-auto lg:space-x-7 lg:space-y-7 space-y-3 pt-10 pb-12 flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12">
            <div className="w-[70%] lg:w-[400%] hover:cursor-pointer" onClick={() => funcao(blog[5])}>
                <Image width={1000} height={1000} src={blog ? blog[5].foto : ""} alt="Imagem da matéria final" className="rounded-lg"/>
            </div>
            <div className="space-y-6 lg:pb-36 text-center lg:text-left xl:text-left">
                <h2 className="font-calistoga text-4xl ">{titulo} </h2>
                <p className="font-nunito text-lg  ">{desc}</p>
            </div>
        </div>
    )
}