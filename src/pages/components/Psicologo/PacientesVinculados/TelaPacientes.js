"use client"

import { BuscarPacientes } from "@/pages/api/usuario/PsicologoService";
import Filtro from "../../Filtro/Filtro";
import Header from "../../Header/Header";
import PacientesVinculados from "./PacientesVinculados";
import { useEffect, useState } from "react";

export default function TelaPacientes() {

  let data = [
    {id: 1, titulo: "Ordem Alfabética", amarelo: true},
    {id: 2, titulo: "Data", amarelo: true},
  ] 
  
  return (
    <>
      <Header/>
      <div className="pt-40 flex gap-4 flex-col justify-center items-center xl:justify-around xl:items-start xl:flex-row">
        <Filtro data={data}/>
        <PacientesVinculados/>
      </div>  
    </>
  );
}