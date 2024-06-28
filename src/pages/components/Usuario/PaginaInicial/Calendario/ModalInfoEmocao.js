import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { createRoot } from 'react-dom/client';
import Emocao from "../Emocoes/Emocao";
import { useTranslation } from "react-i18next";

const ModalInfoEmocao = ({ onClose, title, info, emoji }) => {

  const { t } = useTranslation()
  const [date, setDate] = useState(null)
  const [sentimento, setSentimento] = useState(null)

  const handleCloseClick = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {
    setDate(info && info[3][2] + " " + info[3][1] + " " + info[3][0])
    traduzirPagina()
  }, [])


  const formatarEmocao = () => {
    if(info) {
      if (info[1] == "FELIZ") {
        return t('emocaoFeliz')
      } 
      if (info[1] == "MEIOTERMO") {
        return t('emocaoMt')
      } 
      if (info[1] == "TRISTE") {
        return t('emocaoTriste')
      } 
    }
  }

  const traduzirPagina = () => {
    if(info) {
      if (info[1] == "FELIZ") {
        setSentimento(
          <h2 className="text-center text-xl font-nunito my-4">{t('emocaoSentidaFeliz')}</h2>
        )
      } 
      if (info[1] == "MEIOTERMO") {
        setSentimento(
          <h2 className="text-center text-xl font-nunito my-4">{t('emocaoSentidaMt')}</h2>
        )
      } 
      if (info[1] == "TRISTE") {
        setSentimento(
          <h2 className="text-center text-xl font-nunito my-4">{t('emocaoSentidaTriste')}</h2>
        )
      } 
    }
  }

  let mensagemFormada = formatarEmocao()

  useEffect(() => {

    console.log(info)

    const modalContent = (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" >
        <div className="xs:w-[80%] xs:h-[80%] md:w-[500px]  md:h-[600px] bg-white rounded-lg p-4">
          <div className="flex justify-end text-2xl items-center">
            <div
              className="h-20 w-screen
             text-center flex justify-center items-center "
            >
              <h2 className="font-calistoga w-full sm:text-3xl">
                {t('emocaoTitulo')}
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
          {title && <h1 className="text-xl font-bold">{title}</h1>}
          <div className="w-full h-full">
            <h2 className="text-center text-5xl font-nunito my-4">{emoji}</h2>
            {sentimento}
            <h2 className="text-center text-xl font-nunito my-4">{t('emocaoDia', { date })}</h2>
            <h2 className="text-center text-xl font-nunito my-4 w-[80%] mx-auto">{mensagemFormada}</h2>
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

export default ModalInfoEmocao;