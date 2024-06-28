import EstatisticaPaciente from "./EstatisticaPaciente";

export default function VisaoGeralPaciente() {
  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4 mt-10">
        <h2 className="text-amarelo2 text-4xl text-center">Visão geral</h2>
        <h2 className="text-amarelo1 text-3xl text-center mb-20">Estatísticas dos exercícios</h2>
        <EstatisticaPaciente titulo={"Memória"}/>
        <EstatisticaPaciente titulo={"Resolução de problemas"}/>
        <EstatisticaPaciente titulo={"Atenção"}/>
        <EstatisticaPaciente titulo={"Velocidade"}/>
        <div className="w-full h-1 bg-preto/10 rounded-sm my-2"></div>
      </div>
    </>
  )
}