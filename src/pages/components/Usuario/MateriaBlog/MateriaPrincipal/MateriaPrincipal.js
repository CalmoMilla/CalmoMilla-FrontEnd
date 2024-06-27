import Image from "next/image"

export default function MateriaPrincipal({funcao, blog}) {
    return(
        <div className="w-11/12 space-y-7 m-auto" >
            <h2 className="text-4xl font-calistoga">{blog && blog[4].tituloPostagem}</h2>
             
            <div className="flex justify-start w-full hover:cursor-pointer" onClick={() => funcao(blog[4])}>
                <Image width={1400} height={450} src={blog ? blog[4].foto : ""} alt="Imagem da matéria principal" className="rounded-lg"/>
            </div>

            <p className="font-nunito text-lg text-left">{blog && blog[4].descPostagem}</p>
        </div>
    )
}