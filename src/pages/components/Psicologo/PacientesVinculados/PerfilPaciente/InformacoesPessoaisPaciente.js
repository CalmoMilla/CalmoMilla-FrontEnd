export default function InformacoesPessoaisPaciente({user}) {
  return (
    <div className="w-full h-fit flex flex-col gap-4 mt-10">
      <h2 className="text-amarelo2 text-4xl text-center">Informações Pessoais</h2>
      <div className="flex justify-between items-center my-5">
        <p className="font-nunito text-xl">Nome</p>
        <p className="font-nunito text-xl">{user && user.nome}</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <p className="font-nunito text-xl">Data de Nascimento</p>
        <p className="font-nunito text-xl">{user && (user.dataNasc[2] + "/" + user.dataNasc[1] + "/" + user.dataNasc[0])}</p>
      </div>
      <div className="flex justify-between items-center my-5">
        <p className="font-nunito text-xl">Gênero</p>
        <p className="font-nunito text-xl">{user && (user.genero == "MASCULINO" ? "Masculino" 
          : user.genero == "FEMININO" ? "Feminino" : "Outros")
        }</p>
      </div>
    </div>  
  )
}