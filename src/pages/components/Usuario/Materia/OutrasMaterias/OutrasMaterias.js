import CaixaImagem from "../CaixaImagem";
 
export default function OutrasMaterias({blog, funcao}){
    return (
        <div className="bg-branco w-[20%] h-fit rounded-lg shadow-xl p-5">
            <h1 className="text-3xl font-calistoga text-center pt-10">Outras Matérias</h1>
            {blog && blog.map((materia) => (
                <CaixaImagem key={materia.id} materia={materia} funcao={funcao}/>
            ))}
        </div>
    )
}