import LinhaCalendario from "./LinhaCalendario"
import LinhaEmocoes from "./LinhaEmocoes"

export default function Calendario({titulo, emocoes}) {
  return (
    <div className="flex flex-col justify-center items-center pb-20">
      <h2 className="text-3xl md:text-5xl font-nunito text-amarelo2 py-10">{titulo}</h2>
      <div className="md:w-[80%] w-[95%] bg-branco border-solid border-2 border-verde2/50 rounded-lg">
        {emocoes ? 
        <LinhaEmocoes/> : <LinhaCalendario/>
        }      
      </div>
    </div>
  )
}