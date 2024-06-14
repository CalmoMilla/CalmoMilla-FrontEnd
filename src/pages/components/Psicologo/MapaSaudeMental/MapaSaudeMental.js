import Image from "next/image"
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function MapaSaudeMental(){
    return(
        <div>
            <IoIosArrowDropleftCircle className="w-14 h-14 text-verdeagua m-6"/>
            <div className=" items-center w-[100%] h-auto">
                <p className="font-calistoga flex flex-center justify-center text-center text-5xl text-verdeagua mt-2">Mapa da Saúde Mental</p>
            </div>

            <div className="flex flex-col items-center justify-center m-10">
                <Image width={900} height={900} src="/assets/psicologo/MapaSaude.png"/>
                
                <div className="flex flex-row gap-2 mt-4 ">
                    <p>Oferecido por:</p>
                    <Image width={80} height={80} src="/assets/psicologo/Googleicon.png"/>
                </div>
            </div>

        <div className="flex flex-col items-center justify-center text-center mt-24">
            <p className="font-nunito font-medium text-3xl">Assista com a Milla o vídeo abaixo e entenda melhor<br/> como utilizar o mapa da saúde mental e como fazer<br/> pesquisas específicas atráves de um CEP.</p>
            <IoIosArrowDropdownCircle className="w-12 h-12 text-verdeagua mt-10" />
        </div>

        <section className="flex gap-20 justify-center">
        <div className="bg-gray-300 w-[60%] h-[26rem] rounded-lg flex flex-row justify-center items-center m-16">
            <Image width={200} height={200} src="/assets/psicologo/Playicon.png"/>
        </div>
        <Image width={200} height={600} src="/assets/psicologo/millaMapa.png"/>
        </section>
        </div>
    )
}