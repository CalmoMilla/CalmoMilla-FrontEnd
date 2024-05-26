import { useTranslation } from "react-i18next"
import Image from "next/image"

export default function Blog() {

  const { t } = useTranslation()

  return (
    <div id="blogpage">
      <h2 className="text-amarelo1 text-7xl font-calistoga text-center py-20">Blog</h2>
      <div className="flex justify-center items-center flex-col">
        <p className="w-[80%] md:w-[50%] font-nunito text-2xl text-center">{t("blogTexto1")}</p>
        <div data-aos='fade-up' className="md:w-auto w-[80%]">
          <Image className="hover:scale-110 transition duration-500 ease-in-out" width={500} height={500} src={"/assets/home/blog/blog1.png"} alt=""/>
        </div>
        <p className="w-[80%] md:w-[50%] font-nunito text-2xl text-center">{t("blogTexto2")}</p>
        <div data-aos="fade-up" className="md:w-auto w-[80%]">
          <Image className="hover:scale-110 transition duration-500 ease-in-out py-20" width={500} height={500} src={"/assets/home/blog/blog2.png"} alt=""/>
        </div>
      </div>
    </div>
  )
}