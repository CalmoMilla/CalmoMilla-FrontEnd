"use client"
import Header from "../../Header/Header"
import Footer from "../../Footer/Footer"
import ExercicioDia from "./ExercicioDia/ExercicioDia"
import VisaoGeral from "./VisaoGeral/VisaoGeral"
import { useEffect, useState } from "react"
import ModalEmocoes from "./Emocoes/ModalEmocoes"
import EsqueciSenha from "../../Login/EsqueciSenha"
import Emocoes from "./Emocoes/Emocoes"
import Swal from "sweetalert2"
import { BuscarInfoEmocoes } from "@/pages/api/usuario/UsuarioService"

export default function User() {
  const [showEmocoes, setShowEmocoes] = useState(false)
  const [emocoes, setEmocoes] = useState(null)

  useEffect(() => {
    buscarEmocoes()
  }, []);


  const buscarEmocoes = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);
    
    let emocoesPegas = await BuscarInfoEmocoes(`emocoes/pacientes/${usuarioStorage.id}`)
    setEmocoes(emocoesPegas);
    console.log(emocoesPegas)
  }

  return (
    <div>
      <Header/>

      <div className="flex justify-center flex-col items-center pb-20">
        <ExercicioDia titulo={"Jogo da Memória"} desc={"Um teste diário que testa seu pensamento cognitivo"} 
        link={"/jogomemoria"}/>

        <VisaoGeral/>

        
      </div>

      {/* <button className="w-16 h-16 bg-amarelo1" onClick={handleClick}>Mostrar alerta</button> */}

      <button className="w-16 h-16 bg-amarelo1" onClick={() => setShowEmocoes(true)}>Teste</button>

      <div id="modal-root"></div>
      {showEmocoes && (
        <ModalEmocoes onClose={() => setShowEmocoes(false)}>
          <Emocoes/>
        </ModalEmocoes>
      )}

      <Footer/>
    </div>
  )
}