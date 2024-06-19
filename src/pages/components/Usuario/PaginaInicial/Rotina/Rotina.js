import TarefaRotina from "./TarefaRotina";

export default function Rotina({tarefas}) {
  return (
    <div className="w-[70%] lg:w-[50%] h-auto border-solid border-2 border-roxo rounded-3xl mb-10">
      <div className="w-full h-20 bg-roxo rounded-t-2xl flex justify-start pl-10 items-center">
        <h2 className="text-branco text-3xl font-nunito">Veja sua rotina</h2>
      </div>
      {tarefas && tarefas.map((tarefa) => (
        <TarefaRotina key={tarefa.id} tarefa={tarefa.tarefa} concluido={tarefa.feito}/>
      ))}
    </div>
  )
}