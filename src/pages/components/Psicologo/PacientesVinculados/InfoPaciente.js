import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
export default function InfoPaciente({ user, onClose, onClick }) {
  const { t } = useTranslation();
  const anoNascimento = user.dataNasc && user.dataNasc[0];
  const mesNascimento = user.dataNasc && user.dataNasc[1];
  const diaNascimento = user.dataNasc && user.dataNasc[2];

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
    <div className="w-[60%] xl:w-[25%] mb-4 h-fit shadow-2xl py-5 rounded-xl flex flex-col justify-center items-center gap-8">
      <div className="w-full flex justify-end">
        <IoIosClose
          className="w-16 h-16 hover:cursor-pointer text-preto hover:text-amarelo1 duration-500 ease-in-out"
          onClick={onClose}
        />
      </div>
      <Image
        src={
          user.foto
            ? user.foto
            : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
        }
        alt={"Imagem do Usuario"}
        width={200}
        height={200}
        className="rounded-full"
      />
      <h2 className="font-nunito text-3xl font-bold">{user.nome}</h2>
      <h2 className="font-nunito text-xl font-bold">
        {idade} {t("anosPacientesVinculados")}
      </h2>
      <h2 className="font-nunito text-xl font-bold">{user.endereco}</h2>

      <button
        className="font-nunito px-8 py-3 bg-amarelo1 hover:bg-amarelo2 duration-500 ease-in-out rounded-3xl"
        onClick={() => onClick(user)}
      >
        {t("   abrirPerfilInfoPaciente")}
      </button>
    </div>
  );
}
