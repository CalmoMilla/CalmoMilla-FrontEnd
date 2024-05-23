import LinhaCalendario from "./LinhaCalendario"

export default function Calendario(props) {
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{props.titulo}</h2>
      <div className="w-[80%] bg-branco border-solid border-2 border-verde2/50 rounded-lg">
        <LinhaCalendario/>
        <LinhaCalendario/>
        <LinhaCalendario/>
        <LinhaCalendario/>
      </div>
    </div>
  )
}