"use client"

import { useEffect, useState } from "react"
import { BuscarInfoEmocoes } from "@/pages/api/usuario/UsuarioService";

export default function LinhaEmocoes() {

  const [emocoes, setEmocoes] = useState(null)

  useEffect(() => {
    buscarEmocoes()
  }, []);


  const buscarEmocoes = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let emocoesPegas = await BuscarInfoEmocoes(`emocoes/pacientes/${usuarioStorage.id}`)
    setEmocoes(emocoesPegas);
    console.log(emocoesPegas)
  }

  return (
    <div className="grid grid-cols-7 gap-4 py-5 content-center justify-items-center">
      {emocoes && emocoes.map((emocao) => (
        emocao.descricao == "FELIZ" ? <span key={emocao.id} className="text-5xl">{"\u{1F622}"}</span> :
        emocao.descricao == "MEIOTERMO" ? <span key={emocao.id} className="text-5xl">{"\u{1F610}"}</span> : 
        <span key={emocao.id} className="text-5xl">{"\u{1F60A}"}</span>
      ))}
    </div>
      // <div>
      //   <div className="grid grid-cols-7 gap-4 py-5 content-center justify-items-center">
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2">{"\u{1F622}"}</div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      //   <div className="w-4 md:w-8 rounded-full h-4 md:h-8 bg-verde2"></div>
      // </div>
  )
}