import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/TranslationProvider";
import Header from "@/pages/components/Header/Header";
import Parceiros from "@/pages/components/Home/Parceiros/Parceiros";
import SobreNos from "@/pages/components/Home/SobreNos/SobreNos";

const namespaces = ['parceiros', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <Header/>
      <Parceiros/>
    </TranslationsProvider>
  )
}
