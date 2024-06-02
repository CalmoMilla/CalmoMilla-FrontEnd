"use client";
import Header from "../../Header/Header";
import InfoConta from "./InfoConta/InfoConta";
import InfoPessoal from "./InfoPessoal/InfoPessoal";
import { BuscarUsuario } from "@/pages/api/usuario/UsuarioService";
import { useEffect, useState } from "react";
export default function Perfil() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    var usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    const id = usuarioLocal.id;
    usuarioLocal = await BuscarUsuario("pacientes/", id);
  /*  usuarioLocal.dataNasc =
      usuarioLocal.dataNasc[2] +
      "/" +
      usuarioLocal.dataNasc[1] +
      "/" +
      usuarioLocal.dataNasc[0];
    console.log(usuarioLocal);*/
    setUsuario(usuarioLocal);
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-40">
        <div className="w-[70%] h-auto bg-branco shadow-2xl rounded-xl">
          <InfoConta usuario={usuario} />
          <InfoPessoal usuario={usuario} />
        </div>
      </div>
    </>
  );
}
