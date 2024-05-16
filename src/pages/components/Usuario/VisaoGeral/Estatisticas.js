import Estatistica from "./Estatistica"

export default function Estatisticas() {
  return (
    <>
      <div className="pt-2 m-auto md:p-8 w-[80%] md:w-auto">
        <h1 className="text-3xl md:text-5xl font-nunito text-roxo">Visão Geral</h1>
        <h2 className="text-2xl md:text-3xl font-nunito text-roxo pt-10">Suas estatísticas</h2>
      </div>
      <Estatistica titulo={"Memória"} resul={30}/>
      <Estatistica titulo={"Resolução de Problemas"} resul={70}/>
      <Estatistica titulo={"Atenção"} resul={30}/>
      <Estatistica titulo={"Velocidade"} resul={60}/>
    </>
  )
}