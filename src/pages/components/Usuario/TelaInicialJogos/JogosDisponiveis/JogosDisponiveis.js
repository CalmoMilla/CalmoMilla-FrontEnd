import JogoDisponivel from "./JogoDisponivel";

export default function JogosDisponiveis() {
  return (
    <div className="w-[70%] h-screen">
      <div className="w-[100%] h-[50%] flex justify-around items-center">
        <JogoDisponivel/>
        <JogoDisponivel/>
      </div>
      <div className="w-[100%] h-[50%] flex justify-around items-center">
        <JogoDisponivel/>
        <JogoDisponivel/>
      </div>
    </div>
  )
}