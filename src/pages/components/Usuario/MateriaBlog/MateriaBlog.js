import Header from "../../Header/Header"
import BannerLogo from "./BannerLogo/BannerLogo"
import MateriaLink from "./MateriaLink/MateriaLink"
import MateriasLinks from "./MateriaLink/MateriasLinks"

export default function MateriaBlog() {
  return(
    <>
      <Header logado={true}/>

      <BannerLogo/>

      <MateriasLinks/>
    </>
  )
}