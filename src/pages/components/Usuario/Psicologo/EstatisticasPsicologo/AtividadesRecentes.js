import DataRegistroAtendimento from "./DataRegistroAtendimento";
import PacienteAgendados from "./PacienteAgendados";
import UltimosPacientes from "./UltimosPacientes";

export default function AtividadesRecentes() {
  return (
    <div className="w-[95%] flex flex-col my-5 border mx-auto border-gray-200 min-h-[400px] overflow-y-auto items-center justify-center">
      <div className="w-full mt-10">
        <DataRegistroAtendimento />
      </div>
      <div className="w-[100%]  gap-4  grid  xl:grid-cols-3   ">
        <UltimosPacientes nomePaciente="Arthur" />
        <UltimosPacientes nomePaciente="Arthur" />
        <UltimosPacientes nomePaciente="Arthur" />
      </div>
    </div>
  );
}
