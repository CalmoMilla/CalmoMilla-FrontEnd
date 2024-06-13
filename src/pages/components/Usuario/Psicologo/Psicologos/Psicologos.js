import Psicologo from "./Psicologo";

export default function Psicologos() {
    return (

        <div className="w-[60%] h-fit flex flex-row flex-wrap gap-9">
            <div className=" w-full h-fit">
                <h1 className="text-center font-calistoga text-7xl text-verdeagua drop-shadow-2xl">
                    Psicólogos
                </h1>
            </div>

            <Psicologo/>
            <Psicologo/>
            <Psicologo/>
            <Psicologo/>
            <Psicologo/>
            <Psicologo/>
        </div>
    )
}