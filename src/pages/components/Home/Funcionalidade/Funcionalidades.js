import Funcionalidade from "./Funcionalidade"
import { useTranslation } from "react-i18next"

export default function Funcionalidades() {

  const { t } = useTranslation()

  return (
    <>

      <Funcionalidade imagem={"/assets/home/funcionalidades/img-brain.png"} 
      cor={"text-amarelo1"} titulo={t("funcionalidadesTitulo1")} posicao={true} 
      texto={t("funcionalidadesTexto1")}/>


      <Funcionalidade imagem={"/assets/home/funcionalidades/img-yoga.png"} 
      cor={"text-verdeagua"} titulo={t("\nfuncionalidadesTitulo2")} posicao={false} texto={t("\nfuncionalidadesTexto2")}/>

      <Funcionalidade imagem={"/assets/home/funcionalidades/img-psicocall.png"} 
      cor={"text-verde2"} titulo={t("funcionalidadesTitulo3")} posicao={true} texto={t("\nfuncionalidadesTexto3")}/>
    </>
  )
}