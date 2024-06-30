import { useEffect, useState } from "react";
import MateriaLink from "./MateriaLink";
import { useTranslation } from "react-i18next";

export default function MateriasLinks({funcao, blog}) {

  return (
    <div className="flex justify-center gap-12 py-20">
      <MateriaLink src={blog && blog[0].foto} baixo={true} text={blog && blog[0].tituloPostagem} funcao={funcao} materia={blog && blog[0]}/>
      <MateriaLink src={blog && blog[1].foto} text={blog && blog[1].tituloPostagem} funcao={funcao} materia={blog && blog[1]}/>
      <MateriaLink src={blog && blog[2].foto} baixo={true} text={blog && blog[2].tituloPostagem} funcao={funcao} materia={blog && blog[2]}/>
    </div>
  )
}