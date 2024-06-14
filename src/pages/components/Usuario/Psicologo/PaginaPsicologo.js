import Header from "../../Header/Header";
import Filtro from "../../Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";
import Psicologos from "./Psicologos/Psicologos";

export default function PaginaPsicologo() {

  let dataFiltro = [
    {id: 1, titulo: "Especialidade", amarelo: false},
    {id: 2, titulo: "Valor min - max", amarelo: false},
    {id: 3, titulo: "Nossos parceiros", amarelo: false},
    {id: 4, titulo: "Gênero", amarelo: false},
  ] 

  return (
    <>
      <Header/>
      <div className="flex justify-around pt-40">
        <Filtro data={dataFiltro} amarelo={false}/>
        <Psicologos/>
        <ProfissionaisSalvos/>
      </div>
    </>
  )
}