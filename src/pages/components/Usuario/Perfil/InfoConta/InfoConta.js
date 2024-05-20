export default function InfoConta() {
  return (
    <>
      <div className="w-[100%] h-[30%] flex justify-around items-center">
        <div className="w-60 h-60 bg-gray-500 rounded-full"></div>
        <div className="w-fit h-[100%]">
          <p className="text-3xl font-nunito pb-10">Olá fulano!</p>
          <p className="text-2xl font-nunito">Aqui estão suas informações pessoais na plataforma</p>
        </div>
      </div>
      <div className="pl-28 pt-20">
        <h1 className="text-3xl py-5">Informações da conta</h1>
        <div className="w-[30%] flex justify-between items-center py-5">
          <p className="text-xl">Email</p>
          <p className="text-xl">seuemail@gmail.com</p>
        </div>
        <div className="w-[30%] flex justify-between items-center py-5">
          <p className="text-xl">Senha</p>
          <p className="text-xl">**********</p>
        </div>
        <h2 className="text-2xl text-amarelo1 py-2">Mudar o email</h2>
        <h2 className="text-2xl text-amarelo1 py-2">Mudar a senha</h2>
      </div>
      <div className="py-5 flex justify-center items-center">
        <div className="w-[95%] h-1 bg-gray-300 rounded-md"></div>
      </div>
    </>
  )
}