import Image from "next/image";
import { useTranslation } from "react-i18next";
export default function PacienteVinculado({ user, handleClick }) {
  const { t } = useTranslation();

  function abbreviateName(name, maxLength = 18) {
    if (!name || name.length <= maxLength) {
      return name;
    }
    const truncatedName = name.substring(0, maxLength);

    return `${truncatedName}...`;
  }

  const nomeAbreviado = abbreviateName(user && user.nome);

  const anoNascimento = user ? user.dataNasc[0] : 0;
  const mesNascimento = user ? user.dataNasc[1] : 0;
  const diaNascimento = user ? user.dataNasc[2] : 0;

  const dataAtual = new Date();
  const anoAtual = dataAtual.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  let diferencaAnos = anoAtual - anoNascimento;

  if (
    mesAtual < mesNascimento ||
    (mesAtual === mesNascimento && diaAtual < diaNascimento)
  ) {
    diferencaAnos--;
  }

  const idade = diferencaAnos;

  return (
    <div
      className="w-[90%] h-full shadow-2xl rounded-xl mx-auto hover:scale-110 hover:cursor-pointer duration-500 ease-in-out"
      onClick={() => handleClick(user)}
    >
      <div className="w-full h-[55%] bg-preto/20 flex justify-start items-end p-5 rounded-t-lg">
        <Image
          src={
            user
              ? user.foto
              : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
          }
          alt={"Imagem do Usuario"}
          width={100}
          height={100}
          className="rounded-full"
        />
      </div>
      <div className="w-full h-[45%] py-2 px-5">
        <h2 className={`font-nunito text-3xl`}>{nomeAbreviado}</h2>
        <p className="font-nunito text-xl">
          {idade} {t("anosPacientesVinculados")}
        </p>
        <p className="font-nunito text-xl">{user && user.endereco}</p>
      </div>
    </div>
  );
}
