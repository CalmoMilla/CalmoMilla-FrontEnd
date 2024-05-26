import { SlArrowDown } from "react-icons/sl";

export default function BarraFiltro() {
  return (
    <div className='pb-20'>
      <div className="w-[90%] h-8 mx-auto rounded-2xl bg-amarelo1 flex justify-end items-center">
        <SlArrowDown className="text-branco text-xl mr-4" />
      </div>
    </div>
  )
}