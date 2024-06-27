"use client"

import { useEffect, useState } from "react"
import Materia from "../Materia/Materia"
import MateriaBlog from "../MateriaBlog/MateriaBlog"
import { BuscarBlog } from "@/pages/api/blog/BlogService"

export default function MateriaPage() {

  const [showMateria, setShowMateria] = useState(false)
  const [blog, setBlog] = useState(null)
  const [materia, setMateria] = useState(null)

  useEffect(() => {
    buscarBlog()
  }, [])

  const buscarBlog = async () => {
    let blogPego = await BuscarBlog(`blog`)
    setBlog(blogPego);
    console.log(blogPego)
  }

  const onClickMateria = (materia) => {
    setShowMateria(true)
    setMateria(materia)
  }

  const onClickOutrasMaterias = (materia) => {
    setMateria(materia)
  }

  return (
    <>
      {showMateria ?
        <Materia retornar={() => setShowMateria(false)} blog={blog} materia={materia} funcao={onClickOutrasMaterias}/>
        :
        <MateriaBlog funcao={onClickMateria} blog={blog}/>
      }
    </>
  )
}