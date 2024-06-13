import { SlArrowDown } from "react-icons/sl";

export default function BarraFiltro(props) {
  return (
    <div className='my-20 hover:cursor-pointer'>
      <div className={`w-[90%] h-8 mx-auto rounded-2xl ${props.amarelo ? "bg-amarelo1" : "bg-verdeagua" } flex justify-between items-center`}>
        <p className="font-bold font-nunito pl-3">{props.titulo ? props.titulo : ""}</p>
        <SlArrowDown className="text-branco text-xl mr-4" />
      </div>
    </div>
  )
}