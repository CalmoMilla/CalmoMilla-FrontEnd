"use client"

import Funcionalidade from "./Funcionalidade/Funcionalidade"
import PaginaInicial from "./PaginaInicial/PaginaInicial"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import ComoFunciona from "./ComoFunciona/ComoFunciona"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Parceiros from "./Parceiros/Parceiros"
import SobreNos from "./SobreNos/SobreNos"
import Blog from "./Blog/Blog"

export default function Home() {

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 900, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    });
  })


  return (
    <main>
      <Header/>
      <PaginaInicial/>

      <Funcionalidade imagem={"/assets/home/funcionalidades/img-brain.png"} 
      cor={"text-amarelo1"} titulo={"Jogos Mentais"} posicao={true} 
      texto={"Explore uma nova dimensão de cuidado cerebral com nosso aplicativo de exercícios mentais dedicado à prevenção da demência. Com uma série de desafios cognitivos cientificamente projetados, oferecemos uma maneira envolvente e estimulante de manter sua mente afiada e saudável. Desde jogos de memória até quebra-cabeças desafiadores, nossa plataforma intuitiva oferece uma abordagem holística para fortalecer suas habilidades cognitivas, permitindo que você aproveite ao máximo cada momento de lucidez."}/>


      <Funcionalidade imagem={"/assets/home/funcionalidades/img-yoga.png"} 
      cor={"text-verdeagua"} titulo={"Relaxamento"} posicao={false} texto={"“Relaxamento” incluem sessões guiadas de mindfulness, meditação e técnicas de respiração para ajudar os usuários a reduzir o estresse e a ansiedade. Encontre tranquilidade e bem-estar onde quer que você esteja com nosso aplicativo de relaxamento e meditação guiada. Com uma variedade de práticas meditativas adaptadas às suas necessidades, desde redução de estresse até melhoria do sono, oferecemos uma jornada personalizada para o equilíbrio mental. Nossa plataforma intuitiva permite que você explore uma biblioteca de áudios e vídeos guiados por especialistas, proporcionando momentos de serenidade e autoconexão em meio ao caos do dia a dia."}/>

      <Funcionalidade imagem={"/assets/home/funcionalidades/img-psicocall.png"} 
      cor={"text-verde2"} titulo={"Integração com Psicólogos"} posicao={true} texto={"Descubra uma nova abordagem para o autocuidado emocional com nosso aplicativo de consultas psicológicas online. Com uma interface intuitiva e segura, conectamos você a uma rede de psicólogos qualificados, prontos para ajudá-lo a enfrentar desafios emocionais onde quer que você esteja. Desde sessões de terapia por vídeo até mensagens instantâneas, oferecemos suporte flexível e conveniente para atender às suas necessidades, garantindo que você possa priorizar sua saúde mental de forma acessível e sem complicações. Baixe agora e descubra uma nova maneira de encontrar equilíbrio emocional na palma da sua mão."}/>

      <ComoFunciona/>
      <Parceiros/>
      <SobreNos/>
      <Blog/>
      <Footer/>
    </main>
  )
}