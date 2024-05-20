import CampoPessoal from "./CampoPessoal";

export default function InfoPessoal() {
  return (
    <>
      <h2 className="text-5xl text-amarelo1 font-calistoga text-center py-5">Informações Pessoais</h2>
      <div className="flex justify-center flex-col items-center">     
        <CampoPessoal texto1={"Nome"} texto2={"Insira um nome"}/>
        <CampoPessoal texto1={"Data de nascimento"} texto2={"xx/xx/xxxx"}/>
        <CampoPessoal texto1={"Gênero"} texto2={"Indefinido"}/>
        <CampoPessoal texto1={"Idioma"} texto2={"Português"}/>
        <CampoPessoal texto1={"Emprego"} texto2={"Não especificado"}/>   
        <div className="w-[80%] flex justify-between items-center py-5">
          <h2 className="text-2xl text-amarelo1 py-5">Mudar informações da conta</h2>
          <h2 className=""></h2>
        </div>
      </div>
    </>
  )
}