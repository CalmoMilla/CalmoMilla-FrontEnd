"use client"

import { useState } from "react"
import Materia from "../Materia/Materia"
import MateriaBlog from "../MateriaBlog/MateriaBlog"

export default function MateriaPage() {

  const [showMateria, setShowMateria] = useState(true)

  return (
    <>
      {showMateria ?
        <Materia funcao={() => setShowMateria(false)}/>
        :
        <MateriaBlog funcao={() => setShowMateria(true)}/>
      }
    </>
  )
}