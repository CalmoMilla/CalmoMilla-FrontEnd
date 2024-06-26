import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function JogoDispRecurso ({nome, funcao, funcao2, jogo, foto}) {

  const { t } = useTranslation()

  const [nomeTraduzido, setNomeTraduzido] = useState(null)

  useEffect(() => {
    definirTraducao()
  }, [jogo])

  const definirTraducao = () => {
    if (nome == "Jogo da Memória") {
      setNomeTraduzido(t('jogos:jogosJogoMemoria'))
    }
    else if (nome == "Caça Palavras") {
      setNomeTraduzido(t('jogos:jogosCacaPalavras'))
    } else {
      setNomeTraduzido(nome)
    }
  }

  const funcaoCombinada = () => {
    funcao();
    let jogoFormatado = Object.values(jogo)
    funcao2(jogoFormatado);
  };

  return (
    <div className="w-[90%] h-60 shadow-2xl rounded-xl mx-auto">
      <div className="w-full h-[45%] flex justify-start items-end p-5 rounded-xl" style={{ backgroundImage: `url(${foto})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      </div>
      <div className="w-full h-[55%] py-2 px-5 flex flex-col justify-center gap-4">
        <h2 className="font-nunito text-xl font-bold xl:text-3xl">{nomeTraduzido}</h2>
        <button className="text-lg lg:text-xl md:text-md text-branco bg-roxo/70 hover:bg-roxo py-2 md:py-0 xl:py-2 rounded-3xl hover:scale-110 hover:cursor-pointer duration-500 ease-in-out w-full xl:w-[70%]" onClick={funcaoCombinada}>{t('recursosVerBen')}</button>
      </div>
    </div>
  )
}