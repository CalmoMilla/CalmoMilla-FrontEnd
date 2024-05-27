import { useState } from "react";
import { Cadastro } from "@/api/usuario/UsuarioService";
import Login from "../../Login/Login";

export default function CadastroUser() {
  const [showLogin, setShowLogin] = useState(false);

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

      let cadastro = {
        nome: data.get("nome"),
        email: data.get("email"),
        senha: senha,
        cpf: data.get("cpf"),
        telefone: data.get("telefone"),
        dataNasc: data.get("datanasc"),
        genero: data.get("genero"),
        foto: "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
        role: "PACIENTE",
      };

      await Cadastro(cadastro, "auth/cadastro-paciente");
    } catch (error) {
      console.error(error);
    }
  }

  if (showLogin) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <Login />
      </div>
    );
  }

  return (
    <div className="h-full w-full m-auto flex flex-col justify-center items-center">
      <div className="lg:w-[50%] h-20 m-auto flex flex-col lg:text-start xs:w-full">
        <h2 className="h-1/2 xs:text-center xs:text-xl sm:text-2xl xl:text-3xl lg:text-start font-calistoga">
          Cadastro <span className="text-amarelo2">Usuário</span>
        </h2>
        <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start">
          Se você já tiver uma conta,
          <br />
          acesse o{" "}
          <span
            className="text-amarelo2 cursor-pointer"
            onClick={() => setShowLogin(true)}
          >
            Login
          </span>{" "}
          aqui!
        </p>
      </div>
      <form
        className="md:w-[70%] flex flex-col text-start xs:h-[80%] 2xl:h-[90%] 2xl:gap-4 items-start mx-auto mt-4 justify-around sm:w-full sm:px-0"
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
            required
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
            required
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
