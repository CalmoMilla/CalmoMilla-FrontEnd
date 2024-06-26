import Image from "next/image"

export default function SelecaoSecaoRelaxamento({ funcao }) {
  return (
    <div className="w-full h-[100vh] bg-verdeagua">
      <h1 className="text-center text-branco text-5xl font-calistoga mt-10">O que te acalmaria no momento?</h1>
      <div className="w-[80%] h-fit flex justify-around mx-auto mt-32 ">
        <Image src={"/assets/usuario/relaxamento/meditacao.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out" onClick={funcao}/>
        <Image src={"/assets/usuario/relaxamento/respiracao.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out"/>
        <Image src={"/assets/usuario/relaxamento/yoga.png"} width={300} height={300} alt="..." className="hover:cursor-pointer hover:scale-110 duration-500 ease-in-out"/>
      </div>
    </div>
  )
}