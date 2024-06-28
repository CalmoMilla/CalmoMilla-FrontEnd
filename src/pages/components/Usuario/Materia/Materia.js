"use client"

import Header from "../../Header/Header";
import CaixaNoticia from "./CaixaNoticia/CaixaNoticia";
import OutrasMaterias from "./OutrasMaterias/OutrasMaterias";
import { IoIosArrowDropleftCircle } from "react-icons/io";
 
export default function Materia({funcao, blog, materia, retornar}){

  return (
    <div className="h-fit w-full bg-gray-200 pb-10 relative">
      <Header/>
 
      <div className="pt-40 flex justify-around md:flex-row md:gap-0 gap-8 items-center flex-col">
        <CaixaNoticia materia={materia} />

        <OutrasMaterias blog={blog} funcao={funcao}/>
      </div>

      <IoIosArrowDropleftCircle className='fixed top-40 left-5 text-5xl text-amarelo1 hover:cursor-pointer hover:scale-110 duration-500 ease-in-out' onClick={retornar}/>
    </div>
  )
}