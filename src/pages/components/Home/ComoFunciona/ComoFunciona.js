import Image from "next/image";
import { useTranslation } from "react-i18next";

import { useState, useEffect } from "react";

export default function ComoFunciona() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    // Função para atualizar o estado com base no tamanho da janela
    const updateScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    // Adiciona o evento de redimensionamento
    window.addEventListener("resize", updateScreenSize);

    // Chama a função inicialmente para definir o estado correto
    updateScreenSize();

    // Remove o evento de redimensionamento quando o componente é desmontado
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  const { t } = useTranslation();

  return (
    <div id="comofunciona">
      <div className="w-full h-[90%]">
        <div className="flex justify-around items-center lg:flex-row flex-col pt-60 xs:pt-10">
          <div className="w-[80%] lg:w-[45%] mb-10">
            <h1 className="font-calistoga text-6xl pb-20 lg:pb-4 md:text-[3rem] lg:text-[3.5rem] xl:text-[5rem] xs:text-center text-verdeagua xl:mb-10">
              {t("comoFuncionaTitulo")}
            </h1>
            <p className="font-nunito  text-justify text-2xl font-medium xs:text-center">
              {t("comoFuncionaTexto1")}
              <br />
              {t("comoFuncionaTexto2")}
              <br />
              {t("comoFuncionaTexto3")}
              <br />
              <br />
              {t("comoFuncionaTexto4")}
              <br />
              {t("comoFuncionaTexto5")}
              <br />
              {t("comoFuncionaTexto6")} <br /> <br />
              {t("comoFuncionaTexto7")} <br /> {t("comoFuncionaTexto8")} <br />
              <br />
              {t("comoFuncionaTexto9")}
              <br />
              <br />
              {t("comoFuncionaTexto10")}
            </p>
          </div>
          <div className="w-[80%] lg:w-[20%]  justify-center">
            {isLargeScreen ? (
              <Image
                className="xs:block lg:flex"
                data-aos="fade-left"
                width={300}
                height={300}
                src="/assets/millazinha/milla03.png"
                alt="Imagem Milla"
              />
            ) : (
              <Image
                className="xs:flex lg:block mx-auto mb-6"
                data-aos="fade-out"
                width={250}
                height={250}
                src="/assets/millazinha/milla02.png"
                alt="Imagem Milla"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
