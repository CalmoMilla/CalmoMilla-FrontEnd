import Image from "next/image"
import Link from "next/link"

export default function ExercicioDia(props) {
  return (
    <div className="w-[50%]">
      <div className="bg-amarelo2 w-full h-[20%] rounded-t-xl">
        <h2 className="font-calistoga text-branco text-xl text-center py-2">Exercício do dia</h2>
      </div>
      <div className="flex justify-center items-center gap-20 bg-amarelo1 w-full pt-10 pb-12 h-[80%] rounded-b-xl">
        <Image width={130} height={130} src={"/assets/logo.png"} alt=""/>
        <div className="flex flex-col justify-center">
          <h2 className="text-branco text-5xl ">{props.titulo}</h2>
          <p className="text-branco text-2xl py-2">{props.desc}</p>
          <Link href={props.link}>
            <button className="text-xl bg-branco rounded-full hover:bg-amarelo2 hover:text-branco transition duration-300 ease-out py-4 px-10">Vamos começar?</button>
          </Link>
        </div>
      </div>
    </div>
  )
}