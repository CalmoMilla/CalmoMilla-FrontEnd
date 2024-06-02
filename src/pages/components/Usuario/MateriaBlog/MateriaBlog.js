import Header from "../../Header/Header"
import BannerLogo from "./BannerLogo/BannerLogo"
import MateriasLinks from "./MateriaLink/MateriasLinks"
import MateriaPrincipal from "./MateriaPrincipal/MateriaPrincipal"
import MateriaFinal from "./MateriaFinal/MateriaFinal"
import MateriaCarrossel from "./MateriaCarrossel/MateriaCarrossel"
import Footer from "../../Footer/Footer"

export default function MateriaBlog() {
  return(
    <>

      <Header/>

      <BannerLogo/>

      <div className="xl:block hidden">
        <MateriasLinks/>
      </div>
      
      <div className="block xl:hidden">
        <MateriaCarrossel/>
      </div>

      <MateriaPrincipal/>

      <MateriaFinal/>

      <Footer/>

    </>
  )
}