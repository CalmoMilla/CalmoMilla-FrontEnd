// pages/login.jsx
"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import GoogleLoginButton from "../Login/googleButton";

export default function Login() {
  return (
    <div className="flex w-screen h-screen items-center justify-center">
      <div className="m-auto flex justify-center items-center h-[80%] w-[80%] border rounded-lg shadow-lg">
        <div className="relative w-1/3 h-full hidden lg:block">
          <div className="absolute inset-0 bg-gray-200 opacity-60 filter blur h-auto border "></div>
          <div className="relative h-[100%] w-auto font-calistoga p-10">
            <div className="h-1/2 text-amarelo2 flex-col justify-between">
              <h2 className="flex text-center justify-center h-1/2 text-5xl mt-5">
                Bem vindo
              </h2>
              <h4 className="flex h-1/2 text-start items-center text-3xl">
                Entrar Novamente
              </h4>
            </div>
            <div className="flex h-1/2 flex-col w-auto items-center gap-5 justify-end">
              <button
                className="w-48 h-10 bg-amarelo2 justify-center p-0 rounded-full text-white"
                type="submit"
              >
                Criar Conta
              </button>
              <div className="flex justify-between w-[100%]">
                <hr className="my-4 w-32 border-black"></hr>
                <p className="flex items-center mx-3 text-sm">Ou</p>
                <hr className="my-4 w-32 border-black"></hr>
              </div>
              <GoogleOAuthProvider clientId="1021082574719-v96gth1puctp7nuhpa2t9oq642nvdrdf.apps.googleusercontent.com">
                <GoogleLoginButton />
              </GoogleOAuthProvider>
            </div>
          </div>
        </div>
        <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-2/3"></div>
      </div>
    </div>
  );
}
