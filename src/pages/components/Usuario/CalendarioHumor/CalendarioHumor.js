import LinhaCalendario from "./LinhaCalendario"

export default function CalendarioHumor() {
  return (
    <>
      <h2 className="text-2xl md:text-3xl font-nunito text-roxo pt-10">Calendário de Humor</h2>
      <div className="w-[80%] bg-branco border-solid border-2 border-roxo/50 rounded-lg">
        <LinhaCalendario/>
        <LinhaCalendario/>
        <LinhaCalendario/>
        <LinhaCalendario/>
      </div>
    </>
  )
}