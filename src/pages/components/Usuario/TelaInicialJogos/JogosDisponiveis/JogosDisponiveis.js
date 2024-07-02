"use client"

import { useEffect, useState } from "react";
import JogoDisponivel from "./JogoDisponivel";
import { BuscarJogos } from "@/pages/api/usuario/UsuarioService";

export default function JogosDisponiveis() {

  const [jogos, setJogos] = useState(null)

  useEffect(() => {
    buscarJogos()
  }, [])

  const buscarJogos = async () => {
    let jogosPegos = await BuscarJogos(`jogos`)
    setJogos(jogosPegos);
    console.log(jogosPegos)
  }

  return (
    <div className=" w-[85%] lg:w-[70%] h-screen mt-4">
      <div className="text-roxo font-calistoga text-6xl mb-3 mt-4 text-center lg:hidden">
        <p>Jogos</p>
      </div>
      <div className="w-[100%] h-fit gap-5 mt-0 md:mt-32 grid grid-cols-1 md:grid-cols-2">
        {jogos && jogos.map((jogo) => (
        <JogoDisponivel
            key={jogo.id}
            nome={jogo.nome}
            link={jogo.link ? jogo.link : "/jogomemoria"}
            foto={jogo.foto}
            jogo={jogo}
          />
        ))}
      </div>
    </div>
  );
}
