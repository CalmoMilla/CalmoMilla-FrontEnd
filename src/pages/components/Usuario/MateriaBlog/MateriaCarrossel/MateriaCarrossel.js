"use client"

import MateriaLink from "../MateriaLink/MateriaLink"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function MateriaCarrossel(){
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      
    };

    return(
        <div className="w-3/4 m-auto flex flex-col items-center justify-center">
            <Slider {...settings}>
            {data.map((d) => (
            <div className={`w-[25%] h-[80vh] hover:scale-110 transition duration-500 ease-in-out bg-cover bg-no-repeat rounded-xl`} style={{backgroundImage: `url(${d.img})`}}>
        
                <div className="h-full w-full bg-preto/30 rounded-xl">
                    <p className={`text-branco text-2xl font-bold font-nunito pl-10 ${d.baixo ? "pt-[120%]" : "pt-[15%]"}`}>{d.texto}</p>
                </div>
            </div>
        ))}
            </Slider>
        </div>
    )
}

const data = [
    {
        id:1,
        img: "/assets/usuario/materiablog/materia1.png",
        baixo: true,
        texto: "vitor lindo"
    },
    {
        id:2,
        img: "/assets/usuario/materiablog/materia2.png",
        baixo: false,
        texto: "vitor cheiroso"
    },
    {
        id:3,
        img: "/assets/usuario/materiablog/materia3.png",
        baixo: true,
        texto: "vitor tímido"
    },
   
]