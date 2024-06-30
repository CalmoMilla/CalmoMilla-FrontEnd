import Perfil from "@/pages/components/Usuario/Perfil/Perfil";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../TranslationProvider";
import Psicologo from "@/pages/components/Usuario/Psicologo/PaginaPsicologo";

const namespaces = ['psicologos', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <Psicologo/>
    </TranslationsProvider>
  )
}