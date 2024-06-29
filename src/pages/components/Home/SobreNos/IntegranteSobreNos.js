import Image from "next/image";

export default function IntegranteSobreNos({ src, nome, funcao, link }) {
  return (
    <div className="w-full h-fit flex flex-col gap-4 justify-center items-center">
      <Image
        src={src}
        alt="Integrante do CalmoMilla"
        width={300}
        height={300}
        className="hover:scale-110 duration-500 ease-in-out"
      />
      <a
        href={link}
        target="_blank"
        className="font-nunito text-3xl text-center text-branco font-bold"
      >
        {nome}
      </a>
      <p className="font-nunito text-xl text-center text-branco w-[70%]">
        {funcao}
      </p>
    </div>
  );
}
