export default function PacienteVinculado(props) {
  return (
    <div className="w-[90%] h-full shadow-2xl rounded-xl mx-auto">
      <div className="w-full h-[60%] bg-preto/20 flex justify-start items-end p-5 rounded-t-lg">
        <div className="w-28 h-28 bg-preto/50 rounded-full"></div>
      </div>
      <div className="w-full h-[40%] p-5">
        <h2 className="font-nunito text-3xl">{props.nome}</h2>
        <p className="font-nunito text-xl">{props.desc}</p>
      </div>
    </div>
  )
}