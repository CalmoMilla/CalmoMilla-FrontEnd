"use client";
import { IoArrowBackCircle } from "react-icons/io5";
import Router from "next/router";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CadastroGoogle from "../Cadastro/CadastroGoogle";
import Modal from "./modalAlterarSenha";
import EsqueciSenha from "./EsqueciSenha";
import {
  LoginComGoogle,
  LoginUsuario,
} from "@/pages/api/usuario/UsuarioService";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useTranslation } from "react-i18next";
import { LoginPsicologo } from "@/pages/api/usuario/PsicologoService";
import Loading from "../Loading/Loading";

export default function Login() {
  const { t } = useTranslation();
  const [showCadastro, setShowCadastro] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [alterarSenha, setAlterarSenha] = useState(false);
  const [alterarLogin, setAlterarLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleClick = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowCadastro(true);
      setIsAnimating(false);
    }, 1100); // 1000ms é a duração da animação
  };

  const session = useSession();

  useEffect(() => {
    if (session && session.status === "authenticated") {
      setEmail(session.data.user.email);
      onAuth();
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, [session]);

  useEffect(() => {
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  });

  async function onAuth() {
    let login = {
      email: session.data.user.email,
    };
    LoginComGoogle(login, "auth/login/google");
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let login = {
      email: data.get("email"),
      senha: data.get("senha"),
    };

    if (alterarLogin) {
      await LoginPsicologo(login, "auth/login");
      const tokenUser = localStorage.getItem("token");
      if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
        router.push("/psicologo");
      }
    } else {
      await LoginUsuario(login, "auth/login",setLoading);
      const tokenUser = localStorage.getItem("token");
      if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
        router.push("/usuario");
      }
    }
  }

  if (showCadastro) {
    return <CadastroGoogle />;
  }

  return (
    <div className=" flex w-full  xs:h-full lg:h-screen  items-center justify-center bg-no-repeat bg-center lg:bg-[url('/assets/Cadastro/LG.png')] xl:bg-[url('/assets/Cadastro/1440x1024.png')] 2xl:bg-[url('/assets/Cadastro/Login_-_1920x1080.png')] m-0">
    <Loading isLoading={loading} />
      <div className="absolute xs:top-2 xs:left-1 lg:top-4 lg:left-4 bg-white rounded-full p-0  ">
        <Link href={"/"}>
          <IoArrowBackCircle
            className=" text-amarelo2 xs:w-12 xs:h-12 md:w-16 md:h-16 lg:w-20  lg:h-20 m-0
         "
          />
        </Link>
      </div>
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
                {t("bemVindoLogin")}
              </h2>
              <h4 className="flex ps-8 h-1/2 text-start items-center text-4xl">
                {t("entrarNovamenteLogin")}
              </h4>
            </div>

            <div
              className={`flex h-1/2 flex-col w-auto items-center gap-5 ${
                alterarLogin ? "justify-center" : "justify-end"
              } `}
            >
              {!alterarLogin && (
                <>
                  <div
                    className="bg-branco my-2 w-full h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer"
                    onClick={() => signIn("google")}
                  >
                    <FcGoogle className="text-3xl my-4" />
                  </div>
                  <div className="flex justify-around w-[100%]">
                    <hr className="my-4 w-40 border-black"></hr>
                    <p className="flex items-center mx-3 text-sm">
                      {t("common:ouLoginCadastro")}
                    </p>
                    <hr className="my-4 w-40 border-black"></hr>
                  </div>
                </>
              )}
              {!alterarLogin ? (
                <button
                  className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                  type="button"
                  onClick={handleClick}
                >
                  {t("criarContaLogin")}
                </button>
              ) : (
                <button
                  className="w-72 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                  type="button"
                  onClick={handleClick}
                >
                  {t("criarContaLogin")}
                </button>
              )}
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
          <div className="lg:h-full xs:h-screen w-full m-auto grid-cols-2 border-black justify-center items-center flex flex-col ">
            <div className="lg:w-[60%] h-20 m-auto flex-col lg:text-start xs:w-full">
              {alterarLogin ? (
                <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
                  {t("loginDo")}
                  <span className="text-amarelo2">
                    {t("psicologoLoginText")}
                  </span>
                </h2>
              ) : (
                <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
                  {t("loginDo")}
                  <span className="text-amarelo2">{t("usuarioLoginText")}</span>
                </h2>
              )}
              <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start">
                {t("seVoceNaoTiverCONTA")}
                <br />
                {t("acesseOtextLogin")}
                <span
                  className="text-amarelo2 cursor-pointer"
                  onClick={handleClick}
                >
                  {t("CadastroTextLogin")}
                </span>{" "}
                {t("aquiTextLogin")}
              </p>
            </div>
            <form
              className="md:w-[85%] w-full flex-col text-start flex h-[50%] items-start mx-auto mt-4 justify-around gap-1 sm:w-full sm:px-0"
              action="post"
              onSubmit={onSubmit}
            >
              <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
                <label className="flex text-amarelo2" htmlFor="email">
                  Email
                </label>
                <input
                  className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                  type="text"
                  id="email"
                  name="email"
                  placeholder={t("coloqueSeuEmailAqui")}
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
                <label htmlFor="senha" className="flex text-amarelo2">
                  {t("senhaLoginText")}
                </label>
                <input
                  type="password"
                  id="senha"
                  name="senha"
                  className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                  placeholder={t("escrevaSuaSenhaLogin")}
                />
              </div>
              <div className="flex w-[70%] justify-center xs:m-auto flex-col items-center">
                {alterarLogin ? (
                  <button
                    type="submit"
                    className="w-full h-10 bg-amarelo2 justify-center p-0 mt-4 rounded-full text-white"
                  >
                    {t("entrarComoTextLogin")}
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="w-full h-10 bg-amarelo2 justify-center p-0 mt-4 rounded-full text-white"
                  >
                    {t("entrarComoTextUserLogin")}
                  </button>
                )}

                <p className="font-nunito text-lg lg:hidden my-2 xs:flex text-center">
                  {t("common:ouLoginCadastro")}
                </p>
                <div
                  className="bg-branco my-2 w-full lg:w-[100%]   h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer xs:flex xl:hidden "
                  onClick={() => signIn("google")}
                >
                  <FcGoogle className="text-3xl my-4" />
                </div>
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
                  {t("continuarConectadoText")}
                </label>
              </div>
              {alterarLogin ? (
                <button
                  onClick={() => setAlterarLogin(false)}
                  className="w-full font-nunito tracking-normal cursor-pointer p-0 mt-2 mb-4 font-bold text-start "
                >
                  {t("souUmTextLogin")}
                  <span className="text-amarelo2">{t("usuarioLoginText")}</span>
                  !
                </button>
              ) : (
                <button
                  onClick={() => setAlterarLogin(true)}
                  className="w-full font-nunito tracking-normal cursor-pointer p-0 mt-2 mb-4 font-bold text-start "
                >
                  {t("souUmTextLogin")}
                  <span className="text-amarelo2">
                    {t("psicologoLoginText")}
                  </span>
                  !
                </button>
              )}
              <button
                onClick={() => setAlterarSenha(true)}
                className="w-full font-nunito tracking-normal cursor-pointer font-bold text-start p-0"
              >
                {t("esqueciMinhaTextLogin")}
                <span className="text-amarelo2"> {t("senhaLoginText")} </span>!
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
