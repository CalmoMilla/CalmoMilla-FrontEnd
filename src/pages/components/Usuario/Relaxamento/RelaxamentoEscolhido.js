import { BuscarRelaxamento } from "@/pages/api/relaxamento/RelaxamentoService";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import VideoRelaxamento from "./VideoRelaxamento";
import { useTranslation } from "react-i18next";

export default function RelaxamentoEscolhido({ funcao, secao }) {
  const [foto, setFoto] = useState(null);
  const [fundo, setFundo] = useState(null);
  const [titulo, setTitulo] = useState(null);
  const [desc, setDesc] = useState(null);
  const [subTitulo, setSubTitulo] = useState(null);
  const [videos, setVideos] = useState(null);
  const [imporTitulo, setImporTitulo] = useState(null);
  const [imporDesc, setImporDesc] = useState(null);

  const { t } = useTranslation();

  useEffect(() => {
    definirSecao();
  }, []);

  const buscarRelaxamento = async (endpoint) => {
    let relaxamentosPegos = await BuscarRelaxamento(`relaxamentos/${endpoint}`);
    setVideos(relaxamentosPegos);
    console.log(relaxamentosPegos);
  };

  const definirSecao = () => {
    if (secao == "m") {
      setFoto("/assets/usuario/relaxamento/relaxamentoescolhido.png");
      setFundo("bg-roxo");
      setTitulo(t("relaxamentoTituloMed"));
      setDesc("A alma parece-me apenas uma simples respiração do corpo.");
      setSubTitulo("Vídeos para Meditação");
      setImporTitulo("Importância da Meditação");
      setImporDesc(
        "A meditação, prática milenar com raízes em diversas culturas, consiste em treinar a mente para alcançar um estado de clareza e calma. Através de técnicas como concentração na respiração, mantras ou simplesmente observar os pensamentos, a meditação oferece diversos benefícios para a saúde física e mental."
      );
      buscarRelaxamento("meditacao");
    } else if (secao == "r") {
      setFoto("/assets/usuario/relaxamento/respiracaoescolhido.png");
      setFundo("bg-amarelo2");
      setTitulo(t("relaxamentoTituloRes"));
      setDesc(
        "Estar cheio de vida é respirar profundamente, mover-se livremente e sentir com intensidade."
      );
      setSubTitulo("Vídeos para Respiração");
      setImporTitulo("Importância da Respiração");
      setImporDesc(
        "A respiração, muitas vezes subestimada, é um processo fundamental para a vida, tão natural que nem sempre percebemos sua importância. Mais do que apenas a troca de gases, respirar corretamente impacta nossa saúde física e mental de maneiras surpreendentes."
      );
      buscarRelaxamento("respiracao");
    } else if (secao == "y") {
      setFoto("/assets/usuario/relaxamento/yogaescolhido.png");
      setFundo("bg-verde2");
      setTitulo(t("relaxamentoTituloYoga"));
      setDesc("A libertação do desejo conduz à paz interior.");
      setSubTitulo("Vídeos para Yoga");
      setImporTitulo("Importância do Yoga");
      setImporDesc(
        "O Yoga, uma prática milenar com origens na Índia, transcende a simples atividade física e se configura como um caminho holístico para o bem-estar integral. Através da combinação de asanas (posturas físicas), pranayama (controle da respiração), meditação e princípios filosóficos, o Yoga oferece uma gama abrangente de benefícios para o corpo, a mente e o espírito."
      );
      buscarRelaxamento("yoga");
    }
  };

  return (
    <div className="relative">
      <div
        className={`w-full h-fit ${fundo} py-10 flex lg:flex-row flex-col justify-around items-center`}
      >
        <Image
          src={foto ? foto : ""}
          width={400}
          height={400}
          alt="..."
          className="hover:scale-110 duration-500 ease-in-out"
        />
        <div className="w-[50%] h-fit flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-branco font-calistoga my-2 text-center">
            {titulo && titulo}
          </h1>
          <h2 className="text-3xl text-branco font-calistoga my-2 text-center">
            {desc && desc}
          </h2>
        </div>
      </div>
      <div className="w-full h-fit bg-verdeagua py-10">
        <h2 className="text-4xl sm:text-7xl font-calistoga xs:px- text-center text-branco my-8 ">
          {imporTitulo}
        </h2>
        <p className="text-2xl w-[80%] font-calistoga text-left text-branco my-8 mx-auto block">
          {imporDesc}
        </p>
      </div>
      <div className="w-full h-fit bg-branco py-10 px-5 ">
        <h2 className="text-4xl sm:mx-auto lg:w-[80%] font-calistoga lg:text-left text-verdeagua my-8 xs:text-center ">
          {subTitulo}
        </h2>
        {videos && (
          <div className="flex justify-around items-center flex-col lg:flex-row gap-8 lg:gap-0">
            <VideoRelaxamento video={videos[0]} />
            <VideoRelaxamento video={videos[1]} />
          </div>
        )}
      </div>
      <div className="w-full h-fit bg-verdeagua py-10 px-5 ">
        <h2 className="text-4xl font-calistoga  xs:text-center lg:text-right text-branco my-8 sm:mx-auto lg:w-[80%] ">
          {subTitulo}
        </h2>
        {videos && (
          <div className="flex justify-around items-center flex-col lg:flex-row gap-8 lg:gap-0">
            <VideoRelaxamento video={videos[2]} />
            <VideoRelaxamento video={videos[3]} />
          </div>
        )}
      </div>
      <IoIosArrowDropleftCircle
        className="fixed top-28 left-5 text-5xl hover:cursor-pointer hover:scale-110 duration-500 ease-in-out text-preto"
        onClick={funcao}
      />
    </div>
  );
}
