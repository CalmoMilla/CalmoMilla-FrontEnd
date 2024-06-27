"use client"


import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function MateriaCarrossel({funcao}){
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
            {data.map((d) => (
                <div key={d.id} className="bg-branco h-fit rounded-2xl flex flex-col justify-center hover:cursor-pointer" onClick={funcao}>
                    <Image className="grayscale-[20%]" quality={80} src={d.img} width={1000} height={1000} alt=""/>
                    <p className={`text-branco text-2xl font-bold font-nunito relative ${d.baixo ? "bottom-40" : "bottom-[500px]"} left-5`}>{d.texto}</p>
                </div>
            ))}
            </Slider>
            </div>
        </div>
    )
}

const data = [
    {
        id:1,
        img: "/assets/usuario/materiablog/materia1.png",
        baixo: true,
        texto: "Lorem ipsum dolor sit amet. Ut dignissimos neque"
    },
    {
        id:2,
        img: "/assets/usuario/materiablog/materia2.png",
        baixo: false,
        texto: "Lorem ipsum dolor sit amet. Ut dignissimos neque"
    },
    {
        id:3,
        img: "/assets/usuario/materiablog/materia3.png",
        baixo: true,
        texto: "Lorem ipsum dolor sit amet. Ut dignissimos neque"
    },
   
]