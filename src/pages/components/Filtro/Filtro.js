import BarraFiltro from "./BarraFiltro";
import { SlArrowDown } from "react-icons/sl";

export default function Filtro({ amarelo, data }) {
  return (
    <div className="w-[100%] flex justify-center">
      <div className="xl:hidden block xs:w-44 md:w-52 lg:w-56 h-fit mb-10 mt-32">
        <div
          className={`${
            amarelo ? "bg-amarelo1" : "bg-verdeagua"
          } flex justify-around items-center p-5 rounded-full `}
        >
          <h2 className="font-calistoga xs:text-3xl  md:text-4xl">Filtro</h2>
          <div className="bg-branco rounded-full p-2">
            <SlArrowDown
              className={`${
                amarelo ? "text-amarelo1" : "text-verdeagua"
              } text-xl`}
            />
          </div>
        </div>
        {/* <div className="w-full h-full shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
          {props.data.map((data) => (
            <BarraFiltro key={data.id} titulo={data.titulo}/>
          ))}
        </div> */}
      </div>
      <div className="xl:block hidden xl:w-[70%] ml-4 h-fit">
        <div className="w-full h-[10%] shadow-2xl py-5 rounded-xl">
          <h2 className="text-center text-preto text-4xl py-10 font-calistoga">
            Filtro
          </h2>
          {data &&
            data.map((data) => (
              <BarraFiltro
                key={data.id}
                titulo={data.titulo}
                amarelo={data.amarelo}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
