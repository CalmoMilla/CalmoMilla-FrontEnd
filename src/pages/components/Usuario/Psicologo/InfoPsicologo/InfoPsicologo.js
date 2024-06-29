"use client";

import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useEffect } from "react";
import {
  DeletarPsicologo,
  FavoritarPsicologo,
} from "@/pages/api/usuario/UsuarioService";

export default function InfoPsicologo({
  funcao,
  informacoesPsicologo,
  setListaPsicologos,
  listaPsicologos,
}) {
  const [showHeart, setShowHeart] = useState(false);

  informacoesPsicologo = informacoesPsicologo ? informacoesPsicologo : "";

  let informacoesFormatadas = Object.values(informacoesPsicologo);

  const existeProfissional = (profissionais, novoProfissional) => {
    return profissionais.find(
      (profissional) => profissional.id === novoProfissional.id
    );
  };

  useEffect(() => {
    existeProfissional(listaPsicologos, informacoesPsicologo);
    if (existeProfissional(listaPsicologos, informacoesPsicologo)) {
      setShowHeart(true);
    }
    console.log(informacoesFormatadas);
  }, []);

  const onClickCoracaoVazio = () => {
    setShowHeart(true);
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    var objeto = {
      idPaciente: usuario.id,
      idPsicologo: informacoesFormatadas[0],
    };
    FavoritarPsicologo("pacientes/favoritos", objeto);
  };

  const onClickCoracaoCheio = () => {
    var usuario = JSON.parse(localStorage.getItem("usuario"));
    var objeto = {
      idPaciente: usuario.id,
      idPsicologo: informacoesFormatadas[0],
    };
    DeletarPsicologo("pacientes/favoritos", objeto);
    setShowHeart(false);
  };

  // const onClickCoracaoCheio = () => {
  //   setShowHeart(false)
  //   const prof = existeProfissional(listaPsicologos, informacoesPsicologo)
  //   removerProfissionalPorId()
  //   if (!prof) {
  //     setListaPsicologos((prev) => [...prev, informacoesPsicologo])
  //   }
  // }

  return (
    <>
      <div className="w-[90%] lg:w-[70%] h-fit shadow-2xl flex flex-col justify-center items-center py-5 gap-5 relative mt-36 rounded-md">
        {/* <div className="w-[80%] xs:mt-16 justify-start flex xs:flex-col sm:flex-row  xs:items-center  gap-3">
          <Image
            src={informacoesFormatadas[9]}
            alt={"Imagem do Usuario"}
            width={80}
            height={80}
            className="rounded-full "
          />
          <div>
            <p className="font-nunito text-3xl xs:text-center sm:text-start ">
              {informacoesFormatadas[1]}
            </p>
            <p className="font-nunito text-xl xs:text-center sm:text-start">
              {informacoesFormatadas[2]}
            </p>
          </div>
        </div> */}

        <h1 className="text-5xl font-nunito">{informacoesFormatadas[1]}</h1>

        <Image
            src={informacoesFormatadas[9]}
            alt={"Imagem do Usuario"}
            width={600}
            height={600}
            className="rounded-lg"
          />

        <p className="text-left font-nunito w-[80%]">
          {informacoesFormatadas[10]}
        </p>

        <div className="relative w-[50%] mx-auto mb-10">
          <button className="mt-10 bg-verde1 hover:bg-verde2 hover:text-branco duration-500 ease-in-out font-nunito rounded-full w-full">
            Contatar profissional
          </button>
          {showHeart ? (
            <IoHeartSharp
              className="text-5xl absolute bottom-1 -left-36 text-roxo duration-500 ease-in-out"
              onClick={onClickCoracaoCheio}
            />
          ) : (
            <IoHeartOutline
              onClick={onClickCoracaoVazio}
              className="text-5xl absolute bottom-1 -left-36 hover:text-roxo duration-500 ease-in-out"
            />
          )}
        </div>
        <IoIosArrowDropleftCircle
          onClick={funcao}
          className="absolute text-5xl text-verde1 hover:text-verde2 hover:scale-110 duration-500 ease-in-out top-5 left-5 hover:cursor-pointer "
        />
      </div>
    </>
  );
}
