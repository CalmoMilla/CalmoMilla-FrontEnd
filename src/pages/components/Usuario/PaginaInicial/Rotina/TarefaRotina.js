"use client"

import { FaRegSquare } from "react-icons/fa6";
import { FaRegCheckSquare } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

export default function TarefaRotina({tarefa, updateTarefa}) {

  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(tarefa.feito)
  }, [tarefa.feito])

  const handleClick = () => {
    if (checked) {
      setChecked(false)
    } else {
      setChecked(true)
    }
    updateTarefa(tarefa.id)
  }

  return (
    <div className="flex md:justify-start justify-around items-center ml-10 my-8 gap-4">
      {checked ? 
        <FaRegCheckSquare className="text-5xl text-verde2 hover:cursor-pointer hover:scale-110 duration-500 ease-in-out md:w-auto w-[30%]" onClick={() => handleClick()}/>
        :
        <FaRegSquare className="text-5xl hover:cursor-pointer hover:scale-110 duration-500 ease-in-out md:w-auto w-[30%]" onClick={() => handleClick()}/>  
      }
      <p className={`text-xl font-nunito ${checked && "line-through md:w-auto w-[70%]"} `}>{tarefa.titulo}</p>
    </div>
  )
}