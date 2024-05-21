import Teste from "@/pages/components/Teste";
import initTranslations from "../../i18n";
import TranslationsProvider from "../../TranslationProvider";
import TesteLogin from "@/pages/components/TesteLogin";
import TesteCadastro from "@/pages/components/TesteCadastro";

const namespaces = ['home']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      {/* <TesteLogin/> */}
      <TesteCadastro/> 
    </TranslationsProvider>
  )
}
