"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CadastroGoogle from "../Cadastro/CadastroGoogle";
import Modal from "./modalAlterarSenha";
import EsqueciSenha from "./EsqueciSenha";

import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import LoginUser from "./LoginUser";
import LoginPsico from "./LoginPsico";

export default function Login() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [AlterarLogin, setAlterarLogin] = useState(true);

  const router = useRouter();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowCadastro(true);
      setIsAnimating(false);
    }, 1100);
  };

  const session = useSession();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      setEmail(session.data.user.email);
      onAuth();
    }
  }, [session]);

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  });

  if (showCadastro) {
    return <CadastroGoogle />;
  }

  return (
    <div className=" flex w-screen  xs:h-full lg:h-screen xl:overflow-hidden items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')]">
      <div
        className={`m-auto flex justify-center items-center h-[90%] w-[80%] border rounded-lg shadow-lg  ${
          isAnimating ? "animate-toCadastro" : ""
        }`}
      >
        <div className="relative w-[60%] h-full hidden xl:block">
          <div className="absolute inset-0 bg-login-gradient blur-md opacity-60 filter h-auto border"></div>
          <div className="relative h-[100%] w-auto font-calistoga p-10">
            <div className="h-1/2 text-amarelo2 flex-col justify-between">
              <h2 className="flex text-center justify-center h-1/2 text-6xl mt-5">
                Bem vindo
              </h2>
              <h4 className="flex ps-8 h-1/2 text-start items-center text-4xl">
                Entrar novamente
              </h4>
            </div>

            <div className="flex h-1/2 flex-col w-auto items-center gap-5 justify-end">
              <div
                className="bg-branco my-2 w-full h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer"
                onClick={() => signIn("google")}
              >
                <FcGoogle className="text-3xl my-4" />
              </div>
              <div className="flex justify-around w-[100%]">
                <hr className="my-4 w-40 border-black"></hr>
                <p className="flex items-center mx-3 text-sm">Ou</p>
                <hr className="my-4 w-40 border-black"></hr>
              </div>
              <button
                className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                type="button"
                onClick={handleClick}
              >
                Criar Conta
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center h-[100%] w-36 xl:h-[95%] cursor-pointer z-50 xs:hidden xl:flex">
          <Image
            onClick={handleClick}
            width={70}
            height={70}
            className="absolute ml-[-40px]"
            src="/assets/Cadastro/changeLoginCadastro.png"
            alt="Login Change"
          />
        </div>
        <div className="flex justify-center items-center w-full xs:h-auto lg:h-[65%] lg:w-[100%] ">
          <div className="lg:h-full xs:h-screen w-full m-auto grid-cols-2 border-black justify-center items-centers">
            <div className="lg:w-[60%] h-20 m-auto flex-col lg:text-start xs:w-full">
              {AlterarLogin ? (
                <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
                  Login <span className="text-amarelo2"> Usúario</span>
                </h2>
              ) : (
                <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
                  Login <span className="text-amarelo2 "> Psicólogo</span>
                </h2>
              )}
              <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start">
                Se você não tiver uma conta,
                <br />
                acesse o{" "}
                <span
                  className="text-amarelo2 cursor-pointer"
                  onClick={handleClick}
                >
                  Cadastro
                </span>{" "}
                aqui!
              </p>
            </div>
            {AlterarLogin ? <LoginUser /> : <LoginPsico />}

            <div className="xs:mx-auto w-[60%] h-auto m-auto xs:text-start gap-10">
              {AlterarLogin ? (
                <button
                  onClick={() => setAlterarLogin(false)}
                  className="w-full font-nunito tracking-normal cursor-pointer p-0 mt-2 mb-4 font-bold text-start "
                >
                  Sou um<span className="text-amarelo2"> Psicólogo </span>!
                </button>
              ) : (
                <button
                  onClick={() => setAlterarLogin(true)}
                  className="w-full font-nunito tracking-normal cursor-pointer p-0 mt-2 mb-4 font-bold text-start "
                >
                  Sou um<span className="text-amarelo2"> Usúario </span>!
                </button>
              )}
              <div className="w-full h-5 flex items-center mb-4">
                <input
                  name="continuar"
                  type="checkbox"
                  className="w-5 h-5 mr-2 border-black"
                />
                <label
                  name="continuar"
                  htmlFor="continuar"
                  className="text-sm font-nunito"
                >
                  Continuar conectado.
                </label>
              </div>

              <button
                onClick={() => setAlterarSenha(true)}
                className="w-full font-nunito tracking-normal cursor-pointer font-bold text-start p-0"
              >
                Esqueci minha<span className="text-amarelo2"> Senha </span>!
              </button>
              <div id="modal-root"></div>
              {alterarSenha && (
                <Modal onClose={() => setAlterarSenha(false)}>
                  <EsqueciSenha />
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
