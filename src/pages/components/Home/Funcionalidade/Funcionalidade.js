import Image from "next/image"

export default function Funcionalidade(props) {

  const posicao = props.posicao

  return (
    <>
      {posicao ?
        <section className="py-36 flex lg:flex-row flex-col justify-center items-center">
          <section data-aos="fade-right" className="w-[50%] sm:w-fit lg:w-[30%] lg:pr-20">
            <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
          </section>
          <section className="w-[80%] sm:w-[50%] h-auto lg:pt-0 pt-12">
            <h3 className={`${props.cor} font-calistoga text-center text-5xl sm:text-7xl w-full`}>{props.titulo}</h3>
            <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{
            props.texto}
            </p>
          </section>
        </section> :
        <div>
          <div className="lg:block hidden">
            <section className="py-36 flex lg:flex-row flex-col justify-center items-center">
              <section className="w-[80%] sm:w-[50%] h-auto lg:pt-0 pt-12">
                <h3 className={`${props.cor} font-calistoga text-center text-5xl sm:text-7xl w-full`}>{props.titulo}</h3>
                <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{
                props.texto}
                </p>
              </section>
              <section data-aos="fade-left" className="w-[50%] sm:w-fit lg:w-[30%] lg:pl-20">
                <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
              </section>
            </section>
          </div>
          <div className="lg:hidden block">
            <section className="py-36 flex lg:flex-row flex-col justify-center items-center">
              <section data-aos="fade-left" className="w-[50%] sm:w-fit lg:w-[30%] lg:pl-20">
                <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
              </section>
              <section className="w-[80%] sm:w-[50%] h-auto lg:pt-0 pt-12">
                <h3 className={`${props.cor} font-calistoga text-center text-5xl sm:text-7xl w-full`}>{props.titulo}</h3>
                <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{
                props.texto}
                </p>
              </section>
            </section>
          </div>
        </div>
        }
    </>
  )

}