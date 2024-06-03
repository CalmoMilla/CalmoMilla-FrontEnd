import Link from "next/link";

export default function JogoDisponivel(props) {
  return (
    <div className="w-[100%] h-[350px] mt-10 lg:py-0 lg:w-[40%] rounded-xl shadow-2xl">
      <div className="w-full h-[35%] bg-roxo/50 rounded-xl"></div>
      <div className=" sm:h-[65%] text-start flex flex-col ">
        <Link href={props.jogo ? props.jogo : "#"}>
          <button className="hover:scale-110 duration-500 transition ease-in-out ml-7  mt-6 py-3 px-9 text-2xl text-branco bg-roxo/50 hover:bg-roxo w-fit rounded-2xl">
            {props.titulo}
          </button>
        </Link>
        <h3 className="ml-7 my-4 py-0.5 px-9 w-[80%] h-auto text-branco bg-roxo/50 rounded-2xl">
          {props.texto}
        </h3>
      </div>
    </div>
  );
}
