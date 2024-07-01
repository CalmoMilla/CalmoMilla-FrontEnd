"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import Header from "../../Header/Header";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BuscarPsicologo } from "@/pages/api/usuario/PsicologoService";

export default function PsicologoHome() {
  const { t } = useTranslation();

  const router = useRouter();

  const [psicologo, setPsicologo] = useState(null);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    var PsicologoLocal = JSON.parse(localStorage.getItem("psicologo"));
    if (
      PsicologoLocal != "" &&
      PsicologoLocal != undefined &&
      PsicologoLocal != null
    ) {
      const id = PsicologoLocal.id;
      PsicologoLocal = await BuscarPsicologo("psicologos/", id);
      setPsicologo(PsicologoLocal);
      console.log(PsicologoLocal);
    } else {
      router.push("/login");
    }
  };

  return (
    <>
      <Header />
      <div className="w-[100%] h-auto flex items-center pt-40 ">
        <div className="flex flex-col justify-center items-center h-screen w-[40%] mt-10">
          <h1 className="font-calistoga text-7xl w-full text-center">
            {t("olaPsicologoHome")} {psicologo && psicologo.nome}
          </h1>
          <p className="font-nunito text-4xl font-medium mt-6">
            {t("aquiEstaAlgumaCoisa")} <br />
            {t("quePodemTeInteressar")}
          </p>
        </div>
        <div className="flex flex-col justify-between items-center h-[95%] w-[60%] px-8 gap-3">
          <section className="w-[80%] h-[33%] flex flex-col gap-6 mb-8">
            <div className="bg-amarelo2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
              <p>{t("atualizacaoBlogHomePsico")}</p>
            </div>
            <div className="flex justify-between ">
              <div>
                <Image
                  width={250}
                  height={250}
                  src="/assets/psicologo/matériaIlustrativa02.png"
                ></Image>
              </div>
              <div>
                <Image
                  width={250}
                  height={3250}
                  src="/assets/psicologo/matériaIlustrativa01.png"
                ></Image>
              </div>
            </div>
          </section>
          <section className="w-[80%] h-[33%] flex flex-col gap-3">
            <div className="bg-verde2 w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl">
              <p>{t("mapaDaSaudeMentalPsico")}</p>
            </div>
            <div className="flex justify-center gap-12">
              <div>
                <Image
                  width={800}
                  height={300}
                  src="/assets/psicologo/SaibaOnde.png"
                ></Image>
              </div>
            </div>
          </section>
          <section className="w-[80%] h-[33%] flex flex-col gap-3">
            <div className="bg-verdeagua w-full h-10 flex justify-center items-center text-center text-2xl font-calistoga rounded-xl mb-6">
              <p>{t("naUltimaSemanaSeuPerfil")}</p>
            </div>
            <div className="flex justify-center">
              <div className="flex flex-row items-center text-center justify-around gap-4 font-medium">
                <Image
                  width={30}
                  height={30}
                  src="/assets/psicologo/iconfav.png"
                ></Image>
                <p>{t("seuPerfilFoiFavoritado")}</p>
              </div>
            </div>

            <div className="flex justify-center items-center px-6 mt-2 mb-2">
              <div className="flex flex-row items-center text-center justify-around gap-4 font-medium">
                <Image
                  width={30}
                  height={30}
                  src="/assets/psicologo/iconanalise.png"
                ></Image>
                <p>{t("seuPerfilFoiVisitado")}</p>
              </div>
            </div>

            <div className="flex justify-center items-center text-center mb-6 font-nunito font-bold text-xl">
              <p>
                {t("vejaOsDadosCompleto")}
                <span className="text-roxo">
                   {t("verEstatisticasHomePsicologo")}
                </span>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
