import Image from "next/image"

export default function PaginaInicial() {
  return (
    <>
      <div className="w-full xl:h-[100vh] lg:h-[120vh] md:h-[170vh] h-[100vh] bg-[url('/assets/home/homepage/fundo2.jpg')]">
        <div className="flex justify-around items-center lg:flex-row flex-col pt-60">
          <div>
            <h1 className="font-calistoga xs:pb-8 xs:text-6xl md:text-[7rem] text-branco">Calmo<span className="text-amarelo1">Milla</span></h1>
            <h2 className="font-calistoga xs:text-4xl md:text-6xl text-branco"><span className="text-amarelo1">Mente</span> em dia,<br /> vida em <br /> <span className="text-amarelo1">harmonia</span></h2>
            <button className="text-xl lg:text-3xl xs:text-3xl bg-branco mt-20 px-10 py-4 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out">Vamos começar?</button>
          </div>
          <Image className="lg:block hidden" width={300} height={300} src="/assets/milla.png" alt=""/>
        </div>
      </div>
    </>
  )
}