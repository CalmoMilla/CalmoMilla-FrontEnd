import { useEffect } from "react";
import { BuscarRotina } from "@/pages/api/rotina/RotinaService";

export default function LinhaRotina() {

  useEffect(() => {
    buscarRotina()
  })


  const buscarRotina = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let rotina = await BuscarRotina(`rotinas/pacientes/${usuarioStorage.id}`)
    console.log(rotina)
  }



  return (
    <div className="grid grid-cols-7 gap-4 py-5 content-center justify-items-center">
      <div className="hover:scale-110 duration-500 ease-in-out w-4 md:w-12 rounded-full h-4 md:h-12 bg-verde2 flex justify-center items-center text-lg text-branco">24</div>
    </div>
  )
}