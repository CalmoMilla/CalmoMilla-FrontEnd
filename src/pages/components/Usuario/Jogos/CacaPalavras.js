import { IoIosArrowDropleftCircle } from "react-icons/io";
import Link from "next/link";

export default function CacaPalavras() {

  let cacaPalavras = [
    {jogo : <iframe style={{maxWidth: "100%"}} src="https://wordwall.net/pt/embed/1522a2f84ad14d7c83c180aebf916081?themeId=51&templateId=10&fontStackId=1" width="1200" height="700" frameborder="0" allowfullscreen></iframe> },
    {jogo: <iframe  style={{maxWidth: "100%"}} src="https://wordwall.net/pt/embed/470fb35ba5a440ef9c0a7fe5273446a9?themeId=51&templateId=10&fontStackId=0" width="1200" height="700" frameborder="0" allowfullscreen></iframe>},
    {jogo: <iframe  style={{maxWidth: "100%"}} src="https://wordwall.net/pt/embed/a9aeef243f6447929ffb59a132906770?themeId=51&templateId=10&fontStackId=0" width="1200" height="700" frameborder="0" allowfullscreen></iframe>}
  ]

  const cacaPalavraEscolhido = () => {

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * cacaPalavras.length);
  
    // Retorna a cor aleatória
    return cacaPalavras[indiceAleatorio].jogo;
  }

  return (
    <div className="w-full h-[100vh] bg-roxo flex justify-center items-center relative">
      {cacaPalavraEscolhido()}
      <Link href={"/usuario"}>
        <IoIosArrowDropleftCircle className='absolute top-5 left-5 text-5xl text-amarelo1'/>
      </Link>
    </div>

  )
}