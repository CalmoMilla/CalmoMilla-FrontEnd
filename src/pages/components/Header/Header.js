"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import LanguageChanger from "@/app/LanguageChanger";
import Link from "next/link";

export default function Header() {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (window.innerWidth < 1280) {
      setIsOpen((prevState) => !prevState);
    }
  };

  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [foto, setFoto] = useState(null);
  const [isPaciente, setIsPaciente] = useState(false);

  useEffect(() => {
    let usuarioStorage = localStorage.getItem("usuario");
    let psiStorage = localStorage.getItem("psicologo");
    if (usuarioStorage != null) {
      usuarioStorage = JSON.parse(usuarioStorage);
      console.log(usuarioStorage);
      setUsuario(usuarioStorage ? usuarioStorage : null);
      setFoto(usuarioStorage.foto);
      setIsPaciente(true)
    } else if (psiStorage != null) {
      psiStorage = JSON.parse(psiStorage);
      console.log(psiStorage);
      setUsuario(psiStorage ? psiStorage : null);
      setFoto(psiStorage.foto);
      setIsPaciente(false)
    }
  }, []);

  useEffect(() => {
    if (usuario != null) {
      setLogado(true);
    }
  }, [usuario]);

  return (
    <>
      <header className={`bg-amarelo1 py-3 z-50 w-screen fixed`}>
        <nav
          className={`flex justify-between items-center w-[92%] mx-auto z-50${
            isOpen ? "   z-50" : " "
          } z-50`}
        >
          <Link href={`${!logado ? "/" : isPaciente? "/usuario" : "/psicologo"}`} className="w-fit">
            <Image width={70} height={70} src="/assets/logo.png" alt="..." />
          </Link>
          {!logado ? (
            <>
              <div
                className={` bg-amarelo1 nav-links  xl:flex xl:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] xl:w-auto w-full flex items-center px-5 flex-re ${
                  isOpen
                    ? "xs:top-[100%] absolute duration-300  h-96  items-center z-10 "
                    : "  h-12"
                } z-0`}
              >
                <ul
                  className={`flex xl:flex-row flex-col sm:items-center   xs:flex xl:flex xl:gap-[4vw] gap-8  ${
                    isOpen ? "w-full " : " "
                  }`}
                >
                  <Link
                    href={"/login"}
                    className="w-full sm:flex justify-center md:hidden"
                  >
                    <button className="bg-branco px-8 py-3 rounded-full  md:hidden xs:w-[60%] md:w-auto hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out text-xl xl:text-2xl">
                      {t("common:headerEntrar")}
                    </button>
                  </Link>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="/#funcionalidade"
                      onClick={toggleMenu}
                    >
                      {t("common:headerFuncionalidades")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="/#comofunciona"
                      onClick={toggleMenu}
                    >
                      {t("common:headerComoFunciona")}
                    </a>
                  </li>
                  <li>
                    <Link
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href={"/parceiros"}
                      onClick={toggleMenu}
                    >
                      {t("common:headerParceiros")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href={"sobrenos"}
                      onClick={toggleMenu}
                    >
                      {t("common:headerSobreNos")}
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="/#blogpage"
                      onClick={toggleMenu}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex items-center  gap-6">
                <LanguageChanger />
                <Link href={"/login"}>
                  <button className="bg-branco px-8 py-3 rounded-full xs:hidden md:flex hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out text-xl xl:text-2xl">
                    {t("common:headerEntrar")}
                  </button>
                </Link>
                {isOpen ? (
                  <FaTimes
                    id="menu-navbar"
                    className="text-3xl cursor-pointer xl:hidden"
                    onClick={toggleMenu}
                  ></FaTimes>
                ) : (
                  <FaBars
                    id="menu-navbar"
                    className="text-3xl cursor-pointer xl:hidden"
                    onClick={toggleMenu}
                  ></FaBars>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                className={`bg-amarelo1 nav-links  xl:flex lg:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5 flex-re ${
                  isOpen
                    ? "xs:top-[100%] absolute duration-300  items-center z-10 "
                    : "  h-12"
                } z-0`}
              >
                <ul
                  className={`flex lg:flex-row flex-col sm:items-center  xs:flex xl:flex :gap-[4vw] gap-8  ${
                    isOpen ? "w-full " : " "
                  }`}
                >
                  <li>
                    {isPaciente ?                     
                      <Link
                        href={"/usuario/jogos"}
                        className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                        onClick={toggleMenu}
                      >
                        {t("common:headerJogos")}
                      </Link> 
                      : 
                      <Link
                      href={"/psicologo/pacientes"}
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      onClick={toggleMenu}
                    >
                      Pacientes
                    </Link> 
                    }
                  </li>
                  <li>
                    {isPaciente ?                     
                      <Link
                        href={"/usuario/psicologo"}
                        className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                        onClick={toggleMenu}
                      >
                        {t("common:headerPsicoterapia")}
                      </Link>
                      :
                      <Link
                      href={"/usuario/psicologo"}
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      onClick={toggleMenu}
                      >
                        Estatísticas
                      </Link>
                    }
                  </li>
                  <li>
                    {isPaciente ? 
                      <Link
                        className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                        href={"/usuario/relaxamento"}
                        onClick={toggleMenu}
                      >
                        {t("common:headerComunidade")}
                      </Link>
                      :
                      <Link
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href={"/psicologo/recursos"}
                      onClick={toggleMenu}
                      >
                        Recursos
                      </Link>
                    }
                  </li>
                  <li>
                    {isPaciente ?                     
                      <Link
                        href={"#"}
                        className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                        onClick={toggleMenu}
                      >
                        Blog
                      </Link>
                      :
                      <Link
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href={"/psicologo/recursos"}
                      onClick={toggleMenu}
                      >
                        FAQ
                      </Link>
                    }
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-6">
                <LanguageChanger/>

                <Link
                  href={isPaciente ? "/usuario/perfil" : "/psicologo/perfil"}
                  className="w-fit p-3 hover:bg-amarelo2 rounded-full duration-500 
                transition ease-in-out"
                >
                  {foto ? (
                    <Image
                      width={50}
                      height={50}
                      src={foto}
                      alt="..."
                      className="rounded-full"
                    />
                  ) : (
                    <FaUser className="text-3xl cursor-pointer text-branco" />
                  )}
                </Link>
                {isOpen ? (
                  <FaTimes
                    id="menu-navbar"
                    className="text-3xl cursor-pointer lg:hidden"
                    onClick={toggleMenu}
                  ></FaTimes>
                ) : (
                  <FaBars
                    id="menu-navbar"
                    className="text-3xl cursor-pointer lg:hidden"
                    onClick={toggleMenu}
                  ></FaBars>
                )}
              </div>
            </>
          )}
        </nav>
      </header>
    </>
  );
}
