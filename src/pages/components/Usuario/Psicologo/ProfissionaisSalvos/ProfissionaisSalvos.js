import ProfissionalSalvo from "./ProfissionalSalvo";

export default function ProfissionaisSalvos({profissionaisSalvos}) {
  return (
    <div className="w-fit px-10 xl:p-0 xl:w-[15%] h-fit shadow-2xl flex flex-col items-center">
      <h2 className="text-center text-preto text-2xl py-10 font-calistoga">Profissionais <br />Salvos</h2>
      {profissionaisSalvos && profissionaisSalvos.map((profissional) => (
        <ProfissionalSalvo key={profissional.id} nome={profissional.nome} foto={profissional.foto} email={profissional.email}/>
      ))}
    </div>
  )
}