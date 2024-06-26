import { FaRegCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export default function Plano(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
    console.log("1");
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModalAlert = () => {
    setModalOpen(false);
    alert("Compra realizada com sucesso, obrigado por se tornar um assinante!");
  };
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="xs:mb-20 xs:mt-10 lg:mb-0 xs:w-[80%]  sm:w-auto shadow-2xl rounded-2xl">
        <div className="w-fill h-fill flex flex-col sm:px-12 xl:w-96 py-5 items-center justify-center bg-branco shadow-2xl rounded-2xl">
          <h3 className="text-center w-full text-5xl font-calistoga text-preto">
            {props.plano}
          </h3>
          <div className="w-full h-fit flex flex-col gap-4 items-center justify-around py-5">
            <div className="w-fit h-fit flex items-center justify-around">
              <FaRegCheckCircle className="text-2xl text-verde2" />
              <p className="font-nunito text-xl">Sem anúncio</p>
            </div>
            {props.psicologo && (
              <div className="w-fit h-fit flex items-center justify-around">
                <FaRegCheckCircle className="text-2xl text-verde2" />
                <p className="font-nunito text-md">Acesso a estatísticas</p>
              </div>
            )}
          </div>
          <p className="w-full text-3xl text-center pt-20 pb-10 font-nunito">
            Apenas <br />
            {props.preco}
          </p>
          <button
            className="bg-verdeagua/50 hover:bg-verdeagua text-branco mx-auto block text-2xl px-10 py-3 font-nunito duration-500 ease-in-out rounded-2xl"
            onClick={toggleModal}
          >
            Assinar
          </button>
          {modalOpen ? (
            <div
              id="popup-modal"
              tabIndex="-1"
              className="  overflow-y-auto overflow-x-hidden fixed top-0 left-0 flex  z-40 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
            >
              <div
                className="
               relative p-4 w-full max-w-md max-h-full"
              >
                <div className="relative bg-white rounded-lg shadow flex items-center justify-center dark:bg-gray-600">
                  <div className="p-4 md:p-5 text-center  ">
                    <RiMoneyDollarCircleLine className="w-full h-20 text-amarelo2" />

                    <h3 className="mb-5 text-xl font-normal  text-white">
                      Deseja assinar este plano?
                    </h3>
                    <button
                      onClick={closeModalAlert}
                      type="button"
                      className="text-white hover:text-black bg-amarelo2 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                      data-modal-hide="popup-modal"
                    >
                      Sim!
                    </button>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border hover:bg-gray-600 hover:text-white"
                      data-modal-hide="popup-modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
