import Image from "next/image"

export default function PaginaInicial() {
  return (
    <>
      <div className="w-full lg:h-[100vh] h-[130vh] bg-[url('/assets/home/homepage/fundo2.jpg')]">
        <div className="flex justify-around items-center lg:flex-row flex-col pt-60">
          <div>
            <h1 className="font-calistoga text-[7rem] text-branco">Calmo<span className="text-amarelo1">Milla</span></h1>
            <h2 className="font-calistoga text-6xl text-branco"><span className="text-amarelo1">Mente</span> em dia,<br /> vida em <br /> <span className="text-amarelo1">harmonia</span></h2>
            <button className="bg-branco mt-20 px-10 py-4 rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out text-xl xl:text-3xl">Vamos começar?</button>
          </div>
          <Image className="lg:block hidden" width={300} height={300} src="/assets/milla.png" alt=""/>
        </div>
      </div>
    </>
  )
}