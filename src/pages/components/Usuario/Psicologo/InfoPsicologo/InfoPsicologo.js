"use client"

import Image from "next/image"
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useEffect } from "react";
import { DeletarPsicologo, FavoritarPsicologo } from "@/pages/api/usuario/UsuarioService";

export default function InfoPsicologo({funcao, informacoesPsicologo, setListaPsicologos, listaPsicologos}){

    const [showHeart, setShowHeart] = useState(false)
    
    informacoesPsicologo = informacoesPsicologo ? informacoesPsicologo : "" 

    let informacoesFormatadas = Object.values(informacoesPsicologo)

    const existeProfissional = (profissionais, novoProfissional) => {
      return profissionais.find(profissional => profissional.id === novoProfissional.id);
    }

    useEffect(() => {
      existeProfissional(listaPsicologos, informacoesPsicologo)
      if (existeProfissional(listaPsicologos, informacoesPsicologo)) {
        setShowHeart(true)
      }
      console.log(informacoesFormatadas)
    }, [])

    const onClickCoracaoVazio = () => {
      setShowHeart(true)
      var usuario = JSON.parse(localStorage.getItem("usuario"));
      var objeto = {idPaciente: usuario.id, idPsicologo: informacoesFormatadas[0]}
      FavoritarPsicologo("pacientes/favoritos", objeto)
    }

    const onClickCoracaoCheio = () => {
      var usuario = JSON.parse(localStorage.getItem("usuario"));
      var objeto = {idPaciente: usuario.id, idPsicologo: informacoesFormatadas[0]}
      DeletarPsicologo("pacientes/favoritos", objeto)
      setShowHeart(false)
    }

    // const onClickCoracaoCheio = () => {
    //   setShowHeart(false)
    //   const prof = existeProfissional(listaPsicologos, informacoesPsicologo)
    //   removerProfissionalPorId()
    //   if (!prof) {
    //     setListaPsicologos((prev) => [...prev, informacoesPsicologo])
    //   }
    // }

    return (
      <>
        <div className="w-[70%] h-fit shadow-2xl flex flex-col justify-center items-center py-5 gap-5 relative">     
          <div className="w-[80%] justify-start flex items-start gap-3">
            <Image src={informacoesFormatadas[9]} alt={"Imagem do Usuario"} width={80} height={80} className="rounded-full"/>
            <div>  
              <p className="font-nunito text-3xl">{informacoesFormatadas[1]}</p>
              <p className="font-nunito text-xl">{informacoesFormatadas[2]}</p>
            </div>
          </div>

          <div className="w-[80%] h-[50vh] rounded-2xl bg-preto/20"></div>

          <p className="text-left font-nunito w-[80%]">
          Lorem ipsum dolor sit amet. In eligendi molestiae est quia suscipit hic aspernatur nesciunt aut molestiae laborum. Sit labore quibusdam ut repellendus quod sed rerum accusamus est omnis quos et harum corporis est omnis dolores nam omnis minima. Qui laborum dolore et voluptates maxime qui voluptas repellendus et quos deleniti et inventore quas ut neque galisum. Et quia officiis qui sint inventore qui distinctio praesentium est quia ipsam quo nulla nulla.
          Sit quam quam eos consequatur quae vel deserunt aliquam cum consequuntur iste eum repellat perspiciatis et adipisci deserunt eum iure.
          </p>

          <div className="relative w-[50%] mx-auto">            
            <button className="mt-10 bg-verde1 hover:bg-verde2 hover:text-branco duration-500 ease-in-out font-nunito rounded-full w-full">
            Contatar profissional
            </button>
            {showHeart ?
               <IoHeartSharp className="text-5xl absolute bottom-1 -left-36 text-roxo duration-500 ease-in-out" onClick={onClickCoracaoCheio}/>
               :
               <IoHeartOutline onClick={onClickCoracaoVazio} className="text-5xl absolute bottom-1 -left-36 hover:text-roxo duration-500 ease-in-out"/>
            }
          </div>
          <IoIosArrowDropleftCircle onClick={funcao} className="absolute text-5xl text-verde1 hover:text-verde2 hover:scale-110 duration-500 ease-in-out top-5 left-5 hover:cursor-pointer" />

        </div>
      </>
    )
}