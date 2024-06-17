import { IoTriangleSharp } from "react-icons/io5"

export default function ArrowFuturo({inverte, texto}) {
  return (
    <div className="flex flex-col relative items-center justify-center">
      <p className={`absolute ${inverte ? "top-24" : "-top-20"} text-branco text-xl font-nunito w-60 text-center mx-auto left-[50%]`}>aplicações mobile</p>
      <div className={`w-10 h-10 bg-verde1 rounded-full p-0 m-0 ${inverte && "rotate-180"} `}>
        <div className="w-2 h-16 bg-verde1 mx-auto bottom-10 flex items-start relative">
          <IoTriangleSharp className="w-8 h-8 absolute bottom-10 -left-[150%] text-verde1"/>
        </div>
      </div> 
    </div>
  )
}