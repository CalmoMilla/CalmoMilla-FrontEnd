import TarefaRotina from "./TarefaRotina";

export default function Rotina({tarefas, mostrarTarefa, updateTarefa }) {

  return (
    <div className="w-[70%] lg:w-[50%] h-auto border-solid border-2 border-roxo rounded-3xl mb-10">
      <div className="w-full h-20 bg-roxo rounded-t-2xl flex justify-start pl-10 items-center">
        <h2 className="text-branco text-3xl font-nunito">Veja sua rotina</h2>
      </div>
      {tarefas && tarefas.map((tarefa) => (
        <TarefaRotina key={tarefa.id} tarefa={tarefa.tarefa} concluido={tarefa.feito} />
      ))}
      {mostrarTarefa && 
        <div className="flex justify-center items-center w-full">        
          <button className="mx-auto bg-roxo/50 hover:bg-roxo hover:text-branco duration-500 ease-in-out font-nunito rounded-full w-[50%] text-xl py-4 ">
            Concluir Rotina do Dia
          </button>
        </div>
      }
    </div>
  )
}