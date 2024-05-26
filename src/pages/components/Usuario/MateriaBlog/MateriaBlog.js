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
      <Head><link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
      </Head>

      <Header logado={true}/>

      <BannerLogo/>

      <MateriasLinks/>

      <MateriaPrincipal/>

      <MateriaFinal/>

      <MateriaCarrossel/>
    </>
  )
}