import { BuscarRelaxamento } from "@/pages/api/relaxamento/RelaxamentoService";
import Image from "next/image"
import { useEffect, useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function RelaxamentoEscolhido({funcao, secao}) {

  const [foto, setFoto] = useState(null)
  const [fundo, setFundo] = useState(null)
  const [titulo, setTitulo] = useState(null)
  const [desc, setDesc] = useState(null)

  useEffect(() => {
    definirSecao()
  }, [])

  const buscarRelaxamento = async (endpoint) => {
    let relaxamentosPegos = await BuscarRelaxamento(`relaxamentos/${endpoint}`)
    console.log(relaxamentosPegos)
  }
  

  const definirSecao = () => {
    if (secao == "m") {
      setFoto("/assets/usuario/relaxamento/relaxamentoescolhido.png")
      setFundo("bg-roxo")
      setTitulo("Meditação")
      setDesc("A alma parece-me apenas uma simples respiração do corpo.")
      buscarRelaxamento("meditacao")
    } else if (secao == "r") {
      setFoto("/assets/usuario/relaxamento/respiracaoescolhido.png")
      setFundo("bg-amarelo2")
      setTitulo("Respiração")
      setDesc("Estar cheio de vida é respirar profundamente, mover-se livremente e sentir com intensidade.")
      buscarRelaxamento("respiracao")
    } else if (secao == "y") {
      setFoto("/assets/usuario/relaxamento/yogaescolhido.png")
      setFundo("bg-verde2")
      setTitulo("Yoga")
      setDesc("A libertação do desejo conduz à paz interior.")
      buscarRelaxamento("yoga")
    }
  }

  return (
    <div className="relative">
      <div className={`w-full h-fit ${fundo} py-10 flex lg:flex-row flex-col justify-around items-center`}>
      <Image src={foto ? foto : ""} width={400} height={400} alt="..." className="hover:scale-110 duration-500 ease-in-out" />
        <div className="w-[50%] h-fit flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl text-branco font-calistoga my-2 text-center">{titulo && titulo}</h1>
          <h2 className="text-3xl text-branco font-calistoga my-2 text-center" >{desc && desc}</h2>
        </div>
      </div>
      <div className="w-full h-fit bg-verdeagua py-10">
        <h2 className="text-7xl font-calistoga text-center text-branco my-8">Digite algo</h2>
        <p className="text-xl w-[80%] font-calistoga text-left text-branco my-8 mx-auto block">Lorem ipsum dolor sit amet. Aut quia ratione est dolores aspernatur aut nulla dolor et distinctio sapiente ut aperiam rerum. Sed molestiae aperiam in rerum iste qui rerum dignissimos.
        Et quia voluptas aut corrupti incidunt vel quos dolores. In officiis ducimus eos pariatur nesciunt et placeat rerum.
        Ab nostrum aliquam sed rerum iusto aut delectus deleniti qui possimus quia 33 enim culpa. Ut beatae harum qui expedita dolor et perferendis provident vel repellendus numquam qui veniam praesentium et veritatis repellendus. Cum corrupti asperiores est eligendi dicta ab illo perferendis rem omnis sequi 33 ipsa quia cum pariatur enim in dolores reprehenderit. Ad obcaecati inventore et ullam molestiae At accusantium nemo qui quisquam odit.</p>
      </div>
      <div className="w-full h-fit bg-branco py-10 px-20">
        <h2 className="text-5xl font-calistoga text-left text-verdeagua my-8">Insira um titulo</h2>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/jkdCGgrA4N4?si=lWoEHH8XVi0bIVQX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl"></iframe>
          <iframe width="400" height="315" src="https://www.youtube.com/embed/jkdCGgrA4N4?si=lWoEHH8XVi0bIVQX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl"></iframe>
        </div>
      </div>
      <div className="w-full h-fit bg-verdeagua py-10 px-20">
        <h2 className="text-5xl font-calistoga text-right text-branco my-8">Insira um titulo</h2>
        <div className="flex justify-between items-center flex-col lg:flex-row gap-8 lg:gap-0">
          <iframe width="400" height="315" src="https://www.youtube.com/embed/jkdCGgrA4N4?si=lWoEHH8XVi0bIVQX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl"></iframe>
          <iframe width="400" height="315" src="https://www.youtube.com/embed/jkdCGgrA4N4?si=lWoEHH8XVi0bIVQX" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="rounded-2xl"></iframe>
        </div>
      </div>
      <IoIosArrowDropleftCircle className="fixed top-40 left-5 text-5xl hover:cursor-pointer hover:scale-110 duration-500 ease-in-out text-preto" onClick={funcao}/>
    </div>
  )
}