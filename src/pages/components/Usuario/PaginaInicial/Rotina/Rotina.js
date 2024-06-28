import { useEffect } from "react";
import TarefaRotina from "./TarefaRotina";
import { AtualizarRotina } from "@/pages/api/rotina/RotinaService";
import { useTranslation } from "react-i18next";

export default function Rotina({ tarefas, mostrarTarefa, updateTarefa}) {

  const { t } = useTranslation();

  const handleSubmitRotina = () => {
    let rotina = localStorage.getItem("rotina");
    rotina = JSON.parse(rotina)
    rotina.status = true
    AtualizarRotina(rotina, "rotinas")
  }

  return (
    <div className="w-[70%] lg:w-[50%] h-auto border-solid border-2 border-roxo rounded-3xl mb-10">
      <div className="w-full h-20 bg-roxo rounded-t-2xl flex justify-start pl-10 items-center">
        <h2 className="text-branco text-3xl font-nunito">{t('rotinaTitulo')}</h2>
      </div>
      {tarefas &&
        tarefas.map((tarefa) => (
          <TarefaRotina
            key={tarefa.id}
            tarefa={tarefa}
            updateTarefa={updateTarefa}
          />
        ))}
      {mostrarTarefa && (
        <div className="flex justify-center items-center w-full">
          <button className="mx-auto bg-roxo/50 hover:bg-roxo hover:text-branco duration-500 ease-in-out font-nunito rounded-full w-[90%] md:w-[50%] text-xl py-4 mb-5" onClick={handleSubmitRotina} >
            Concluir Rotina do Dia
          </button>
        </div>
      )}
    </div>
  );
}
