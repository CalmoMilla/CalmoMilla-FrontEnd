import RecursosPage from "@/pages/components/Psicologo/Recursos/RecursosPage";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../TranslationProvider";
import Recursos from "@/pages/components/Psicologo/Recursos/Recursos";
import MapaSaudeMental from "@/pages/components/Psicologo/MapaSaudeMental/MapaSaudeMental";

const namespaces = ['psicologoMapa', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <MapaSaudeMental/>
    </TranslationsProvider>
  )
}