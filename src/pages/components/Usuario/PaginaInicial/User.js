"use client";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ExercicioDia from "./ExercicioDia/ExercicioDia";
import VisaoGeral from "./VisaoGeral/VisaoGeral";
import { useEffect, useState } from "react";
import ModalEmocoes from "./Emocoes/ModalEmocoes";
import EsqueciSenha from "../../Login/EsqueciSenha";
import Emocoes from "./Emocoes/Emocoes";
import { BuscarInfoEmocoes } from "@/pages/api/usuario/UsuarioService";
import Rotina from "./Rotina/Rotina";

export default function User() {
  const [showEmocoes, setShowEmocoes] = useState(false);
  const [tarefas, setTarefas] = useState([])
  const [showTarefasFeitas, setShowTarefasFeitas] = useState(false)

  useEffect(() => {
    setTarefas([
      {id: 1, tarefa: "Jogue o Jogo da Memória por 15 minutos", feito: true},
      {id: 2, tarefa: "Jogue o Jogo da Memória por 30 minutos", feito: true},
    ])

    setShowTarefasFeitas(tarefas.every((tarefa) => tarefa.feito))
  }, [tarefas])

  // const updateTarefa = (id, feito) => {
  //   setTarefas((prevTarefas) =>
  //     prevTarefas.map((tarefa) =>
  //       tarefa.id === id ? { ...tarefa, feito } : tarefa
  //     )
  //   );
  // };

  return (
    <div>
      <Header />

      <div className="flex justify-center flex-col items-center pb-20">
        <ExercicioDia
          titulo={"Jogo da Memória"}
          desc={"Um teste diário que testa seu pensamento cognitivo"}
          link={"/jogomemoria"}
        />

        <Rotina tarefas={tarefas} mostrarTarefa={showTarefasFeitas}/>

        <VisaoGeral />
      </div>

      {/* <button className="w-16 h-16 bg-amarelo1" onClick={handleClick}>Mostrar alerta</button> */}

      <button
        className="w-16 h-16 bg-amarelo1"
        onClick={() => setShowEmocoes(true)}
      >
        Teste
      </button>

      <div id="modal-root"></div>
      {showEmocoes && (
        <ModalEmocoes onClose={() => setShowEmocoes(false)}>
          <Emocoes />
        </ModalEmocoes>
      )}

      <Footer />
    </div>
  );
}
