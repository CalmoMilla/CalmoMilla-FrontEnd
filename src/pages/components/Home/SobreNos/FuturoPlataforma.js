import { IoTriangleSharp } from "react-icons/io5";
import { FaLongArrowAltUp } from "react-icons/fa";
import ArrowFuturo from "./ArrowFuturo";
import Image from "next/image";

export default function FuturoPlataforma() {
  return (
    <>
      <h2 className="text-4xl md:text-7xl text-branco text-center mx-auto font-calistoga py-5 md:pt-2">
      Futuro da Plataforma
      </h2>
      {/* <div className="w-[80%] h-2 bg-amarelo1 rounded-full mx-auto mt-60 mb-60 flex items-center justify-around">
        <div className="flex flex-col">
          <div className="w-10 h-10 bg-verde1 rounded-full">
            <FaLongArrowAltUp className="mx-auto text-5xl"/>
          </div>
        </div>
        <ArrowFuturo inverte={false} texto={"aplicações mobile"}/> 
        <ArrowFuturo inverte={true} texto={"idiomas"}/> 
      </div> */}
      <Image src={"/assets/home/sobrenos/futuro.png"} alt="Futuro da Plataforma" width={1000} height={1000} className="mx-auto"/>
    </>
  )
}