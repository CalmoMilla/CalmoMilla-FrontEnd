import Image from "next/image"
import MateriaRecurso from "./MateriaRecurso"
import JogoDispRecurso from "./JogoDispRecurso"

export default function Recursos() {
  return (
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
        <JogoDispRecurso/>
        <JogoDispRecurso/>
        <JogoDispRecurso/>
        <JogoDispRecurso/>
      </div>
    </div>
  )
}