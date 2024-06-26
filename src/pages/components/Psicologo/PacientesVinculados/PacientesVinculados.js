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

  // const data = [
  //   { id: 1, nome: "Vitor", idade: "18", cidade: "Guaianases - SP" },
  //   { id: 2, nome: "Luiz Henrique", idade: "18", cidade: "Guaianases - SP" },
  //   { id: 3, nome: "Gabs Caique", idade: "18", cidade: "Guaianases - SP" },
  //   { id: 4, nome: "Arthur Selingin", idade: "18", cidade: "Guaianases - SP" },
  //   { id: 5, nome: "Augusta Coelho", idade: "18", cidade: "Guaianases - SP" },
  //   { id: 6, nome: "Ruth Barbosa", idade: "18", cidade: "Guaianases - SP" },
  // ];

  const [selectedUser, setSelectedUser] = useState(null);

  function handleClick(user) {
    let usuario = {
      id: user.id,
      nome: user.nome,
      dataNasc: user.dataNasc,
      endereco: user.endereco,
    };
    console.log(usuario);
    setSelectedUser(usuario);
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
              id={user.id}
              nome={user.nome}
              dataNasc={user.dataNasc}
              endereco={user.endereco}
              handleClick={handleClick}
            />
          ))}
        </div>
      </div>
      {selectedUser && (
        <InfoPaciente
          nome={selectedUser.nome}
          dataNasc={selectedUser.dataNasc}
          endereco={selectedUser.endereco}
          onClose={onClose}
        />
      )}
    </>
  );
}
