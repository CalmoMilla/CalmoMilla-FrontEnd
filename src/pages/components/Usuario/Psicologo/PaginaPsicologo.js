"use client"

import Header from "../../Header/Header";
import Filtro from "../../Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import Psicologos from "./Psicologos/Psicologos";
import InfoPsicologo from "./InfoPsicologo/InfoPsicologo";
import { useState } from "react";

export default function PaginaPsicologo() {

  const [showInfo, setShowInfo] = useState(false)
  const [psicologo, setPsicologo] = useState({})

  let dataFiltro = [
    {id: 1, titulo: "Especialidade", amarelo: false},
    {id: 2, titulo: "Valor min - max", amarelo: false},
    {id: 3, titulo: "Nossos parceiros", amarelo: false},
    {id: 4, titulo: "Gênero", amarelo: false},
  ] 

  let psicologos = [
    {id: 1, nome: "vitorugo da gut", esp: "ama a gu", cidade: "naoénasusacasaficaempas"},
    {id: 2, nome: "gabs caique", esp: "java", cidade: "CT"},
    {id: 3, nome: "ruuh do crud", esp: "mina do crud", cidade: "jardim buturuçu"},
    {id: 4, nome: "arthu", esp: "bola pastel", cidade: "itapevi"},
    {id: 5, nome: "luiz", esp: "ux designer", cidade: "numsei"},
    {id: 6, nome: "guuh do crud e do vito", esp: "mina do crud", cidade: "coracaodovi"}
  ]

  let profissionaisSalvos = [
    {id: 1, nome: "vitorugo da gut", esp: "ama a gu", cidade: "naoénasusacasaficaempas"},
    {id: 2, nome: "gabs caique", esp: "java", cidade: "CT"},
  ]

  return (
    <>
      <Header/>
      <div className="flex justify-around pt-40">
        {
          showInfo ? <InfoPsicologo funcao={() => setShowInfo(false)} informacoesPsicologo={psicologo}/>
          :
          <>
            <Filtro data={dataFiltro} amarelo={false}/>
            <Psicologos data={psicologos} funcao={() => setShowInfo(true)} guardarInfo={setPsicologo}/>
          </>
        }
        <ProfissionaisSalvos profissionaisSalvos={profissionaisSalvos}/>
      </div>
    </>
  )
}