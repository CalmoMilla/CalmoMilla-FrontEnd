"use client";
import { Cadastro } from "../api/usuario/UsuarioService";

export default function TesteCadastro() {
  async function onSubmit(event) {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);
      let cadastro = {
        nome: data.get("nome"),
        email: data.get("email"),
        senha: data.get("senha"),
        cpf: data.get("cpf"),
        telefone: data.get("telefone"),
        dataNasc: data.get("datanasc"),
        genero: data.get("genero"),
        foto: "https://cdn.discordapp.com/attachments/1239448415910498308/1242199675147128873/642902-200.png?ex=664cf819&is=664ba699&hm=635b81ace1c4444f6458d34dd5ecda004b91c20341bf9983bdd22eb5967a4e10&",
        role: "PACIENTE",
      };

      Cadastro(cadastro, "auth/cadastro-paciente");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form action="post" onSubmit={onSubmit}>
        <div className="bg-roxo p-5">
          <label htmlFor="nome">nome </label>
          <input type="text" id="nome" name="nome" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="email">email </label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="senha">senha </label>
          <input type="password" id="senha" name="senha" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="cpf">cpf </label>
          <input type="text" id="cpf" name="cpf" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="telefone">telefone </label>
          <input type="text" id="telefone" name="telefone" />
        </div>
        <div className="bg-roxo p-5">
          <label htmlFor="datanasc">data nasc </label>
          <input type="date" id="datanasc" name="datanasc" />
        </div>
        <div className="bg-roxo p-5">
          <select name="genero" id="genero">
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outros</option>
          </select>
        </div>
        <div className="bg-roxo p-5">
          <button type="submit" className="bg-branco cursor-pointer">
            Entrar
          </button>
        </div>
      </form>
    </>
  );
}
