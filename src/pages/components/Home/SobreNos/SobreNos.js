import Image from "next/image"

export default function SobreNos() {
  return (
    <div id="sobrenos">
      <h2 className="text-roxo text-7xl font-calistoga text-center pb-20">Sobre nós</h2>
      <div className="flex justify-center">
        <div className="w-[90%] md:w-[70%] xl:h-[200vh] md:h-[340vh] bg-roxo rounded-3xl shadow-[0_35px_30px_-15px_rgba(0,0,0,0.3)]">
          <p className="text-xl text-branco w-[90%] pt-10 text-center mx-auto font-nunito font-medium">Somos uma equipe dedicada e comprometida em fornecer serviços de cuidado à saúde mental que promovem o bem-estar holístico e o equilíbrio emocional. Combinando experiência clínica e compaixão, estamos aqui para apoiar indivíduos em sua jornada para uma vida mais saudável e significativa. <br /><br />
          A CalmoMilla visa um impacto significativo, tanto na sociedade e na comunidade, Nós queremos ampliar o acesso ao serviço de saúde mental, especialmente para aqueles sem condições de acesso a esses serviços. Nós queremos reduzir o estigma do tema, fazendo as pessoas se sentirem mais encorajadas a cuidarem de seus problemas. Nós queremos educar e conscientizar os usuários, fornecendo informações e estratégias de autocuidado aos usuários, além de muitos outros impactos. A CalmoMilla veio para mudar vidas, trazendo melhoria geral na qualidade de vida das pessoas.
          </p>
          <h2 className="text-5xl md:text-7xl text-branco text-center mx-auto font-calistoga py-10 md:py-20">Identidade Visual</h2>
          <h2 className="text-4xl md:text-6xl text-branco text-center mx-auto font-calistoga pt-10 md:py-20">Paleta</h2>
          <div className="flex xl:flex-row flex-col justify-around items-center">
            <div data-aos="fade-right">
              <Image className="hover:scale-110 transition duration-500 ease-in-out" width={500} height={500} src={"/assets/home/sobrenos/elementoscalmomilla.png"} alt=""/>
            </div>
            <p className="text-branco text-xl text-center font-nunito w-[90%] md:w-[50%]">A paleta principal foi decidida com base em fotos de campos de flores, em especial a lavanda, planta com propriedades calmantes e relaxantes, com o objetivo de proporcionar aos usuários uma sensação de acolhimento, segurança e relaxamento.
            </p>
          </div>
          <h2 className="text-4xl md:text-6xl text-branco text-center mx-auto font-calistoga py-10 md:py-32">Nome e Logo</h2>
          <div className="flex justify-around items-center xl:flex-row flex-col">
            <p className="text-branco text-xl text-center font-nunito w-[90%] md:w-[50%]">O nome CalmoMilla foi escolhido com o objetivo de trasmitir tranquilidade, através do trocadilho entre a palavra “camomila” e a palavra “calma” referenciando a representante da marca: Milla. <br /> <br /> O design da Milla, tem como intuito causar sentimentos de esperança, acolhimento e empatia, devido a isso, decidimos representa-la, como uma criança.
            </p>
            <div data-aos="fade-left">
              <Image className="hover:scale-110 transition duration-500 ease-in-out pt-10 md:pt-0" width={200} height={200} src={"/assets/logo.png"} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}