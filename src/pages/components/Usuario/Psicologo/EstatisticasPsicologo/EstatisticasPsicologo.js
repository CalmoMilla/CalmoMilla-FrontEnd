import Image from "next/image"

export default function EstatisticasPsicologo(){
    return(
        <div className="bg-white w-[90%] h-screen shadow-xl rounded-lg flex flex-col justify-center items-center">
            <div></div>

                <div className="bg-white w-[90%] h-fit p-20 drop-shadow-2xl flex flex-row items-center gap-12 rounded-xl m-10">
            
                    <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={80} height={80} className="rounded-full"/>

                    <p className="text-md font-nunito font-semibold ">Lorem ipsum dolor sit amet. Et nemo quia est explicabo omnis At debitis mollitia qui rerum voluptatem est quibusdam eius sit aliquam sapiente ut dolor perspiciatis. Et sint obcaecati et error deserunt sed veritatis ipsa ut debitis corporis. A blanditiis dolor eos odit sapiente eos voluptas eveniet qui omnis impedit aut voluptatum quaerat ut rerum sunt. Quo nulla itaque sed quis odio hic exercitationem facilis.</p>
                </div>
        
                <div className="bg-white w-[90%] h-fit p-20 drop-shadow-2xl flex flex-row items-center gap-12 rounded-xl m-16">
            
                    <Image src={"https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"} alt={"Imagem do Usuario"} width={80} height={80} className="rounded-full"/>

                    <p className="text-md font-nunito font-semibold ">Lorem ipsum dolor sit amet. Et nemo quia est explicabo omnis At debitis mollitia qui rerum voluptatem est quibusdam eius sit aliquam sapiente ut dolor perspiciatis. Et sint obcaecati et error deserunt sed veritatis ipsa ut debitis corporis. A blanditiis dolor eos odit sapiente eos voluptas eveniet qui omnis impedit aut voluptatum quaerat ut rerum sunt. Quo nulla itaque sed quis odio hic exercitationem facilis.</p>
                </div>

            <div className="bg-gray-300 w-[90%] h-1"></div>           

        <div>
            <p className="text-6xl text-amarelo2 font-calistoga pb-10">Consultas Agendadas</p>
        </div>

            <div className="bg-white shadow-2xl w-[90%] h-fit flex flex-row items-center justify-center">
                <div className="bg-white w-fit h-[30%] flex flex-col shadow-2xl justify-center items-center">
                    <Image width={300} height={300} src="/assets/psicologo/Psicologos/pessoa1.png"/>
                    <p className="font-calistoga text-3xl">Fulano de tal</p>
                <div className="flex gap-24 text-xl font-calistoga">
                    <p>xx/xx/xx</p>
                    <p>xx:xx</p>
                </div>
                </div>
            </div>

                
                <div className="bg-white w-fit h-[30%] flex flex-col shadow-2xl items-center">
                    <Image width={300} height={300} src="/assets/psicologo/Psicologos/pessoa2.png"/>

                    <p className="font-calistoga text-3xl">Fulano de tal</p>

                <div className="flex gap-24 text-xl font-calistoga">
                    <p>xx/xx/xx</p>
                    <p>xx:xx</p>
                </div>
                
                </div>
          
        

        </div>
    )
}