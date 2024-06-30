import Image from "next/image"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MateriaPrincipal({funcao, blog}) {

    const [titulo, setTitulo] = useState(null)
    const [desc, setDesc] = useState(null)
  
    const { t } = useTranslation();
  
    useEffect(() => {
     definirTraducao()
    }, [blog])
  
    const definirTraducao = () => {
        if (blog) {
            if (blog[4].tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
              setTitulo(t('tituloPostagem1'))
              setDesc(t('descPostagem1'))
            } 
            if (blog[4].tituloPostagem == "Entenda a relação entre atividade física e saúde mental") {
              setTitulo(t('tituloPostagem2'))
              setDesc(t('descPostagem2'))
            } 
            if (blog[4].tituloPostagem== "Técnicas de relaxamento para ansiedade") {
              setTitulo(t('tituloPostagem3'))
              setDesc(t('descPostagem3'))
            } 
            if (blog[4].tituloPostagem == "O que é autocuidado? Por que é tão importante?") {
              setTitulo(t('tituloPostagem4'))
              setDesc(t('descPostagem4'))
            } 
            if (blog[4].tituloPostagem == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde") {
              setTitulo(t('tituloPostagem5'))
              setDesc(t('descPostagem5'))
            } 
            if (blog[4].tituloPostagem == "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
              setTitulo(t('tituloPostagem6'))
              setDesc(t('descPostagem6'))
            } 
            if (blog[4].tituloPostagem == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
              setTitulo(t('tituloPostagem7'))
              setDesc(t('descPostagem7'))
            } 
            if (blog[4].tituloPostagem == "Como cuidar da saúde de jovens e adolescentes?") {
              setTitulo(t('tituloPostagem8'))
              setDesc(t('descPostagem8'))
            } 
        }
    }

    return(
        <div className="w-11/12 space-y-7 m-auto" >
            <h2 className="text-4xl font-calistoga">{titulo}</h2>
             
            <div className="flex justify-start w-full hover:cursor-pointer" onClick={() => funcao(blog[4])}>
                <Image width={1400} height={450} src={blog ? blog[4].foto : ""} alt="Imagem da matéria principal" className="rounded-lg"/>
            </div>

            <p className="font-nunito text-lg text-left">{desc}</p>
        </div>
    )
}