"use client"

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { createRoot } from 'react-dom/client';
import { BsEmojiTearFill, BsEmojiGrimaceFill } from "react-icons/bs";

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    console.log(emocao)
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  const [checkedTristeza, setCheckedTristeza] = useState(false)
  const [checkedAnsioso, setCheckedAnsioso] = useState(false)
  const [emocao, setEmocao] = useState([])
  const [existe, setExiste] = useState(false)

  const handleRadioTristeza = () => {
    if (checkedTristeza)  {
      setCheckedTristeza(false) 
      retirarEmocao("tristeza")
    } else {
      setCheckedTristeza(true)
      colocarEmocao("tristeza")
    }
  }

  const handleRadioAnsioso = () => {
    if (checkedAnsioso)  {
      setCheckedAnsioso(false) 
      retirarEmocao("ansioso")
    } else {
      setCheckedAnsioso(true)
      colocarEmocao("ansioso")
    }
  }

  const colocarEmocao = (emocaoDeclarada) => {
    console.log(emocaoDeclarada)

    // for (let index = 0; index < emocao.length; index++) {
    //   if (emocao[index] == emocaoDeclarada) {
    //     setExiste(true)
    //   }
    //   else {
    //     setExiste(false)
    //   }
    // }

    // if (existe == false){
    //   setEmocao((emocoesAnteriores) => [...emocoesAnteriores, emocaoDeclarada])
    // }

    let emocoesAntigas = [...emocao]
    emocoesAntigas.push(emocaoDeclarada)
    setEmocao(emocoesAntigas)
    
    console.log(emocao, existe, emocao.length)

  }

  const retirarEmocao = (emocaoDeclarada) => {
    const index = emocao.indexOf(emocaoDeclarada);

    if (index !== -1) {
      emocao.splice(index, 1);
      console.log(emocao);
    } else {
      console.log("Emoção não encontrada");
    }
  }

  useEffect(() => {

    const modalContent = (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" >
        <div className="xs:w-[80%] xs:h-[80%] md:w-[600px]  md:h-[800px] bg-white rounded-lg p-4">
          <div className="flex justify-end text-2xl items-center">
            <div className="h-20 w-screen text-center flex justify-center items-center ">
              <h2 className="font-calistoga w-full sm:text-3xl">O que você está sentindo hoje </h2>
            </div>
            {/* <button
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
            </button> */}
          </div>
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          <div className="w-full h-full">
            <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center mx-auto ">
              <div className="flex-col flex md:w-[70%] xs:w-[100%] h-full">
                <form className="flex justify-center items-center flex-col gap-4">
                  <div className={`w-full py-5 flex items-center gap-8 ${checkedTristeza ? "bg-amarelo1/70" : "bg-amarelo1/30" } duration-500 ease-out transition rounded-full px-5 hover:bg-amarelo1/70`} onClick={handleRadioTristeza}>
                    <BsEmojiTearFill className="w-[25%] h-auto text-amarelo2"/>
                    <h2 className="text-xl ">Tristeza</h2>
                  </div>

                  <div className={`w-full py-5 flex items-center gap-8 ${checkedAnsioso ? "bg-amarelo1/70" : "bg-amarelo1/30" } duration-500 ease-out transition rounded-full px-5 hover:bg-amarelo1/70`} onClick={handleRadioAnsioso}>
                    <BsEmojiGrimaceFill className="w-[25%] h-auto text-amarelo2"/>
                    <h2 className="text-xl ">Ansioso</h2>
                  </div>



                  <div className="w-full justify-center flex ">
                    <button onClick={handleCloseClick} className="w-80 h-12 bg-amarelo2 justify-center p-0 rounded-full text-white" type="submit">
                      Submeter
                    </button>
                  </div>
                </form>
              </div>
            </div>
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

export default Modal;