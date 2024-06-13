import Header from "../../Header/Header";
import Filtro from "../../Filtro/Filtro";
import ProfissionaisSalvos from "./ProfissionaisSalvos/ProfissionaisSalvos";

export default function PaginaPsicologo() {

  let data = [
    {id: 1, titulo: "Especialidade", amarelo: false},
    {id: 2, titulo: "Valor min - max", amarelo: false},
    {id: 3, titulo: "Nossos parceiros", amarelo: false},
    {id: 4, titulo: "Gênero", amarelo: false},
  ] 

  return (
    <>
      <Header/>
      <div className="flex justify-around pt-40">
        <Filtro data={data}/>
        <ProfissionaisSalvos/>
      </div>
    </>
  )
}