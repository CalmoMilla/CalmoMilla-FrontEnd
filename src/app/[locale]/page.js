import Home from "@/pages/components/Home/Home";
import initTranslations from "../i18n";
import TranslationsProvider from "../TranslationProvider";

const namespaces = ['home']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)
  // return <Home />;

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <Home/>
    </TranslationsProvider>
  )
}
