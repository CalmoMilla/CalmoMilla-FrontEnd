import Plano from "./Plano";

export default function Planos() {
  return (
    <div className="bg-amber-100/20">
      <h2 className="text-verdeagua text-7xl font-calistoga text-center py-10">Planos do Usuário</h2>
      <div className="flex justify-around ">
        <Plano titulo={"Remova os ADS"} preco={"R$15.00"} plano={"Mensal"}/>
        <Plano titulo={"Remova os ADS"} preco={"R$30.00"} plano={"Vitalício"}/>
      </div>
    </div>
  )
}