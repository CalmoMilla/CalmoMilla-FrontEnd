import { CadastroPsicologo } from "@/pages/api/usuario/PsicologoService";
import { useState, useEffect } from "react";

export default function CadastroPsico(props) {

  const [email, setEmail] = useState("")
  const [nome, setNome] = useState("")

  useEffect(() => {
    if (props.session) { 
      setEmail(props.session.user.email) 
      setNome(props.session.user.name) 
    }
  }, [props.session])

  async function onSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData(event.currentTarget);

      let pic = props.session ? props.session.user.image : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"

      let cadastro = {
        nome: data.get("nome"),
        email: data.get("email"),
        senha: data.get("senha"),
        cpf: data.get("cpf"),
        telefone: data.get("telefone"),
        dataNasc: data.get("datanasc"),
        genero: data.get("genero"),
        especializacoes: [data.get("especializacao")],
        foto: pic,
        numeroRegistro: "123344",
        role: "PSICOLOGO",
      };

      CadastroPsicologo(cadastro, "auth/cadastro-psicologo")

      console.log(cadastro);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=" h-auto w-full  m-auto grid-cols-2  border-black justify-center pt-4">
      <form
        className="md:w-[70%] w-full flex flex-col text-start xs:h-[80%]   2xl:h-[90%] xl:gap-1  2xl:gap-3 items-start mx-auto mt-4 justify-around sm:w-full sm:px-0"
        action="post"
        onSubmit={onSubmit}
      >
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto w[100%]">
          <label className="flex text-amarelo2 text" htmlFor="nome">
            Nome{" "}
          </label>
          <input
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm w-full"
            type="text"
            id="nome"
            name="nome"
            placeholder="Coloque Seu Nome."
            required value={nome} onChange={(event) => setNome(event.target.value)}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="email ">
            Email{" "}
          </label>
          <input
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            type="text"
            id="email"
            name="email"
            placeholder="Coloque seu Email."
            required value={email} onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label htmlFor="senha" className="flex text-amarelo2">
            Senha{" "}
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            placeholder="Escolha uma senha."
            required
            minLength={6}
          />
        </div>

        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label htmlFor="senha" className="flex text-amarelo2">
            Confirmar Senha{" "}
          </label>
          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            placeholder="Repita a senha."
            required
            minLength={6}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="datan asc">
            Data de Nascimento{" "}
          </label>
          <input
            type="date"
            id="datanasc"
            name="datanasc"
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            required
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="cpf">
            CPF{" "}
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            placeholder="Digite seu CPF (somente números)"
            required
            minLength={11}
          />
        </div>

        <div className="grid-cols-2 flex-col flex justify-center  border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="telef one">
            Telefone{" "}
          </label>
          <input
            type="text"
            id="telefone"
            name="telefone"
            className="border-none border-b-2  font-nunito   placeholder:text-black   text-sm"
            placeholder="Digite seu número de telefone."
            required
            minLength={11}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center w-[70%] h-16 text-amarelo2 xs:m-auto">
          <label htmlFor="especializacao">Gênero</label>
          <select
            name="genero"
            id="genero"
            className="w
          text-black
          py-[5px]
          "
          >
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outros</option>
          </select>
        </div>
        <div className="grid-cols-2 flex-col flex justify-center w-[70%]   h-16 text-amarelo2 xs:m-auto">
          <label htmlFor="especializacao">Especialização</label>
          <select
            name="especializacao"
            id="especializacao"
            className="text-black py-[5px]"
          >
            <option value="pG">Psicólogo Geral</option>
            <option value="f">Psicólogo Neuroseila</option>
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
