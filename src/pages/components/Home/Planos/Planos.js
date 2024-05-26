import LinhaHorizontal from "../../Usuario/PaginaInicial/VisaoGeral/LinhaHorizontal";
import Plano from "./Plano";

export default function Planos() {
  return (
    <div className="bg-amber-100/20">
      <h2 className="text-verdeagua text-7xl font-calistoga text-center pt-10 pb-24 lg:pb-40 ">Planos do Usuário</h2>
      <div className="sm:flex-col lg:flex lg:flex-row justify-around pb-12">
        <Plano titulo={"Remova os ADS"} preco={"R$15.00"} plano={"Mensal"}/>
        <Plano titulo={"Remova os ADS"} preco={"R$30.00"} plano={"Vitalício"}/>
      </div>
    </div>
  )
}