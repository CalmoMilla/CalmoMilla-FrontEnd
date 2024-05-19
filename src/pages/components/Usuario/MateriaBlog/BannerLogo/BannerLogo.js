import Image from "next/image"

export default function BannerLogo() {
  return(
    <div className="flex justify-center items-center pt-40">
      <Image src={"/assets/logocalmomilla.png"} alt="Logo do CalmoMilla" width={450} height={300}/>
    </div> 
  )
}