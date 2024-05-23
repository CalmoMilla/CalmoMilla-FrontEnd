"use client"

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
import Funcionalidades from "./Funcionalidade/Funcionalidades"

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

    load_astv_script();

  }, [])

  function load_astv_script() {
    let astv_tag = document.createElement('script');
    astv_tag.charset = 'UTF-8';
    astv_tag.id = 'astv-widget';
    astv_tag.src = 'https://cdn.assistive.com.br/plugin/AssistiveWebPlugin.js';
    astv_tag.async = true;
    astv_tag.onload = function() {
      assistive.init({});
    };

    var h = document.querySelector('head') || document.body;
    h.appendChild(astv_tag);
  }


  return (
    <main>
      <Header logado={false}/>
      <PaginaInicial/>
      <Funcionalidades/>
      <ComoFunciona/>
      <Parceiros/>
      <SobreNos/>
      <Blog/>
      <Footer/>
    </main>
  )
}