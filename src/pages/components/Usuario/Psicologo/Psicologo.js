import Header from "../../Header/Header";
import Filtro from "./Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import SecaoPsicologo from "./SecaoPsicologo/SecaoPsicologo";

export default function Psicologo() {
  return (
    <>
      <Header/>
      <div className="flex justify-around pt-40">
        <Filtro/>
        <SecaoPsicologo/>
        <ProfissionaisSalvos/>
      </div>
    </>
  )
}