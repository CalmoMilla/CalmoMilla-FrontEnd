"use client"

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { createRoot } from 'react-dom/client';
import { BsEmojiTearFill, BsEmojiGrimaceFill } from "react-icons/bs";
import Emocao from "./Emocao";

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    console.log(formatarEmocoes())
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  const [checkedTristeza, setCheckedTristeza] = useState(false)
  const [checkedAnsioso, setCheckedAnsioso] = useState(false)
  const [checkedCalmo, setCheckedCalmo] = useState(false)
  const [checkedFeliz, setCheckedFeliz] = useState(false)
  const [checkedIrritado, setCheckedIrritado] = useState(false)
  const [checkedDesanimado, setCheckedDesanimado] = useState(false)
  const [checkedAlegre, setCheckedAlegre] = useState(false)
  const [checkedTedio, setCheckedTedio] = useState(false)
  const [checkedNeutro, setCheckedNeutro] = useState(false)
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

  const handleRadioFeliz = () => {
    if (checkedFeliz)  {
      setCheckedFeliz(false) 
      retirarEmocao("feliz")
    } else {
      setCheckedFeliz(true)
      colocarEmocao("feliz")
    }
  }

  const handleRadioCalmo = () => {
    if (checkedCalmo)  {
      setCheckedCalmo(false) 
      retirarEmocao("calmo")
    } else {
      setCheckedCalmo(true)
      colocarEmocao("calmo")
    }
  }

  const handleRadioIrritado = () => {
    if (checkedIrritado)  {
      setCheckedIrritado(false) 
      retirarEmocao("irritado")
    } else {
      setCheckedIrritado(true)
      colocarEmocao("irritado")
    }
  }

  const handleRadioDesanimado = () => {
    if (checkedDesanimado)  {
      setCheckedDesanimado(false) 
      retirarEmocao("desanimado")
    } else {
      setCheckedDesanimado(true)
      colocarEmocao("desanimado")
    }
  }

  const handleRadioAlegre = () => {
    if (checkedAlegre)  {
      setCheckedAlegre(false) 
      retirarEmocao("alegre")
    } else {
      setCheckedAlegre(true)
      colocarEmocao("alegre")
    }
  }

  const handleRadioTedio = () => {
    if (checkedTedio)  {
      setCheckedTedio(false) 
      retirarEmocao("tedio")
    } else {
      setCheckedTedio(true)
      colocarEmocao("tedio")
    }
  }
  const handleRadioNeutro = () => {
    if (checkedNeutro)  {
      setCheckedNeutro(false) 
      retirarEmocao("neutro")
    } else {
      setCheckedNeutro(true)
      colocarEmocao("neutro")
    }
  }

  const colocarEmocao = (emocaoDeclarada) => {
    console.log(emocaoDeclarada)

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

  const formatarEmocoes = () => {
    let listaEmocoes = []
    emocao.map((emocaoSelecionada) => {
      if (emocaoSelecionada == "tristeza") {
        listaEmocoes.push("TRISTE")
      }
      if (emocaoSelecionada == "irritado") {
        listaEmocoes.push("TRISTE")
      }
      if (emocaoSelecionada == "desanimado") {
        listaEmocoes.push("TRISTE")
      }
      if (emocaoSelecionada == "ansioso") {
        listaEmocoes.push("MEIOTERMO")
      }
      if (emocaoSelecionada == "tedio") {
        listaEmocoes.push("MEIOTERMO")
      }
      if (emocaoSelecionada == "neutro") {
        listaEmocoes.push("MEIOTERMO")
      }
      if (emocaoSelecionada == "feliz") {
        listaEmocoes.push("FELIZ")
      }
      if (emocaoSelecionada == "alegre") {
        listaEmocoes.push("FELIZ")
      }
      if (emocaoSelecionada == "calmo") {
        listaEmocoes.push("FELIZ")
      }
    })
    return listaEmocoes
  }

  useEffect(() => {

    const modalContent = (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" >
        <div className="xs:w-[80%] xs:h-[80%] md:w-[600px]  md:h-[800px] bg-white rounded-lg p-4">
          <div className="flex justify-end text-2xl items-center">
            <div className="h-20 w-screen text-center flex justify-center items-center ">
              <h2 className="font-calistoga w-full sm:text-3xl">O que você está sentindo hoje </h2>
            </div>
          </div>
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          <div className="w-full h-full">
            <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center mx-auto ">
              <div className="flex-col flex md:w-[90%] xs:w-[100%] h-full">
                <div className="grid grid-cols-2 gap-4">

                  <Emocao funcao={handleRadioCalmo} state={checkedCalmo} emoji={"\u{1F642}"} texto={"Calmo"} />
                  <Emocao funcao={handleRadioIrritado} state={checkedIrritado} emoji={"\u{1F620}"} texto={"Irritado"} />
                  <Emocao funcao={handleRadioDesanimado} state={checkedDesanimado} emoji={"\u{1F61E}"} texto={"Desanimado"} />
                  <Emocao funcao={handleRadioTristeza} state={checkedTristeza} emoji={"\u{1F622}"} texto={"Tristeza"} />
                  <Emocao funcao={handleRadioAnsioso} state={checkedAnsioso} emoji={"\u{1F623}"} texto={"Ansioso"} />
                  <Emocao funcao={handleRadioFeliz} state={checkedFeliz} emoji={"\u{1F60A}"} texto={"Feliz"} />
                  <Emocao funcao={handleRadioAlegre} state={checkedAlegre} emoji={"\u{1F61D}"} texto={"Alegre"} />
                  <Emocao funcao={handleRadioTedio} state={checkedTedio} emoji={"\u{1F644}"} texto={"Tédio"} />
                  <Emocao funcao={handleRadioNeutro} state={checkedNeutro} emoji={"\u{1F610}"} texto={"Neutro"} />

                </div>
                <div className="w-full justify-center flex my-5">
                  <button onClick={handleCloseClick} className="w-[60%] h-12 bg-amarelo1 hover:bg-amarelo2 duration-500 ease-in-out justify-center p-0 rounded-full text-white text-xl" type="submit">
                    Submeter
                  </button>
                </div>
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