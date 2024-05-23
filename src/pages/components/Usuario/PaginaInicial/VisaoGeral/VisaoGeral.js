import Calendario from "../Calendario/Calendario"
import Estatisticas from "./Estatisticas"
import LinhaHorizontal from "./LinhaHorizontal"

export default function VisaoGeral() {
  return (
    <>
      <div className="w-[70%] lg:w-[50%] h-auto border-solid border-2 border-verde2 rounded-3xl">
        <div className="w-full h-20 bg-verde2 rounded-t-2xl flex justify-start pl-10 items-center">
          <h2 className="text-branco text-3xl font-nunito">Veja seu rendimento</h2>
        </div>
        <Estatisticas/>
        <LinhaHorizontal/>
        <Calendario titulo={"Calendário de humor"}/>
        <LinhaHorizontal/>
        <Calendario titulo={"Rotina"}/>
      </div>
    </>
  )
}