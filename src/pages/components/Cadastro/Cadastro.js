"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import Router from "next/router";
import Link from "next/link";
import CadastroPsico from "./CadastroPsico/CadastroPsico";
import CadastroUser from "./CadastroUser/CadastroUser";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import LoginGoogle from "../Login/LoginGoogle";
import Login from "../Login/Login";

export default function Cadastro() {
  const [showLogin, setShowLogin] = useState(false);
  const [isUser, setIsUser] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowLogin(true);
    }, 1000); // 1000ms é a duração da animação
  };

  const session = useSession();

  return (
    <>
      {showLogin ? (
        <Login className={`${isAnimating ? "animate-toLogin" : ""}}`} />
      ) : (
        <div className="flex w-full xs:h-auto  items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')] ">
          <div className="absolute xs:top-2 xs:left-1 lg:top-4 lg:left-4 bg-white rounded-full p-0  ">
            <Link href={"/"}>
              <IoArrowBackCircle
                className=" text-amarelo2 xs:w-12 xs:h-12 md:w-16 md:h-16 lg:w-20  lg:h-20 m-0
         "
              />
            </Link>
          </div>
          <div
            className={`m-auto flex justify-center lg:items-center xs:h-auto xl:h-[90%]  w-[80%] border rounded-lg shadow-lg xs:items-start  ${
              isAnimating ? "animate-toLogin" : ""
            }`}
          >
            <div className=" h-auto w-full m-auto flex flex-col justify-center items-center ">
              <div className="lg:w-[50%] h-26 m-auto flex flex-col lg:text-center xs:w-full mb-0 ">
                {isUser ? (
                  <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga mt-2">
                    Cadastro <span className="text-amarelo2">Usuário</span>
                  </h2>
                ) : (
                  <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga mt-2">
                    Cadastro <span className="text-amarelo2">Psicólogo</span>
                  </h2>
                )}

                <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start">
                  Se você já tiver uma conta,
                  <br />
                  acesse o{" "}
                  <span
                    className="text-amarelo2 cursor-pointer"
                    onClick={() => handleClick(true)}
                  >
                    Login
                  </span>{" "}
                  aqui!
                </p>
              </div>

              <div className="flex flex-col justify-center lg:items-center w-full h-auto 2xl:items-start lg:w-[100%] mb-auto ">
                {isUser ? (
                  session && session.status === "authenticated" ? (
                    <CadastroUser session={session} />
                  ) : (
                    <CadastroUser />
                  )
                ) : session && session.status === "authenticated" ? (
                  <CadastroPsico session={session} />
                ) : (
                  <CadastroPsico />
                )}
                <p className="font-nunito  text-lg lg:hidden my-2 xs:flex m-auto text-center">
                  Ou
                </p>
                <div
                  className="bg-branco my-2 w-full xs:w-[70%] md:w-[50%] lg:mt-4   h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer xs:flex xl:hidden "
                  onClick={() => signIn("google")}
                >
                  <FcGoogle className="text-3xl my-4" />
                </div>
                <div className="xs:mx-auto md:w-[50%] h-5 m-auto xs:mt-4 2xl:mt-0 xs:text-center p-0 mb-4 lg:text-start">
                  {/* <button className="bg-amarelo2 mx-auto text-branco" onClick={() => signOut()}>desloga</button>
                {session && session.status === "authenticated" && <button className="bg-amarelo2 mx-auto text-branco" onClick={console.log(session.data.user)}>xove</button> } */}
                  <a
                    onClick={() => setIsUser(!isUser)}
                    className="font-nunito tracking-normal cursor-pointer font-bold p-0 "
                  >
                    {isUser ? (
                      <p className="mt-2">
                        Sou um <span className="text-amarelo2"> Psicólogo</span>
                        !
                      </p>
                    ) : (
                      <p className="mt-2">
                        Sou um <span className="text-amarelo2"> Usuário</span>!
                      </p>
                    )}
                  </a>
                </div>
              </div>
            </div>
            <div className="right-12 flex items-center h-[100%] w-36 xl:h-[95%] cursor-pointer z-50 xs:hidden xl:flex ">
              <Image
                onClick={() => handleClick(true)}
                width={70}
                height={70}
                className="absolute ml-12"
                src="/assets/Cadastro/changeLoginCadastro.png"
                alt="Login Change"
              />
            </div>
            <div className="relative w-[50%] h-screen hidden xl:block">
              <div className="absolute inset-0 bg-login-gradient blur-md opacity-60 filter h-auto border"></div>

              <div className="relative h-[100%] w-auto font-calistoga p-10">
                <div className="h-1/2 text-amarelo2 flex-col justify-between">
                  <h2 className="flex text-center justify-center h-1/2 text-6xl mt-5">
                    Bem vindo
                  </h2>
                  <h4 className="flex ps-8 h-1/2 text-start items-center text-4xl">
                    <a href="#"> Inscreva-se </a>
                  </h4>
                </div>

                <div className="flex h-1/2 flex-col w-auto items-center gap-5 justify-end">
                  <div
                    className="bg-branco my-2 w-[100%] h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer"
                    onClick={() => signIn("google")}
                  >
                    <FcGoogle className="text-3xl" />
                  </div>
                  <div className="flex justify-around w-[100%]">
                    <hr className="my-4 w-40 border-black"></hr>
                    <p className="flex items-center mx-3 text-sm">Ou</p>
                    <hr className="my-4 w-40 border-black"></hr>
                  </div>
                  <button
                    className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                    type="submit"
                    onClick={() => handleClick(true)}
                  >
                    Fazer Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
