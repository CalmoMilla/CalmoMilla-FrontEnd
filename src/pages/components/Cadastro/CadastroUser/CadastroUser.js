import { useEffect, useState } from "react";
import { Cadastro } from "@/pages/api/usuario/UsuarioService";

import LoginGoogle from "../../Login/LoginGoogle";

export default function CadastroUser(props) {
  const [showLogin, setShowLogin] = useState(false);

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")

  useEffect(() => {
    if (props.session) { 
      setEmail(props.session.data.user.email) 
      setNome(props.session.data.user.name) 
      console.log(props.session.data.user.image)
    }
  }, [props.session])

  async function onSubmit(event) {
    event.preventDefault();

    try {
      const data = new FormData(event.currentTarget);
      const senha = data.get("senha");
      const confirmarSenha = data.get("confirmarSenha");

      if (senha !== confirmarSenha) {
        alert("As senhas não coincidem.");
        return;
      }

      let pic = props.session ? props.session.data.user.image : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

      let cadastro = {
        nome: data.get("nome"),
        email: data.get("email"),
        senha: senha,
        cpf: data.get("cpf"),
        telefone: data.get("telefone"),
        dataNasc: data.get("datanasc"),
        genero: data.get("genero"),
        foto: pic,
        role: "PACIENTE",
      };

      await Cadastro(cadastro, "auth/cadastro-paciente");

    } catch (error) {
      console.error(error);
    }
  }

  if (showLogin) {
    return <LoginGoogle />;
  }

  return (
    <div className="h-full w-full flex flex-col justify-center items-center">
      <form
        className="md:w-[70%] w-full flex flex-col text-start xs:h-[80%] 2xl:h-[90%] xl:gap-2 2xl:gap-4 items-start mx-auto mt-4 justify-around sm:w-full sm:px-0"
        onSubmit={onSubmit}
      >
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="nome">
            Nome
          </label>
          <input
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm w-full"
            type="text"
            id="nome"
            name="nome"
            placeholder="Coloque Seu Nome."
            required value={nome} onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="email">
            Email
          </label>
          <input
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            type="text"
            id="email"
            name="email"
            placeholder="Coloque seu Email."
            required value={email} onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label htmlFor="senha" className="flex text-amarelo2">
            Senha
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            placeholder="Escolha uma senha."
            required
            minLength={6}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label htmlFor="confirmarSenha" className="flex text-amarelo2">
            Confirmar Senha
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            placeholder="Repita a senha."
            required
            minLength={6}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="datanasc">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="datanasc"
            name="datanasc"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            required
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="cpf">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            placeholder="Digite seu CPF (somente números)"
            required
            minLength={11}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="telefone">
            Telefone
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            placeholder="Digite seu número de telefone."
            required
            minLength={11}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center w-[70%] h-20 text-amarelo2 xs:m-auto">
          <label htmlFor="genero">Gênero</label>
          <select
            name="genero"
            id="genero"
            className="w-full text-black py-1 mb-1"
          >
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outros</option>
          </select>
        </div>
        <div className="flex w-[70%] justify-center xs:m-auto">
          <button
            type="submit"
            className="w-full h-10 bg-amarelo2 justify-center p-0 mt-4 rounded-full text-white"
          >
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );
}
