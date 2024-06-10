import React, { useState } from 'react';
import { useRouter } from "next/navigation";
export default function NovaSenha() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false); 
    
  
    async function onSubmit(event) {
      event.preventDefault(); 
  
      const data = new FormData(event.currentTarget);
      let novaSenha = {
        senhaDigitada: data.get("senhaDigitada"),
        confirmarSenha: data.get("confirmarSenha"),
      };
  
      if (novaSenha.senhaDigitada !== novaSenha.confirmarSenha) {
        alert('As senhas não são iguais, tente novamente');
      } else {
        setIsSubmitting(true); 
        console.log(novaSenha.senhaDigitada);
         
        setTimeout(() => {
          router.push('/login')
        }, 500); // Atraso de 1 segundo
      }
      }
  
    return (
      <div className="bg h-screen flex justify-center items-center">
        <form
          className="w-[70%] lg:w-[40%] h-[75%] flex flex-col justify-around border border-gray-200"
          onSubmit={onSubmit} 
        >
          <div className="h-[30%] w-auto flex flex-col justify-around">
            <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%]  border-black xs:m-auto">
              <label htmlFor="senha" className="flex text-amarelo2">
                Nova Senha{" "}
              </label>
              <input
                type="password"
                id="senhaDigitada"
                name="senhaDigitada"
                className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                placeholder="Escreva aqui."
                required
              />
            </div>
            <div className="grid-cols-2 flex-col flex justify-center border-b-2 w-[70%]  border-black xs:m-auto">
              <label htmlFor="senha" className="flex text-amarelo2">
                Confirme sua nova Senha{" "}
              </label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                className="border-none border-b-2 font-nunito placeholder:text-black text-sm"
                placeholder="Escreva aqui."
                required
              />
            </div>
          </div>
          <div className="w-full justify-center flex xs:p-8 md:p-0">
            <button
              className={`w-80 h-12 md:text-xl bg-amarelo2 justify-center p-0 rounded-full text-white ${isSubmitting ? 'disabled' : ''}`} 
              type="submit" 
            >
              Trocar
            </button>
          </div>
        </form>
      </div>
    );
  }
  