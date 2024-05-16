export default function Estatistica(props) {
  return (
    <div className="flex justify-around items-center py-5">
      <h3 className="w-[30%] text-3xl font-nunito text-roxo">{props.titulo}</h3>
      <div className="w-[55%] h-6 bg-roxo/60">
        <div className={`w-[${props.resul}%] h-full bg-roxo`}></div>
      </div>
    </div>
  )
}