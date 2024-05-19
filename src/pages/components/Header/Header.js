"use client"

import Image from "next/image"
import { useState } from "react";
import { FaBars, FaTimes, FaUser } from "react-icons/fa"
import { useTranslation } from "react-i18next";


export default function Header(props) {
    const { t } = useTranslation()

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevState) => !prevState);
  };

  const logado = props.logado

  return (
    <>
      <header className="bg-amarelo1 py-3 z-50 w-screen fixed">
        <nav className="flex justify-between items-center w-[92%] mx-auto z-50">
            <div>
                <Image width={70} height={70} src="/assets/logo.png" alt="..."/>
            </div>
            {!logado ? 
              <>
                <div className={`bg-amarelo1 nav-links duration-500 lg:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5 ${isOpen ? ' top-[10%]' : " "} z-50`}>
                    <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
                        <li>
                            <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#funcionalidade" onClick={toggleMenu}>Funcionalidades</a>
                        </li>
                        <li>
                            <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#comofunciona" onClick={toggleMenu}>{t("headerComoFunciona")}</a>
                        </li>
                        <li>
                            <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#parceiros" onClick={toggleMenu}>Nossos parceiros</a>
                        </li>
                        <li>
                            <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#sobrenos" onClick={toggleMenu}>Sobre nós</a>
                        </li>
                        <li>
                            <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#blogpage" onClick={toggleMenu}>Blog</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button className="bg-branco px-8 py-3 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out text-xl xl:text-2xl">Entrar</button>
                    {isOpen ? <FaTimes id="menu-navbar" className="text-3xl cursor-pointer lg:hidden" onClick={toggleMenu}></FaTimes> : 
                    <FaBars id="menu-navbar" className="text-3xl cursor-pointer lg:hidden" onClick={toggleMenu}></FaBars> } 
                </div>
              </>

              :

              <>
              <div className={`bg-amarelo1 nav-links duration-500 lg:static fixed lg:min-h-fit min-h-[60vh] left-0 top-[-100%] lg:w-auto w-full flex items-center px-5 ${isOpen ? ' top-[10%]' : " "} z-50`}>
                  <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
                      <li>
                          <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#" onClick={toggleMenu}>Jogos</a>
                      </li>
                      <li>
                          <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#" onClick={toggleMenu}>Psicoterapia</a>
                      </li>
                      <li>
                          <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#" onClick={toggleMenu}>Comunidade</a>
                      </li>
                      <li>
                          <a className="text-preto font-nunito xl:text-2xl text-lg hover:text-branco duration-500 transition ease-in-out" href="#" onClick={toggleMenu}>Blog</a>
                      </li>
                  </ul>
              </div>
              <div className="flex items-center gap-6">
                <FaUser className="text-3xl cursor-pointer text-branco"/>
                  {isOpen ? <FaTimes id="menu-navbar" className="text-3xl cursor-pointer lg:hidden" onClick={toggleMenu}></FaTimes> : 
                  <FaBars id="menu-navbar" className="text-3xl cursor-pointer lg:hidden" onClick={toggleMenu}></FaBars> } 
              </div>
            </>

            }
        </nav>
      </header>
    </>
  )
}