export default function EstatisticaPaciente({titulo}) {
  return (
    <div className="w-full h-fit flex items-center">
      <p className="w-[40%] text-2xl text-verde2">{titulo}</p>
      <div className="w-[60%] h-4 bg-preto/10 rounded-xl">
        <div className="w-[40%] h-full bg-verde2 rounded-xl"></div>
      </div>
    </div>
  )
}