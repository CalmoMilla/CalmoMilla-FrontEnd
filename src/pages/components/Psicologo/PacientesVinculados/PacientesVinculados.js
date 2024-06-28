"use client";

import { BuscarPacientes } from "@/pages/api/usuario/PsicologoService";
import InfoPaciente from "./InfoPaciente";
import PacienteVinculado from "./PacienteVinculado";
import { useState, useEffect } from "react";

export default function PacientesVinculados() {

  const [pacientes, setPacientes] = useState(null)

  useEffect(() => {
    buscar();
  }, []);
  
  const buscar = async () => {
    const pacientesPegos = await BuscarPacientes("pacientes");
    setPacientes(pacientesPegos);
    console.log(pacientesPegos)
  };

  const [selectedUser, setSelectedUser] = useState(null);

  function handleClick(user) {
    console.log(user);
    setSelectedUser(user);
  }

  function onClose() {
    setSelectedUser(null);
  }

  return (
    <>
      <div className="w-[60%] h-fit">
        <h1 className="text-amarelo1 text-7xl font-calistoga text-center">
          Pacientes
        </h1>
        <h3 className="text-preto text-3xl font-nunito text-center py-2 lg:text-left">
          Total: {pacientes && pacientes.length} pacientes
        </h3>
        <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
          {pacientes && pacientes.map((user) => (
            <PacienteVinculado
              key={user.id}
              user={user}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      {selectedUser && (
        <InfoPaciente
          user={selectedUser}
          onClose={onClose}
        />
      )}
    </>
  );
}
