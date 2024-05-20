import Header from "../../Header/Header"
import BannerLogo from "./BannerLogo/BannerLogo"
import MateriaLink from "./MateriaLink/MateriaLink"
import MateriasLinks from "./MateriaLink/MateriasLinks"
import MateriaPrincipal from "./MateriaPrincipal/MateriaPrincipal"

export default function MateriaBlog() {
  return(
    <>
      <Header logado={true}/>

      <BannerLogo/>

      <MateriasLinks/>

      <MateriaPrincipal/>
    </>
  )
}