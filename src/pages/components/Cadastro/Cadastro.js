import CadastroPsico from "./CadastroPsico/CadastroPsico";
import CadastroUser from "./CadastroUser/CadastroUser";
import Image from "next/image";

export default function Cadastro() {
  return (
    <div className="flex w-screen h-screen overflow-hidden items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')] ">
      <div className="m-auto flex justify-center lg:items-center h-[90%] w-[80%] border rounded-lg shadow-lg xs:items-start " >
        <div className=" flex justify-center lg:items-center w-full h-auto lg:w-[60%] xs:mt-6">
          <CadastroPsico />
        </div>
        <div className="relative w-[40%] h-full hidden lg:block">
          <div className="absolute inset-0 bg-login-gradient blur-sm  opacity-60 filter  h-auto border"></div>
          <div className="relative h-[100%] w-auto font-calistoga p-10">
            <div className="h-1/2 text-amarelo2 flex-col justify-between  ">
              <h2 className="flex text-center justify-center h-1/2 text-6xl mt-5">
                Bem vindo
              </h2>
              <h4 className=" flex ps-8 h-1/2 text-start items-center text-4xl">
                Inscreva-se
              </h4>
            </div>
            <div className="absolute top-[280px] -left-8 w-16 h-16 cursor-pointer ">
              <Image
                width={500}
                height={500}
                src="/assets/Cadastro/changeLoginCadastro.png"
                alt="Login Change"
              />
            </div>
            <div className="flex h-1/2 flex-col w-auto items-center gap-5 justify-end">
              <div className="flex justify-around w-[100%]">
                <hr className="my-4 w-40 border-black"></hr>
                <p className="flex items-center mx-3 text-sm">Ou</p>
                <hr className="my-4 w-40 border-black"></hr>
              </div>
              <button
                className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white "
                type="submit"
              >
                Fazer Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
