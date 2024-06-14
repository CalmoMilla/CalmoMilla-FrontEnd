"use client"

import Image from "next/image"
import MateriaRecurso from "./MateriaRecurso"
import JogoDispRecurso from "./JogoDispRecurso"
import { useState } from "react"
import BeneficioJogo from "./BeneficioJogo"

export default function Recursos() {

  const [showBeneficio, setShowBeneficio] = useState(false)
  const [beneficio, setBeneficio] = useState(null)

  let jogos = [
    {id:1, nome:"Jogo da Memória", foto: "/assets/psicologo/recursos/jogomemoria.png"},
    {id:2, nome:"Sudoku", foto: "/assets/psicologo/recursos/sudoku.jpg"},
    {id:3, nome:"Quiz", foto: "/assets/psicologo/recursos/quiz.jpg"},
    {id:4, nome:"Jogo da Memória", foto: "/assets/psicologo/recursos/jogomemoria.png"},
  ]

  const onClickBeneficio = () => {
    setShowBeneficio(true)
  }

  const onClickVoltar = () => {
    setShowBeneficio(false)
  }

  return (
    <>
      {showBeneficio ? 
        <BeneficioJogo funcao={onClickVoltar} jogo={beneficio}/>
        :
        <div className="w-full h-fit flex flex-col gap-8">
          <h1 className="font-calistoga text-7xl text-roxo text-center">Recursos</h1>
          <p className="font-nunito text-xl text-preto text-center w-[90%] md:w-[33%] mx-auto">[Nome do profissional], encontre aqui recursos interessantes que podem te agregar novos conhecimentos e conheça melhor os jogos que disponibilizamos aos nossos usuários e seus benefícios.</p>
          <div className="w-[90%] md:w-[35%] h-fit bg-roxo rounded-3xl mx-auto py-2">
            <h2 className="font-calistoga text-xl text-branco text-center">Nosso Blog</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 w-[70%] h-fit mx-auto md:gap-0 gap-4">
            <MateriaRecurso/>
            <MateriaRecurso/>
            <MateriaRecurso/>
          </div>
          <div className="w-[90%] md:w-[25%] h-fit bg-roxo rounded-3xl mx-auto p-4">
            <h2 className="font-calistoga text-xl text-branco text-center">Conferir todas as matérias</h2>
          </div>
          <div className="w-[90%] md:w-[35%] h-fit bg-roxo rounded-3xl mx-auto py-2 my-6">
            <h2 className="font-calistoga text-xl text-branco text-center">Sobre nossos jogos disponíveis </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 w-[50%] h-fit mx-auto gap-8">
            {jogos.map((jogo) => (
              <JogoDispRecurso key={jogo.id} nome={jogo.nome} foto={jogo.foto} funcao={onClickBeneficio} funcao2={setBeneficio} jogo={jogo}/>
            ))}
          </div>
        </div>
      }
    </>
  )
}