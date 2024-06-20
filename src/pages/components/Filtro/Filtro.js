import BarraFiltro from "./BarraFiltro";
import { SlArrowDown } from "react-icons/sl";

export default function Filtro({amarelo, data}) {
  return (
    <div className="w-[30%]">
      <div className="lg:hidden block w-[100%] h-fit">
        <div className={`${amarelo ? "bg-amarelo1" : "bg-verdeagua"}flex justify-around items-center p-5 rounded-full`}>
          <h2 className="font-calistoga xs:text-2xl sm:text-3xl  md:text-4xl">Filtro</h2>
          <div className="bg-branco rounded-full  ">
            <SlArrowDown className="text-amarelo2 text-xl" />
          </div>
        </div>
        {/* <div className="w-full h-full shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
          {props.data.map((data) => (
            <BarraFiltro key={data.id} titulo={data.titulo}/>
          ))}
        </div> */}
      </div>
      <div className="lg:block hidden lg:w-[70%] xl:w-[65%] ml-4 h-fit">
        <div className="w-full h-[10%] shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
          {data && data.map((data) => (
            <BarraFiltro key={data.id} titulo={data.titulo} amarelo={data.amarelo}/>
          ))}
        </div>
      </div>
    </div>
  )
}