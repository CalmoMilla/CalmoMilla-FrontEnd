import Image from "next/image"
import { useState, useEffect } from 'react';

function useScreenSize(){
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};


export default function Funcionalidade(props) {
  const posicao = props.posicao
  const screenSize = useScreenSize();

  return (
    <>
      {posicao ?
        <section className="py-36 flex lg:flex-row flex-col justify-around items-center">
          <section data-aos="fade-right">
            <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
          </section>
          <section className="w-[50%] h-auto lg:pt-0 pt-12">
            <h3 className={`${props.cor} font-calistoga text-center text-7xl w-full`}>{props.titulo}</h3>
            <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{
            props.texto}
            </p>
          </section>
        </section> :
        (screenSize.width < 1024 ? <section className="py-36 flex lg:flex-row flex-col justify-around items-center">
        <section data-aos="fade-left">
          <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
        </section>
        <section className="w-[50%] h-auto lg:pt-0 pt-12">
          <h3 className={`${props.cor} font-calistoga text-center text-7xl w-full`}>{props.titulo}</h3>
          <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{
          props.texto}
          </p>
        </section>
      </section> : 
      <section className="py-36 flex lg:flex-row flex-col justify-around items-center">
          <section className="w-[50%] h-auto lg:pt-0 pt-12">
            <h3 className={`${props.cor} font-calistoga text-center text-7xl w-full`}>{props.titulo}</h3>
            <p className="text-justify font-nunito mt-12 text-2xl text-preto font-medium">{props.texto}
            </p>
          </section>
          <section data-aos="fade-left">
            <Image width={400} height={400} className="transition duration-500 ease-out hover:scale-110" src={props.imagem} alt="" />
          </section>
        </section>) 
      }
    </>
  )

}