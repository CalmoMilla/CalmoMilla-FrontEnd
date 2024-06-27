"use client"

import Header from "../../Header/Header";
import CaixaNoticia from "./CaixaNoticia/CaixaNoticia";
import OutrasMaterias from "./OutrasMaterias/OutrasMaterias";
import { IoIosArrowDropleftCircle } from "react-icons/io";
 
export default function Materia({funcao, blog}){



  return (
    <div className="h-fit w-full bg-gray-200 pb-10 relative">
      <Header/>
 
      <div className="pt-40 flex justify-around">
        <CaixaNoticia materia={blog[0]} />

        <OutrasMaterias blog={blog}/>

 
      </div>
      <IoIosArrowDropleftCircle className='fixed top-40 left-5 text-5xl text-amarelo1 hover:cursor-pointer hover:scale-110 duration-500 ease-in-out' onClick={funcao}/>
    </div>
  )
}