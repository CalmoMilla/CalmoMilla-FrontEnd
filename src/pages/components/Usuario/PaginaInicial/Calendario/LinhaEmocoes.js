"use client"

import { useEffect, useState } from "react"
import { BuscarInfoEmocoes } from "@/pages/api/usuario/UsuarioService";
import ModalInfoEmocao from "./ModalInfoEmocao";

export default function LinhaEmocoes() {

  const [emocoes, setEmocoes] = useState(null)
  const [modal, setModal] = useState(false)
  const [infoModal, setInfoModal] = useState([])
  const [emoji, setEmoji] = useState("")

  useEffect(() => {
    buscarEmocoes()
  }, []);

  const onClickEmocao = (emocao, emoji) => {
    console.log(emocao)
    const valoresEmocoes = Object.values(emocao);
    console.log(valoresEmocoes)
    setInfoModal(valoresEmocoes)
    setEmoji(emoji)


    setModal(true)
  }


  const buscarEmocoes = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let emocoesPegas = await BuscarInfoEmocoes(`emocoes/pacientes/${usuarioStorage.id}`)
    setEmocoes(emocoesPegas);
    console.log(emocoesPegas)
  }

  return (
    <>
      <div className="grid grid-cols-7 gap-4 py-5 content-center justify-items-center">
        {emocoes && emocoes.map((emocao) => (
          emocao.descricao == "FELIZ" ? <span key={emocao.id} onClick={() => onClickEmocao(emocao, "\u{1F60A}")} className="text-5xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out" >{"\u{1F60A}"}</span> :
          emocao.descricao == "MEIOTERMO" ? <span key={emocao.id} className="text-5xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out" onClick={() => onClickEmocao(emocao, "\u{1F610}")}>{"\u{1F610}"}</span> : 
            <span key={emocao.id} className="text-5xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out" onClick={() => onClickEmocao(emocao, "\u{1F622}")}>{"\u{1F622}"}</span>
        ))}
      </div>
      <div id="modal-root"></div>
      {modal && (
        <ModalInfoEmocao info={infoModal} emoji={emoji} onClose={
          () => {setModal(false) 
          console.log(infoModal)}
        }/>
      )}
    </>
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