import JogosDisponiveis from "./JogosDisponiveis/JogosDisponiveis";
import SelecaoJogos from "./SelecaoJogos/SelecaoJogos";

export default function TelaInicialJogos() {
  return (
    <div className="flex justify-around items-center">
      <SelecaoJogos/>
      <JogosDisponiveis/>
    </div>
  )
}