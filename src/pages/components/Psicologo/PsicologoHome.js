import Image from "next/image";

export default function PsicologoHome(){
    return (
        <div className="w-[100%] h-auto flex items-center  ">
    <div className="flex flex-col justify-center items-center h-screen w-[40%] mt-10">
        <h1 className="font-calistoga text-7xl w-full text-center">Olá,Nome do profissional</h1>
        <p className="font-nunito text-xl font-semibold mt-6">Aqui estão algumas coisas que podem te interessar.</p>
    </div>
    <div className="flex flex-col justify-between items-center h-[95%] w-[60%] px-8 gap-3">
        <section className="w-[80%] h-[33%] flex flex-col gap-6 mb-8">
            <div className="bg-amarelo2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
                <p>Atualizações do Blog</p>
            </div>
            <div className="flex justify-between "> 
                <div>
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
            <div className="bg-verde2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
                <p>Mapa de Saúde mental</p>
            </div>
            <div className="flex justify-center gap-12"> 
                <div>
                        <Image width={800} height={300}
                        src="/assets/psicologo/SaibaOnde.png"
                        > 

                        </Image>
              
                </div>
            </div>
        </section>
        <section className="w-[80%] h-[33%] flex flex-col gap-3">
            <div className="bg-verdeagua w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl mb-6">
                <p>Atualizações do Blog</p>
            </div>
            <div className="flex justify-center"> 
                <div className="flex flex-row items-center text-center justify-around gap-4">
                       <Image width={30} height={30} src="/assets/psicologo/iconfav.png"></Image>
                       <p>Seu perfil foi favoritado (n°) vezes</p>
                </div>
            </div>

            <div className="flex justify-center items-center px-6 mt-2 mb-2"> 
                <div className="flex flex-row items-center text-center justify-around gap-4">
                       <Image width={30} height={30} src="/assets/psicologo/iconanalise.png"></Image>
                       <p>Seu perfil foi favoritado (n°) vezes</p>
                </div>
            </div>

            <div className="flex justify-center items-center font-nunito font-bold text-xl">
                <p>Veja os dados completos em Estatisticas</p>
            </div>
        </section>
       
    </div>

    </div>
    );
}