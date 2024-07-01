export default function MateriaRecurso() {
  return (
    <div className={`w-[90%] h-44 hover:scale-110 transition duration-500 ease-in-out bg-cover bg-no-repeat rounded-xl mx-auto`} style={{backgroundImage: `url("assets/psicologo/recursos/materiacerebro.png")`}}>
      <div className="h-full w-full bg-preto/30 rounded-xl flex items-center">
        <p className={`text-branco text-lg lg:text-2xl font-bold font-nunito pl-5`}>Texto da matéria aqui</p>
      </div>
    </div>
  )
}