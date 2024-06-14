import Image from "next/image"

export default function JogoDispRecurso () {
  return (
    <div className="w-[90%] h-60 shadow-2xl rounded-xl mx-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out">
      <div className="w-full h-[55%] flex justify-start items-end p-5 rounded-xl" style={{ backgroundImage: `url("assets/psicologo/recursos/materiacerebro.png")`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </div>
      <div className="w-full h-[45%] py-2 px-5">
        <h2 className={`font-nunito text-3xl`}>Oi</h2>
      </div>
    </div>
  )
}