"use client"

import Header from "../../Header/Header";
import RelaxamentoEscolhido from "./RelaxamentoEscolhido";
import SelecaoSecaoRelaxamento from "./SelecaoSecaoRelaxamento";
import { useState } from "react";

export default function RelaxamentoPage() {

  const [relaxamentoEscolhido, setRelaxamentoEscolhido] = useState(false)

  return (
    <>
      {/* <Header roxo={true}/> */}
      <div className={`pt-28 ${relaxamentoEscolhido ? "bg-roxo" : "bg-verdeagua"}`}>
        {relaxamentoEscolhido ? 
        <RelaxamentoEscolhido/>
        :
        <SelecaoSecaoRelaxamento funcao={() => setRelaxamentoEscolhido(true)}/>
        }
      </div>
    </>
  )
}