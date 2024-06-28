"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function ExercicioDia({titulo, desc, link}) {

  const { t } = useTranslation();

  const [tituloTraduzido, setTitulo] = useState(null)

  useEffect(() => {
    definirTraducao()
  }, [])

  const definirTraducao = () => {
    if (titulo == "Jogo da Memória") {
      setTitulo(
        <h2 className={`text-branco text-4xl font-bold`}>{t('jogoMemoria')}</h2>
      )
    }
    else if (titulo == "Quiz") {
      setTitulo(
        <h2 className={`text-branco text-4xl font-bold`}>{t('quiz')}</h2>
      )
    }
    else if (titulo == "Caça Palavras") {
      setTitulo(
        <h2 className={`text-branco text-4xl font-bold`}>{t('cacaPalavras')}</h2>
      )
    }
    else if (titulo == "Sudoku") {
      setTitulo(
        <h2 className={`text-branco text-4xl font-bold`}>Sudoku</h2>
      )
    } else {
      setTitulo(
        <h2 className={`text-branco text-4xl font-bold`}>{titulo}</h2>
      )
    }
    
  }

  return (
    <div className="w-[80%] pt-40 pb-10 md:m-0 m-auto md:w-[70%] lg:w-[50%]">
      <div className="bg-amarelo2 w-full h-[20%] rounded-t-xl px-10 md:p-auto">
        <h2 className="font-calistoga text-branco text-xl text-center py-2">{t('exDia')}</h2>
      </div>
      <div className="flex justify-center flex-col md:flex-row items-center gap-20 bg-amarelo1 w-full pt-10 pb-12 h-[80%] rounded-b-xl px-10 md:p-auto">
        <Image width={130} height={130} src={"/assets/logo.png"} alt=""/>
        <div className="flex flex-col justify-center">
          {tituloTraduzido}
          <p className="text-branco text-xl py-2">{t('exDiaDesc')}</p>
          <Link href={link ? link : ""} className="w-fit">
            <button className="text-xl bg-branco rounded-full hover:bg-amarelo2 text-amarelo2 hover:text-branco transition duration-300 ease-out py-4 px-10 font-bold">{t('exDiaBtn')}</button>
          </Link>
        </div>
      </div>
    </div>
  )
}