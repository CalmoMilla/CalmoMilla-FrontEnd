import { FaUser } from "react-icons/fa"
import Image from "next/image"

export default function ProfissionalSalvo({nome, email, foto}) {
  return (
    <div className="flex gap-4 items-center py-6 hover:cursor-pointer">
      <Image src={foto} alt={"Imagem do Usuario"} width={70} height={70} className="rounded-full"/>
      <div className="overflow-hidden">
        <p>{nome}</p>
        <p>{email}</p>
      </div>
    </div>
  )
}