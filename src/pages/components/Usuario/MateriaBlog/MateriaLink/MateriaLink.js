import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MateriaLink({src, baixo, text, funcao, materia}) {

  const [titulo, setTitulo] = useState(null)

  const { t } = useTranslation();

  useEffect(() => {
   definirTraducao()
  }, [materia])

  const definirTraducao = () => {
    if (text == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
      setTitulo(t('tituloPostagem1'))
    } 
    if (text == "Entenda a relação entre atividade física e saúde mental") {
      setTitulo(t('tituloPostagem2'))
    } 
    if (text == "Técnicas de relaxamento para ansiedade") {
      setTitulo(t('tituloPostagem3'))
    } 
    if (text == "O que é autocuidado? Por que é tão importante?") {
      setTitulo(t('tituloPostagem4'))
    } 
    if (text == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde") {
      setTitulo(t('tituloPostagem5'))
    } 
    if (text== "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
      setTitulo(t('tituloPostagem6'))
    } 
    if (text == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
      setTitulo(t('tituloPostagem7'))
    } 
    if (text == "Como cuidar da saúde de jovens e adolescentes?") {
      setTitulo(t('tituloPostagem8'))
    } 
  }

  return(
    <div className={`w-[25%] h-[80vh] hover:scale-110 transition duration-500 ease-in-out bg-cover bg-no-repeat rounded-xl hover:cursor-pointer`} style={{backgroundImage: `url(${src})`}} onClick={() => funcao(materia)}>
      <div className="h-full w-full bg-preto/30 rounded-xl">
        <p className={`text-branco text-2xl font-bold font-nunito pl-10 ${baixo ? "pt-[120%]" : "pt-[15%]"}`}>{titulo}</p>
      </div>
    </div>
  )
}

