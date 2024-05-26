import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import ExercicioDia from "./ExercicioDia/ExercicioDia"
import VisaoGeral from "./VisaoGeral/VisaoGeral"

export default function User() {
  return (
    <div>
      <Header/>

      <div className="flex justify-center flex-col items-center pb-20">
        <ExercicioDia titulo={"Xadrez"} desc={"Um teste diário que testa seu pensamento cognitivo"} 
        link={"/jogomemoria"}/>

        <VisaoGeral/>

        
      </div>

      <Footer/>
    </div>
  )
}