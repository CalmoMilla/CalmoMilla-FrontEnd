"use client"

import {LoginUsuario} from "../../api/usuario/UsuarioService"


export default function TesteLogin() {

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   let login = {email: data.get("email"),
  //   password: data.get("password")}
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     login
  //   });
  // }

  async function onSubmit(event) {
    event.preventDefault()
 
    try {
      const data = new FormData(event.currentTarget)
      let login = {
        email: data.get("email"),
        senha: data.get("senha")}
      LoginUsuario(login,"auth/login")
    } catch (error) {
      console.error(error)
    }

  
  }


  return (
    <>
      <form action="post" onSubmit={onSubmit}>
        <div className="bg-roxo p-5">
          <label htmlFor="email">email </label>
          <input type="text" id="email" name="email"/>
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="senha">senha </label>
          <input type="password" id="senha" name="senha"/>
        </div>
        <div className="bg-roxo p-5">
          <button type="submit" className="bg-branco cursor-pointer">Entrar</button>
        </div>
      </form>
    </>
  )
}