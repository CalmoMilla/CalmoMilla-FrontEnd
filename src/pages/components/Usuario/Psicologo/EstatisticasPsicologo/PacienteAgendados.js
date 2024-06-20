import Image from "next/image";
export default function PacienteAgendados(props) {
  return (
    <div className="bg-white  xs:w-[95%] md:w-auto  p-4 rounded-xl border-black m-auto h-auto flex flex-col shadow-2xl justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/psicologo/Psicologos/pessoa1.png"
      />
      <p className="font-calistoga mt-2 text-3xl">{props.nomePaciente}</p>
      <div className="flex gap-12 my-2 text-xl font-calistoga">
        <p>{props.dataPaciente}</p>
        <p>{props.horaPaciente}</p>
      </div>
    </div>
  );
}
