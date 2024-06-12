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
import Planos from "./Home/Planos/Planos";
import Filtro from "./Filtro/Filtro";
import SecaoPsicologo from "./Usuario/Psicologo/SecaoPsicologo/SecaoPsicologo";
import Psicologo from "./Usuario/Psicologo/Psicologo";
import ProfissionaisSalvos from "./Usuario/Psicologo/ProfissionaisSalvos/ProfissionaisSalvos";
import JogoDisponivel from "./Usuario/TelaInicialJogos/JogosDisponiveis/JogoDisponivel";
import MateriaBlog from "./Usuario/MateriaBlog/MateriaBlog";
import CadastroPsico from "./Cadastro/CadastroPsico/CadastroPsico";
import PacientesVinculados from "./Psicologo/PacientesVinculados/PacientesVinculados";
import NovaSenha from "./NovaSenha/[email]";
import InfoPaciente from "./Psicologo/PacientesVinculados/InfoPaciente";

export default function Teste() {

  let data = [
    {id: 1, titulo: "Ordem Alfabética"},
    {id: 2, titulo: "Data"},
  ] 

  return (
    <div className="mt-32 flex gap-4 justify-around">
      <Filtro data={data}/>
      <PacientesVinculados/>
    </div>
      
  );
}
