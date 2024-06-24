import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { createRoot } from 'react-dom/client';
import Emocao from "../Emocoes/Emocao";
import { FaCheck } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const ModalInfoRotina = ({ onClose, rotina}) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  let diaFormatado = rotina[1][2] + "/" + rotina[1][1] + "/" + rotina[1][0]


  useEffect(() => {

    console.log(rotina)

    const modalContent = (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" >
        <div className="xs:w-[80%] xs:h-[80%] md:w-[500px]  md:h-[600px] bg-white rounded-lg p-4">
          <div className="flex justify-end text-2xl items-center">
            <div
              className="h-20 w-screen
             text-center flex justify-center items-center "
            >
              <h2 className="font-calistoga w-full sm:text-3xl">
                Rotina do Dia
              </h2>
            </div>
            <button
              className="absolute w-auto h-auto p-0  sm:hidden"
              onClick={handleCloseClick}
            >
              <IoCloseSharp size={20} />
            </button>
  
            <button
              className="sm:flex sm:absolute w-auto h-auto p-0 py-2 hidden"
              onClick={handleCloseClick}
            >
              <IoCloseSharp size={45} />
            </button>
          </div>
          <div className="w-full h-full">
            <h2 className="text-center text-2xl font-nunito my-4">{`Dia: ${diaFormatado && diaFormatado}`}</h2>
            <div className="flex justify-center gap-4 items-center">
              <h2 className="text-center text-2xl font-nunito my-4">Concluido:</h2>
              {rotina[2] ? 
                <FaCheck className="text-verde2 text-3xl"/>
                :
                <IoMdClose className="text-red-500 text-3xl"/>
              }
            </div>
            <h2 className="text-center text-2xl font-nunito my-4">Tarefas do Dia:</h2>
            {rotina[3].map((tarefa) =>(
              <h2 key={tarefa.id} className={`text-center text-xl font-nunito my-4 ${rotina[2] ? "text-verde2" : "text-red-500 line-through"}`}>{tarefa.titulo}</h2>
            ))}
          </div>
        </div>
      </div>
    );
  
    const portalElement = document.getElementById("modal-root");
    const root = createRoot(portalElement);
  
    root.render(modalContent);
  
    return () => {
      root.unmount();
    };
  },)

};

export default ModalInfoRotina;