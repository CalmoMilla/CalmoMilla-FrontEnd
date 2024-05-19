import Home from "@/pages/components/Home/Home";
import initTranslations from "../i18n";

export default async function Page({params: {locale} }) {
  const { t } = await initTranslations(locale, ['home'])
  // return <Home />;

  return (
    <h1>{t("homePagIniComecar")}</h1>
  )
}
