import Image from "next/image"

export default function MateriaFinal({funcao, blog}) {
    return(
        <div className="flex lg:items-start items-center justify-center m-auto lg:space-x-7 lg:space-y-7 space-y-3 pt-10 pb-12 flex-col lg:flex-row xl:flex-row 2xl:flex-row w-11/12">
            <div className="w-[70%] lg:w-[400%] hover:cursor-pointer" onClick={() => funcao(blog[5])}>
                <Image width={1000} height={1000} src={blog ? blog[5].foto : ""} alt="Imagem da matéria final" className="rounded-lg"/>
            </div>
            <div className="space-y-6 lg:pb-36 text-center lg:text-left xl:text-left">
                <h2 className="font-calistoga text-4xl ">{blog && blog[5].tituloPostagem} </h2>
                <p className="font-nunito text-lg  ">{blog && blog[5].descPostagem}</p>
            </div>
        </div>
    )
}