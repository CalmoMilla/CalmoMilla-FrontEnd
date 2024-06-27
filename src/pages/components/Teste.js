"use client";

import Header from "./Header/Header";
import SobreNos from "./Home/SobreNos/SobreNos";
import PsicologoHome from "./Psicologo/PsicologoHome/PsicologoHome";
import Recursos from "./Psicologo/Recursos/Recursos";
import RecursosPage from "./Psicologo/Recursos/RecursosPage";
import CacaPalavras from "./Usuario/Jogos/CacaPalavras";
import MateriaBlog from "./Usuario/MateriaBlog/MateriaBlog";
import MateriaPage from "./Usuario/MateriaPage/MateriaPage";
import EstatisticasPsicologo from "./Usuario/Psicologo/EstatisticasPsicologo/EstatisticasPsicologo";
import InfoPsicologo from "./Usuario/Psicologo/InfoPsicologo/InfoPsicologo";
import PaginaPsicologo from "./Usuario/Psicologo/PaginaPsicologo";
import RelaxamentoEscolhido from "./Usuario/Relaxamento/RelaxamentoEscolhido";
import RelaxamentoPage from "./Usuario/Relaxamento/RelaxamentoPage";
import { useTranslation } from "react-i18next";

export default function Teste() {
  const { t } = useTranslation();

  const strings = ["Olá", "Mundo", "!"];

  const translatedStrings = strings.map((string) => t(string));

  return (
    <MateriaPage/>
  );
}
