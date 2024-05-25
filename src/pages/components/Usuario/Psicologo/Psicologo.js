import Filtro from "./Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import SecaoPsicologo from "./SecaoPsicologo/SecaoPsicologo";

export default function Psicologo() {
  return (
    <div className="flex justify-around">
      <Filtro/>
      <SecaoPsicologo/>
      <ProfissionaisSalvos/>
    </div>
  )
}