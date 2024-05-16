import Estatistica from "./Estatistica"

export default function Estatisticas() {
  return (
    <>
      <div className="p-8">
        <h1 className="text-5xl font-nunito text-roxo">Visão Geral</h1>
        <h2 className="text-3xl font-nunito text-roxo pt-10">Suas estatísticas</h2>
      </div>
      <Estatistica titulo={"Memória"} resul={30}/>
      <Estatistica titulo={"Resolução de Problemas"} resul={70}/>
      <Estatistica titulo={"Atenção"} resul={30}/>
      <Estatistica titulo={"Velocidade"} resul={60}/>
    </>
  )
}