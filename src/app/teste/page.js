import Blog from "@/pages/components/Home/Blog/Blog"
import Header from "@/pages/components/Header/Header"
import PaginaInicial from "@/pages/components/Home/PaginaInicial/PaginaInicial"
import Funcionalidade from "@/pages/components/Home/Funcionalidade/Funcionalidade"

export default function Page() {
  return (
    <>
      <Funcionalidade imagem={"/assets/home/funcionalidades/img-brain.png"} 
      cor={"text-amarelo1"} titulo={"Jogos Mentais"} posicao={true} 
      texto={"Explore uma nova dimensão de cuidado cerebral com nosso aplicativo de exercícios mentais dedicado à prevenção da demência. Com uma série de desafios cognitivos cientificamente projetados, oferecemos uma maneira envolvente e estimulante de manter sua mente afiada e saudável. Desde jogos de memória até quebra-cabeças desafiadores, nossa plataforma intuitiva oferece uma abordagem holística para fortalecer suas habilidades cognitivas, permitindo que você aproveite ao máximo cada momento de lucidez."}/>


      <Funcionalidade imagem={"/assets/home/funcionalidades/img-yoga.png"} 
      cor={"text-verdeagua"} titulo={"Relaxamento"} posicao={false} texto={"“Relaxamento” incluem sessões guiadas de mindfulness, meditação e técnicas de respiração para ajudar os usuários a reduzir o estresse e a ansiedade. Encontre tranquilidade e bem-estar onde quer que você esteja com nosso aplicativo de relaxamento e meditação guiada. Com uma variedade de práticas meditativas adaptadas às suas necessidades, desde redução de estresse até melhoria do sono, oferecemos uma jornada personalizada para o equilíbrio mental. Nossa plataforma intuitiva permite que você explore uma biblioteca de áudios e vídeos guiados por especialistas, proporcionando momentos de serenidade e autoconexão em meio ao caos do dia a dia."}/>
    </>
  )
}