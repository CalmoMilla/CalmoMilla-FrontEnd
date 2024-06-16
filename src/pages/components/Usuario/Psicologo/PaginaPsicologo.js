"use client"

import Header from "../../Header/Header";
import Filtro from "../../Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import Psicologos from "./Psicologos/Psicologos";
import InfoPsicologo from "./InfoPsicologo/InfoPsicologo";
import { useState } from "react";

export default function PaginaPsicologo() {

  const [showInfo, setShowInfo] = useState(false)

  let dataFiltro = [
    {id: 1, titulo: "Especialidade", amarelo: false},
    {id: 2, titulo: "Valor min - max", amarelo: false},
    {id: 3, titulo: "Nossos parceiros", amarelo: false},
    {id: 4, titulo: "Gênero", amarelo: false},
  ] 

  let psicologos = [
    {id: 1, nome: "vitorugo da gut", idade: 18, cidade: "naoénasusacasaficaempas"},
    {id: 2, nome: "gabs caique", idade: 19, cidade: "CT"},
    {id: 3, nome: "ruuh do crud", idade: 20, cidade: "jardim buturuçu"},
    {id: 4, nome: "arthu", idade: 18, cidade: "itapevi"},
    {id: 5, nome: "luiz", idade: 18, cidade: "numsei"},
    {id: 6, nome: "guuh do crud e do vito", idade: 23, cidade: "ondezepovinhonlocaliza"}
  ]

  return (
    <>
      <Header/>
      <div className="flex justify-around pt-40">
        {
          showInfo ? <InfoPsicologo funcao={() => setShowInfo(false)}/>
          :
          <>
            <Filtro data={dataFiltro} amarelo={false}/>
            <Psicologos data={psicologos} funcao={() => setShowInfo(true)}/>
          </>
        }
        <ProfissionaisSalvos/>
      </div>
    </>
  )
}