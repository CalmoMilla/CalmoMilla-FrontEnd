import initTranslations from "../../../i18n";
import TranslationsProvider from "../../../TranslationProvider";
import RelaxamentoPage from "@/pages/components/Usuario/Relaxamento/RelaxamentoPage";

const namespaces = ['relaxamento', 'common']

export default async function Page({params: {locale} }) {
  const { t, resources } = await initTranslations(locale, namespaces)

  return (
    <TranslationsProvider locale={locale} resources={resources} namespaces={namespaces}>
      <RelaxamentoPage/>
    </TranslationsProvider>
  )
}