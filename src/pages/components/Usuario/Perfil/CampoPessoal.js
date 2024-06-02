export default function CampoPessoal(props) {
  return (
    <div className="w-[80%] flex justify-between md:flex-row flex-col md:items-center py-5">
      <p className="text-xl">{props.texto1}</p>
      <p className="text-xl">{props.texto2}</p>
    </div>
  )
}