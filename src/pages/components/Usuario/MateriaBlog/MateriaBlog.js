import Header from "../../Header/Header"
import BannerLogo from "./BannerLogo/BannerLogo"
import MateriaLink from "./MateriaLink/MateriaLink"
import MateriasLinks from "./MateriaLink/MateriasLinks"
import MateriaPrincipal from "./MateriaPrincipal/MateriaPrincipal"
import MateriaFinal from "./MateriaFinal/MateriaFinal"

export default function MateriaBlog() {
  return(
    <>
      <Header logado={true}/>

      <BannerLogo/>

      <MateriasLinks/>

      <MateriaPrincipal/>

      <MateriaFinal/>
    </>
  )
}