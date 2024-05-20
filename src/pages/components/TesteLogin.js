"use client"

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
      let login = {email: data.get("email"),
      senha: data.get("senha")}
      console.log(login)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <form action="post" onSubmit={onSubmit}>
        <div className="bg-roxo p-5">
          <label htmlFor="nome">nome </label>
          <input type="text" id="nome" name="nome"/>
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="email">email </label>
          <input type="text" id="email" name="email"/>
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="senha">senha </label>
          <input type="senha" id="senha" name="senha"/>
        </div>
        <div className="bg-roxo p-5">
          <select name="genero" id="genero">
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outros</option>
          </select>
        </div>
        <div className="bg-roxo p-5">
          <button type="submit" className="bg-branco cursor-pointer">Entrar</button>
        </div>
      </form>
    </>
  )
}