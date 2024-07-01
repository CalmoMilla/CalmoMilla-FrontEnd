"use client";

import { signOut } from "next-auth/react";
import CampoPessoal from "../CampoPessoal";
import { useRouter } from "next/navigation";
import Modal from "./ModalAlterarInformacoes";
import AlterarInformacao from "./AlteraInformacao";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function InfoPessoal(props) {
  const router = useRouter();
  const [alterarInfo, setalterarInfo] = useState(false);
  const [dataNasc, setDataNasc] = useState(null)

  const { t } = useTranslation()

  useEffect(() => {
    setDataNasc(props.usuario?.dataNasc?.[2] + "/" + props.usuario?.dataNasc?.[1] + "/" + props.usuario?.dataNasc?.[0]);
  }, [props.usuario]);

  const handleDeslogar = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    localStorage.removeItem("psicologo");
    localStorage.removeItem("tarefas");
    localStorage.removeItem("rotina");
    signOut();
    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  let genero = props.usuario ? props.usuario.genero : "";
  if (genero == "MASCULINO") {
    genero = t('perfilMasculino');
  } else if (genero == "FEMININO") {
    genero = t('perfilFeminino');
  } else {
    genero = t('perfilOutros');
  }

  return (
    <>
      <h2 className="xs:text-4xl sm:text-5xl text-amarelo2 font-calistoga text-center py-5">
        {t('perfilInfoPessoalTit')}
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
          <h2
            className="text-2xl hover:text-amarelo2 text-amarelo1 py-5 cursor-pointer "
            onClick={() => setalterarInfo(true)}
          >
            {t('perfilMudarInfo')}
          </h2>
          <h2 className=""></h2>
        </div>
        <button
          className=" xs:w-[250px] sm:w-[300px] px-5 py-3 mx-auto xs:bg-amarelo2 lg:bg-amarelo1  hover:bg-amarelo2 duration-500 ease-in-out p-0 rounded-full text-white text-xl"
          onClick={handleDeslogar}
        >
          {t('perfilDeslogar')}
        </button>
      </div>
      <div id="modal-root"></div>
      {alterarInfo && (
        <Modal onClose={() => setalterarInfo(false)}>
          <AlterarInformacao />
        </Modal>
      )}
    </>
  );
}
