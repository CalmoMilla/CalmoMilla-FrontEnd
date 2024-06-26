export default function Emocao({funcao, state, emoji, texto}) {
  return (
    <div className={`w-[100%] py-5 flex items-center gap-2 md:gap-8 ${state ? "bg-amarelo1/70" : "bg-amarelo1/30" } duration-500 ease-out transition justify-center rounded-full hover:bg-amarelo1/70`} onClick={funcao}>
      <span className="w-[25%] h-auto text-amarelo2 text-2xl md:text-5xl">{emoji}</span>
      <h2 className="text-md md:text-xl">{texto}</h2>
    </div>
  )
}