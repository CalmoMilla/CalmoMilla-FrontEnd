"use client"

import { SessionProvider } from "next-auth/react"
import User from "./Usuario/PaginaInicial/User"

export default function UsuarioInicial(){
  return (
    <SessionProvider>
      <User/>
    </SessionProvider>
  )
}