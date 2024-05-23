export default function Estatistica(props) {
  return (
    <div className="flex justify-around md:flex-row flex-col items-center py-5">
      <h3 className="w-[80%] md:w-[30%] text-2xl md:text-3xl font-nunito text-verde2">{props.titulo}</h3>
      <div className="w-[80%] md:w-[55%] h-6 bg-verde2/60">
        <div className={`${props.resul} h-full bg-verde2`}></div>
      </div>
    </div>
  )
}