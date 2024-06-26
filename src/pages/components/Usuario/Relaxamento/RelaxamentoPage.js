"use client"

import Header from "../../Header/Header";
import HeaderRelaxamento from "../../Header/HeaderRelaxamento";
import RelaxamentoEscolhido from "./RelaxamentoEscolhido";
import SelecaoSecaoRelaxamento from "./SelecaoSecaoRelaxamento";
import { useState } from "react";

export default function RelaxamentoPage() {

  const [relaxamentoEscolhido, setRelaxamentoEscolhido] = useState(false)

  return (
    <>
      <HeaderRelaxamento/>
      <div className={`pt-28 ${relaxamentoEscolhido ? "bg-roxo" : "bg-verdeagua"}`}>
        {relaxamentoEscolhido ? 
        <RelaxamentoEscolhido funcao={() => setRelaxamentoEscolhido(false)}/>
        :
        <SelecaoSecaoRelaxamento funcao={() => setRelaxamentoEscolhido(true)}/>
        }
      </div>
    </>
  )
}