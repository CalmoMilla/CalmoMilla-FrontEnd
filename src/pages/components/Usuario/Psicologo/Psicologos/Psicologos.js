import { useTranslation } from "react-i18next";
import Psicologo from "./Psicologo";

export default function Psicologos({ data, funcao, guardarInfo }) {

  const { t } = useTranslation()

  let psicologos = data;

  return (
    <div className="w-[60%] h-fit  xl:mt-36 ">
      <h1 className="text-verdeagua xs:text-6xl xl:text-7xl font-calistoga text-center drop-shadow-2xl xs:hidden xl:block">
        {t('psicologosTitulo')}
      </h1>
      <div className="h-fit w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 py-10">
        {psicologos &&
          psicologos.map((psi) => (
            <Psicologo
              key={psi.id}
              psi={psi}
              funcao={funcao}
              guardarInfo={guardarInfo}
            />
          ))}
      </div>
    </div>
  );
}
