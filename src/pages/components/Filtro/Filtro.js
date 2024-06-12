import BarraFiltro from "./BarraFiltro";

export default function Filtro(props) {
  return (
    <div className="w-[15%] h-fit shadow-2xl py-5 rounded-xl">
      <h2 className="text-center text-preto text-4xl py-10 font-calistoga">Filtro</h2>
      {props.data.map((data) => (
        <BarraFiltro key={data.id} titulo={data.titulo}/>
      ))}

    </div>
  )
}