import Blog from "@/pages/components/Home/Blog/Blog"
import Header from "@/pages/components/Header/Header"
import PaginaInicial from "@/pages/components/Home/PaginaInicial/PaginaInicial"
import Funcionalidade from "@/pages/components/Home/Funcionalidade/Funcionalidade"
import ComoFunciona from "@/pages/components/Home/ComoFunciona/ComoFunciona"
import Parceiros from "@/pages/components/Home/Parceiros/Parceiros"
import SobreNos from "@/pages/components/Home/SobreNos/SobreNos"
import ExercicioDia from "@/pages/components/Usuario/ExercicioDia/ExercicioDia"

export default function Page() {
  return (
    <ExercicioDia titulo={"Xadrez"} desc={"Um teste diário que testa seu pensamento cognitivo"} link={"/jogomemoria"}/>
  )
}