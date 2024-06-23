"use client";

import Header from "../../Header/Header";
import Filtro from "../../Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import Psicologos from "./Psicologos/Psicologos";
import InfoPsicologo from "./InfoPsicologo/InfoPsicologo";
import { useState } from "react";
import { useEffect } from "react";
import {
  BuscarInfoUsuario,
  BuscarPsicologos,
  BuscarPsicologosSalvos,
} from "@/pages/api/usuario/UsuarioService";

export default function PaginaPsicologo() {
  const [showInfo, setShowInfo] = useState(false);
  const [psicologo, setPsicologo] = useState({});
  const [profissionaisSalvos, setProfissionaisSalvos] = useState([]);
  const [psicologos, setPsicologos] = useState([]);

  let dataFiltro = [
    { id: 1, titulo: "Especialidade", amarelo: false },
    { id: 2, titulo: "Valor min - max", amarelo: false },
    { id: 3, titulo: "Nossos parceiros", amarelo: false },
    { id: 4, titulo: "Gênero", amarelo: false },
  ];

  // useEffect(() => {

  //   let profissionaisBase = [
  //     {id: 1, nome: "vitorugo da gut", esp: "ama a gu", cidade: "naoénasusacasaficaempas"},
  //     {id: 2, nome: "gabs caique", esp: "java", cidade: "CT"}
  //   ]

  //   setProfissionaisSalvos(profissionaisBase)
  // }, [])

  useEffect(() => {
    buscarPsicologos();
    buscarPsicologosSalvos();
  }, []);

  const buscarPsicologos = async () => {
    let psicologos = await BuscarPsicologos("psicologos");
    console.log(psicologos);
    setPsicologos(psicologos);
  };

  const buscarPsicologosSalvos = async () => {
    let psicologosSalvos = await BuscarPsicologosSalvos("pacientes/eu");
    setProfissionaisSalvos(psicologosSalvos.psicologos);
  };

  return (
    <>
      <Header />
      <div className="flex xl:justify-around xl:pt-4 flex-col xl:flex-row xs:items-center xl:items-start ">
        {showInfo ? (
          <InfoPsicologo
            funcao={() => setShowInfo(false)}
            informacoesPsicologo={psicologo}
            setListaPsicologos={setProfissionaisSalvos}
            listaPsicologos={profissionaisSalvos}
          />
        ) : (
          <>
            <h1 className="text-verdeagua  xs:text-6xl sm:text-7xl font-calistoga xs:mt-40 md:mt-48 text-center drop-shadow-2xl xl:hidden ">
              Psicólogos
            </h1>
            <Filtro data={dataFiltro} amarelo={false} />
            <Psicologos
              data={psicologos}
              funcao={() => setShowInfo(true)}
              guardarInfo={setPsicologo}
            />
          </>
        )}
        <ProfissionaisSalvos profissionaisSalvos={profissionaisSalvos} />
      </div>
    </>
  );
}
