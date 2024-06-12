import PacienteVinculado from "./PacienteVinculado";

const data = [
  {id: 1, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
  {id: 2, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
  {id: 3, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
  {id: 4, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
  {id: 5, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
  {id: 6, nome: "Vitor", idade: "18", cidade:"Guaianases - SP"},
]

export default function PacientesVinculados(){
  return (
    <div className="w-[60%] h-fit">
        <h1 className="text-amarelo1 text-7xl font-calistoga text-center">Pacientes</h1>
        <h3 className="text-preto text-3xl font-nunito text-left">Total: {data.length} pacientes</h3>
        <div className="h-fit w-full grid grid-cols-3 gap-8 py-10">
          {data.map((user)=> (
            <PacienteVinculado key={user.id} nome={user.nome} idade={user.idade} cidade={user.cidade} />
          ))}
        </div>
    </div>
  )
}