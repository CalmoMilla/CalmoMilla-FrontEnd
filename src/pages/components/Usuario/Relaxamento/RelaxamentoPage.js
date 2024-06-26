"use client"

import Header from "../../Header/Header";
import HeaderRelaxamento from "../../Header/HeaderRelaxamento";
import RelaxamentoEscolhido from "./RelaxamentoEscolhido";
import SelecaoSecaoRelaxamento from "./SelecaoSecaoRelaxamento";
import { useState } from "react";

export default function RelaxamentoPage() {

  const [showRelaxamento, setShowRelaxamento] = useState(false)
  const [relaxamento, setRelaxamento] = useState(false)

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
        <RelaxamentoEscolhido funcao={() => setShowRelaxamento(false)}/>
        :
        <SelecaoSecaoRelaxamento funcao={onClickRelaxamento}/>
        }
      </div>
    </>
  )
}