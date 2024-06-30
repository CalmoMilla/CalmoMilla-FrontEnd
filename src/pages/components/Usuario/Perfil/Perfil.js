"use client";
import { useRouter } from "next/navigation";
import Header from "../../Header/Header";
import InfoConta from "./InfoConta/InfoConta";
import InfoPessoal from "./InfoPessoal/InfoPessoal";
import { BuscarUsuario } from "@/pages/api/usuario/UsuarioService";
import { useEffect, useState } from "react";
export default function Perfil() {
  const router = useRouter();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    var usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (
      usuarioLocal != "" &&
      usuarioLocal != undefined &&
      usuarioLocal != null
    ) {
      const id = usuarioLocal.id;
      usuarioLocal = await BuscarUsuario("pacientes/", id);
      setUsuario(usuarioLocal);
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-40">
        <div className="lg:w-[80%] w-[90%] h-auto xs:px-6 sm:px-0 bg-branco shadow-2xl rounded-xl">
          <InfoConta usuario={usuario} />
          <InfoPessoal usuario={usuario} />
        </div>
      </div>
    </>
  );
}
