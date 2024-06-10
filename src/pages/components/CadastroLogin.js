"use client"

import { SessionProvider } from "next-auth/react"
import Cadastro from "./Cadastro/Cadastro"

export default function CadastroLogin(){
  return (
    <SessionProvider>
      <Cadastro/>
    </SessionProvider>
  )
}