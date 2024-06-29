import { useTranslation } from "react-i18next";
import CaixaImagem from "../CaixaImagem";
 
export default function OutrasMaterias({blog, funcao}){

    const { t } = useTranslation()

    return (
        <div className="bg-branco w-[90%] md:w-[35%] lg:w-[20%] h-fit rounded-lg shadow-xl p-5">
            <h1 className="text-3xl font-calistoga text-center pt-10">{t('outrasMaterias')}</h1>
            {blog && blog.map((materia) => (
                <CaixaImagem key={materia.id} materia={materia} funcao={funcao}/>
            ))}
        </div>
    )
}