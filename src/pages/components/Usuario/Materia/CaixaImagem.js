import Image from "next/image"

export default function CaixaImagem({materia, funcao}) {
    return (
        <div className="flex flex-col justify-center my-4 items-center py-2 relative rounded-lg bg-preto/10 cursor-pointer hover:scale-105 duration-500 ease-in-out" onClick={() => funcao(materia)}>
            <Image src={materia.foto} width={300} height={300} alt={materia.tituloPostagem} className="rounded-lg mt-2"/>
            <p className="text-center font-nunito text-xl w-[90%] my-2">{materia.tituloPostagem}</p>
        </div>
    )
}