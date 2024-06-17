"use client"

import Image from "next/image";
import { useTranslation } from "react-i18next";
import IntegranteSobreNos from "./IntegranteSobreNos";
import FuturoPlataforma from "./FuturoPlataforma";

export default function SobreNos() {
  const { t } = useTranslation();

  return (
    <div className="pt-32">
      <h2 className="text-roxo text-7xl font-calistoga text-center pb-20">
        {t("sobreNosTitulo1")}
      </h2>
      <div className="flex justify-center">
        <div className="w-[90%] lg:w-[70%] h-fit items-center md:h-auto bg-roxo rounded-3xl shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex flex-col xl:flex-row justify-around items-center">
            <Image src={"/assets/home/sobrenos/membrosmilla.png"} alt="Membros com a Milla" width={600} height={600} quality={100} className="w-[400px] h-[400px] xl:w-[500px] xl:h-[500px]"/>
            <p className="text-xl md:text-3xl text-branco w-[90%] xl:w-[50%] pt-10 text-center mx-auto font-nunito font-medium ">
              {t("sobreNosTexto1")}
              <br />
              <br />
              {t("sobreNosTexto2")}
            </p>
          </div>
          <h2 className="text-5xl w-[80%] md:text-[7rem] lg:mt-10 text-branco text-center mx-auto font-calistoga py-10 md:py-10 underline">
            {t("\nsobreNosTitulo2")}
          </h2>
          <h2 className="text-4xl md:text-7xl text-branco text-center mx-auto font-calistoga pt-10 md:pt-2">
            {t("sobreNosTitulo3")}
          </h2>
          <p className="font-nunino text-2xl my-5 text-branco w-[90%] md:w-[50%] text-center mx-auto ">{t("sobreNosTexto9")}
          </p>
          <div className="w-full h-fit my-16 flex flex-col md:flex-row justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaamarelo1.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
              <Image src={"/assets/home/sobrenos/CalmoMillaamarelo2.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[90%] md:w-[50%] py-2 text-2xl font-nunito text-center text-branco">{t("sobreNosTexto10")}</p>
          </div>
          <div className="w-full h-fit my-16 flex flex-col md:flex-row justify-around items-center ">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaroxaa.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[90%] md:w-[50%] py-2 text-2xl font-nunito text-center text-branco">{t("sobreNosTexto11")}</p>
          </div>
          <div className="w-full h-fit my-16 flex flex-col md:flex-row justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaverde1.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
              <Image src={"/assets/home/sobrenos/CalmoMillaverde2.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[90%] md:w-[50%] py-2  text-2xl font-nunito text-center text-branco">{t("sobreNosTexto12")}</p>
          </div>
          <div className="w-full h-fit my-16 justify-around items-center flex flex-col md:flex-row">
            <div className="w-[90%] md:w-[50%] py-2 h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaazul.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[50%] text-2xl font-nunito text-center text-branco">{t("sobreNosTexto13")}</p>
          </div>
          <h2 className="text-4xl md:text-7xl text-branco text-center mx-auto font-calistoga py-5 md:pt-2">
          {t("sobreNosTitulo5")}
          </h2>
          <div className="flex justify-around flex-col md:flex-row items-center py-5">
            <p className="w-[90%] md:w-[50%] py-2 text-2xl font-nunito text-center text-branco">{t("sobreNosTexto14")}
            </p>
            <div className="flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/camomila.png"} alt="Camomila" width={200} height={200} className="w-[33%] md:w-auto md:h-auto"/>
              <p className="text-7xl text-branco ">=</p>
              <Image src={"/assets/logo.png"} alt="Camomila" width={200} height={200} className="w-[33%] md:w-auto md:h-auto"/>
            </div>
          </div>
          <h2 className="text-4xl md:text-7xl text-branco text-center mx-auto font-calistoga py-5 md:pt-2">
          Milla
          </h2>
          <div className="flex justify-center items-center flex-col md:flex-row">
            <Image src={"/assets/millazinha/milla05.png"} alt="Milla" height={600} width={600} quality={100} className="w-full md:w-[40%]"/>
            <p className="w-[90%] md:w-[50%] text-2xl font-nunito text-center text-branco">{t("sobreNosTexto15")}
            </p>
          </div>
          {/* <FuturoPlataforma/> */}
          <h2 className="text-7xl xl:text-[7rem] text-branco text-center mx-auto font-calistoga py-5 md:py-20 underline">
          {t("sobreNosTitulo6")}
          </h2>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
            <IntegranteSobreNos src={"/assets/home/sobrenos/artu.png"} nome={"Arthur Selingin"} funcao={"Desenvolvedor Full Stack"} link={"#"}/>
            <IntegranteSobreNos src={"/assets/home/sobrenos/gab.png"} nome={"Gabriel Caique"} funcao={"Financeiro e Desenvolvedor Back End"} link={"#"}/>
            <IntegranteSobreNos src={"/assets/home/sobrenos/lulu.png"} nome={"Luiz Henrique"} funcao={"UI/UX e Desenvolvedor Front End"} link={"#"}/>
            <IntegranteSobreNos src={"/assets/home/sobrenos/ruru.png"} nome={"Ruth Barbosa"} funcao={"Scrum Master, UI/UX, Social Media, Back End"} link={"#"}/>
            <IntegranteSobreNos src={"/assets/home/sobrenos/gu.png"} nome={"Augusta Barreto"} funcao={"Banco de Dados e Desenvolvedora Full Stack"} link={"#"}/>
            <IntegranteSobreNos src={"/assets/home/sobrenos/vito.png"} nome={"Vitor Hugo"} funcao={"P.O e Desenvolvedor Full Stack"} link={"#"}/>
          </div>
        </div>
      </div>
    </div>
  );
}
