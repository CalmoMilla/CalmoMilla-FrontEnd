import CadastroPsico from "./CadastroPsico/CadastroPsico";
import Image from "next/image";
import TesteCadastro from "@/pages/TesteCadastro";

export default function Cadastro() {
  return (
    <div className="flex w-screen h-screen overflow-hidden items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')] ">
      <div className="m-auto flex justify-center items-center h-[80%] w-[80%] border rounded-lg shadow-lg">
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-2/3">
          <TesteCadastro />
        </div>
        <div className="relative w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gray-200 opacity-60 filter blur h-auto border"></div>
          <div className="relative h-[100%] w-auto font-calistoga p-10">
            <div className="h-1/2 text-amarelo2 flex-col justify-between  ">
              <h2 className="flex text-center justify-center h-1/2 text-6xl mt-5">
                Bem vindo
              </h2>
              <h4 className=" flex h-1/2 text-start items-center text-4xl">
                Inscreva-se
              </h4>
            </div>
            <div className="h-1/2 flex-col justify-end">
              <button type="submit">Fazer Cadastro</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
