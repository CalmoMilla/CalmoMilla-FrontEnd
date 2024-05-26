"use client"

import CampoPessoal from "./CampoPessoal";
import { useEffect, useState } from "react";

export default function InfoPessoal() {

  const [usuario, setUsuario] = useState(null);

  useEffect(() =>  {
    const usuarioStorage = localStorage.getItem("usuario")
    const infoUsuario = JSON.parse(usuarioStorage)
    setUsuario(infoUsuario)
  }, [])

  return (
    <>
      <h2 className="text-5xl text-amarelo1 font-calistoga text-center py-5">Informações Pessoais</h2>
      <div className="flex justify-center flex-col items-center">     
        <CampoPessoal texto1={"Nome"} texto2={usuario ? usuario.nome : ""}/>
        <CampoPessoal texto1={"Data de nascimento"} texto2={"xx/xx/xxxx"}/>
        <CampoPessoal texto1={"Gênero"} texto2={"Indefinido"}/>
        <CampoPessoal texto1={"Idioma"} texto2={"Português"}/>
        <CampoPessoal texto1={"Emprego"} texto2={"Não especificado"}/>   
        <div className="w-[80%] flex justify-between items-center py-5">
          <h2 className="text-2xl text-amarelo1 py-5">Mudar informações da conta</h2>
          <h2 className=""></h2>
        </div>
      </div>
    </>
  )
}