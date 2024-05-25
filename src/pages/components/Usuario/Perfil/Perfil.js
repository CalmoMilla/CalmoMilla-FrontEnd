import Header from "../../Header/Header";
import InfoConta from "./InfoConta/InfoConta";
import InfoPessoal from "./InfoPessoal/InfoPessoal";


export default function Perfil() {
  return (
    <>
      <Header logado={true}/>
      <div className="flex justify-center items-center pt-40">
        <div className="w-[70%] h-auto bg-branco shadow-2xl rounded-xl">
          <InfoConta/>
          <InfoPessoal/>
        </div>
      </div>
    </>
  )
}