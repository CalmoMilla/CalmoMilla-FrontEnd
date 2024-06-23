"use client";

import { signOut } from "next-auth/react";
import CampoPessoal from "../CampoPessoal";
import { useRouter } from "next/navigation";

export default function InfoPessoal(props) {
  const router = useRouter();

  const handleDeslogar = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    signOut()
    setTimeout(() => {router.push("/login")}, 2000) 
  };

  let dataNasc = props.usuario
    ? props.usuario.dataNasc[2] +
      "/" +
      props.usuario.dataNasc[1] +
      "/" +
      props.usuario.dataNasc[0]
    : "";
  let genero = props.usuario ? props.usuario.genero : "";
  if (genero == "m") {
    genero = "Masculino";
  } else if (genero == "f") {
    genero = "Feminino";
  } else {
    genero = "Outros";
  }

  return (
    <>
      <h2 className="text-5xl text-amarelo2 font-calistoga text-center py-5">
        Informações Pessoais
      </h2>
      <div className="flex justify-center flex-col items-center py-5">
        <CampoPessoal
          texto1={"Nome"}
          texto2={props.usuario ? props.usuario.nome : ""}
        />
        <CampoPessoal
          texto1={"Data de nascimento"}
          texto2={props.usuario ? dataNasc : ""}
        />
        <CampoPessoal texto1={"Gênero"} texto2={props.usuario ? genero : ""} />
        <div className="w-[80%] flex justify-between items-center py-5">
          <h2 className="text-2xl text-amarelo2 py-5">
            Mudar informações da conta
          </h2>
          <h2 className=""></h2>
        </div>
        <button
          className=" xs:w-[250px] sm:w-[300px] px-5 py-3 mx-auto xs:bg-amarelo2 lg:bg-amarelo1  hover:bg-amarelo2 duration-500 ease-in-out p-0 rounded-full text-white text-xl"
          onClick={handleDeslogar}
        >
          DESLOGAR
        </button>
      </div>
    </>
  );
}
