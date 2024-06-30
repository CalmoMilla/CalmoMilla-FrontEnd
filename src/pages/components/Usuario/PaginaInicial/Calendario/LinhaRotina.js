import { useEffect, useState } from "react";
import { BuscarRotina } from "@/pages/api/rotina/RotinaService";
import ModalInfoRotina from "./ModalInfoRotina";

export default function LinhaRotina() {

  const [rotina, setRotina] = useState([])
  const [modal, setModal] = useState(false)
  const [infoModal, setInfoModal] = useState(null)


  useEffect(() => {
    buscarRotina()
  }, [])


  const onClickRotina = (rotina) => {
    const valoresRotina = Object.values(rotina)
    setInfoModal(valoresRotina)
    setModal(true)
  }


  const buscarRotina = async () => {
    let usuarioStorage = localStorage.getItem("usuario");
    usuarioStorage = JSON.parse(usuarioStorage);

    let rotinas = await BuscarRotina(`rotinas/pacientes/${usuarioStorage.id}`)
    console.log(rotinas)
    setRotina(rotinas)
  }



  return (
    <>
      <div className="grid grid-cols-7 gap-4 py-5 content-center justify-items-center">
        {rotina && rotina.map((ro) => (
          <div key={ro.id} className={`hover:scale-110 duration-500 ease-in-out hover:cursor-pointer w-4 md:w-10 rounded-full h-4 md:h-10 ${ro.status ? "bg-verde2" : "bg-red-700"} flex justify-center items-center text-lg text-branco`} onClick={() => onClickRotina(ro)}>{ro.diaRotina[2]}</div>
        ))}
      </div>
      <div id="modal-root"></div>
      {modal && (
        <ModalInfoRotina onClose={() => {setModal(false)}} rotina={infoModal} />
      )}
    </>
  )
}