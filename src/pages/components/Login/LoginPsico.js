import { FcGoogle } from "react-icons/fc";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import {
  LoginComGoogle,
  LoginUsuario,
} from "@/pages/api/usuario/UsuarioService";

import { useRouter } from "next/navigation";

export default function LoginPsico() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  async function onAuth() {
    let login = {
      email: session.data.user.email,
    };
    LoginComGoogle(login, "auth/login/google");
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  }

  async function onSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    let login = {
      email: data.get("email"),
      senha: data.get("senha"),
    };

    await LoginUsuario(login, "auth/login");
    // await LoginPsicologo(login, "auth/login");
    const tokenUser = localStorage.getItem("token");
    if (tokenUser != "" && tokenUser != undefined && tokenUser != null) {
      router.push("/usuario");
    }
  }
  return (
    <>
      <form
        className="md:w-[85%] flex-col text-start flex h-[50%] items-start mx-auto mt-4 justify-around gap-1 sm:w-full sm:px-0"
        action="post"
        onSubmit={onSubmit}
      >
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label className="flex text-amarelo2" htmlFor="email">
            Email{" "}
          </label>
          <input
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            type="text"
            id="email"
            name="email"
            placeholder="Coloque seu Email."
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%] border-black xs:m-auto">
          <label htmlFor="senha" className="flex text-amarelo2">
            Senha{" "}
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
            placeholder="Escreva sua senha."
          />
        </div>
        <div className="flex w-[70%] justify-center xs:m-auto flex-col items-center">
          <button
            type="submit"
            className="w-full h-10 bg-amarelo2 justify-center p-0 mt-4 rounded-full text-white"
          >
            Entrar
          </button>

          <p className="font-nunito text-lg lg:hidden my-2 xs:flex text-center">
            Ou
          </p>
          <div
            className="bg-branco my-2 w-full lg:w-[70%]   h-8 flex justify-center items-center border rounded-3xl border-preto/50 mx-auto hover:cursor-pointer xs:flex xl:hidden "
            onClick={() => signIn("google")}
          >
            <FcGoogle className="text-3xl my-4" />
          </div>
        </div>
      </form>
    </>
  );
}
