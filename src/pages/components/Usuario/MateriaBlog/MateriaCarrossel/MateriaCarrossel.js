"use client"


import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";


export default function MateriaCarrossel({funcao, blog}){

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 3,
    };

    return(
        <div className='w-[90%] md:w-3/5 h-fit pb-20 m-auto'>
            <div className="mt-20">
            <Slider {...settings}>
            {blog && blog.map((materia) => (
                <div key={materia.id} className="bg-branco h-fit rounded-2xl flex flex-col justify-center hover:cursor-pointer" onClick={() => funcao(materia)}>
                    <Image className="grayscale-[20%] rounded-lg" quality={80} src={materia.foto} width={1000} height={1000} alt=""/>
                    <p className={`text-preto text-center text-2xl font-bold font-nunito left-5`}>{materia.tituloPostagem}</p>
                </div>
            ))}
            </Slider>
            </div>
        </div>
    )
}