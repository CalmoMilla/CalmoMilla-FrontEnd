"use client"

import { SessionProvider } from "next-auth/react"
import Cadastro from "./Cadastro"

export default function CadastroGoogle(){
  return (
    <SessionProvider>
      <Cadastro/>
    </SessionProvider>
  )
}