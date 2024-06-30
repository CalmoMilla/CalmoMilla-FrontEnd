"use client"

import Header from "../../Header/Header";
import HeaderRelaxamento from "../../Header/HeaderRelaxamento";
import RelaxamentoEscolhido from "./RelaxamentoEscolhido";
import SelecaoSecaoRelaxamento from "./SelecaoSecaoRelaxamento";
import { useState } from "react";
import VideoRelaxamento from "./VideoRelaxamento";
import PaginaVideoRelaxamento from "./PaginaVideoRelaxamento";

export default function RelaxamentoPage() {

  const [showRelaxamento, setShowRelaxamento] = useState(false)
  const [relaxamento, setRelaxamento] = useState(false)
  const [video, setVideo] = useState(null)

  const onClickRelaxamento = (relaxamentoPego) => {
    setShowRelaxamento(true)
    setRelaxamento(relaxamentoPego)
    console.log(relaxamentoPego)
  }

  return (
    <>
      <HeaderRelaxamento/>
      <div className={`pt-28 ${showRelaxamento ? "bg-roxo" : "bg-verdeagua"}`}>
        {showRelaxamento ? 
          video ?
          <PaginaVideoRelaxamento video={video} funcao={() => setVideo(null) }/>
          :
          <RelaxamentoEscolhido funcao={() => setShowRelaxamento(false)} funcao2={setVideo} secao={relaxamento}/>
        :
          <SelecaoSecaoRelaxamento funcao={onClickRelaxamento}/>
        }
      </div>
    </>
  )
}