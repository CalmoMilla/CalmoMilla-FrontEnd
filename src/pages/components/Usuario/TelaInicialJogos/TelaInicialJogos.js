import Header from "../../Header/Header";
import JogosDisponiveis from "./JogosDisponiveis/JogosDisponiveis";
import SelecaoJogos from "./SelecaoJogos/SelecaoJogos";

export default function TelaInicialJogos() {
  return (
    <>
      <Header />
      <div className="flex justify-around items-center flex-col lg:flex-row pt-24">
        <SelecaoJogos />
        <JogosDisponiveis />
      </div>
    </>
  );
}
