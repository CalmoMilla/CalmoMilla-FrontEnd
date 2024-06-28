import Image from "next/image"

export default function ParceriaEscolhida() {
  return (
    <div className="bg-gradient-to-b from-[#1D9D90] to-[#1785B6] w-[97%] h-fit mx-auto rounded-lg p-10 my-10 flex flex-col justify-around items-center gap-20 shadow-2xl">
      <div className="w-full h-fit flex justify-around items-center">
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <Image src={"/assets/home/parceiros/clubedameditacao.png"} alt="Imagem de um Parceiro" width={150} height={150} className="mx-auto"/>
          <h2 className="text-branco text-5xl font-calistoga text-center">Clube de Meditação</h2>
        </div>
        <div className="w-full h-fit flex flex-col justify-around gap-8">
          <h2 className="text-branco text-5xl font-calistoga text-center">Quem são?</h2>
          <h2 className="text-branco text-2xl font-nunito w-[70%] text-center mx-auto">Com o objetivo de ajudar as pessoas a terem  uma vida mais equilibrada, o Clube de Meditação é uma plataforma de relaxamento da mente que através da meditação, busca mergulhar no seu interior para observar pensamentos e energias que induzem o comportamento com uma compreensão mais profunda.</h2>
        </div>
      </div>
      <div className="w-full h-fit flex justify-around items-center">
        <Image src={"/assets/home/parceiros/cm/meditacao1.jpeg"} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
        <Image src={"/assets/home/parceiros/cm/meditacao2.jpeg"} alt="Imagem de um Parceiro" width={700} height={700} className="mx-auto rounded-2xl hover:scale-110 duration-500 ease-in-out"/>
      </div>
    </div>
  )
}