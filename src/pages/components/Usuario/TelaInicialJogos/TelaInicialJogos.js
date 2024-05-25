import Header from "../../Header/Header";
import JogosDisponiveis from "./JogosDisponiveis/JogosDisponiveis";
import SelecaoJogos from "./SelecaoJogos/SelecaoJogos";

export default function TelaInicialJogos() {
  return (
    <>
      <Header logado={true}/>
      <div className="flex justify-around items-center flex-col lg:flex-row">
        <SelecaoJogos/>
        <JogosDisponiveis/>
      </div>
    </>
  )
}