"use client"

import { useEffect, useState } from "react"
import Materia from "../Materia/Materia"
import MateriaBlog from "../MateriaBlog/MateriaBlog"
import { BuscarBlog } from "@/pages/api/blog/BlogService"

export default function MateriaPage() {

  const [showMateria, setShowMateria] = useState(false)
  const [blog, setBlog] = useState(null)

  useEffect(() => {
    buscarBlog()
  }, [])

  const buscarBlog = async () => {
    let blogPego = await BuscarBlog(`blog`)
    setBlog(blogPego);
    console.log(blogPego)
  }

  return (
    <>
      {showMateria ?
        <Materia funcao={() => setShowMateria(false)} blog={blog}/>
        :
        <MateriaBlog funcao={() => setShowMateria(true)}/>
      }
    </>
  )
}