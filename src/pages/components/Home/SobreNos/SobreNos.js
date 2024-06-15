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
        <div className="w-[90%] md:w-[70%] items-center md:h-auto bg-roxo rounded-3xl shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex justify-around ">
            <Image src={"/assets/home/sobrenos/membrosmilla.png"} alt="Membros com a Milla" width={600} height={600} quality={100}/>
            <p className="text-3xl text-branco w-[50%] pt-10 text-center mx-auto font-nunito font-medium ">
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
          <p className="font-nunino text-2xl my-5 text-branco w-[50%] text-center mx-auto ">A paleta principal foi decidida com base em fotos de campos de flores, com o objetivo de proporcionar aos usuários uma sensação de acolhimento, segurança e relaxamento.
          </p>
          <div className="w-full h-fit my-16 flex justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaamarelo1.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
              <Image src={"/assets/home/sobrenos/CalmoMillaamarelo2.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[50%] text-2xl font-nunito text-center text-branco">Amarelo representa uma das cores principais da flor que é
            foco do projeto: a camomila. Além disso é uma cor que transmite positividade, felicidade e criatividade. A escolha por um segundo tom mais escuro diz respeito ao contraste.</p>
          </div>
          <div className="w-full h-fit my-16 flex justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaroxaa.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[50%] text-2xl font-nunito text-center text-branco">Roxo, uma cor que se faz muito presente ao se falar de saúde mental e psicologia das cores. Transmite espiritualidade, sabedoria e conforto.</p>
          </div>
          <div className="w-full h-fit my-16 flex justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaverde1.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
              <Image src={"/assets/home/sobrenos/CalmoMillaverde2.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[50%] text-2xl font-nunito text-center text-branco">Levando em consideração a ideia de campo de flores, é inevitável não ter o verde. Transmite esperança, saúde e renovação. Uma variação para o verde, pensando no contraste.</p>
          </div>
          <div className="w-full h-fit my-16 flex justify-around items-center">
            <div className="w-[50%] h-full flex justify-center items-center">
              <Image src={"/assets/home/sobrenos/CalmoMillaazul.png"} alt="Foto de uma flor" width={250} quality={100} height={250} />
            </div>
            <p className="w-[50%] text-2xl font-nunito text-center text-branco">O azul simboliza a água, o céu e outros elementos da natureza que simbolizam tranquilidade. Transmitindo harmonia, calma e segurança.</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
