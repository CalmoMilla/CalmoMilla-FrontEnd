import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationProvider";
import PsicologoHome from "@/pages/components/Psicologo/PsicologoHome/PsicologoHome";

const namespaces = ['home', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <PsicologoHome/>
    </TranslationsProvider>
  )
}