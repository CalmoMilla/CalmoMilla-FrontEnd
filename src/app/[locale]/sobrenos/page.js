import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationProvider";
import Header from "@/pages/components/Header/Header";
import SobreNos from "@/pages/components/Home/SobreNos/SobreNos";

const namespaces = ['home', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <Header/>
      <SobreNos/>
    </TranslationsProvider>
  )
}
