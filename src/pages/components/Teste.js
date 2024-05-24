"use client";

import TesteCadastro from "./TesteCadastro";
import SobreNos from "./Home/SobreNos/SobreNos";
import TesteLogin from "./TesteLogin";
import CalendarioHumor from "./Usuario/PaginaInicial/Calendario/Calendario";
import User from "./Usuario/PaginaInicial/User";
import InfoConta from "./Usuario/Perfil/InfoConta/InfoConta";
import Perfil from "./Usuario/Perfil/Perfil";
import JogosDisponiveis from "./Usuario/TelaInicialJogos/JogosDisponiveis/JogosDisponiveis";
import SelecaoJogos from "./Usuario/TelaInicialJogos/SelecaoJogos/SelecaoJogos";
import TelaInicialJogos from "./Usuario/TelaInicialJogos/TelaInicialJogos";
import Cadastro from "./Cadastro/Cadastro";
import Login from "./Login/Login";
import Home from "./Home/Home";
import EsqueciSenha from "./Login/EsqueciSenha";
import Modal from "./Login/modalAlterarSenha";
import OutrasMaterias from "./Usuario/Materia/OutrasMaterias/OutrasMaterias";
import Materia from "./Usuario/Materia/Materia";
import { useEffect } from "react";
import load_astv_script from "../../../public/assistive/assistive";

export default function Teste() {
  useEffect(() => {
    load_astv_script();
  }, []);

  return <h1>aaaaa</h1>;
}
