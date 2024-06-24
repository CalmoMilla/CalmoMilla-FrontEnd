import { FaRegCheckCircle } from "react-icons/fa";

export default function Plano(props) {
  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="xs:mb-20 xs:mt-10 lg:mb-0 xs:w-[80%] sm:w-auto shadow-2xl rounded-2xl">
        <div className="w-fill h-fill flex flex-col sm:px-12 py-5 items-center justify-center bg-branco shadow-2xl rounded-2xl">
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
          <button className="bg-verdeagua/50 hover:bg-verdeagua text-branco mx-auto block text-2xl px-10 py-3 font-nunito duration-500 ease-in-out rounded-2xl">
            Assinar
          </button>
        </div>
      </div>
    </div>
  );
}
