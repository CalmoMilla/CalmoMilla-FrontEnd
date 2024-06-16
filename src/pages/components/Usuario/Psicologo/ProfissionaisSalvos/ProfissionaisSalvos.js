import ProfissionalSalvo from "./ProfissionalSalvo";

export default function ProfissionaisSalvos({profissionaisSalvos}) {
  return (
    <div className="w-[15%] h-auto shadow-2xl flex flex-col items-center">
      <h2 className="text-center text-preto text-2xl py-10 font-calistoga">Profissionais <br />Salvos</h2>
      {profissionaisSalvos.map((profissional) => (
        <ProfissionalSalvo key={profissional.id} nome={profissional.nome} especialidade={profissional.esp}/>
      ))}
    </div>
  )
}