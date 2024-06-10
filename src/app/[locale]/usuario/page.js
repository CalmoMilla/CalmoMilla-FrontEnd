import User from "@/pages/components/Usuario/PaginaInicial/User"
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationProvider";

const namespaces = ['home', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <User/>
    </TranslationsProvider>
  )
}