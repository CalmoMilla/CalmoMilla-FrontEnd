import InfoConta from "./InfoConta/InfoConta";
import InfoPessoal from "./InfoPessoal/InfoPessoal";


export default function Perfil() {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="w-[70%] h-[100%] bg-branco shadow-2xl rounded-xl">
        <InfoConta/>
        <InfoPessoal/>
      </div>
    </div>
  )
}