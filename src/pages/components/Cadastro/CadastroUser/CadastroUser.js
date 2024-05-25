export default function CadastroUser() {

  async function onSubmit(event) {
    event.preventDefault()
 
    try {
      const data = new FormData(event.currentTarget)
      let cadastro = {
        nome: data.get("nome"),
        email: data.get("email"),
        senha: data.get("senha"),
        cpf: data.get("cpf"),
        telefone: data.get("telefone"),
        dataNasc: data.get("datanasc"),
        genero: data.get("genero"),
        foto: "https://cdn.discordapp.com/attachments/1239448415910498308/1242199675147128873/642902-200.png?ex=664cf819&is=664ba699&hm=635b81ace1c4444f6458d34dd5ecda004b91c20341bf9983bdd22eb5967a4e10&",
        role: "PACIENTE"
      
      }

      console.log(cadastro)

    } catch (error) {
      console.error(error)
    }
  }


  return (
    <div className=" h-full w-full m-auto grid-cols-2  border-black justify-center">
      <div className="lg:w-[50%] h-20 m-auto flex-col lg:text-start xs:w-full ">
        <h2 className=" h-1/2  xs:text-center  xs:text-xl sm:text-2xl  xl:text-3xl lg:text-start  font-calistoga">
          Cadastro <span className="text-amarelo2"> Usúario</span>
        </h2>
        <p className="font-nunito font-bold h-1/2 xs:text-center lg:text-start ">
          {" "}
          Se você já tiver uma conta,
          <br></br>acesse o <span className="text-amarelo2 ">login</span> aqui!
        </p>
      </div>
      <form
        className=" md:w-[70%] flex-col text-start flex xs:h-[80%] 2xl:h-[90%] 2xl:gap-4 items-start  mx-auto mt-4 justify-around sm:w-full sm:px-0"
        action="post" onSubmit={onSubmit}
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
            placeholder="Digite seu CPF"
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
          />
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
