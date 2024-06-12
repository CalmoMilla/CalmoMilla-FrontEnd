import BarraFiltro from "./BarraFiltro";
import { SlArrowDown } from "react-icons/sl";

export default function Filtro(props) {
  return (
    <>
      <div className="lg:hidden block w-[30%] h-fit">
        <div className="bg-amarelo1 flex justify-around items-center p-5 rounded-full">
          <h2 className="font-calistoga text-5xl">Filtro</h2>
          <div className="bg-branco rounded-full p-2">
            <SlArrowDown className="text-amarelo1 text-lg" />
          </div>
        </div>
        {/* <div className="w-full h-full shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
          {props.data.map((data) => (
            <BarraFiltro key={data.id} titulo={data.titulo}/>
          ))}
        </div> */}
      </div>
      <div className="lg:block hidden w-[15%] h-fit">
        <div className="w-full h-full shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
          {props.data && props.data.map((data) => (
            <BarraFiltro key={data.id} titulo={data.titulo}/>
          ))}
        </div>
      </div>
    </>
  )
}