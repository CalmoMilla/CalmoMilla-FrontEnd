import Psicologo from "./Psicologo";

export default function Psicologos() {

    let psicologos = [
        {id: 1, nome: "vitorugo da gut", idade: 18, cidade: "naoénasusacasaficaempas"},
        {id: 2, nome: "gabs caique", idade: 19, cidade: "CT"},
        {id: 3, nome: "ruuh do crud", idade: 20, cidade: "jardim buturuçu"},
        {id: 4, nome: "arthu", idade: 18, cidade: "tapevi"},
        {id: 5, nome: "luiz", idade: 18, cidade: "numsei"},
        {id: 6, nome: "guuh do crud e do vito", idade: 23, cidade: "ondezepovinhonlocaliza"}
    ]

    return (
        <div className="w-[60%] h-fit">
            <h1 className="text-verdeagua text-7xl font-calistoga text-center drop-shadow-2xl">Psicologos</h1>
            <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
                {psicologos.map((psi) => (
                    <Psicologo key={psi.id} nome={psi.nome} idade={psi.idade} cidade={psi.cidade}/>
                ))}        
            </div>
        </div>
    )
}