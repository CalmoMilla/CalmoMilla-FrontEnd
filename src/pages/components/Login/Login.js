"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Cadastro from "../Cadastro/Cadastro";
import Modal from "./modalAlterarSenha";
import EsqueciSenha from "./EsqueciSenha";
import { LoginUsuario } from "@/pages/api/usuario/UsuarioService";
import { useRouter } from "next/navigation";

export default function Login() {
  const [showCadastro, setShowCadastro] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  });

  async function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let login = {
      email: data.get("email"),
      senha: data.get("senha"),
    };

    LoginUsuario(login, "auth/login");

    router.push("/usuario");
  }

  if (showCadastro) {
    return <Cadastro />;
  }

  return (
    <div className="flex w-screen h-[100%] overflow-hidden items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')]">
      <div className="m-auto flex justify-center items-center h-[90%] w-[80%] border rounded-lg shadow-lg">
        <div className="relative w-[60%] h-full hidden lg:block">
          <div className="absolute inset-0 bg-login-gradient blur-sm opacity-60 filter h-auto border"></div>
          <div className="relative h-[100%] w-auto font-calistoga p-10">
            <div className="h-1/2 text-amarelo2 flex-col justify-between">
              <h2 className="flex text-center justify-center h-1/2 text-6xl mt-5">
                Bem vindo
              </h2>
              <h4 className="flex ps-8 h-1/2 text-start items-center text-4xl">
                Entrar novamente
              </h4>
            </div>
            <div className="absolute top-[280px] -right-6 w-16 h-16 cursor-pointer">
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
                className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                type="submit"
                onClick={() => setShowCadastro(true)}
              >
                Criar Conta
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full h-[65%] lg:w-[100%]">
          <div className="h-full w-full m-auto grid-cols-2 border-black justify-center">
            <div className="lg:w-[60%] h-20 m-auto flex-col lg:text-start xs:w-full">
              <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
                Login
              </h2>
              <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start">
                Se você não tiver uma conta,
                <br />
                acesse o{" "}
                <span
                  className="text-amarelo2 cursor-pointer"
                  onClick={() => setShowCadastro(true)}
                >
                  Cadastro
                </span>{" "}
                aqui!
              </p>
            </div>
            <form
              className="md:w-[85%] flex-col text-start flex h-[50%] items-start mx-auto mt-4 justify-around gap-1 sm:w-full sm:px-0"
              action="post"
              onSubmit={onSubmit}
            >
              <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
                <label className="flex text-amarelo2" htmlFor="email">
                  Email{" "}
                </label>
                <input
                  className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Coloque seu Email."
                />
              </div>
              <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
                <label htmlFor="senha" className="flex text-amarelo2">
                  Senha{" "}
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                  placeholder="Escreva sua senha."
                />
              </div>
              <div className="flex w-[70%] justify-center xs:m-auto">
                <button
                  type="submit"
                  className="w-full h-10 bg-amarelo2 justify-center p-0 mt-4 rounded-full text-white"
                >
                  Entrar
                </button>
              </div>
            </form>
            <div className="xs:mx-auto w-[60%] h-auto m-auto mt-4 xs:text-start gap-10">
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
