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
    setIsOpen((prevState) => !prevState);
  };

  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [foto, setFoto] = useState(null)

  useEffect(() => {
    let usuarioStorage = localStorage.getItem("usuario");
    if (usuarioStorage != null) {
      usuarioStorage = JSON.parse(usuarioStorage)
      console.log(usuarioStorage)
      setUsuario(usuarioStorage ? usuarioStorage : null);
      setFoto(usuarioStorage.foto)
    }
  },[]);

  useEffect(() => {
    if (usuario != null) {
      setLogado(true);
    }
  }, [usuario]);

  return (
    <>
      <header className="bg-amarelo1 py-3 z-50 w-screen fixed">
        <nav className="flex justify-between items-center w-[92%] mx-auto z-50">
          <Link href={`${logado ? "/usuario" : "/"}`} className="w-fit">
            <Image width={70} height={70} src="/assets/logo.png" alt="..." />
          </Link>
          {!logado ? (
            <>
              <div
                className={`bg-amarelo1 nav-links duration-500 lg:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5 ${
                  isOpen ? "xs:top-[12%] md:top-[11%]" : " "
                } z-50`}
              >
                <ul className="flex lg:flex-row flex-col lg:items-center  xs:hidden xl:flex lg:gap-[4vw] gap-8">
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="#funcionalidade"
                      onClick={toggleMenu}
                    >
                      {t("common:headerFuncionalidades")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="#comofunciona"
                      onClick={toggleMenu}
                    >
                      {t("common:headerComoFunciona")}
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="#parceiros"
                      onClick={toggleMenu}
                    >
                      {t("common:headerParceiros")}
                    </a>
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
                      href="#blogpage"
                      onClick={toggleMenu}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-6">
                <LanguageChanger />
                <Link href={"/login"}>
                  <button className="bg-branco px-8 py-3 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out text-xl xl:text-2xl">
                    {t("common:headerEntrar")}
                  </button>
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
                    className="text-3xl cursor-pointer xl:hidden"
                    onClick={toggleMenu}
                  ></FaBars>
                )}
              </div>
            </>
          ) : (
            <>
              <div
                className={`bg-amarelo1 nav-links duration-500 lg:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-auto flex items-center px-5 ${
                  isOpen ? " xs:top-[11%] md:top-[11%]" : " "
                } z-50`}
              >
                <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
                  <li>
                    <Link
                      href={"/usuario/jogos"}
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      onClick={toggleMenu}
                    >
                      {t("common:headerJogos")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/usuario/psicologo"}
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      onClick={toggleMenu}
                    >
                      {t("common:headerPsicoterapia")}
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      href="#"
                      onClick={toggleMenu}
                    >
                      {t("common:headerComunidade")}
                    </a>
                  </li>
                  <li>
                    <Link
                      href={"#"}
                      className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out"
                      onClick={toggleMenu}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-6">
                <LanguageChanger />
                <Link
                  href={"/usuario/perfil"}
                  className="w-fit p-3 hover:bg-amarelo2 rounded-full duration-500 
                transition ease-in-out"
                >
                {foto ? 
                  <Image width={50} height={50} src={foto} alt="..." className="rounded-full"/>
                  :
                  <FaUser className="text-3xl cursor-pointer text-branco" /> 
                }
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
