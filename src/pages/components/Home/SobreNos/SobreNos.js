import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function SobreNos() {
  const { t } = useTranslation();

  return (
    <div id="sobrenos">
      <h2 className="text-roxo text-7xl font-calistoga text-center pb-20">
        {t("sobreNosTitulo1")}
      </h2>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[70%]  md:h-auto bg-roxo rounded-3xl shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)]">
          <p className="text-xl text-branco w-[90%] pt-10 text-center mx-auto font-nunito font-medium">
            {t("sobreNosTexto1")}
            <br />
            <br />
            {t("sobreNosTexto2")}
          </p>
          <h2 className="text-5xl md:text-7xl text-amarelo1 text-center mx-auto font-calistoga py-10 md:py-20">
            {t("\nsobreNosTitulo2")}
          </h2>
          <h2 className="text-4xl md:text-6xl text-branco text-center mx-auto font-calistoga pt-10 md:py-20">
            {t("sobreNosTitulo3")}
          </h2>
          <div className="flex xl:flex-row flex-col justify-around items-center">
            <div data-aos="fade-right">
              <Image
                className="hover:scale-110 transition duration-500 ease-in-out"
                width={500}
                height={500}
                src={"/assets/home/sobrenos/elementoscalmomilla.png"}
                alt=""
              />
            </div>
            <p className="text-branco text-xl text-center font-nunito w-[90%] md:w-[50%]">
              {t("sobreNosTexto3")}
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl text-branco text-center mx-auto font-calistoga py-10 md:py-32">
            {t("sobreNosTitulo4")}
          </h2>
          <div className="flex justify-around items-center xl:flex-row flex-col">
            <p className="text-branco text-xl text-center font-nunito w-[90%] md:w-[50%]">
              {t("\nsobreNosTexto4")}
              <br /> <br /> {t("\nsobreNosTexto5")}
            </p>
            <div data-aos="fade-left ">
              <Image
                className="hover:scale-110 transition duration-500 ease-in-out pt-10 md:pt-10"
                width={200}
                height={200}
                src={"/assets/logo.png"}
                alt=""
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl text-branco text-center mx-auto font-calistoga py-10 md:py-32">
            Milla
          </h2>
          <div className="flex justify-around items-center xl:flex-row flex-col">
            <div data-aos="fade-right">
              <Image
                className="hover:scale-110 transition duration-500 ease-in-out"
                width={600}
                height={600}
                src={"/assets/millazinha/milla05.png"}
                alt=""
              />
            </div>
            <p className="text-branco mr-10 text-xl text-center font-nunito w-[90%] md:w-[40%]">
              {t("\nsobreNosTexto6")} <br /> {t("\nsobreNosTexto7")} <br />{" "}
              {t("\nsobreNosTexto8")}
            </p>
          </div>
          <div className="flex justify-center py-10">
            <button className="bg-amarelo1 hover:bg-amarelo2 h-20 flex items-center rounded-full transition duration-300 ease-out text-3xl">
              {t("sobreNosBotao")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
