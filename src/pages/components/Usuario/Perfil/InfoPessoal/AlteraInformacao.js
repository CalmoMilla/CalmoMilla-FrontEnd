import { Atualizar, BuscarUsuario } from "@/pages/api/usuario/UsuarioService";
import { useEffect, useState } from "react";


export default function AlteraInformacao() {

  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    buscarUsuario()
  }, [])

  async function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let formulario = {
      nome: data.get("nome"),
      senha: data.get("senha"),
      genero: data.get("genero"),
    };

    if (formulario.nome) {
      usuario.nome = formulario.nome
    }
    if (formulario.senha) {
      usuario.senha = formulario.senha
    }
    if (formulario.genero) {
      if (formulario.genero == "m") {
        usuario.genero = "MASCULINO"
      }
      if (formulario.genero == "f") {
        usuario.genero = "FEMININO"
      }
      if (formulario.genero == "o") {
        usuario.genero = "OUTROS"
      }
    }

    Atualizar(usuario, "pacientes");

    console.log(usuario);
  }

  const buscarUsuario = async () => {
    var usuarioLocal = JSON.parse(localStorage.getItem("usuario"));
    if (
      usuarioLocal != "" &&
      usuarioLocal != undefined &&
      usuarioLocal != null
    ) {
      const id = usuarioLocal.id;
      let usuarioPego = await BuscarUsuario("pacientes/", id);
      setUsuario(usuarioPego)
      console.log(usuarioPego)
    } 
  };

  return (
    <div className=" w-[90%] h-[90%] flex flex-col items-center justify-center mx-auto ">
      <div className="flex-col flex md:w-[70%] xs:w-[100%] h-full">
        <form
          className="grid-cols-2 h-[80%] flex flex-col justify-between"
          onSubmit={onSubmit}
        >
          <div className="w-full h-[75%] mt-2 flex flex-col justify-around ">
            <div className=" border-b-2  border-black xs:m-auto w-full">
              <label className="flex text-amarelo2 text-lg" htmlFor="email  ">
                Nome{" "}
              </label>
              <input
                className="border-none border-b-2  font-nunito   placeholder:text-black   text-md w-full p-2"
                type="text"
                id="nome"
                name="nome"
                placeholder="Coloque seu novo nome."
              />
            </div>
            <div className="grid-cols-2 flex-col flex justify-center w-full h-16 text-amarelo2 xs:m-auto">
              <label htmlFor="genero">Gênero</label>
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
            <div className=" border-b-2  border-black xs:m-auto w-full">
              <label className="flex text-amarelo2 text-lg" htmlFor="email  ">
                Senha{" "}
              </label>
              <input
                className="border-none border-b-2  font-nunito   placeholder:text-black   text-md w-full p-2"
                type="password"
                id="senha"
                name="senha"
                placeholder="Redefina sua senha."
              />
            </div>
          </div>
          <div className="w-full justify-center flex ">
            <button
              className="w-80 h-12 bg-amarelo2 justify-center p-0 rounded-full text-white "
              type="submit"
            >
              Alterar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
