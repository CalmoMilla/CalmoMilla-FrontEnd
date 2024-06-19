import Image from "next/image";
export default function PacienteAgendados(props) {
  return (
    <div className="bg-white w-fit border-black m-auto h-[30%] flex flex-col shadow-2xl justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/psicologo/Psicologos/pessoa1.png"
      />
      <p className="font-calistoga text-3xl">{props.nomePaciente}</p>
      <div className="flex gap-24 text-xl font-calistoga">
        <p>{props.dataPaciente}</p>
        <p>{props.horaPaciente}</p>
      </div>
    </div>
  );
}
