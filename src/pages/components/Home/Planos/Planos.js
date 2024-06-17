import LinhaHorizontal from "../../Usuario/PaginaInicial/VisaoGeral/LinhaHorizontal";
import Plano from "./Plano";

export default function Planos() {
  return (
    <div className="bg-branco p-5">
      <h2 className="text-verdeagua text-5xl  md:text-7xl font-calistoga text-center py-5 ">Planos Disponíveis</h2>
      <h2 className="text-preto text-3xl md:text-5xl font-calistoga text-center py-5 ">Usuários</h2>
      <div className="sm:flex-col lg:flex lg:flex-row justify-around pb-12">
        <Plano preco={"R$15.00"} plano={"Mensal"}/>
        <Plano preco={"R$30.00"} plano={"Vitalício"}/>
      </div>
      <div className="w-[80%] h-1 bg-preto/20 mx-auto"></div>
      <h2 className="text-preto text-5xl font-calistoga text-center py-10">Psicólogos</h2>
      <Plano preco={"R$15.00"} plano={"Vitalício"} psicologo={true}/>
    </div>
  )
}