import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function PaginaVideoRelaxamento({ video, funcao }) {

  return (
    <div className="w-full h-fit bg-roxo relative pt-8">
      <h1 className="text-center text-branco font-calistoga text-3xl md:text-5xl py-10">Meditação Bla Bla Bla</h1>
      <iframe
        width="800"
        height="600"
        src={`https://www.youtube.com/embed/${video.link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-auto rounded-xl lg:block hidden"
      ></iframe>
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${video.link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-auto rounded-xl hidden md:block lg:hidden"
      ></iframe>
      <iframe
        width="300"
        height="200"
        src={`https://www.youtube.com/embed/${video.link}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="mx-auto rounded-xl block md:hidden"
      ></iframe>
      <p className="text-center text-branco text-xl md:text-3xl py-10 w-[80%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias temporibus dolor velit quaerat reprehenderit doloremque libero est voluptatem nesciunt sint.</p>
      <IoIosArrowDropleftCircle className="fixed top-32 left-5 text-3xl md:text-5xl text-branco hover:scale-110 duration-500 ease-in-out cursor-pointer" onClick={funcao}/>
    </div>
  )
}