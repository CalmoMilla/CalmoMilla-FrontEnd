import ProfissionalSalvo from "./ProfissionalSalvo";

export default function ProfissionaisSalvos({ profissionaisSalvos }) {
  return (
    <div className="w-fit px-10 xl:p-0 xl:w-[15%] min-h-[350px] h-fit shadow-2xl flex flex-col items-center mt-36 rounded-md">
      <h2 className="text-center text-preto text-3xl py-10 mt-4 font-calistoga">
        Profissionais <br />
        Salvos
      </h2>
      {profissionaisSalvos &&
        profissionaisSalvos.map((profissional) => (
          <ProfissionalSalvo
            key={profissional.id}
            nome={profissional.nome}
            foto={profissional.foto}
            email={profissional.email}
          />
        ))}
    </div>
  );
}
