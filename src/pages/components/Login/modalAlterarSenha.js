import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { createRoot } from 'react-dom/client';

const Modal = ({ onClose, children, title }) => {
  const handleCloseClick = (e) => {
    e.preventDefault();
    if (onClose) {
      onClose();
    }
  };

  useEffect(() => {

    const modalContent = (
      <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50" >
        <div className="xs:w-[80%] xs:h-[80%] md:w-[500px]  md:h-[600px] bg-white rounded-lg p-4">
          <div className="flex justify-end text-2xl items-center">
            <div
              className="h-20 w-screen
             text-center flex justify-center items-center "
            >
              <h2 className="font-calistoga w-full sm:text-3xl">
                Recupere sua senha{" "}
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
            {children}
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