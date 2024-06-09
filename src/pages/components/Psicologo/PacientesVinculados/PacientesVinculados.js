import PacienteVinculado from "./PacienteVinculado";

export default function PacientesVinculados(){
  return (
    <div className="w-[70%] mt-32 h-fit shadow-2xl mx-auto">
        <div className="h-[50px] w-full bg-verdeagua flex items-center p-5">
          <h1 className="text-branco text-3xl font-calistoga ">Pacientes vinculados</h1>
        </div>
        <div className="h-fit w-full bg-branco grid grid-cols-2 gap-8 py-10">
          <PacienteVinculado nome={"Vitor"} desc={"oioioioioi"} />
          <PacienteVinculado nome={"Vitor"} desc={"oioioioioi"} />
          <PacienteVinculado nome={"Vitor"} desc={"oioioioioi"} />
          <PacienteVinculado nome={"Vitor"} desc={"oioioioioi"} />
        </div>
    </div>
  )
}