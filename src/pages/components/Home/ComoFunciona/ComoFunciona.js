import Image from "next/image"

export default function ComoFunciona() {
  return (
    <>
      <div className="w-full h-[90%]">
        <div className="flex justify-around items-center lg:flex-row flex-col pt-60">
          <div className="w-[45%] mb-40">
            <h1 className="font-calistoga text-6xl pb-4 lg:text-[5rem] text-verdeagua">Como funciona?</h1>
            <p className="font-nunito text-justify text-2xl font-medium">A CalmoMilla oferece serviços a 2 tipos de usuários, o <br /> usuário paciente que recebe tratamento e o usuário <br /> profissional que presta atendimento. <br /><br />

              Os usuário paciente, terão acesso aos recursos de Jogos <br /> Mentais, Relaxamento e Integração com Profissionais da  <br />Saúde Mental (Psicológos, terapeutas etc). <br /> <br />Os usuários profissionais terão acesso a uma gama de <br /> pacientes e devem atende-los a valor social. <br /><br />

              Acesse a Plataforma! <br /><br />A mente em dia, a vida em harmonia
            </p>
          </div>
          <Image data-aos="fade-left" className="" width={400} height={500} src="/assets/milla.png" alt=""/>
        </div>
      </div> 
    </>
  )
}