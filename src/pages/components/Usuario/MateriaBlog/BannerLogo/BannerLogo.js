import Image from "next/image"

export default function BannerLogo() {
  return(
    <div className="pt-40">
      <Image className="w-[80%] md:w-[60%] xl:w-[30%] block mx-auto" src={"/assets/logocalmomilla.png"} alt="Logo do CalmoMilla" width={450} height={300}/>
    </div> 
  )
}