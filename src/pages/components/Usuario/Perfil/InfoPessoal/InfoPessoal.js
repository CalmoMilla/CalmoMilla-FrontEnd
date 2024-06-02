"use client"
import CampoPessoal from "./CampoPessoal";

export default function InfoPessoal(props) {

  let dataNasc = props.usuario ? props.usuario.dataNasc[2] + "/" + props.usuario.dataNasc[1] + "/" + 
  props.usuario.dataNasc[0] : ""
  let genero = props.usuario ? props.usuario.genero : ""
  if (genero == "m") {
    genero = "Masculino"
  } else if (genero == "f") {
    genero = "Feminino"
  } else {
    genero = "Outros"
  }

  return (
    <>
      <h2 className="text-5xl text-amarelo1 font-calistoga text-center py-5">Informações Pessoais</h2>
      <div className="flex justify-center flex-col items-center">     
        <CampoPessoal texto1={"Nome"} texto2={props.usuario ? props.usuario.nome : ""}/>
        <CampoPessoal texto1={"Data de nascimento"} texto2={props.usuario ? dataNasc : ""}/>
        <CampoPessoal texto1={"Gênero"} texto2={props.usuario ? genero : ""}/>
        <div className="w-[80%] flex justify-between items-center py-5">
          <h2 className="text-2xl text-amarelo1 py-5">Mudar informações da conta</h2>
          <h2 className=""></h2>
        </div>
      </div>
    </>
  )
}