import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationProvider";
import Login from "@/pages/components/Login/Login";

const namespaces = ['home']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <Login/>
    </TranslationsProvider>
  )
}