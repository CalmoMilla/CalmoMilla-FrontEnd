"use client"


import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


export default function MateriaCarrossel({funcao, blog}){

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
    };

    const [titulo, setTitulo] = useState(null)
  
    const { t } = useTranslation();
  
    const definirTraducao = (tituloPostagem) => {
      if (tituloPostagem == "Como jogos de estímulos mentais beneficiam sua saúde cerebral") {
        return t('tituloPostagem1')
      } 
      if (tituloPostagem == "Entenda a relação entre atividade física e saúde mental") {
        return t('tituloPostagem2')
      } 
      if (tituloPostagem == "Técnicas de relaxamento para ansiedade") {
        return t('tituloPostagem3')
      } 
      if (tituloPostagem == "O que é autocuidado? Por que é tão importante?") {
        return t('tituloPostagem4')
      } 
      if (tituloPostagem == "Conheça mais sobre a prática do yoga e seus benefícios para a saúde") {
        return t('tituloPostagem5')
      } 
      if (tituloPostagem == "O que é mindfulness e por que ele beneficia todas as esferas da vida?") {
        return t('tituloPostagem6')
      } 
      if (tituloPostagem == "Confira os cuidados essenciais com a saúde mental na melhor idade") {
        return t('tituloPostagem7')
      } 
      if (tituloPostagem == "Como cuidar da saúde de jovens e adolescentes?") {
        return t('tituloPostagem8')
      } 
    }

    return(
        <div className='w-[90%] md:w-3/5 h-fit pb-20 m-auto'>
            <div className="mt-20">
            <Slider {...settings}>
            {blog && blog.map((materia) => (
                <div key={materia.id} className="bg-branco h-fit rounded-2xl flex flex-col justify-center hover:cursor-pointer" onClick={() => funcao(materia)}>
                    <Image className="grayscale-[20%] rounded-lg" quality={80} src={materia.foto} width={1000} height={1000} alt=""/>
                    <p className={`text-preto text-center text-2xl font-bold font-nunito left-5`}>{definirTraducao(materia.tituloPostagem)}</p>
                </div>
            ))}
            </Slider>
            </div>
        </div>
    )
}