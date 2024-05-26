import Header from "../../Header/Header"
import BannerLogo from "./BannerLogo/BannerLogo"
import MateriaLink from "./MateriaLink/MateriaLink"
import MateriasLinks from "./MateriaLink/MateriasLinks"
import MateriaPrincipal from "./MateriaPrincipal/MateriaPrincipal"
import MateriaFinal from "./MateriaFinal/MateriaFinal"
import MateriaCarrossel from "./MateriaCarrossel/MateriaCarrossel"
import Head from "next/head"

export default function MateriaBlog() {
  return(
    <>

      <Header/>

      <BannerLogo/>

      <MateriasLinks/>

      <MateriaPrincipal/>

      <MateriaFinal/>

      <MateriaCarrossel/>
    </>
  )
}