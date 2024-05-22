import Header from "../../Header/Header";
import Funcionalidades from "../../Home/Funcionalidade/Funcionalidades";
import CaixaNoticia from "./CaixaNoticia/CaixaNoticia";

export default function Materia(){
  return (
    <div className="h-fit w-screen bg-gray-400 pb-10">
      <Header logado={true}/>

      <div className="pt-40 flex justify-center">
        <CaixaNoticia/>

      </div>

    </div>
  )
}