import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import ExercicioDia from "./ExercicioDia/ExercicioDia"
import VisaoGeral from "./VisaoGeral/VisaoGeral"

export default function User() {
  return (
    <div>
      <Header logado={true}/>

      <div className="flex justify-center flex-col items-center">
        <ExercicioDia titulo={"Xadrez"} desc={"Um teste diário que testa seu pensamento cognitivo"} 
        link={"/jogomemoria"}/>

        <VisaoGeral/>

        
      </div>

      <Footer/>
    </div>
  )
}