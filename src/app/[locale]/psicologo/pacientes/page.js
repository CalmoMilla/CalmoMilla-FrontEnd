import RecursosPage from "@/pages/components/Psicologo/Recursos/RecursosPage";
import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../TranslationProvider";
import TelaPacientes from "@/pages/components/Psicologo/PacientesVinculados/TelaPacientes";

const namespaces = ['home', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <TelaPacientes/>
    </TranslationsProvider>
  )
}