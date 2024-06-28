import { BuscarEmocaoId } from "@/pages/api/emocao/EmocaoService";
import { useEffect, useState } from "react";

export default function EmocaoPaciente({user}) {

  const [emocoes, setEmocoes] = useState(null)
  const [mostrarEmocao, setMostrarEmocao] = useState(false)

  useEffect(() => {
    buscarEmocoes(user.id)
  }, [])

  const buscarEmocoes = async (id) => {

    let emocoesPegas = await BuscarEmocaoId(`emocoes/pacientes/${id}`)
    setEmocoes(emocoesPegas);
    console.log(emocoesPegas)

    let dataAtual = new Date();
    const anoAtual = dataAtual.getFullYear();
    const mesAtual = dataAtual.getMonth() + 1;
    const diaAtual = dataAtual.getDate();

    dataAtual = [anoAtual, mesAtual, diaAtual]

    if (emocoesPegas[0]) {
      if (dataAtual[0] == emocoesPegas[0].dataRegistro[0] && dataAtual[1] == emocoesPegas[0].dataRegistro[1] && dataAtual[2] == emocoesPegas[0].dataRegistro[2] ) {
        setMostrarEmocao(true)
      }
    }
  }

  return (
    <>
      <div className="w-full h-fit flex flex-col gap-4">
        <h2 className="text-amarelo2 text-4xl text-center">Humor de hoje</h2>
        <div className="w-[80%] h-fit border-4 border-preto/10 rounded-3xl flex justify-around items-center mx-auto">
          {mostrarEmocao ? 
            <>
              { emocoes[0].descricao == "FELIZ" ? 
                <p className="text-[4rem] md:text-[7rem]">{"\u{1F60A}"}</p> : 
                emocoes[0].descricao == "MEIOTERMO" ?
                <p className="text-[4rem] md:text-[7rem]">{"\u{1F60A}"}</p> :
                <p className="text-[4rem] md:text-[7rem]">{"\u{1F622}"}</p>
              }
              <div className="flex flex-col justify-around">
                <p className="text-center text-2xl md:text-3xl">{user.nome} está se sentindo</p>  
                { emocoes[0].descricao == "FELIZ" ? 
                  <p className="text-center text-2xl md:text-3xl text-verdeagua">Feliz</p> : 
                  emocoes[0].descricao == "MEIOTERMO" ?
                  <p className="text-center text-2xl md:text-3xl text-verdeagua">Meio Termo</p> :
                  <p className="text-center text-2xl md:text-3xl text-verdeagua">Triste</p>
                }        
              </div>
            </> 
            : 
            <>          
              <p className="text-[4rem] md:text-[7rem]">?</p>
              <div className="flex flex-col justify-around">
                <p className="text-center text-2xl md:text-3xl">Humor não registrado</p>              
              </div>
            </>
          }
        </div>
        <div className="w-full h-1 bg-preto/10 rounded-sm my-2"></div>
      </div>
    </>
  )
}