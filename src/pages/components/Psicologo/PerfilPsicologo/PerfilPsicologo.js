"use client";
import { useRouter } from "next/navigation";
import Header from "../../Header/Header";
import InfoConta from "../../Usuario/Perfil/InfoConta/InfoConta";
import InfoPessoal from "../../Usuario/Perfil/InfoPessoal/InfoPessoal";
import { BuscarUsuario } from "@/pages/api/usuario/UsuarioService";
import { useEffect, useState } from "react";
import { BuscarPsicologo } from "@/pages/api/usuario/PsicologoService";

export default function PerfilPsicologo() {

  const router = useRouter();

  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    var psicologoLocal = JSON.parse(localStorage.getItem("psicologo"));
    if (psicologoLocal != "" && psicologoLocal != undefined && psicologoLocal != null) {
      const id = psicologoLocal.id;
      psicologoLocal = await BuscarPsicologo("psicologos/", id);
      setUsuario(psicologoLocal);
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="flex justify-center items-center pt-40">
        <div className="lg:w-[80%] w-[90%] h-auto bg-branco shadow-2xl rounded-xl">
          <InfoConta usuario={usuario} />
          <InfoPessoal usuario={usuario} />
        </div>
      </div>
    </>
  );
}
