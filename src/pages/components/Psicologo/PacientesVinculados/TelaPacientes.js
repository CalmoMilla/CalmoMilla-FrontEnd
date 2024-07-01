"use client";

import { BuscarPacientes } from "@/pages/api/usuario/PsicologoService";
import Filtro from "../../Filtro/Filtro";
import Header from "../../Header/Header";
import PacientesVinculados from "./PacientesVinculados";
import { useEffect, useState } from "react";
import PerfilPaciente from "./PerfilPaciente";
import { useTransition } from "react";

export default function TelaPacientes() {
  let data = [
    { id: 1, titulo: "Ordem Alfabética", amarelo: true },
    { id: 2, titulo: "Data", amarelo: true },
  ];

  const [user, setUser] = useState(null);

  return (
    <>
      <Header />
      <div className="pt-40 flex gap-4 flex-col justify-center items-center xl:justify-around xl:items-start xl:flex-row">
        {user ? (
          <PerfilPaciente onClick={() => setUser(null)} user={user} />
        ) : (
          <>
            {/* <Filtro data={data}/> */}
            <PacientesVinculados onClick={setUser} />
          </>
        )}
      </div>
    </>
  );
}
