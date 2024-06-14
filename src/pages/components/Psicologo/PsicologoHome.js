import Image from "next/image";

export default function PsicologoHome(){
    return (
        <div className="w-screen h-screen flex">
    <div className="flex flex-col justify-center border border-gray-900 items-center h-screen w-[40%]">
        <h1 className="font-calistoga text-6xl w-full text-center">Olá,Nome do profissional</h1>
        <p className="font-nunito text-xl">Aqui estão algumas coisas que podem te interessar.</p>
    </div>
    <div className="flex flex-col justify-center border border-gray-900 items-center h-screen w-[60%] px-8">
        <section className="w-[80%] h-full">
            <div className="bg-amarelo2 w-full h-10 text-center text-2xl font-calistoga rounded-xl">
                <p>Atualizações do Blog</p>
            </div>
            <div>
                <div className="bg">
                    
                </div>
                <div></div>
            </div>
        </section>
    </div>

    </div>
    );
}