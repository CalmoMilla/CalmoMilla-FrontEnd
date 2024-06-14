import Image from "next/image";

export default function PsicologoHome(){
    return (
        <div className="w-[100%] h-auto flex items-center  ">
    <div className="flex flex-col justify-center border border-gray-900 items-center h-screen w-[40%] mt-10">
        <h1 className="font-calistoga text-6xl w-full text-center">Olá,Nome do profissional</h1>
        <p className="font-nunito text-xl">Aqui estão algumas coisas que podem te interessar.</p>
    </div>
    <div className="flex flex-col justify-between border border-gray-900 items-center h-[95%] w-[60%] px-8 gap-3">
        <section className="w-[80%] h-[33%] flex flex-col gap-6 mb-8">
            <div className="bg-amarelo2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
                <p>Atualizações do Blog</p>
            </div>
            <div className="flex justify-between "> 
                <div className="bg">
                        <Image width={250} height={250}
                        src="/assets/psicologo/matériaIlustrativa02.png"
                        > 

                        </Image>
                </div>
                <div>
                <Image width={250} height={3250}
                        src="/assets/psicologo/matériaIlustrativa01.png"
                        > 

                        </Image>
                </div>
            </div>
        </section>
        <section className="w-[80%] h-[33%] flex flex-col gap-3">
            <div className="bg-amarelo2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
                <p>Atualizações do Blog</p>
            </div>
            <div className="flex justify-center gap-12"> 
                <div className="bg">
                        <Image width={300} height={300}
                        src="/assets/psicologo/matériaIlustrativa02.png"
                        > 

                        </Image>
              
                </div>
            </div>
        </section>
        <section className="w-[80%] h-[33%] flex flex-col gap-3">
            <div className="bg-amarelo2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
                <p>Atualizações do Blog</p>
            </div>
            <div className="flex justify-center gap-12"> 
                <div className="bg">
                       
                </div>
            </div>
        </section>
       
    </div>

    </div>
    );
}