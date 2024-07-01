"use client"

import Image from "next/image"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";


export default function MapaSaudeMental(){

    const { t } = useTranslation()

    return(
        <div>
            <Link href={"/psicologo"}>
                <IoIosArrowDropleftCircle className="w-14 h-14 text-verdeagua m-6"/>
            </Link>
            <div className=" items-center w-[100%] h-auto">
                <p className="font-calistoga flex flex-center justify-center text-center text-5xl text-verdeagua mt-2">     {t('mapaTit')}
                </p>
            </div>

            <div className="flex flex-col items-center justify-center m-10">
                <Image width={900} height={900} src="/assets/psicologo/MapaSaude.png"/>
                
                <div className="flex flex-row gap-2 mt-4 ">
                    <p>{t('mapaOfe')}</p>
                    <Image width={80} height={80} src="/assets/psicologo/Googleicon.png"/>
                </div>
            </div>

        <div className="flex flex-col items-center justify-center text-center mt-24">
            <p className="font-nunito font-medium text-3xl w-[80%] lg:w-[50%]">{t('mapaDesc')}</p>
            <IoIosArrowDropdownCircle className="w-12 h-12 text-verdeagua mt-10" />
        </div>

        <section className="flex gap-20 justify-center md:flex-row flex-col items-center justify-center">
        <div className="bg-gray-300 w-[60%] h-[26rem] rounded-lg flex flex-row justify-center items-center m-16">
            <Image width={200} height={200} src="/assets/psicologo/Playicon.png"/>
        </div>
        <Image width={200} height={600} src="/assets/psicologo/millaMapa.png" className="md:block hidden"/>
        <Image width={200} height={600} src="/assets/millazinha/milla02.png" className="md:hidden block"/>
        </section>
        </div>
    )
}