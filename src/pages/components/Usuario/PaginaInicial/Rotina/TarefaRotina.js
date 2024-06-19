"use client"

import { FaRegSquare } from "react-icons/fa6";
import { FaRegCheckSquare } from "react-icons/fa";
import { useState } from "react";

export default function TarefaRotina() {

  const [checked, setChecked] = useState(false)

  const handleClick = () => {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
  }

  return (
    <div className="flex justify-start items-center ml-10 my-8 gap-4">
      {checked ? 
        <FaRegCheckSquare className="text-5xl text-verde2 hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={() => handleClick()}/>
        :
        <FaRegSquare className="text-5xl hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={() => handleClick()}/>  
      }
      <p className={`text-xl font-nunito ${checked && "line-through"} `}>Jogar jogo da memória por 15 minutos</p>
    </div>
  )
}