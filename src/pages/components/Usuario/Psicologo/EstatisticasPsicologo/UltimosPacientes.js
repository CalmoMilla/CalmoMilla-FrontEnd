import Image from "next/image";
export default function UltimosPacientes(props) {
  return (
    <div className="bg-white  xs:w-[95%]  p-4 rounded-xl border-black m-auto h-auto flex flex-col shadow-2xl justify-center items-center">
      <Image
        width={300}
        height={300}
        src="/assets/psicologo/Psicologos/pessoa1.png"
      />
      <p className="font-calistoga mt-2 text-3xl">{props.nomePaciente}</p>
    </div>
  );
}
