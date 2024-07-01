"use client";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ExercicioDia from "./ExercicioDia/ExercicioDia";
import VisaoGeral from "./VisaoGeral/VisaoGeral";
import { useEffect, useState } from "react";
import ModalEmocoes from "./Emocoes/ModalEmocoes";
import EsqueciSenha from "../../Login/EsqueciSenha";
import Emocoes from "./Emocoes/Emocoes";
import { BuscarInfoEmocoes, BuscarUsuario } from "@/pages/api/usuario/UsuarioService";
import Rotina from "./Rotina/Rotina";
import { BuscarRotina, CadastrarRotina } from "@/pages/api/rotina/RotinaService";
import { BuscarDesempenho } from "@/pages/api/desempenho/DesempenhoService";
import { BuscarRelaxamento } from "@/pages/api/relaxamento/RelaxamentoService";
import PaginaVideoRelaxamento from "../Relaxamento/PaginaVideoRelaxamento";

export default function User() {
  const [showEmocoes, setShowEmocoes] = useState(false);
  const [tarefas, setTarefas] = useState([])
  const [showTarefasFeitas, setShowTarefasFeitas] = useState(false)
  const [emocoes, setEmocoes] = useState(null)
  const [desempenhos, setDesempenhos] = useState(null)
  const [video, setVideo] = useState(null)

  // useEffect( () => {
  //   setTarefas([
  //     {id: 1, tarefa: "Jogue o Jogo da Memória por 15 minutos", feito: false},
  //     {id: 2, tarefa: "Jogue o Jogo da Memória por 30 minutos", feito: false},
  //   ])
  // }, [])

  useEffect(() => {

    let usuarioStorage = localStorage.getItem("usuario");

    buscarEmocoes()
    buscarDesempenho()
    criarRotina()

    if (usuarioStorage != null) {

      usuarioStorage = JSON.parse(usuarioStorage)

      // if (usuarioStorage.precisaPreencherQuestionario) {
      //   setShowEmocoes(true)
      // }

      let tarefasStorage = localStorage.getItem("tarefas");
      let rotinaStorage = localStorage.getItem("rotina");
      rotinaStorage = JSON.parse(rotinaStorage)
      console.log(usuarioStorage)
      
      if (tarefasStorage == null || tarefasStorage == undefined || tarefasStorage == "" ) {
        localStorage.setItem("tarefas", JSON.stringify(rotinaStorage.tarefas));
        let tarefas = localStorage.getItem("tarefas")
        tarefas = JSON.parse(tarefas)
        setTarefas(tarefas)
      } 
      else {

        let tarefas = localStorage.getItem("tarefas")
        tarefas = JSON.parse(tarefas)
        setTarefas(tarefas)

        const allDone = tarefas.every((tarefa) => tarefa.feito);
        setShowTarefasFeitas(allDone);
      }
    }
  },[]);

  const updateTarefa = (tarefaId) => {
    let tarefasLocal = localStorage.getItem("tarefas")
    tarefasLocal = JSON.parse(tarefasLocal)

    const updatedTarefas = tarefasLocal.map((tarefa) => {
      if (tarefa.id === tarefaId) {
        return { ...tarefa, feito: !tarefa.feito };
      }
      return tarefa;
    });

    localStorage.setItem("tarefas", JSON.stringify(updatedTarefas));
  
    let tarefas = localStorage.getItem("tarefas")
    tarefas = JSON.parse(tarefas)
    setTarefas(tarefas)
    
    const allDone = updatedTarefas.every((tarefa) => tarefa.feito);
    setShowTarefasFeitas(allDone);
  };

  const buscarEmocoes = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let emocoesPegas = await BuscarInfoEmocoes(`emocoes/pacientes/${usuarioStorage.id}`)
    setEmocoes(emocoesPegas);

    if (emocoesPegas[0] != undefined) {
      let dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();

      dataAtual = [anoAtual, mesAtual, diaAtual]

      if (dataAtual[0] == emocoesPegas[0].dataRegistro[0] && dataAtual[1] == emocoesPegas[0].dataRegistro[1] && dataAtual[2] == emocoesPegas[0].dataRegistro[2] ) {
        // console.log("dia igual")
      } else {
        setShowEmocoes(true)
      }
    } else {
      setShowEmocoes(true)
    }
  
  }

  const buscarDesempenho = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let desempenhosPegos = await BuscarDesempenho(`desempenhos/usuario/estatistica/${usuarioStorage.id}`)
    setDesempenhos(desempenhosPegos);
    // console.log(desempenhosPegos)
  }

  const criarRotina = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let pacienteReq = {
      paciente: {
        id: usuarioStorage.id,
      },
    }

    let rotina = await CadastrarRotina(pacienteReq, `rotinas`)
    if (typeof(rotina) != "string") {

      let dataAtual = new Date();
      const anoAtual = dataAtual.getFullYear();
      const mesAtual = dataAtual.getMonth() + 1;
      const diaAtual = dataAtual.getDate();

      dataAtual = [anoAtual, mesAtual, diaAtual]

      let rotinaStorage = localStorage.getItem("rotina");

      rotinaStorage = JSON.parse(rotinaStorage)

      if (rotinaStorage) {
        console.log("rotina existe")
        if (dataAtual[0] == rotinaStorage.diaRotina[0] && dataAtual[1] == rotinaStorage.diaRotina[1] && dataAtual[2] == rotinaStorage.diaRotina[2] ) {
          console.log("rotina do dia ja feita")
        } else {
          localStorage.setItem("rotina", JSON.stringify(rotina))
        }
      } else {
        localStorage.setItem("rotina", JSON.stringify(rotina))
      }
    }
  }

  return (
    <div>
      <Header />
      {video ? 
          <PaginaVideoRelaxamento video={video} funcao={() => setVideo(null) }/>
        :
        <>

          <div className="flex justify-center flex-col items-center pb-20">
            <ExercicioDia
              titulo={"Caça Palavras"}
              desc={"Um teste diário que testa seu pensamento cognitivo"}
              link={"/usuario/jogos"}
            />

            <Rotina tarefas={tarefas} mostrarTarefa={showTarefasFeitas} updateTarefa={updateTarefa} setVideo={setVideo}/>

            <VisaoGeral />
          </div>

          {/* <button className="w-16 h-16 bg-amarelo1" onClick={handleClick}>Mostrar alerta</button> */}

          {/* <button
            className="w-16 h-16 bg-amarelo1"
            onClick={() => setShowEmocoes(true)}
          >
            Teste
          </button>  */}

          <div id="modal-root"></div>
          {showEmocoes && (
            <ModalEmocoes onClose={() => setShowEmocoes(false)}>
              <Emocoes />
            </ModalEmocoes>
          )}

          <Footer />
        </>
      }
    </div>
  );
}
